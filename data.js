import {sectors, sections, divisions, classificationSources} from './classification.js?v=20261029c';
import {lectures, models} from './course.js?v=20261029c';
import {videos} from './videos.js?v=20261029c';
export {sectors, classificationSources, lectures, models, videos};
export const industries=[...sections,{id:'others',code:'',name:'Others',nameZh:'其他',label:'Others',symbol:'…',sectorIds:[],topics:[],classificationStatus:'Unassigned or non-industry application; not an official industry section'}];
export const examples = [
  {
    "id": "ride-hailing",
    "name": "Ride-hailing platforms",
    "divisionId": "64",
    "question": "How might a membership fee change usage?",
    "caveat": "Specify the platform fee being analysed and who pays it. This exercise does not model cross-side network effects.",
    "modelIds": [
      "tariffs"
    ],
    "applications": [
      {
        "modelId": "tariffs",
        "explanation": "Use a fixed membership fee and a per-trip charge to compare the choices of frequent and occasional users. Check participation and self-selection."
      }
    ],
    "application": "Use a fixed membership fee and a per-trip charge to compare the choices of frequent and occasional users. Check participation and self-selection.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "streaming",
    "name": "Video streaming",
    "divisionId": "64",
    "question": "How could a service price related subscriptions?",
    "caveat": "The lecture’s two-product monopoly is a benchmark. Establish linked demand and market power before applying it.",
    "modelIds": [
      "multiproduct",
      "tariffs"
    ],
    "applications": [
      {
        "modelId": "multiproduct",
        "explanation": "Treat two subscriptions sold by one firm as substitutes or complements. Trace how changing one price affects profit on the other."
      },
      {
        "modelId": "tariffs",
        "explanation": "For a service with a fixed fee and additional paid usage, compare one tariff with a menu intended for different demand groups."
      }
    ],
    "application": "Treat two subscriptions sold by one firm as substitutes or complements. Trace how changing one price affects profit on the other.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "marketplaces",
    "name": "Online marketplaces",
    "divisionId": "64",
    "question": "What happens when buyers cannot judge seller quality?",
    "caveat": "Distinguish the platform’s intermediation activity from the goods sold by merchants. Ratings are not automatically truthful signals.",
    "modelIds": [
      "lemons",
      "signalling"
    ],
    "applications": [
      {
        "modelId": "lemons",
        "explanation": "Consider a marketplace where sellers know quality but buyers only observe a pooled offer. Track which sellers remain as willingness to pay changes."
      },
      {
        "modelId": "signalling",
        "explanation": "Specify a seller action that buyers can observe and its likelihood for each quality type. Use Bayes’ rule to examine what the action reveals."
      }
    ],
    "application": "Consider a marketplace where sellers know quality but buyers only observe a pooled offer. Track which sellers remain as willingness to pay changes.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "evs",
    "name": "Electric vehicles",
    "divisionId": "36",
    "question": "Can a manufacturer credibly promise to limit future sales?",
    "caveat": "A car market has differentiated producers, costs and policy influences. The lecture’s single-seller example is a deliberate simplification.",
    "modelIds": [
      "durable",
      "spe"
    ],
    "applications": [
      {
        "modelId": "durable",
        "explanation": "Use the two-period durable-goods model to compare a committed output plan with later incentives to sell more vehicles."
      },
      {
        "modelId": "spe",
        "explanation": "Work backwards from the manufacturer’s second-period decision to test whether the initial promise remains credible."
      }
    ],
    "application": "Use the two-period durable-goods model to compare a committed output plan with later incentives to sell more vehicles.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "semiconductors",
    "name": "Semiconductor production",
    "divisionId": "39",
    "question": "How do fabrication overheads affect the number of producers?",
    "caveat": "Separate fabrication from design. Fixed costs, sunk investment and technological differences are distinct.",
    "modelIds": [
      "entry",
      "stackelberg"
    ],
    "applications": [
      {
        "modelId": "entry",
        "explanation": "Use the Cournot fixed-cost extension to compare the benefit of another producer with the duplication of production overheads."
      },
      {
        "modelId": "stackelberg",
        "explanation": "Specify a credible early output commitment and a later rival response. Compare the sequential quantity benchmark with simultaneous choices."
      }
    ],
    "application": "Use the Cournot fixed-cost extension to compare the benefit of another producer with the duplication of production overheads.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "cement",
    "name": "Cement production",
    "divisionId": "30",
    "question": "What changes when a rival expands output?",
    "caveat": "Define a geographic market and comparable cement products. Transport costs and spare capacity may matter.",
    "modelIds": [
      "cournot",
      "dominant"
    ],
    "applications": [
      {
        "modelId": "cournot",
        "explanation": "Choose a linear demand and cost benchmark, derive each producer’s quantity response, and compare equilibrium output after a cost change."
      },
      {
        "modelId": "dominant",
        "explanation": "As an alternative, treat one producer as dominant and smaller suppliers as price takers. Construct residual demand using their supply schedule."
      }
    ],
    "application": "Choose a linear demand and cost benchmark, derive each producer’s quantity response, and compare equilibrium output after a cost change.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "airlines",
    "name": "Passenger airlines",
    "divisionId": "56",
    "question": "Do different fares reflect screening or service differences?",
    "caveat": "Seats are capacity constrained and tickets differ in flexibility and service. A fare difference alone is insufficient.",
    "modelIds": [
      "third-degree",
      "capacity"
    ],
    "applications": [
      {
        "modelId": "third-degree",
        "explanation": "Identify a group or proxy associated with demand elasticity. Check costs and resale restrictions before interpreting the fare as group pricing."
      },
      {
        "modelId": "capacity",
        "explanation": "Use the lecture’s limited-capacity price game as a benchmark for a route. State how customers are allocated when the cheaper carrier fills its seats."
      }
    ],
    "application": "Identify a group or proxy associated with demand elasticity. Check costs and resale restrictions before interpreting the fare as group pricing.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "shipping",
    "name": "Container shipping",
    "divisionId": "55",
    "question": "Does the timing of output commitments change freight competition?",
    "caveat": "Specify a route and time period. Fleet capacity is not identical to realised output, and alliances require separate analysis.",
    "modelIds": [
      "cournot",
      "stackelberg"
    ],
    "applications": [
      {
        "modelId": "cournot",
        "explanation": "Model simultaneous shipment quantities and trace how total provision affects the freight price."
      },
      {
        "modelId": "stackelberg",
        "explanation": "Change only the timing: let one firm commit to output first and anticipate a follower’s quantity response."
      }
    ],
    "application": "Model simultaneous shipment quantities and trace how total provision affects the freight price.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "parcels",
    "name": "Parcel delivery contracts",
    "divisionId": "60",
    "question": "What changes when a delivery contract can be renegotiated?",
    "caveat": "This exercise stipulates one principal and two agents. Real delivery networks need not fit that structure.",
    "modelIds": [
      "renegotiable",
      "non-renegotiable"
    ],
    "applications": [
      {
        "modelId": "renegotiable",
        "explanation": "Treat a delivery organiser and two service partners as the lecture’s principal-and-agents game. Let failure cancel provisional agreements and solve backwards."
      },
      {
        "modelId": "non-renegotiable",
        "explanation": "Keep the same coalition values but make signed deals binding. Compare the negotiated allocation with the renegotiable protocol."
      }
    ],
    "application": "Treat a delivery organiser and two service partners as the lecture’s principal-and-agents game. Let failure cancel provisional agreements and solve backwards.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "coffee",
    "name": "Coffee shops",
    "divisionId": "62",
    "question": "Why might identical drinks sell at different prices?",
    "caveat": "Real cafés differ in location, quality and atmosphere. Hold these fixed before attributing a price gap to information.",
    "modelIds": [
      "bertrand",
      "tourist-native"
    ],
    "applications": [
      {
        "modelId": "bertrand",
        "explanation": "Use identical drinks and fully informed buyers as a price-competition benchmark."
      },
      {
        "modelId": "tourist-native",
        "explanation": "Introduce informed regular customers and visitors who search less. Compare the revenue from a low-price and a high-price strategy."
      }
    ],
    "application": "Use identical drinks and fully informed buyers as a price-competition benchmark.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "supermarkets",
    "name": "Supermarket supply contracts",
    "divisionId": "52",
    "question": "How do disagreement options affect a supply agreement?",
    "caveat": "Specify the supplier, retailer, feasible surplus and payoffs if the deal fails. Larger size alone is not a bargaining parameter.",
    "modelIds": [
      "nash-bargaining",
      "bargaining-options"
    ],
    "applications": [
      {
        "modelId": "nash-bargaining",
        "explanation": "Model a bilateral supply agreement by maximising gains over the supplier’s and retailer’s disagreement payoffs."
      },
      {
        "modelId": "bargaining-options",
        "explanation": "Separate a replacement supplier, revenue earned during talks and an accidental negotiation breakdown. Check which outside option actually binds."
      }
    ],
    "application": "Model a bilateral supply agreement by maximising gains over the supplier’s and retailer’s disagreement payoffs.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "hotels",
    "name": "Hotel bookings",
    "divisionId": "61",
    "question": "How could search costs affect room prices?",
    "caveat": "Room quality, dates and booking conditions must be comparable. These exercises do not explain every observed price difference.",
    "modelIds": [
      "tourist-trap",
      "third-degree"
    ],
    "applications": [
      {
        "modelId": "tourist-trap",
        "explanation": "Treat comparing another hotel as costly search and assess whether a small price increase would cause a customer to search again."
      },
      {
        "modelId": "third-degree",
        "explanation": "Examine an identifiable discount group, checking demand elasticity, service differences and restrictions on transferring a booking."
      }
    ],
    "application": "Treat comparing another hotel as costly search and assess whether a small price increase would cause a customer to search again.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "electricity",
    "name": "Electricity supply",
    "divisionId": "44",
    "question": "What can a monopoly pricing benchmark tell us?",
    "caveat": "Actual electricity prices may be regulated. Monopoly pricing is not a model of cost subadditivity or a justification for a particular regulation.",
    "modelIds": [
      "monopoly",
      "dominant"
    ],
    "applications": [
      {
        "modelId": "monopoly",
        "explanation": "Use a specified demand and marginal cost to calculate the single-seller benchmark, then identify where the pricing rule differs from the actual tariff."
      },
      {
        "modelId": "dominant",
        "explanation": "For a generation-market exercise, distinguish one dominant generator from a price-taking fringe and calculate residual demand."
      }
    ],
    "application": "Use a specified demand and marginal cost to calculate the single-seller benchmark, then identify where the pricing rule differs from the actual tariff.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "water",
    "name": "Water supply",
    "divisionId": "46",
    "question": "How would a fixed fee and usage charge affect households?",
    "caveat": "Account for regulation, essential consumption and household differences before making a welfare claim.",
    "modelIds": [
      "tariffs",
      "monopoly"
    ],
    "applications": [
      {
        "modelId": "tariffs",
        "explanation": "Compare the participation and consumption effects of a standing charge plus a volumetric charge for two household demand types."
      },
      {
        "modelId": "monopoly",
        "explanation": "Calculate the uniform-price monopoly benchmark for a specified demand curve and compare its assumptions with the water provider’s pricing constraints."
      }
    ],
    "application": "Compare the participation and consumption effects of a standing charge plus a volumetric charge for two household demand types.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "renewables",
    "name": "Renewable electricity generation",
    "divisionId": "44",
    "question": "How does an early output commitment affect later suppliers?",
    "caveat": "Weather, dispatch and grid access can prevent credible quantity commitment. Specify what is committed.",
    "modelIds": [
      "stackelberg",
      "entry"
    ],
    "applications": [
      {
        "modelId": "stackelberg",
        "explanation": "Let an early supplier commit to output and solve the later supplier’s response in the lecture’s linear-demand benchmark."
      },
      {
        "modelId": "entry",
        "explanation": "Include a fixed operating cost and compare the number of producers, output and total surplus under the Cournot extension."
      }
    ],
    "application": "Let an early supplier commit to output and solve the later supplier’s response in the lecture’s linear-demand benchmark.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "banking",
    "name": "Retail banking",
    "divisionId": "66",
    "question": "How might customers choose between account tariffs?",
    "caveat": "Interest rates, risk and regulation are outside this simple fee-menu exercise.",
    "modelIds": [
      "tariffs"
    ],
    "applications": [
      {
        "modelId": "tariffs",
        "explanation": "Compare accounts with different monthly fees and transaction charges. Check that low- and high-usage customers prefer their intended account."
      }
    ],
    "application": "Compare accounts with different monthly fees and transaction charges. Check that low- and high-usage customers prefer their intended account.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "payments",
    "name": "Non-bank payment services",
    "divisionId": "69",
    "question": "How could fixed and per-transaction fees separate merchants?",
    "caveat": "Specify the non-bank payment activity and the merchant-facing fee. Cross-side effects are outside the supplied tariff model.",
    "modelIds": [
      "tariffs"
    ],
    "applications": [
      {
        "modelId": "tariffs",
        "explanation": "Model merchants with different transaction volumes choosing between a lower fixed fee and a lower per-transaction charge."
      }
    ],
    "application": "Model merchants with different transaction volumes choosing between a lower fixed fee and a lower per-transaction charge.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "insurance",
    "name": "Insurance contracts",
    "divisionId": "68",
    "question": "What do observed choices reveal about private information?",
    "caveat": "Use this as a generic incomplete-information exercise. The lecture’s lemons model concerns seller quality and is not a complete insurance model.",
    "modelIds": [
      "bayesian-games",
      "signalling"
    ],
    "applications": [
      {
        "modelId": "bayesian-games",
        "explanation": "Specify two private types, prior probabilities and state-contingent choices, then construct an expected-payoff game."
      },
      {
        "modelId": "signalling",
        "explanation": "Identify an observable action whose likelihood differs by private type. Calculate the posterior rather than assuming the action reveals the type."
      }
    ],
    "application": "Specify two private types, prior probabilities and state-contingent choices, then construct an expected-payoff game.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "pharmaceuticals",
    "name": "Pharmaceutical production",
    "divisionId": "27",
    "question": "How does a single-seller pricing benchmark respond to demand?",
    "caveat": "Specify the product, market and period. Patents, reimbursement and access constraints need separate evidence.",
    "modelIds": [
      "monopoly",
      "first-degree"
    ],
    "applications": [
      {
        "modelId": "monopoly",
        "explanation": "Use the Lerner condition to examine the relationship between demand elasticity and the proportional mark-up."
      },
      {
        "modelId": "first-degree",
        "explanation": "Use perfect price discrimination as a welfare benchmark. Separate changes in total surplus from who receives that surplus."
      }
    ],
    "application": "Use the Lerner condition to examine the relationship between demand elasticity and the proportional mark-up.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "hospitals",
    "name": "Healthcare provision",
    "divisionId": "84",
    "question": "How does uncertainty about service quality affect choice?",
    "caveat": "Patients may rely on referrals, insurers or urgent care. This is a question about information, not an assertion that services are low quality.",
    "modelIds": [
      "lemons"
    ],
    "applications": [
      {
        "modelId": "lemons",
        "explanation": "Use the lecture’s professional-services discussion to examine what patients know about quality and whether pooled willingness to pay discourages some providers."
      }
    ],
    "application": "Use the lecture’s professional-services discussion to examine what patients know about quality and whether pooled willingness to pay discourages some providers.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "telemedicine",
    "name": "Telemedicine healthcare provision",
    "divisionId": "84",
    "question": "How might patients interpret a provider’s observable action?",
    "caveat": "This case concerns healthcare provision. A credential or signal must have a specified information structure; do not assume it proves quality.",
    "modelIds": [
      "signalling"
    ],
    "applications": [
      {
        "modelId": "signalling",
        "explanation": "Describe two provider types, an observable action and the likelihood of that action for each type. Examine the patient’s posterior belief."
      }
    ],
    "application": "Describe two provider types, an observable action and the likelihood of that action for each type. Examine the patient’s posterior belief.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "grain",
    "name": "Grain wholesaling",
    "divisionId": "51",
    "question": "How would simultaneous quantity choices affect a trading market?",
    "caveat": "Specify a wholesale activity and market boundary. Do not infer oligopoly merely from the industry label.",
    "modelIds": [
      "cournot"
    ],
    "applications": [
      {
        "modelId": "cournot",
        "explanation": "Set out the traders, quantities, demand and costs, then solve the simultaneous best responses."
      }
    ],
    "application": "Set out the traders, quantities, demand and costs, then solve the simultaneous best responses.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "dairy",
    "name": "Dairy processing partnerships",
    "divisionId": "14",
    "question": "How could processing partners divide the value they create?",
    "caveat": "Coalition values must be estimated or explicitly hypothetical. Neither allocation is an observed industry profit share.",
    "modelIds": [
      "shapley",
      "nucleolus"
    ],
    "applications": [
      {
        "modelId": "shapley",
        "explanation": "Represent a processor and two complementary partners using the lecture’s coalition structure. Average marginal contributions over joining orders."
      },
      {
        "modelId": "nucleolus",
        "explanation": "Using the same hypothetical coalition values, follow the lecture’s departure-threat example and compare its allocation with the Shapley value."
      }
    ],
    "application": "Represent a processor and two complementary partners using the lecture’s coalition structure. Average marginal contributions over joining orders.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "food-delivery",
    "name": "Food-delivery platforms",
    "divisionId": "64",
    "question": "Which promotional choice is a best response to a rival?",
    "caveat": "This is a stipulated strategic game. The supplied lectures do not develop a two-sided-platform pricing model.",
    "modelIds": [
      "nash",
      "mechanism"
    ],
    "applications": [
      {
        "modelId": "nash",
        "explanation": "Specify two platforms’ promotional actions and hypothetical payoffs. Find best responses and check for profitable unilateral deviations."
      },
      {
        "modelId": "mechanism",
        "explanation": "Specify a participation objective and ask how voucher rules change users’ incentives. Do not assume the rule achieves the objective without checking their choices."
      }
    ],
    "application": "Specify two platforms’ promotional actions and hypothetical payoffs. Find best responses and check for profitable unilateral deviations.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "souvenirs",
    "name": "Souvenir stands",
    "divisionId": "52",
    "question": "Can search costs sustain different prices for identical souvenirs?",
    "caveat": "The industry assignment is a course mapping of the lecture’s hypothetical stands. The example is not evidence about a particular town.",
    "modelIds": [
      "tourist-trap",
      "tourist-native"
    ],
    "applications": [
      {
        "modelId": "tourist-trap",
        "explanation": "Follow the lecture’s souvenir-stand example: compare accepting a small price increase with paying the cost of another search."
      },
      {
        "modelId": "tourist-native",
        "explanation": "Add informed local customers to uninformed visitors and compare the two price strategies in the lecture."
      }
    ],
    "application": "Follow the lecture’s souvenir-stand example: compare accepting a small price increase with paying the cost of another search.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "buffet",
    "name": "Buffet restaurants",
    "divisionId": "62",
    "question": "Why charge an entry fee and no price per extra serving?",
    "caveat": "The zero usage price is the lecture’s example, not a universal optimum. Food costs and capacity still need consideration.",
    "modelIds": [
      "tariffs"
    ],
    "applications": [
      {
        "modelId": "tariffs",
        "explanation": "Use the lecture’s buffet example to identify the fixed fee and per-unit charge, then compare customers with different demand."
      }
    ],
    "application": "Use the lecture’s buffet example to identify the fixed fee and per-unit charge, then compare customers with different demand.",
    "status": "Suggested industry exercise; not an empirical finding"
  },
  {
    "id": "admissions",
    "name": "Higher education admissions",
    "divisionId": "83",
    "question": "How can an information policy change a receiver’s decision?",
    "caveat": "This is the lecture’s fictional recommendation exercise, not a statistic or claim about UNNC students or Oxford admissions.",
    "modelIds": [
      "persuasion"
    ],
    "applications": [
      {
        "modelId": "persuasion",
        "explanation": "Reproduce the lecture’s 30% prior and high-signal policy. Calculate the 50% posterior and make the receiver’s acceptance-at-indifference assumption explicit."
      }
    ],
    "application": "Reproduce the lecture’s 30% prior and high-signal policy. Calculate the 50% posterior and make the receiver’s acceptance-at-indifference assumption explicit.",
    "status": "Suggested industry exercise; not an empirical finding"
  }
];
const mappingNotes={
 'ride-hailing':'Here the case is the online intermediation platform (division 64), not the passenger transport operator (division 54).',
 'streaming':'Here the case is an internet streaming service (64), not audiovisual production (87).',
 'marketplaces':'Here the case is platform intermediation (64), not a merchant’s wholesale or retail activity (51/52).',
 'food-delivery':'Here the case is the online platform (64), not food preparation (62) or physical delivery operations.',
 'payments':'Provisional course mapping for a non-bank payment service; the actual payment entity and activity must be specified.',
 'telemedicine':'Here the case is healthcare provision (84). A separate software or intermediation business may require another code.',
 'grain':'This example concerns grain wholesaling (51), not grain growing (01).'
};
for(const example of examples)example.mappingNote=mappingNotes[example.id]||'Course mapping at the two-digit division level; specify the actual activity when preparing a case.';
export const topics=divisions.map(d=>{
 const cases=examples.filter(e=>e.divisionId===d.id);const stories=videos.filter(v=>v.subcategoryId===d.id);
 return {...d,modelIds:[...new Set([...cases.flatMap(e=>e.modelIds),...stories.map(v=>v.modelId)])],videoIds:stories.map(v=>v.id),examples:cases,question:cases[0]?.question||stories[0]?.title||`Which model could explain an activity in ${d.name.toLowerCase()}?`,application:cases[0]?.application||stories[0]?.summary||'No teaching application has been added to this division yet.',caveat:'The classification describes economic activities. Model links are illustrative teaching applications to the listed cases, not official classifications or findings about the entire division.',status:stories.length?'student-presentation':cases.length?'illustrative':'unlinked',classificationMappings:[{scheme:'GB/T 4754',revision:'2017',code:d.code,source:classificationSources.standard}]};
});
export const dataset={version:'0.4.0',status:'Course resource; lecture-based explanations, industry exercises and student presentations',classification:classificationSources,sectors,industries,topics,examples,lectures,models,videos};
