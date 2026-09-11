// GB/T 4754—2017 sections and divisions; three-sector allocation follows the 2018 NBS revision.
// Chinese labels are classification data. English labels are course translations, not official translations.
export const classificationSources = {
  requested:'https://zh.wikipedia.org/wiki/中国产业分类',
  standard:'https://www.stats.gov.cn/sj/tjbz/gmjjhyfl/202501/P020250116506795831658.pdf',
  allocation:'https://www.stats.gov.cn/zs/tjws/tjbz/202301/t20230101_1903768.html',
  revision:'GB/T 4754—2017; three-sector allocation revised 2018',
  retrieved:'2026-09-11'
};
export const sectors=[
 {id:'primary',name:'Primary sector',nameZh:'第一产业',description:'Agriculture, forestry, animal husbandry and fishing; excludes division 05.'},
 {id:'secondary',name:'Secondary sector',nameZh:'第二产业',description:'Mining, manufacturing, utilities and construction; excludes divisions 11 and 43.'},
 {id:'tertiary',name:'Tertiary sector',nameZh:'第三产业',description:'Services, including divisions 05, 11 and 43 from sections A, B and C.'}
];
const sectionRows=[
 ['A','农、林、牧、渔业','Agriculture, forestry, animal husbandry & fishing','Agriculture',1,5],
 ['B','采矿业','Mining & quarrying','Mining',6,12],
 ['C','制造业','Manufacturing','Manufacturing',13,43],
 ['D','电力、热力、燃气及水生产和供应业','Electricity, heat, gas & water supply','Utilities',44,46],
 ['E','建筑业','Construction','Construction',47,50],
 ['F','批发和零售业','Wholesale & retail trade','Trade',51,52],
 ['G','交通运输、仓储和邮政业','Transport, storage & postal services','Transport',53,60],
 ['H','住宿和餐饮业','Accommodation & food services','Hospitality',61,62],
 ['I','信息传输、软件和信息技术服务业','Information transmission, software & IT services','Information & IT',63,65],
 ['J','金融业','Financial services','Finance',66,69],
 ['K','房地产业','Real estate','Real estate',70,70],
 ['L','租赁和商务服务业','Leasing & business services','Business services',71,72],
 ['M','科学研究和技术服务业','Scientific research & technical services','Research',73,75],
 ['N','水利、环境和公共设施管理业','Water, environment & public facilities management','Environment',76,79],
 ['O','居民服务、修理和其他服务业','Resident services, repairs & other services','Personal services',80,82],
 ['P','教育','Education','Education',83,83],
 ['Q','卫生和社会工作','Health & social work','Health',84,85],
 ['R','文化、体育和娱乐业','Culture, sports & entertainment','Culture & sport',86,90],
 ['S','公共管理、社会保障和社会组织','Public administration, social security & social organisations','Public administration',91,96],
 ['T','国际组织','International organisations','International bodies',97,97]
];
const divisionRows=`01|农业|Agriculture
02|林业|Forestry
03|畜牧业|Animal husbandry
04|渔业|Fishing & aquaculture
05|农、林、牧、渔专业及辅助性活动|Agricultural & related support activities
06|煤炭开采和洗选业|Coal mining & washing
07|石油和天然气开采业|Oil & natural gas extraction
08|黑色金属矿采选业|Ferrous metal ore mining
09|有色金属矿采选业|Non-ferrous metal ore mining
10|非金属矿采选业|Non-metallic mineral mining
11|开采专业及辅助性活动|Mining support activities
12|其他采矿业|Other mining
13|农副食品加工业|Processing of agricultural foods
14|食品制造业|Food manufacturing
15|酒、饮料和精制茶制造业|Beverages & refined tea
16|烟草制品业|Tobacco products
17|纺织业|Textiles
18|纺织服装、服饰业|Textile clothing & apparel
19|皮革、毛皮、羽毛及其制品和制鞋业|Leather, fur, feathers & footwear
20|木材加工和木、竹、藤、棕、草制品业|Wood & plant-material products
21|家具制造业|Furniture manufacturing
22|造纸和纸制品业|Paper & paper products
23|印刷和记录媒介复制业|Printing & recorded media reproduction
24|文教、工美、体育和娱乐用品制造业|Cultural, craft, sports & recreation goods
25|石油、煤炭及其他燃料加工业|Petroleum, coal & other fuel processing
26|化学原料和化学制品制造业|Chemicals & chemical products
27|医药制造业|Pharmaceutical manufacturing
28|化学纤维制造业|Chemical fibres
29|橡胶和塑料制品业|Rubber & plastic products
30|非金属矿物制品业|Non-metallic mineral products
31|黑色金属冶炼和压延加工业|Ferrous metal smelting & rolling
32|有色金属冶炼和压延加工业|Non-ferrous metal smelting & rolling
33|金属制品业|Fabricated metal products
34|通用设备制造业|General-purpose machinery
35|专用设备制造业|Special-purpose machinery
36|汽车制造业|Motor vehicle manufacturing
37|铁路、船舶、航空航天和其他运输设备制造业|Rail, ship, aerospace & other transport equipment
38|电气机械和器材制造业|Electrical machinery & equipment
39|计算机、通信和其他电子设备制造业|Computers, communications & electronics
40|仪器仪表制造业|Instruments & meters
41|其他制造业|Other manufacturing
42|废弃资源综合利用业|Waste-resource recovery
43|金属制品、机械和设备修理业|Metal product, machinery & equipment repair
44|电力、热力生产和供应业|Electricity & heat supply
45|燃气生产和供应业|Gas supply
46|水的生产和供应业|Water supply
47|房屋建筑业|Building construction
48|土木工程建筑业|Civil engineering
49|建筑安装业|Construction installation
50|建筑装饰、装修和其他建筑业|Decoration, renovation & other construction
51|批发业|Wholesale trade
52|零售业|Retail trade
53|铁路运输业|Rail transport
54|道路运输业|Road transport
55|水上运输业|Water transport
56|航空运输业|Air transport
57|管道运输业|Pipeline transport
58|多式联运和运输代理业|Multimodal transport & transport agencies
59|装卸搬运和仓储业|Cargo handling & storage
60|邮政业|Postal services
61|住宿业|Accommodation
62|餐饮业|Food & beverage services
63|电信、广播电视和卫星传输服务|Telecom, broadcasting & satellite transmission
64|互联网和相关服务|Internet & related services
65|软件和信息技术服务业|Software & IT services
66|货币金融服务|Monetary financial services
67|资本市场服务|Capital market services
68|保险业|Insurance
69|其他金融业|Other financial services
70|房地产业|Real estate
71|租赁业|Leasing
72|商务服务业|Business services
73|研究和试验发展|Research & experimental development
74|专业技术服务业|Professional technical services
75|科技推广和应用服务业|Technology promotion & application services
76|水利管理业|Water conservancy management
77|生态保护和环境治理业|Ecological protection & environmental management
78|公共设施管理业|Public facilities management
79|土地管理业|Land management
80|居民服务业|Resident services
81|机动车、电子产品和日用产品修理业|Vehicle, electronic & household product repair
82|其他服务业|Other services
83|教育|Education
84|卫生|Health services
85|社会工作|Social work
86|新闻和出版业|News & publishing
87|广播、电视、电影和录音制作业|Radio, television, film & sound production
88|文化艺术业|Culture & arts
89|体育|Sports
90|娱乐业|Entertainment
91|中国共产党机关|Communist Party of China organisations
92|国家机构|State institutions
93|人民政协、民主党派|CPPCC & democratic parties
94|社会保障|Social security
95|群众团体、社会团体和其他成员组织|Mass, social & other membership organisations
96|基层群众自治组织及其他组织|Grassroots self-governance & other organisations
97|国际组织|International organisations`;
export const divisions=divisionRows.split('\n').map(row=>{
 const [code,nameZh,name]=row.split('|');const section=sectionRows.find(s=>+code>=s[4]&&+code<=s[5]);
 const sectorId=['05','11','43'].includes(code)?'tertiary':section[0]==='A'?'primary':'BCDE'.includes(section[0])?'secondary':'tertiary';
 return {id:code,code,name,nameZh,industryId:section[0],sectorId};
});
export const sections=sectionRows.map(([id,nameZh,name,label])=>({id,code:id,name,nameZh,label,symbol:id,topics:divisions.filter(d=>d.industryId===id).map(d=>d.id),sectorIds:[...new Set(divisions.filter(d=>d.industryId===id).map(d=>d.sectorId))]}));
