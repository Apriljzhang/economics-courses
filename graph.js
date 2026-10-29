import {industries,models,topics,lectures} from './data.js?v=20261029c';
import {t,isChinese} from './i18n.js?v=20261029c';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let cleanup=()=>{};
export function renderGraph({container,matchingTopics,industryId,modelId,lectureId,onIndustry,onCourseTopic,onModel,onTopic,shownVideos=[],onVideo,allowedModelIds=models.map(m=>m.id)}){
 cleanup();
 const selected=industries.find(i=>i.id===industryId);
 const selectedCourse=lectures.find(l=>l.id===lectureId)||lectures.find(l=>models.some(m=>m.id===modelId&&m.lectureId===l.id));
 const sections=industryId?industries.filter(i=>i.id===industryId):industries.filter(i=>i.id==='others'||matchingTopics.some(d=>d.industryId===i.id));
 const divisions=selected&&selected.id!=='others'?matchingTopics.filter(d=>d.industryId===selected.id):[];
 const courseRoots=selectedCourse?[selectedCourse]:lectures;
 const availableModels=models.filter(m=>allowedModelIds.includes(m.id)&&(!modelId||m.id===modelId));
 const stories=[...shownVideos].sort((a,b)=>Number(a.courseTopicId)-Number(b.courseTopicId)||a.shortTitle.localeCompare(b.shortTitle));
 const label=(en,zh)=>`<span class="atlas-label"><strong>${esc(en)}</strong>${!isChinese()&&zh?`<small lang="zh-CN">${esc(zh)}</small>`:''}</span>`;
 const button=(kind,record,content,extra='')=>`<button class="atlas-node atlas-${kind}" data-node="${kind}:${esc(record.id)}" data-kind="${kind}" data-id="${esc(record.id)}" ${extra}>${content}</button>`;
 const sectionNode=i=>button('industry',i,`<span class="node-disc section-symbol" aria-hidden="true">${esc(i.symbol)}</span>${label(i.label,i.nameZh)}`,`aria-expanded="${i.id===industryId}" aria-label="${esc(i.label)}"`);
 const divisionNode=d=>button('topic',d,`<span class="node-disc division-symbol" aria-hidden="true">${esc(d.code)}</span>${label(d.name,d.nameZh)}`);
 const modelNode=m=>button('model',m,`<span class="node-disc model-symbol" aria-hidden="true"></span>${label(m.name)}`);
 const courseNode=l=>button('course',l,`<span class="node-disc course-symbol" aria-hidden="true">${l.number}</span>${label(l.title)}`,`aria-expanded="${selectedCourse?.id===l.id}" aria-label="${esc(`${t('Course topic')} ${l.number}: ${l.title}`)}"`);
 const column=(kind,title,content)=>`<section class="atlas-column atlas-column-${kind}" aria-label="${t(title)}"><h4><span aria-hidden="true">${({industry:"01",video:"02",course:"03"})[kind]}</span> ${t(title)}</h4><div class="atlas-node-list">${content}</div></section>`;
 const industryContent=sections.map(i=>`<div class="atlas-group">${sectionNode(i)}${i.id===industryId&&divisions.length?`<div class="atlas-branch"><h5>${t('Division')}</h5>${divisions.map(divisionNode).join('')}</div>`:''}</div>`).join('');
 const courseContent=courseRoots.map(l=>{const children=availableModels.filter(m=>m.lectureId===l.id||stories.some(v=>v.modelId===m.id&&v.courseTopicId===l.id));return `<div class="atlas-group">${courseNode(l)}${selectedCourse?.id===l.id?`<div class="atlas-branch"><h5>${t('Models')}</h5>${children.map(modelNode).join('')||`<p class="atlas-empty">${t('No matching models.')}</p>`}</div>`:''}</div>`;}).join('');
 container.innerHTML=`<div class="map-toolbar"><div><h3>${t('Explore the connections')}</h3><p class="classification-breadcrumb">${t('Choose a section or a course topic to unfold its connections.')}</p></div><div class="map-actions">${industryId?`<button class="atlas-collapse-industry">${t('Collapse divisions')}</button>`:''}${selectedCourse?`<button class="atlas-collapse-course">${t('Collapse topics')}</button>`:''}</div></div><div class="atlas-scroll" tabindex="0" role="region" aria-label="${t('Industry, student video and model connections')}"><div class="atlas"><svg class="atlas-edges" aria-hidden="true"></svg>${column('industry','Industry section',industryContent)}${column('video','Student video',stories.map(v=>button('video',v,`<span class="node-disc video-symbol" aria-hidden="true">▶</span>${label(v.shortTitle)}<small class="atlas-duration">${Math.floor(v.duration/60)}:${String(Math.floor(v.duration%60)).padStart(2,'0')}</small>`,`aria-label="${esc(`${t('Watch video')}: ${v.shortTitle}`)}"`)).join('')||`<p class="atlas-empty">${t('No presentation is available for this connection yet.')}</p>`)}${column('course','Course topics',courseContent)}</div></div>`;
 const atlas=container.querySelector('.atlas'),svg=container.querySelector('.atlas-edges');
 const node=(kind,id)=>[...atlas.querySelectorAll(`[data-kind="${kind}"]`)].find(el=>el.dataset.id===id);
 const connections=[];
 const connect=(a,b,kind)=>{if(a&&b)connections.push({a,b,kind});};
 for(const d of divisions)connect(node('industry',selected.id),node('topic',d.id),'category');
 if(selectedCourse)for(const m of availableModels.filter(m=>m.lectureId===selectedCourse.id||stories.some(v=>v.modelId===m.id&&v.courseTopicId===selectedCourse.id)))connect(node('model',m.id),node('course',selectedCourse.id),'category');
 for(const v of stories){const d=topics.find(d=>d.id===v.subcategoryId);connect(d?(selected?node('topic',d.id):node('industry',d.industryId)):node('industry','others'),node('video',v.id),'video');connect(node('video',v.id),selectedCourse?node('model',v.modelId):node('course',v.courseTopicId||models.find(m=>m.id===v.modelId)?.lectureId),'video');}
 function draw(){
  const bounds=atlas.getBoundingClientRect();svg.setAttribute('viewBox',`0 0 ${atlas.clientWidth} ${atlas.scrollHeight}`);svg.setAttribute('width',atlas.clientWidth);svg.setAttribute('height',atlas.scrollHeight);svg.replaceChildren();
  for(const e of connections){const a=e.a.querySelector('.node-disc').getBoundingClientRect(),b=e.b.querySelector('.node-disc').getBoundingClientRect(),forward=a.left<=b.left,x1=(forward?a.right:a.left)-bounds.left,x2=(forward?b.left:b.right)-bounds.left,y1=a.top+a.height/2-bounds.top,y2=b.top+b.height/2-bounds.top,p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',`M ${x1} ${y1} C ${x1+(x2-x1)*.45} ${y1}, ${x2-(x2-x1)*.45} ${y2}, ${x2} ${y2}`);p.setAttribute('class',`network-edge is-${e.kind}`);p.dataset.from=e.a.dataset.node;p.dataset.to=e.b.dataset.node;svg.append(p);e.path=p;}
 }
 function highlight(el){const connected=new Set(el?[el]:[]);for(const e of connections)if(e.a===el||e.b===el){connected.add(e.a);connected.add(e.b);}for(const n of atlas.querySelectorAll('.atlas-node'))n.classList.toggle('is-muted',!!el&&!connected.has(n));for(const e of connections){e.path?.classList.toggle('is-active',e.a===el||e.b===el);e.path?.classList.toggle('is-muted',!!el&&e.a!==el&&e.b!==el);}}
 for(const el of atlas.querySelectorAll('.atlas-node')){el.addEventListener('click',()=>{const id=el.dataset.id;({industry:()=>onIndustry(id===industryId?'':id),course:()=>onCourseTopic(id===selectedCourse?.id?'':id),topic:()=>onTopic(id),video:()=>onVideo(id),model:()=>onModel(id)})[el.dataset.kind]();});el.addEventListener('mouseenter',()=>highlight(el));el.addEventListener('mouseleave',()=>highlight(null));el.addEventListener('focus',()=>highlight(el));el.addEventListener('blur',()=>highlight(null));}
 container.querySelector('.atlas-collapse-industry')?.addEventListener('click',()=>onIndustry(''));
 container.querySelector('.atlas-collapse-course')?.addEventListener('click',()=>onCourseTopic(''));
 const observer=new ResizeObserver(draw);observer.observe(atlas);const frame=requestAnimationFrame(draw);document.fonts.ready.then(()=>{if(atlas.isConnected)draw();});cleanup=()=>{cancelAnimationFrame(frame);observer.disconnect();};
}
export function stopGraph(){cleanup();}
