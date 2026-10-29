import {industries, models, topics} from './data.js';
import {t, isChinese} from './i18n.js?v=20261029';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let cleanup=()=>{};
export function renderGraph({container,matchingTopics,industryId,modelId,onIndustry,onModel,onTopic,shownVideos=[],onVideo,allowedModelIds=models.map(m=>m.id)}) {
 cleanup();
 const selected=industries.find(i=>i.id===industryId);
 const sections=industries.filter(i=>matchingTopics.some(t=>t.industryId===i.id));
 const divisions=selected?matchingTopics.filter(t=>t.industryId===selected.id):[];
 const visibleModels=models.filter(m=>allowedModelIds.includes(m.id)&&(!modelId||m.id===modelId)&&(matchingTopics.length===topics.length||modelId===m.id||matchingTopics.some(t=>t.modelIds.includes(m.id))));
 const sectionLabel=i=>`<span class="section-symbol" aria-hidden="true">${esc(i.symbol)}</span><span><strong>${esc(i.label)}</strong>${isChinese()?'':`<small lang="zh-CN">${esc(i.nameZh)}</small>`}</span>`;
 const button=(kind,record,content,extra='')=>`<button class="atlas-node atlas-${kind}" data-node="${kind}:${esc(record.id)}" data-kind="${kind}" data-id="${esc(record.id)}" ${extra}>${content}</button>`;
 const column=(kind,number,title,content)=>`<section class="atlas-column atlas-column-${kind}" aria-label="${t(title)}"><h4><span>${number}</span> ${t(title)}</h4><div class="atlas-node-list">${content}</div></section>`;
 container.innerHTML=`<div class="map-toolbar"><div><h3>${t('Explore the connections')}</h3><p class="classification-breadcrumb">${t('Choose an industry section to reveal its divisions. Student videos connect industries with models.')}</p></div>${selected?`<button class="atlas-collapse">${t('Collapse divisions')}</button>`:''}</div><div class="atlas-scroll" tabindex="0" role="region" aria-label="${t('Industry, student video and model connections')}"><div class="atlas ${selected?'atlas-expanded':''}"><svg class="atlas-edges" aria-hidden="true"></svg>${column('industry','01','Industry section',sections.map(i=>button('industry',i,sectionLabel(i),`aria-expanded="${i.id===industryId}"`)).join(''))}${selected?column('division','02','Division',divisions.map(d=>button('topic',d,`<span class="division-code">${esc(d.code)}</span><span><strong>${esc(d.name)}</strong>${isChinese()?'':`<small lang="zh-CN">${esc(d.nameZh)}</small>`}</span>`)).join('')):''}${column('video',selected?'03':'02','Student video',shownVideos.map(v=>button('video',v,`<span class="atlas-play" aria-hidden="true">▶</span><span><strong>${esc(v.shortTitle)}</strong><small>${Math.floor(v.duration/60)}:${String(Math.floor(v.duration%60)).padStart(2,'0')} · ${t('Watch video')}${!v.subcategoryId?` · ${t('Industry not specified')}`:''}</small></span>`)).join('')||`<p class="atlas-empty">${t('No presentation is available for this connection yet.')}</p>`)}${column('model',selected?'04':'03','Model',visibleModels.map(m=>button('model',m,`<span class="atlas-model-dot" aria-hidden="true"></span><span><strong>${esc(m.name)}</strong></span>`)).join('')||`<p class="atlas-empty">${t('No matching models.')}</p>`)}</div></div>`;
 const atlas=container.querySelector('.atlas'),svg=container.querySelector('.atlas-edges');
 const node=(kind,id)=>[...atlas.querySelectorAll(`[data-kind="${kind}"]`)].find(el=>el.dataset.id===id);
 const connections=[];
 const connect=(a,b,kind)=>{if(a&&b)connections.push({a,b,kind});};
 for(const d of divisions)connect(node('industry',selected.id),node('topic',d.id),'category');
 for(const v of shownVideos){const d=topics.find(t=>t.id===v.subcategoryId);if(d)connect(selected?node('topic',d.id):node('industry',d.industryId),node('video',v.id),'video');connect(node('video',v.id),node('model',v.modelId),'video');}
 function draw(){
  const bounds=atlas.getBoundingClientRect();svg.setAttribute('viewBox',`0 0 ${atlas.clientWidth} ${atlas.scrollHeight}`);svg.setAttribute('width',atlas.clientWidth);svg.setAttribute('height',atlas.scrollHeight);svg.replaceChildren();
  for(const e of connections){const a=e.a.getBoundingClientRect(),b=e.b.getBoundingClientRect(),x1=a.right-bounds.left,y1=a.top+a.height/2-bounds.top,x2=b.left-bounds.left,y2=b.top+b.height/2-bounds.top,p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',`M ${x1} ${y1} C ${(x1+x2)/2} ${y1}, ${(x1+x2)/2} ${y2}, ${x2} ${y2}`);p.setAttribute('class',`network-edge is-${e.kind}`);p.dataset.from=e.a.dataset.node;p.dataset.to=e.b.dataset.node;svg.append(p);e.path=p;}
 }
 function highlight(el){const connected=new Set(el?[el]:[]);for(const e of connections)if(e.a===el||e.b===el){connected.add(e.a);connected.add(e.b);}for(const n of atlas.querySelectorAll('.atlas-node'))n.classList.toggle('is-muted',!!el&&!connected.has(n));for(const e of connections){e.path?.classList.toggle('is-active',e.a===el||e.b===el);e.path?.classList.toggle('is-muted',!!el&&e.a!==el&&e.b!==el);}}
 for(const el of atlas.querySelectorAll('.atlas-node')){el.addEventListener('click',()=>{const id=el.dataset.id;({industry:()=>onIndustry(id===industryId?'':id),topic:()=>onTopic(id),video:()=>onVideo(id),model:()=>onModel(id)})[el.dataset.kind]();});el.addEventListener('mouseenter',()=>highlight(el));el.addEventListener('mouseleave',()=>highlight(null));el.addEventListener('focus',()=>highlight(el));el.addEventListener('blur',()=>highlight(null));}
 container.querySelector('.atlas-collapse')?.addEventListener('click',()=>onIndustry(''));
 const observer=new ResizeObserver(draw);observer.observe(atlas);const frame=requestAnimationFrame(draw);document.fonts.ready.then(()=>{if(atlas.isConnected)draw();});
 cleanup=()=>{cancelAnimationFrame(frame);observer.disconnect();};
}
export function stopGraph(){cleanup();}
