// A small SVG connection map. Positions and curves share the same animation clock.
import {industries, models, topics, sectors, lectures} from './data.js';
const NS = 'http://www.w3.org/2000/svg';
const escapeText = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let stopPrevious = () => {};
let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;
const lookup = (list, id) => list.find(item => item.id === id);

const modelLines = m => splitLabel(m.name);
function svgElement(tag, attrs = {}) { const el = document.createElementNS(NS, tag); for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value); return el; }
function splitLabel(label) {const lines=[];for(const word of label.split(' ')){if(!lines.length||lines.at(-1).length+word.length>24)lines.push(word);else lines[lines.length-1]+=' '+word;}return lines;}
function chineseLines(label){return label.match(/.{1,12}/gu)||[];}
function curve(a,b,vertical) { const dx=b.x-a.x,dy=b.y-a.y;return vertical?[a,{x:a.x,y:a.y+dy*.44},{x:b.x,y:b.y-dy*.44},b]:[a,{x:a.x+dx*.46,y:a.y},{x:b.x-dx*.46,y:b.y},b]; }
function along(points,t) {const u=1-t;return {x:u*u*u*points[0].x+3*u*u*t*points[1].x+3*u*t*t*points[2].x+t*t*t*points[3].x,y:u*u*u*points[0].y+3*u*u*t*points[1].y+3*u*t*t*points[2].y+t*t*t*points[3].y};}

export function renderGraph({container, matchingTopics, industryId, sectorId, modelId, onIndustry, onModel, onTopic, modelMode=false, courseModels=[], videoMode=false, shownVideos=[], onVideo, allowedModelIds=models.map(m=>m.id)}) {
  stopPrevious();
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const focusSector=sectors.find(s=>s.id===sectorId);
  const focusIndustry = !modelMode && !videoMode && industryId ? lookup(industries,industryId) : null;
  const validIndustries = industries.filter(i=>matchingTopics.some(t=>t.industryId===i.id));
  const validModels = modelMode?courseModels:videoMode?models.filter(m=>shownVideos.some(v=>v.modelId===m.id)):models.filter(m=>allowedModelIds.includes(m.id)&&(!modelId||modelId===m.id)&&matchingTopics.some(t=>t.modelIds.includes(m.id)));
  const small = container.clientWidth < 700;
  const width = small ? 380 : 1120;
  const nodes=[], links=[];
  let height = small ? 1380 : 560;
  const add = (kind, record, x,y, lines) => {const n={id:`${kind}:${record.id}`,kind,record,x,y,lines,phase:nodes.length*.93};nodes.push(n);return n;};
  const link = (a,b,kind='application') => links.push({a:a.id,b:b.id,kind});
  if(videoMode||modelMode){
    height=Math.max(600,shownVideos.length*175+170,validModels.length*130+170);
    const matchedTopics=matchingTopics.filter(t=>modelMode?t.modelIds.some(id=>validModels.some(m=>m.id===id)):shownVideos.some(v=>v.subcategoryId===t.id));
    height=Math.max(height,matchedTopics.length*165+200);
    for(const [i,t] of matchedTopics.entries())add('topic',t,small?95:130,small?90+i*155:matchedTopics.length===1?height/2-60:90+i*(height-240)/(matchedTopics.length-1),[...splitLabel(`${t.code} ${t.name}`),...chineseLines(t.nameZh)]);
    for(const [i,m] of validModels.entries())add('model',m,small?285:480,small?90+i*170:validModels.length===1?height/2-60:90+i*(height-240)/(validModels.length-1),modelLines(m));
    const start=small?Math.max(matchedTopics.length*155,validModels.length*170)+180:90;
    for(const [i,v] of shownVideos.entries()){
      const n=add('video',v,small?190:850,small?start+i*175:shownVideos.length===1?height/2-60:90+i*(height-240)/(shownVideos.length-1),[...splitLabel(v.shortTitle),`${Math.floor(v.duration/60)}:${String(Math.floor(v.duration%60)).padStart(2,'0')} · Watch video`,...(!v.subcategoryId?['Industry not specified']:[])]);
      link(nodes.find(n=>n.id===`model:${v.modelId}`),n,'video');
      if(v.subcategoryId)link(nodes.find(n=>n.id===`topic:${v.subcategoryId}`),n,'video');
    }
    if(small)height=start+shownVideos.length*175+80;
    for(const t of matchedTopics)for(const mid of t.modelIds)if(validModels.some(m=>m.id===mid)&&(modelMode||shownVideos.some(v=>v.subcategoryId===t.id&&v.modelId===mid)))link(nodes.find(n=>n.id===`topic:${t.id}`),nodes.find(n=>n.id===`model:${mid}`));
  } else if(focusIndustry){
    height=small?Math.max(860,matchingTopics.length*175+300,validModels.length*150+360):Math.max(560,matchingTopics.length*115+160,validModels.length*100+160,shownVideos.length*170+180);
    const sector=add('industry',focusIndustry,small?190:130,small?75:height/2-20,[focusIndustry.code,...splitLabel(focusIndustry.label)]);
    const count=matchingTopics.length;
    for(const [i,t] of matchingTopics.entries()) {
      const n=add('topic',t,small?100:400,small?240+i*175:80+i*((height-190)/Math.max(1,count-1)),[...splitLabel(`${t.code} ${t.name}`),...chineseLines(t.nameZh)]);link(sector,n,'category');
    }
    for(const [i,m] of validModels.entries()) add('model',m,small?285:730,small?210+i*150:70+i*((height-160)/Math.max(1,validModels.length-1)),modelLines(m));
    for(const t of matchingTopics)for(const mid of t.modelIds){if(validModels.some(m=>m.id===mid))link(nodes.find(n=>n.id===`topic:${t.id}`),nodes.find(n=>n.id===`model:${mid}`));}
    const videoStart=small?height+50:80;
    for(const [i,v] of shownVideos.entries()){
      const n=add('video',v,small?190:1000,small?videoStart+i*165:80+i*(height-240)/Math.max(1,shownVideos.length-1),[...splitLabel(v.shortTitle),`${Math.floor(v.duration/60)}:${String(Math.floor(v.duration%60)).padStart(2,'0')} · Watch video`]);
      link(nodes.find(n=>n.id===`topic:${v.subcategoryId}`),n,'video');
      link(nodes.find(n=>n.id===`model:${v.modelId}`),n,'video');
    }
    if(small&&shownVideos.length)height=videoStart+shownVideos.length*165+80;
  } else {
    // A real hierarchy: every category branches to its subcategories before any model edge.
    let cursor=70;
    for(const industry of validIndustries) {
      const children=matchingTopics.filter(t=>t.industryId===industry.id);
      const step=small?150:120;const block=Math.max(small?300:190,children.length*step+60);
      const sector=add('industry',industry,small?75:120,cursor+block/2-40,[industry.code,...splitLabel(industry.label)]);
      for(const [j,t] of children.entries()){
        const n=add('topic',t,small?265:420,cursor+j*step,[...splitLabel(`${t.code} ${t.name}`),...chineseLines(t.nameZh)]);link(sector,n,'category');
      }
      cursor+=block;
    }
    height=cursor+70;
    const modelStart=small?cursor+90:70;
    for(const [i,m] of validModels.entries())add('model',m,small?(i%2?280:95):730,small?modelStart+Math.floor(i/2)*145:modelStart+i*((height-160)/Math.max(1,validModels.length-1)),modelLines(m));
    if(small)height=modelStart+Math.ceil(validModels.length/2)*145+50;
    for(const t of matchingTopics)for(const mid of t.modelIds){if(validModels.some(m=>m.id===mid))link(nodes.find(n=>n.id===`topic:${t.id}`),nodes.find(n=>n.id===`model:${mid}`));}
  }
  if(!videoMode&&!modelMode&&!focusIndustry&&shownVideos.length){
    const start=small?height+50:90;
    for(const [i,v] of shownVideos.entries()){
      const n=add('video',v,small?190:1000,small?start+i*170:90+i*(height-260)/Math.max(1,shownVideos.length-1),[...splitLabel(v.shortTitle),`${Math.floor(v.duration/60)}:${String(Math.floor(v.duration%60)).padStart(2,'0')} · Watch video`]);
      link(nodes.find(n=>n.id===`topic:${v.subcategoryId}`),n,'video');link(nodes.find(n=>n.id===`model:${v.modelId}`),n,'video');
    }
    if(small)height=start+shownVideos.length*170+80;
  }
  const title=videoMode?'Student explanations, connected':modelMode?'From industry to explanation':focusIndustry?`${focusIndustry.code} · ${focusIndustry.name}`:focusSector?focusSector.name:'Explore the industries';
  const focused=focusIndustry||(!modelMode&&!videoMode&&shownVideos.length);
  container.innerHTML=`<div class="map-toolbar"><div><p class="map-eyebrow">INDUSTRY → MODEL → VIDEO</p><h3 tabindex="-1">${escapeText(title)}</h3><p class="classification-breadcrumb">${focusIndustry?escapeText(focusIndustry.nameZh):'Follow an industry into its economic models, then learn from a student’s explanation.'}</p></div><div class="map-actions">${focusIndustry?'<button id="map-back">← All sections</button>':''}<button id="motion-toggle" aria-pressed="${paused}" aria-label="${paused?'Resume map motion':'Pause map motion'}">${paused?'Resume motion':'Pause motion'}</button></div></div><div class="map-legend"><span><i class="legend-industry"></i>Industry</span><span><i class="legend-model"></i>Model</span><span><i class="legend-future"></i>Student video</span></div><div class="map-levels ${focused?'focus-levels':'overview-levels'}">${videoMode||modelMode?'<span>01 <b>Industry division</b></span><span>02 <b>Model</b></span><span>03 <b>Student video</b></span>':'<span>01 <b>Industry section</b></span><span>02 <b>Division</b></span><span>03 <b>Model</b></span>'}${!videoMode&&!modelMode&&shownVideos.length?'<span>04 <b>Student video</b></span>':''}</div><div class="network-stage"></div><div class="map-caption"><span>Click an industry or model to read its explanation. Click an orange video node to watch. ${videoMode&&shownVideos.some(v=>!v.subcategoryId)?'Two presentations have no specified industry; their model connections remain visible.':''}</span><span class="map-count">${validModels.length} ${validModels.length===1?'model':'models'} · ${shownVideos.length} ${shownVideos.length===1?'video':'videos'}</span></div>`;
  const svg=svgElement('svg',{viewBox:`0 0 ${width} ${height}`,class:`network-svg ${focusIndustry?'focus-network':'overview-network'} ${modelMode||videoMode?'learning-network':''}`,role:'group','aria-label':'Industry, model and student video connections'});
  const desc=svgElement('desc');desc.textContent='Interactive diagram. Tab through nodes and press Enter to select. Lines show course applications and the model and industry attached to each student video, not causal relationships.';svg.append(desc);
  const defs=svgElement('defs');const pattern=svgElement('pattern',{id:'atlas-grid',width:28,height:28,patternUnits:'userSpaceOnUse'});pattern.append(svgElement('circle',{cx:1,cy:1,r:.7,class:'map-grid-dot'}));defs.append(pattern);svg.append(defs);svg.append(svgElement('rect',{width,height,fill:'url(#atlas-grid)','aria-hidden':'true'}));
  const edges=svgElement('g',{'aria-hidden':'true'}),dots=svgElement('g',{'aria-hidden':'true'}),nodeLayer=svgElement('g');svg.append(edges,dots,nodeLayer);
  container.querySelector('.network-stage').append(svg);
  const nodeById=new Map(nodes.map(n=>[n.id,n]));
  for(const [i,l] of links.entries()) {l.path=svgElement('path',{class:`network-edge ${l.kind==='planned'?'is-planned':l.kind==='category'?'is-category':l.kind==='video'?'is-video':''}`});l.path.dataset.from=l.a;l.path.dataset.to=l.b;edges.append(l.path);if(i%3===0&&l.kind!=='planned'){l.dot=svgElement('circle',{r:2.4,class:'edge-particle'});dots.append(l.dot);}}
  let selected=null;
  function highlight(id){const linked=new Set([id]);for(const l of links)if(l.a===id||l.b===id){linked.add(l.a);linked.add(l.b);}for(const n of nodes)n.el.classList.toggle('is-muted',!!id&&!linked.has(n.id));for(const l of links){const active=l.a===id||l.b===id;l.path.classList.toggle('is-active',!!id&&active);l.path.classList.toggle('is-muted',!!id&&!active);if(l.dot)l.dot.classList.toggle('is-muted',!!id&&!active);}}
  function inspect(n){
    selected=n.id;highlight(n.id);for(const node of nodes)node.el.setAttribute('aria-pressed',node.id===selected);
    if(n.kind==='industry'){onIndustry(n.record.id);return;}
    if(n.kind==='topic'){onTopic(n.record.id);return;}
    if(n.kind==='model'){onModel(n.record.id);return;}
    if(n.kind==='video')onVideo(n.record.id);
  }
  for(const n of nodes){
    const r=(n.kind==='industry'||n.kind==='lecture')?31:n.kind==='topic'?(focusIndustry?16:7):n.kind==='video'?20:8;
    const el=svgElement('g',{class:`network-node node-${n.kind}`,role:'button',tabindex:0,'aria-label':`${n.record.code&&n.kind!=='model'?n.record.code+' · '+n.record.name:n.record.name}, ${n.kind==='lecture'?'focus lecture':n.kind==='industry'?'show subcategories':n.kind==='topic'?'show application':n.kind==='model'?'show model':'watch presentation'}`,'aria-pressed':'false'});n.el=el;
    el.append(svgElement('circle',{r:Math.max(r+12,24),class:'node-hit'}));
    el.append(svgElement('circle',{r:r+9,class:'node-halo'}));el.append(svgElement('circle',{r,class:'node-core'}));
    if(n.kind==='industry'||n.kind==='lecture'){const initial=svgElement('text',{class:'node-symbol','text-anchor':'middle',y:7});initial.textContent=n.record.symbol||n.record.number;el.append(initial);}
    if(n.kind==='video'){const play=svgElement('path',{d:'M -5 -9 L 10 0 L -5 9 Z',class:'future-play'});el.append(play);}
    const sideLabel=!small&&!focusIndustry&&n.kind!=='industry'&&n.kind!=='lecture'&&!(videoMode||modelMode)&&n.kind!=='video';const labelX=sideLabel?22:0;const label=svgElement('text',{'text-anchor':sideLabel?'start':'middle',class:'node-label',x:labelX,y:sideLabel?(n.lines.length>1?-4:5):r+26});for(const [i,line] of n.lines.entries()){const tspan=svgElement('tspan',{x:labelX,dy:i?19:0});tspan.textContent=line;label.append(tspan);}el.append(label);
    el.addEventListener('mouseenter',()=>{n.hovered=true;highlight(n.id);});el.addEventListener('mouseleave',()=>{n.hovered=false;highlight(selected);});el.addEventListener('focus',()=>{n.focused=true;highlight(n.id);});el.addEventListener('blur',()=>{n.focused=false;highlight(selected);});el.addEventListener('click',()=>inspect(n));el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();inspect(n);}});nodeLayer.append(el);
  }
  const button=container.querySelector('#motion-toggle');let animation,visible=true,elapsed=0,last=0;
  function paint(time=0){const moving=!paused&&!reducedMotion.matches;for(const n of nodes){if(!n.pos||(!n.hovered&&!n.focused&&n.id!==selected))n.pos={x:n.x+(moving?Math.sin(time*.00042+n.phase)*4:0),y:n.y+(moving?Math.cos(time*.00055+n.phase)*5:0)};n.el.setAttribute('transform',`translate(${n.pos.x} ${n.pos.y})`);}for(const [i,l] of links.entries()){const points=curve(nodeById.get(l.a).pos,nodeById.get(l.b).pos,small&&!focusIndustry&&l.kind!=='category');l.path.setAttribute('d',`M ${points[0].x} ${points[0].y} C ${points[1].x} ${points[1].y}, ${points[2].x} ${points[2].y}, ${points[3].x} ${points[3].y}`);if(l.dot){const p=along(points,(time*.000055+i*.17)%1);l.dot.setAttribute('cx',p.x);l.dot.setAttribute('cy',p.y);}}}
  function frame(time){if(!visible||document.hidden||paused||reducedMotion.matches){animation=null;return;}if(time-last>32){elapsed+=Math.min(time-last,50);last=time;paint(elapsed);}animation=requestAnimationFrame(frame);}
  function start(){if(!animation&&!paused&&!reducedMotion.matches&&visible&&!document.hidden){last=performance.now();animation=requestAnimationFrame(frame);}}
  function toggle(){paused=!paused;button.textContent=paused?'Resume motion':'Pause motion';button.setAttribute('aria-pressed',paused);button.setAttribute('aria-label',paused?'Resume map motion':'Pause map motion');if(paused){cancelAnimationFrame(animation);animation=null;}else start();}
  button.onclick=toggle;
  if(reducedMotion.matches){button.textContent='Motion reduced';button.disabled=true;}
  const motionChanged=()=>{if(reducedMotion.matches){cancelAnimationFrame(animation);animation=null;paint();button.textContent='Motion reduced';button.disabled=true;}else{button.disabled=false;button.textContent=paused?'Resume motion':'Pause motion';start();}};
  reducedMotion.addEventListener('change',motionChanged);
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)start();});observer.observe(svg);
  document.addEventListener('visibilitychange',start);
  container.querySelector('#map-back')?.addEventListener('click',()=>onIndustry(''));

  paint();start();
  stopPrevious=()=>{cancelAnimationFrame(animation);observer.disconnect();document.removeEventListener('visibilitychange',start);reducedMotion.removeEventListener('change',motionChanged);};
}
export function stopGraph(){stopPrevious();}
