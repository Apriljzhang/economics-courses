// Set panoptoUrl on a catalogue entry only after its individual session is matched.
// Folder URLs are library navigation, never individual recordings.
export function panoptoSessionUrl(value){
 if(!value)return null;
 try{const url=new URL(value);if(url.protocol!=='https:'||url.hostname!=='video.nottingham.edu.cn'||!/^\/Panopto\/Pages\/(Viewer|Embed)\.aspx$/i.test(url.pathname)||!(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(url.searchParams.get('id')||'')))return null;url.pathname='/Panopto/Pages/Viewer.aspx';return url.href;}catch{return null;}
}
export function panoptoEmbedUrl(value,start=0){
 const viewer=panoptoSessionUrl(value);if(!viewer)return null;
 const url=new URL(viewer);url.pathname='/Panopto/Pages/Embed.aspx';url.searchParams.set('autoplay','false');url.searchParams.set('offerviewer','true');url.searchParams.set('showtitle','false');url.searchParams.set('start',String(Math.max(0,Number(start)||0)));return url.href;
}
