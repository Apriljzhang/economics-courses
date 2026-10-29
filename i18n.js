import {modelTranslations, exampleTranslations, videoTranslations} from './content-zh.js';
const language=new URLSearchParams(location.search).get('lang')==='zh'?'zh':'en';
export const isChinese=()=>language==='zh';
export function toggleLanguage(){const url=new URL(location.href);if(isChinese())url.searchParams.delete('lang');else url.searchParams.set('lang','zh');location.assign(url);}
const translations={
'Industry Lab · UNNC Industrial Economics':'产业学习实验室 · 宁波诺丁汉大学产业经济学',
'Skip to explorer':'跳转到课程浏览区','UNNC · Industrial Economics':'宁波诺丁汉大学 · 产业经济学',
'THE INDUSTRIAL ECONOMICS LEARNING LAB':'产业经济学学习实验室','Understand industries.':'理解产业。','See theory in action.':'看理论如何应用。',
'Explore economic ideas, understand how they apply,':'探索经济学思想，理解其应用，','and learn from student presentations.':'并从学生展示中学习。','Start with a question ↗':'从一个问题开始 ↗',
'Explore the course.':'探索课程。','Industry → Student video → Model':'行业 → 学生视频 → 模型',
'Search the lab':'搜索课程','Try Cournot, bargaining, quality…':'试试古诺、议价、质量……','Industry section':'行业门类','All sections':'全部门类','Course topic':'课程主题','All course topics':'全部课程主题','Model':'模型','All models':'全部模型','Reset':'重置',
'UNNC video library ↗':'宁诺视频库 ↗','Explorer layout':'浏览方式','Connections':'关系图','List':'列表',
'Explore the connections':'探索关联','Choose an industry section to reveal its divisions. Student videos connect industries with models.':'点击行业门类展开大类。学生视频连接行业与模型。','Collapse divisions':'收起大类','Industry, student video and model connections':'行业、学生视频与模型的关联','Division':'大类','Student video':'学生视频','Watch video':'观看视频','Industry not specified':'未指定行业','No matching models.':'暂无符合条件的模型。',
'Think like an economist':'像经济学家一样思考','One industry.':'同一行业。','More than one explanation.':'多种解释。','A useful model makes its assumptions visible. Read the reasoning, work through an example, then explore an industry application.':'有用的模型会明确其假设。阅读推导，理解例题，再探索行业应用。','Explore student presentations →':'探索学生展示 →',
'Understand the model.':'理解模型。','Question the application.':'审视应用。','Industrial Economics · UNNC':'产业经济学 · 宁波诺丁汉大学','Teaching materials by Zhixian Yu':'教学材料：Zhixian Yu','Industry classifications · Model explanations · Student presentations':'行业分类 · 模型说明 · 学生展示',
'Economic explanations are adapted from teaching materials by':'经济学说明改编自以下作者的教学材料：','Zhixian Yu, University of Nottingham Ningbo China':'Zhixian Yu，宁波诺丁汉大学','. Industry names follow the Chinese industry classification, with English translations.':'。行业名称采用中国行业分类，并提供英文译名。','Close details':'关闭详情',
'No matches yet.':'暂无匹配结果。','Try another subject or clear a filter to explore the course.':'试试其他关键词，或清除筛选条件。','Clear filters':'清除筛选','No presentation is available for this connection yet.':'这项关联暂时没有学生展示。',
'Understand this model ↗':'理解此模型 ↗','Explore this industry ↗':'探索此行业 ↗',
'Learn from a student presentation':'从学生展示中学习','How can we explain this industry?':'如何解释这个行业？','Explore the models':'探索模型','This division is part of the industry classification. A course explanation has not yet been added.':'此大类已列入行业分类，目前尚未添加课程说明。','Begin with the presentation above, then open its model to explore the underlying assumptions and reasoning.':'先观看上方展示，再打开对应模型，理解其假设与推导。','Each application concerns a particular activity. A model need not explain every firm or decision in the division.':'每项应用针对具体活动，模型的解释范围取决于所选企业和决策。',
'Start with the assumptions':'从假设开始','Follow the reasoning':'跟随推导','A worked example':'例题','Understand the limits':'理解适用范围','See the model in action':'观看模型应用','Try an industry application':'尝试行业应用','Think of a decision involving the model’s players, choices and assumptions. What evidence would you need to apply it?':'想一项涉及该模型参与者、选择和假设的决策。应用模型需要哪些证据？','Keep exploring':'继续探索','Follow this model’s connections →':'查看此模型的关联 →','Adapted from teaching materials by Zhixian Yu, UNNC.':'改编自宁波诺丁汉大学 Zhixian Yu 的教学材料。',
'STUDENT PRESENTATION':'学生展示','INDUSTRY':'行业','MODEL':'模型','THIS PRESENTATION':'本展示','Listen for the explanation':'留意展示中的解释','As you watch, identify the assumptions used in this case and consider where the explanation might fall short.':'观看时，识别案例采用的假设，并思考解释的适用范围。','Jump to a slide':'跳转到幻灯片','These links open a sampled slide in the recording. A transcript and separate captions are not available yet.':'点击可跳转到录制视频中抽样选取的幻灯片，目前尚无文字稿和独立字幕。','Consider the application':'思考这项应用','Which claim does the model help explain? What additional evidence would you need before drawing a conclusion about the industry?':'模型帮助解释了哪项主张？对行业作出判断前，还需要哪些证据？',
'The video could not load. Please reload the page or open the video file directly.':'视频加载失败。请刷新页面或直接打开视频文件。','Your browser does not support this video.':'浏览器不支持此视频。','Open the video':'打开视频','Open in Panopto ↗':'在 Panopto 中打开 ↗','Sign in with your UNNC access if required.':'如需登录，请使用宁诺的访问权限。',
'The interactive explorer needs JavaScript. Enable JavaScript to read the explanations and watch the student presentations.':'互动浏览需要 JavaScript。请启用 JavaScript，以阅读说明和观看学生展示。'
};
export function t(value){if(!isChinese())return value;const s=String(value),trim=s.trim();let result=translations[trim];if(result===undefined){
 result=trim.replace(/^(\d+) industry sections · (\d+) divisions$/,'$1 个行业门类 · $2 个大类').replace(/^(\d+) models and concepts$/,'$1 个模型与概念').replace(/^(\d+) student presentations$/,'$1 个学生展示');
 result=result.replace(/^Watch (.+)$/, '观看$1').replace(/^A slide from (.+)$/, '$1中的一张幻灯片');
 result=result.replace(/^(.*?) is a division within (.*?) in the (.*?)\. Explore the activities below to see how economic models can help explain decisions in this industry\.$/,(_,a,b,c)=>`${a}属于${c}中的${b}。通过下方活动，了解经济模型如何解释行业决策。`);
 for(const [en,zh] of Object.entries(translations))if(en.length>40&&result.includes(en))result=result.replaceAll(en,zh);
 }return s.replace(trim,result);}
export function localiseData({industries,models,topics,videos,sectors,examples,lectures}){
 if(!isChinese())return;
 for(const i of industries){i.name=i.nameZh;i.label=i.nameZh;}
 for(const s of sectors)s.name=s.nameZh;
 const lectureNames={'1':'非合作博弈论','2':'合作博弈论','3':'议价博弈','4':'垄断','5':'寡头垄断','7':'价格歧视','8':'信息'};
 for(const l of lectures)l.title=lectureNames[l.id];
 for(const m of models){m.englishName=m.name;const a=modelTranslations[m.id];if(a)['name','family','intuition','assumptions','mechanism','worked','limits'].forEach((k,i)=>m[k]=a[i]);}
 for(const e of examples){const a=exampleTranslations[e.id];if(!a)continue;[e.name,e.question,e.caveat]=a;e.applications.forEach((application,i)=>application.explanation=a[3][i]);e.application=e.applications.map(a=>a.explanation).join(' ');}
 for(const v of videos){const a=videoTranslations[v.id];if(!a)continue;[v.title,v.shortTitle,v.summary,v.mappingNote]=a;v.name=v.shortTitle;v.slideCues.forEach((cue,i)=>cue.label=a[4][i]);}
 for(const topic of topics){topic.name=topic.nameZh;topic.question=topic.examples[0]?.question||videos.find(v=>v.subcategoryId===topic.id)?.title||`哪个模型可以解释${topic.name}中的一项活动？`;topic.application=topic.examples[0]?.application||videos.find(v=>v.subcategoryId===topic.id)?.summary||'此大类尚未添加教学应用。';}
}
export function localiseUI(root){
 document.documentElement.lang=isChinese()?'zh-CN':'en-GB';document.title=t(document.title);
 const toggle=document.querySelector('#language-toggle');toggle.textContent=isChinese()?'English':'中文';toggle.lang=isChinese()?'en-GB':'zh-CN';toggle.setAttribute('aria-label',isChinese()?'Switch to English':'切换到简体中文');
 if(!isChinese())return;
 const translate=node=>{if(node.nodeType===Node.TEXT_NODE){const value=t(node.nodeValue);if(value!==node.nodeValue)node.nodeValue=value;return;}if(node.nodeType!==Node.ELEMENT_NODE||['SCRIPT','STYLE'].includes(node.tagName)||node.id==='language-toggle')return;for(const attr of ['placeholder','aria-label','title','alt'])if(node.hasAttribute(attr)){const value=t(node.getAttribute(attr));if(value!==node.getAttribute(attr))node.setAttribute(attr,value);}for(const child of node.childNodes)translate(child);};
 translate(root);new MutationObserver(mutations=>{for(const mutation of mutations){if(mutation.type==='characterData')translate(mutation.target);else for(const node of mutation.addedNodes)translate(node);}}).observe(root,{childList:true,characterData:true,subtree:true});
}
