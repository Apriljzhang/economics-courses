// Lecture-based orientation notes. PDF pages are one-based; industry exercises are stored separately.
export const lectures = [
  {
    "id": "1",
    "number": 1,
    "title": "Non cooperative game theory",
    "author": "Zhixian Yu",
    "course": "Industrial Economics IV: Games and Strategies",
    "institution": "University of Nottingham Ningbo China",
    "file": "lectures/Lecture_1__Non_cooperative_game_theory.pdf",
    "pages": 31,
    "sha256": "232c24ddad26337ddb0f9e0d42e17f1ba58861185977fc8b1db67fb6ca438301"
  },
  {
    "id": "2",
    "number": 2,
    "title": "Cooperative game theory",
    "author": "Zhixian Yu",
    "course": "Industrial Economics IV: Games and Strategies",
    "institution": "University of Nottingham Ningbo China",
    "file": "lectures/Lecture_2__Cooperative_game_theory.pdf",
    "pages": 29,
    "sha256": "adf1f4676ee5b49a81b07684dfaa8cb339341e0c69e6390b89e0233719536885"
  },
  {
    "id": "3",
    "number": 3,
    "title": "Bargaining games",
    "author": "Zhixian Yu",
    "course": "Industrial Economics IV: Games and Strategies",
    "institution": "University of Nottingham Ningbo China",
    "file": "lectures/Lecture_3__Bargaining_games.pdf",
    "pages": 32,
    "sha256": "5cf26baa2b4964768fea46f6296aad3bbdd5cc8805e7b70429213e152fc0f61a"
  },
  {
    "id": "4",
    "number": 4,
    "title": "Monopoly",
    "author": "Zhixian Yu",
    "course": "Industrial Economics IV: Games and Strategies",
    "institution": "University of Nottingham Ningbo China",
    "file": "lectures/Lecture_4__Monopoly.pdf",
    "pages": 55,
    "sha256": "2040d6ab0d6fbb8894dead1dc1fecd238ddbd5bd5ed118ba191122c8dca4d0fe"
  },
  {
    "id": "5",
    "number": 5,
    "title": "Oligopoly",
    "author": "Zhixian Yu",
    "course": "Industrial Economics IV: Games and Strategies",
    "institution": "University of Nottingham Ningbo China",
    "file": "lectures/Lecture_5__Oligopoly.pdf",
    "pages": 38,
    "sha256": "74039fb9c65ab476fd730e0df1d72abf5f35cc4b181b4115ccc3533b03a41be8"
  },
  {
    "id": "7",
    "number": 7,
    "title": "Price discrimination",
    "author": "Zhixian Yu",
    "course": "Industrial Economics IV: Games and Strategies",
    "institution": "University of Nottingham Ningbo China",
    "file": "lectures/Lecture_7__Price_discrimination.pdf",
    "pages": 24,
    "sha256": "7f978d70789575941cabfa78b69d9a75311bcc8921d7585d34aa424cf249774e"
  },
  {
    "id": "8",
    "number": 8,
    "title": "Information",
    "author": "Zhixian Yu",
    "course": "Industrial Economics IV: Games and Strategies",
    "institution": "University of Nottingham Ningbo China",
    "file": "lectures/Lecture_8__Information.pdf",
    "pages": 48,
    "sha256": "2483d811e0b157656dde3264dbbf1c486059fd8d7778eafd4072061fc2b738bd"
  }
];
export const models = [
  {
    "id": "nash",
    "name": "Nash equilibrium",
    "family": "Non-cooperative games",
    "lectureId": "1",
    "references": [
      {
        "lectureId": "1",
        "pages": [
          17,
          24
        ]
      }
    ],
    "intuition": "Each player chooses a best response to the other players’ strategies. No player can improve their payoff by changing their strategy alone.",
    "assumptions": "Specify the players, available actions and payoffs. The explanation introduces rationality and common knowledge before analysing strategic choices.",
    "mechanism": "Find best responses and look for their intersections. For a mixed strategy, choose probabilities that make the opponent indifferent between the actions used.",
    "worked": "The two-by-two game has pure equilibria (Up, Left) and (Down, Right). Its mixed equilibrium uses Pr(Up) = 1/4 and Pr(Left) = 1/2.",
    "limits": "An equilibrium need not be fair or unique. Distinguish a theoretical prediction from observed behaviour.",
    "formula": "",
    "relatedIds": [
      "spe",
      "cournot",
      "bertrand"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "spe",
    "name": "Subgame-perfect equilibrium",
    "family": "Non-cooperative games",
    "lectureId": "1",
    "references": [
      {
        "lectureId": "1",
        "pages": [
          25,
          30
        ]
      }
    ],
    "intuition": "A strategy must remain optimal in every subgame, including those that would not occur along the predicted path.",
    "assumptions": "The finite bargaining exercises specify who moves, what each player observes, the available offers and a discount factor.",
    "mechanism": "Use backward induction: solve the final decision first, then work backwards through the earlier choices.",
    "worked": "In the ultimatum example, the proposer offers zero and the responder accepts non-negative offers. The explanation makes the acceptance-at-indifference convention explicit.",
    "limits": "The zero-offer prediction depends on the payoff assumptions and tie-breaking rule. It is not a claim about how people always bargain.",
    "formula": "",
    "relatedIds": [
      "alternating",
      "stackelberg"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "nash-bargaining",
    "name": "Nash bargaining solution",
    "family": "Cooperative games",
    "lectureId": "2",
    "references": [
      {
        "lectureId": "2",
        "pages": [
          8,
          12
        ]
      }
    ],
    "intuition": "Allocate the gains from agreement relative to what each party receives if negotiations fail.",
    "assumptions": "Specify feasible utilities and disagreement payoffs d₁ and d₂. The equal split of gains is the symmetric, risk-neutral case.",
    "mechanism": "Maximise the product of utility gains over the individually rational feasible set. The explanation also changes risk aversion and bargaining weights.",
    "worked": "For a unit surplus with linear utilities, the shares are (1 + d₁ − d₂)/2 and (1 − d₁ + d₂)/2. Equal gains do not necessarily mean equal final payoffs.",
    "limits": "This is a cooperative allocation criterion. A negotiation protocol is needed to explain how participants implement it.",
    "formula": "max (u₁ − d₁)(u₂ − d₂)",
    "relatedIds": [
      "alternating",
      "shapley"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "shapley",
    "name": "Shapley value",
    "family": "Cooperative games",
    "lectureId": "2",
    "references": [
      {
        "lectureId": "2",
        "pages": [
          13,
          19
        ]
      }
    ],
    "intuition": "Allocate a coalition’s value by averaging each participant’s marginal contribution across all possible joining orders.",
    "assumptions": "The explanation specifies one principal P and two agents A₁ and A₂. Coalition values are V(P,A₁)=1/2, V(P,A₂)=2/3 and V(P,A₁,A₂)=1; coalitions without P create no value.",
    "mechanism": "For every joining order, calculate the extra value generated when each player arrives. Average those contributions for each player.",
    "worked": "The six joining orders give the allocation (19/36, 7/36, 10/36), always in the order (P, A₁, A₂).",
    "limits": "The allocation depends on the specified coalition values. It is not an observed wage or profit share.",
    "formula": "",
    "relatedIds": [
      "nucleolus",
      "renegotiable"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "nucleolus",
    "name": "Nucleolus allocation",
    "family": "Cooperative games",
    "lectureId": "2",
    "references": [
      {
        "lectureId": "2",
        "pages": [
          20,
          26
        ]
      }
    ],
    "intuition": "The explanation illustrates a different cooperative allocation using the value lost when a participant leaves.",
    "assumptions": "Use the same principal-and-two-agents coalition values as the Shapley example. This note follows that particular construction.",
    "mechanism": "The explanation visualises each player’s departure threat as a pipe, halves the pipe lengths and distributes the total value through the resulting water-filling diagram.",
    "worked": "The worked allocation is (7/12, 1/6, 1/4), in the order (P, A₁, A₂), compared with the Shapley allocation.",
    "limits": "The pipe construction is the illustration for this game, not a general algorithm for all cooperative games.",
    "formula": "",
    "relatedIds": [
      "shapley",
      "non-renegotiable"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "mechanism",
    "name": "Mechanism design",
    "family": "Cooperative games",
    "lectureId": "2",
    "references": [
      {
        "lectureId": "2",
        "pages": [
          27,
          28
        ]
      }
    ],
    "intuition": "Choose rules that give participants an incentive to produce a desired outcome through their own decisions.",
    "assumptions": "Identify the intended allocation, participants’ preferences and the choices allowed by the proposed rules.",
    "mechanism": "The explanation moves from proposing a reasonable division to designing a non-cooperative procedure that can implement it.",
    "worked": "In the divide-and-choose example, one person cuts a pie and the other chooses a piece. The rule changes the cutter’s incentive.",
    "limits": "A rule’s outcome depends on preferences and information. The explanation provides an introduction, not a complete mechanism-design solution for every industry.",
    "formula": "",
    "relatedIds": [
      "renegotiable",
      "non-renegotiable"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "alternating",
    "name": "Alternating-offer bargaining",
    "family": "Bargaining games",
    "lectureId": "3",
    "references": [
      {
        "lectureId": "3",
        "pages": [
          4,
          6
        ]
      }
    ],
    "intuition": "Two parties alternate offers over an indefinite horizon. Waiting reduces the value of agreement, so patience affects the division.",
    "assumptions": "A unit surplus, alternating proposals, discount factors δ₁ and δ₂ between zero and one, and the stationary equilibrium considered in this example.",
    "mechanism": "Each responder compares accepting now with rejecting and making the next offer. Solve both indifference conditions together.",
    "worked": "x is the share offered to player 2; y is the share offered to player 1 on their respective turns. With equal discount factors δ, each responder is offered δ/(1 + δ).",
    "limits": "The baseline abstracts from private information, breakdown risk and alternatives to agreement. These are distinct extensions in the next part of the lecture.",
    "formula": "x = δ₂(1 − δ₁)/(1 − δ₁δ₂); y = δ₁(1 − δ₂)/(1 − δ₁δ₂)",
    "relatedIds": [
      "bargaining-options",
      "nash-bargaining"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "bargaining-options",
    "name": "Breakdown, inside & outside options",
    "family": "Bargaining games",
    "lectureId": "3",
    "references": [
      {
        "lectureId": "3",
        "pages": [
          7,
          18
        ]
      }
    ],
    "intuition": "What happens after interruption, while negotiations continue, and after voluntarily leaving are three different sources of bargaining leverage.",
    "assumptions": "Keep breakdown payoffs, ongoing inside payoffs and exit options separate. Specify the timing of payments and opportunities to leave.",
    "mechanism": "The explanation modifies acceptance conditions for each alternative. An outside option binds only when it is sufficiently attractive relative to continuing.",
    "worked": "The model compares inactive outside options, an option binding for only one player, and the case where both players choose to leave.",
    "limits": "A small outside option need not change the result at all. Do not translate every available alternative into a larger negotiated share.",
    "formula": "",
    "relatedIds": [
      "alternating"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "renegotiable",
    "name": "Renegotiable bargaining protocol",
    "family": "Bargaining games",
    "lectureId": "3",
    "references": [
      {
        "lectureId": "3",
        "pages": [
          20,
          26
        ]
      }
    ],
    "intuition": "A principal negotiates sequentially with agents, but an agent’s departure cancels earlier provisional agreements.",
    "assumptions": "One principal, two agents, specified coalition values and equal division of each bilateral gain relative to disagreement.",
    "mechanism": "Work backwards through the protocol. When an agreement fails, the remaining participants renegotiate the reduced surplus.",
    "worked": "For a = 1/2 and b = 2/3, the final shares are (19/36, 7/36, 10/36): the explanation implements the Shapley allocation in this setting.",
    "limits": "This implementation is limited to the principal-and-agents structure.",
    "formula": "",
    "relatedIds": [
      "shapley",
      "non-renegotiable"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "non-renegotiable",
    "name": "Non-renegotiable bargaining protocol",
    "family": "Bargaining games",
    "lectureId": "3",
    "references": [
      {
        "lectureId": "3",
        "pages": [
          27,
          31
        ]
      }
    ],
    "intuition": "A successful bilateral agreement becomes binding; an agent whose negotiation fails returns to the end of the queue.",
    "assumptions": "Use the principal-and-two-agents structure, coalition values, commitment rules and equal-gains bargaining convention.",
    "mechanism": "Previously promised payments constrain later negotiations. Solve the linked bargaining conditions with those commitments in place.",
    "worked": "With a = 1/2 and b = 2/3, the explanation obtains (7/12, 1/6, 1/4), matching its nucleolus example.",
    "limits": "Do not generalise this particular implementation to arbitrary bargaining networks.",
    "formula": "",
    "relatedIds": [
      "nucleolus",
      "renegotiable"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "monopoly",
    "name": "Monopoly pricing & the Lerner index",
    "family": "Monopoly",
    "lectureId": "4",
    "references": [
      {
        "lectureId": "4",
        "pages": [
          3,
          5
        ]
      }
    ],
    "intuition": "A single seller balances the revenue from additional sales against the price reduction needed to sell more and the extra production cost.",
    "assumptions": "A downward-sloping demand curve, differentiable costs and an interior profit-maximising solution. η denotes the positive magnitude of demand elasticity.",
    "mechanism": "Choose output where marginal revenue equals marginal cost. Rearranging gives the relationship between the proportional mark-up and demand elasticity.",
    "worked": "The explanation shows that η = 2 implies a proportional mark-up of 1/2, so price is twice marginal cost. As demand becomes very elastic, the mark-up approaches zero.",
    "limits": "The formula concerns the specified demand and cost functions. It does not establish that a named company is a monopolist.",
    "formula": "π(q) = q p(q) − c(q); (p − MC)/p = 1/η",
    "relatedIds": [
      "multiproduct",
      "durable",
      "dominant",
      "cournot"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "multiproduct",
    "name": "Multiproduct monopoly",
    "family": "Monopoly",
    "lectureId": "4",
    "references": [
      {
        "lectureId": "4",
        "pages": [
          7,
          16
        ]
      }
    ],
    "intuition": "A firm selling two products takes account of how one product’s price or output affects demand and costs for the other.",
    "assumptions": "Specify whether demand is linked, whether costs are separable, and whether the products are substitutes or complements.",
    "mechanism": "With linked demand, the pricing condition includes the effect on the other product’s profit. With linked costs, each product’s marginal cost can depend on the other’s output.",
    "worked": "The explanation contrasts substitutes with complements, and economies with diseconomies of scope. Joint pricing internalises these cross-product effects.",
    "limits": "The direction of the effect depends on the demand and cost assumptions. A free product alone does not establish the mechanism.",
    "formula": "",
    "relatedIds": [
      "monopoly",
      "tariffs"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "durable",
    "name": "Durable-goods monopoly",
    "family": "Monopoly",
    "lectureId": "4",
    "references": [
      {
        "lectureId": "4",
        "pages": [
          18,
          33
        ]
      }
    ],
    "intuition": "Goods sold today remain available tomorrow, so the seller’s later incentives can undermine an earlier sales promise.",
    "assumptions": "The initial two-period example has perfect durability, zero production costs and implicit rental demand f(Q) = 20 − Q.",
    "mechanism": "Compare a committed sales plan with a plan that remains optimal when the second period arrives. Consumers’ expectations affect the first-period selling price.",
    "worked": "With commitment: q₁ = 10, q₂ = 0, profit = 200. Without commitment, the forward-looking solution is q₁ = 8, q₂ = 6, p₁ = 18, p₂ = 6, profit = 180.",
    "limits": "Flexible durability is an optional extension. Planned obsolescence is not an unconditional prediction; costs and the commitment problem matter.",
    "formula": "",
    "relatedIds": [
      "spe",
      "monopoly"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "dominant",
    "name": "Dominant firm & competitive fringe",
    "family": "Monopoly",
    "lectureId": "4",
    "references": [
      {
        "lectureId": "4",
        "pages": [
          35,
          53
        ]
      }
    ],
    "intuition": "A large firm supplies the demand remaining after smaller price-taking firms respond to the market price.",
    "assumptions": "One price-influencing firm, a competitive fringe and a specified fringe supply schedule. The explanation considers increasing, horizontal and combined fringe supply.",
    "mechanism": "Subtract fringe supply from market demand to obtain residual demand, then derive the dominant firm’s marginal revenue.",
    "worked": "For market demand p = a − bQ and fringe supply p = d + eqf, the interior residual demand is p(qd) = (ea + bd)/(e + b) − beqd/(e + b).",
    "limits": "Residual demand is piecewise. Respect its range and kink points; fringe firms here are price takers, unlike a strategic Stackelberg follower.",
    "formula": "",
    "relatedIds": [
      "monopoly",
      "stackelberg"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "cournot",
    "name": "Cournot competition",
    "family": "Oligopoly",
    "lectureId": "5",
    "references": [
      {
        "lectureId": "5",
        "pages": [
          3,
          12
        ]
      }
    ],
    "intuition": "Firms choose quantities simultaneously, each accounting for how total output affects the market price.",
    "assumptions": "The benchmark has a homogeneous product, inverse demand p = a − bQ, constant marginal costs and no entry unless explicitly introduced.",
    "mechanism": "Derive each firm’s best response to rival output and solve the responses together. The n-firm extension also relates market share to the Lerner index.",
    "worked": "With n identical firms of marginal cost c, each supplies (a − c)/[(n + 1)b]. In the interior equilibrium, the firm’s proportional mark-up is its market share divided by demand elasticity.",
    "limits": "Check non-negative outputs and whether quantity commitments fit the activity. Differentiation or a different timing changes the benchmark.",
    "formula": "qᵢ = (a − c)/[(n + 1)b]; Lᵢ = sᵢ/η",
    "relatedIds": [
      "nash",
      "entry",
      "bertrand",
      "stackelberg"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "entry",
    "name": "Cournot with fixed costs & entry",
    "family": "Oligopoly",
    "lectureId": "5",
    "references": [
      {
        "lectureId": "5",
        "pages": [
          13,
          16
        ]
      }
    ],
    "intuition": "Additional firms lower prices but duplicate fixed costs. The number of firms matters for both consumer and producer surplus.",
    "assumptions": "The explanation uses p = 130 − 2Q and each firm’s total cost C(q) = 50 + 10q in a symmetric Cournot market.",
    "mechanism": "Calculate output and profit for each possible number of firms. Compare consumer surplus, producer surplus and their sum after including fixed costs.",
    "worked": "The explanation obtains qᵢ = 60/(n + 1) and firm profit 7200/(n + 1)² − 50. Use these to explore the trade-off between competition and duplicated overheads.",
    "limits": "A fixed cost is not automatically a sunk cost. The free-entry outcome need not maximise total surplus.",
    "formula": "πᵢ = 7200/(n + 1)² − 50",
    "relatedIds": [
      "cournot"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "bertrand",
    "name": "Bertrand competition",
    "family": "Oligopoly",
    "lectureId": "5",
    "references": [
      {
        "lectureId": "5",
        "pages": [
          17,
          20
        ]
      }
    ],
    "intuition": "Firms set prices for identical goods. A seller can attract demand by slightly undercutting its rival.",
    "assumptions": "The equal-cost benchmark assumes identical products, informed buyers and sufficient capacity to serve demand.",
    "mechanism": "Compare the gain from undercutting with the loss from selling below marginal cost. In the benchmark, prices meet at marginal cost.",
    "worked": "The explanation contrasts price choice with quantity choice: changing the strategic variable produces a different competitive outcome.",
    "limits": "Capacity, product differences and imperfect price information weaken the benchmark. The explanation raises unequal costs as a separate question.",
    "formula": "p₁ = p₂ = MC",
    "relatedIds": [
      "cournot",
      "capacity",
      "tourist-trap"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "capacity",
    "name": "Bertrand with capacity constraints",
    "family": "Oligopoly",
    "lectureId": "5",
    "references": [
      {
        "lectureId": "5",
        "pages": [
          21,
          25
        ]
      }
    ],
    "intuition": "A low-priced firm may be unable to serve everyone, leaving residual demand for a higher-priced rival.",
    "assumptions": "The example has p = 1 − Q, marginal cost 0.2 and capacity 0.4 for each firm; it uses the residual-demand allocation illustrated in the slides.",
    "mechanism": "Check unilateral deviations from the marginal-cost price. A firm can raise its price to serve residual demand, inviting further price changes by its rival.",
    "worked": "From p₁ = p₂ = 0.2, the explanation considers a deviation to p₂ = 0.4 with q₂ = 0.2, followed by undercutting. Its example has no pure-strategy equilibrium.",
    "limits": "This conclusion belongs to the specified example and allocation assumptions. It does not mean all capacity-constrained markets lack equilibrium.",
    "formula": "",
    "relatedIds": [
      "bertrand",
      "nash"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "stackelberg",
    "name": "Stackelberg competition",
    "family": "Oligopoly",
    "lectureId": "5",
    "references": [
      {
        "lectureId": "5",
        "pages": [
          27,
          37
        ]
      }
    ],
    "intuition": "A quantity leader commits first and anticipates the follower’s best response.",
    "assumptions": "The basic model uses p = a − b(q₁ + q₂), constant marginal costs, observable output and a credible first-mover commitment.",
    "mechanism": "Solve the follower’s quantity choice first, substitute that response into the leader’s profit, then optimise the leader’s choice.",
    "worked": "With equal marginal cost c, the leader supplies (a − c)/(2b) and the follower (a − c)/(4b). The explanation extends this to n sequential firms and groups of simultaneous leaders and followers.",
    "limits": "An earlier announcement is not necessarily a credible commitment. The output and welfare comparisons depend on the assumed costs and timing.",
    "formula": "q₁ = (a − c)/(2b); q₂ = (a − c)/(4b)",
    "relatedIds": [
      "spe",
      "cournot",
      "dominant"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "first-degree",
    "name": "First-degree price discrimination",
    "family": "Price discrimination",
    "lectureId": "7",
    "references": [
      {
        "lectureId": "7",
        "pages": [
          4,
          10
        ]
      }
    ],
    "intuition": "A seller charges according to each buyer’s willingness to pay, rather than one uniform price.",
    "assumptions": "Market power, sufficiently detailed information about willingness to pay and an ability to limit resale.",
    "mechanism": "The explanation compares perfect competition, uniform-price monopoly and perfect price discrimination through consumer, producer and total welfare.",
    "worked": "Use the welfare diagram to separate the size of total surplus from who receives it. The explanation uses this comparison to prompt a discussion of fairness and efficiency.",
    "limits": "Perfect information is a demanding benchmark. Price differences may reflect product or cost differences instead.",
    "formula": "",
    "relatedIds": [
      "monopoly",
      "tariffs",
      "third-degree"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "tariffs",
    "name": "Second-degree pricing & two-part tariffs",
    "family": "Price discrimination",
    "lectureId": "7",
    "references": [
      {
        "lectureId": "7",
        "pages": [
          11,
          17
        ]
      }
    ],
    "intuition": "A seller offers a fixed fee and a usage price, or a menu of such tariffs, so consumers choose according to their demand.",
    "assumptions": "Consumers differ in demand; the firm cannot directly identify each group. Include the participation and self-selection constraints.",
    "mechanism": "A single tariff trades off the entry fee and unit price. A menu can separate consumers, provided each group prefers its intended option.",
    "worked": "The buffet has a positive entry fee and zero per-unit charge. Its two-tariff exercise compares a lower fee with higher usage charges against a higher fee with lower usage charges.",
    "limits": "It is not always optimal to set the unit price equal to marginal cost. Check both incentive compatibility and individual rationality.",
    "formula": "T(q) = F + pᵤq",
    "relatedIds": [
      "first-degree",
      "third-degree",
      "mechanism"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "third-degree",
    "name": "Third-degree pricing & screening",
    "family": "Price discrimination",
    "lectureId": "7",
    "references": [
      {
        "lectureId": "7",
        "pages": [
          18,
          23
        ]
      }
    ],
    "intuition": "A seller segments buyers and chooses a price for each group according to the group’s demand.",
    "assumptions": "Market power, separable groups or informative proxies, and restrictions that limit resale. The explanation uses a common constant marginal cost c.",
    "mechanism": "Optimise within each group. The group-specific proportional mark-up is inversely related to the magnitude of its demand elasticity.",
    "worked": "The explanation introduces proxy-based screening and ask whether examples such as business and economy air travel reflect price discrimination or product differences.",
    "limits": "Assess service quality, provision costs and resale before classifying a fare or discount as price discrimination.",
    "formula": "(pᵢ − c)/pᵢ = 1/ηᵢ",
    "relatedIds": [
      "monopoly",
      "tariffs"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "lemons",
    "name": "Market for lemons",
    "family": "Information",
    "lectureId": "8",
    "references": [
      {
        "lectureId": "8",
        "pages": [
          3,
          8
        ]
      }
    ],
    "intuition": "When sellers know quality and buyers cannot distinguish it, buyers base offers on expected quality. Better-quality products may then leave the market.",
    "assumptions": "The explanation uses a distribution of qualities and compares buyer and seller valuations. The direction of the information advantage matters.",
    "mechanism": "An offer based on average quality changes which sellers are willing to trade. Recalculate expected quality among those remaining.",
    "worked": "The explanation first values quality between 1 and 2 equally for buyers and sellers, then asks what changes when buyers value each quality 20% more highly.",
    "limits": "Complete market collapse is not inevitable. Do not apply the seller-quality example mechanically to every form of private information.",
    "formula": "",
    "relatedIds": [
      "signalling",
      "bayesian-games"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "tourist-trap",
    "name": "Tourist-trap model",
    "family": "Information",
    "lectureId": "8",
    "references": [
      {
        "lectureId": "8",
        "pages": [
          10,
          15
        ]
      }
    ],
    "intuition": "Costly price search can give sellers market power even when many firms sell the same product.",
    "assumptions": "Identical products and costs, identical consumer demand, knowledge of the price distribution but not each seller’s price, and a positive visit/search cost.",
    "mechanism": "A small price increase may be cheaper for a customer to accept than another search. Then check whether a large price cut could attract enough searching customers.",
    "worked": "The explanation contrasts a small number of stands, where a cut may be discoverable, with many stands, where a single monopoly-price equilibrium can emerge.",
    "limits": "The monopoly-price outcome is conditional. The explanation asks how demand, search costs and entry affect equilibrium.",
    "formula": "",
    "relatedIds": [
      "bertrand",
      "tourist-native"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "tourist-native",
    "name": "Tourist-and-native model",
    "family": "Information",
    "lectureId": "8",
    "references": [
      {
        "lectureId": "8",
        "pages": [
          16,
          21
        ]
      }
    ],
    "intuition": "Informed and uninformed consumers coexist, allowing low-price and high-price sellers to attract different mixes of customers.",
    "assumptions": "A proportion α of consumers knows all prices; the rest visits sellers at random. A proportion β of firms charges the given low price pₗ rather than pₕ.",
    "mechanism": "Compare a low-price stand’s revenue with a high-price stand’s revenue. In an interior mix, a seller is indifferent between the two.",
    "worked": "The explanation derives β = αpₗ/[(1 − α)(pₕ − pₗ)] and asks how to interpret values outside the interval from zero to one.",
    "limits": "The displayed exercise compares revenues at two given prices. Cost differences and the determination of those prices need further specification.",
    "formula": "β = αpₗ/[(1 − α)(pₕ − pₗ)]",
    "relatedIds": [
      "tourist-trap",
      "bertrand"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "bayesian-games",
    "name": "Games with incomplete information",
    "family": "Information",
    "lectureId": "8",
    "references": [
      {
        "lectureId": "8",
        "pages": [
          22,
          26
        ]
      }
    ],
    "intuition": "A player who does not know the state evaluates payoffs using probabilities; an informed player can choose a strategy for each state.",
    "assumptions": "The explanation has states G and B with probabilities 1/3 and 2/3. Player 2 knows the state; player 1 does not, and both know this information structure.",
    "mechanism": "List complete state-contingent strategies, then weight the state-specific payoffs to construct the expected-payoff game.",
    "worked": "In Scenario 1, player 1 has two actions and player 2 has four contingent strategies. The explanation converts two payoff tables into one two-by-four table.",
    "limits": "Changing who observes whose action changes the game. Keep incomplete information about the state separate from unobserved actions.",
    "formula": "",
    "relatedIds": [
      "nash",
      "signalling"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "signalling",
    "name": "Signalling games & Bayes’ rule",
    "family": "Information",
    "lectureId": "8",
    "references": [
      {
        "lectureId": "8",
        "pages": [
          27,
          30
        ]
      }
    ],
    "intuition": "An uninformed player observes an informed player’s action and updates beliefs about the hidden state.",
    "assumptions": "Specify prior probabilities and the probability of each action in each state. The receiver observes the signal before choosing.",
    "mechanism": "Compare pooling strategies, which use the same action in both states, with separating strategies. Apply Bayes’ rule whenever the observed signal has positive probability.",
    "worked": "With prior Pr(G)=1/3, Pr(h|G)=m and Pr(h|B)=n, the explanation obtains Pr(G|h)=m/(m + 2n).",
    "limits": "An observed action need not reveal the state. Off-path beliefs and a full equilibrium analysis require more than this updating calculation.",
    "formula": "Pr(G|h) = m/(m + 2n)",
    "relatedIds": [
      "bayesian-games",
      "persuasion",
      "lemons"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  },
  {
    "id": "persuasion",
    "name": "Bayesian persuasion",
    "family": "Information",
    "lectureId": "8",
    "references": [
      {
        "lectureId": "8",
        "pages": [
          35,
          47
        ]
      }
    ],
    "intuition": "An information policy changes what a decision-maker learns and therefore how they act, even when they understand the sender’s incentives.",
    "assumptions": "The fictional admissions exercise starts with a 30% qualified share. The receiver rewards correct decisions and the sender wants more acceptances.",
    "mechanism": "Compare no information, full disclosure and a coarser signal. Compute the receiver’s posterior and decision after each recommendation.",
    "worked": "All qualified applicants receive a high signal; an unqualified applicant receives it with probability 3/7. A high signal then implies a 50% posterior, and 60% receive that signal.",
    "limits": "The 60% acceptance result requires acceptance when the receiver is indifferent at a 50% posterior. This is a hypothetical teaching example, not an admissions statistic or policy.",
    "formula": "Pr(qualified | high) = 0.3 / (0.3 + 0.7 × 3/7) = 0.5",
    "relatedIds": [
      "signalling",
      "mechanism"
    ],
    "contentStatus": "Paraphrased from the supplied lectures"
  }
];


// Topic 6 was named by the course owner and verified against the Panopto collection.
// No Lecture 6 PDF was supplied. These are separately sourced background explanations.
lectures.push({id:'6',number:6,title:'Product differentiation',author:'Zhixian Yu',course:'Industrial Economics IV: Games and Strategies',institution:'University of Nottingham Ningbo China',file:null,sourceStatus:'Topic confirmed by the course owner and four Panopto sessions; original lecture PDF unavailable'});
lectures.sort((a,b)=>a.number-b.number);
const differentiationModels=[
 {id:'hotelling',name:'Hotelling model',intuition:'Consumers differ in their preferred location or product. A firm can charge more when switching to its rival involves a greater mismatch.',assumptions:'The fixed-location benchmark places two firms at the ends of a unit line, with uniformly distributed consumers, unit demand, linear transport or mismatch cost t, and equal constant marginal cost c. Market coverage is assumed.',mechanism:'Find the consumer who is indifferent between the two delivered prices. Use that boundary to obtain each firm’s demand and best-response price.',worked:'With fixed end-point locations and a covered market, the symmetric price is p = c + t. This is a pricing benchmark; choosing locations is a separate stage.',limits:'Changing location choices, transport costs, market coverage or product quality changes the result. Physical distance must have a meaningful interpretation in the application.',formula:'x* = 1/2 + (p₂ − p₁)/(2t)',sourceUrl:'https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec5slides.pdf',sourceNote:'Background explanation: MIT OpenCourseWare (Glenn Ellison).'},
 {id:'salop',name:'Salop circular-city model',intuition:'Products or shops are arranged around a circle. Each firm competes most directly with its neighbours, so consumers’ preference distances affect pricing and entry.',assumptions:'A standard symmetric benchmark has uniformly distributed consumers on a unit circle, equally spaced firms, unit demand, linear mismatch cost, common marginal cost and a covered market. Entry costs must be specified when studying the number of firms.',mechanism:'Locate the indifferent consumers between neighbouring firms, calculate the demand captured on each side and derive the firm’s pricing incentives. Free entry additionally compares profit with the fixed entry cost.',worked:'Consider shops spaced around a circular shopping area. Compare a customer’s price plus travel cost at the two nearest shops while keeping the locations fixed.',limits:'A real shopping area need not be circular or evenly spaced. The covered-market benchmark and the original model with an outside good require different checks; neither implies that entry is always socially optimal.',formula:null,sourceUrl:'https://jeromemathis.fr/wp-content/uploads/2020/01/Salop_RAND1979.pdf',sourceNote:'Background explanation: Salop (1979), Monopolistic Competition with Outside Goods.'},
 {id:'lancaster',name:'Lancaster characteristics approach',intuition:'Consumers value the characteristics delivered by goods. Products can therefore compete through different combinations of attributes as well as through price.',assumptions:'Specify the characteristics supplied by each product, how quantities generate those characteristics, consumer preferences and a budget constraint. A characteristics approach alone does not specify firms’ strategic behaviour.',mechanism:'Translate the available products into bundles of characteristics. Compare feasible bundles under the consumer’s budget and identify how a change in attributes or prices changes the preferred choice.',worked:'For a music subscription, explicitly define the attributes being compared, such as catalogue access and audio quality, and the corresponding prices. This is an illustrative setup, not a measured ranking of services.',limits:'The attributes and preferences require evidence. Product differentiation alone does not demonstrate higher profits, and a firm-level pricing equilibrium needs additional assumptions.',formula:null,sourceUrl:'https://www.journals.uchicago.edu/doi/10.1086/259131',sourceNote:'Background explanation: Lancaster (1966), A New Approach to Consumer Theory.'}
];
for(const model of differentiationModels)models.push({...model,family:'Product differentiation',lectureId:'6',relatedIds:differentiationModels.filter(m=>m.id!==model.id).map(m=>m.id),contentStatus:'Separately sourced supplementary explanation'});
