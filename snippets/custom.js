[
  // options
  // t 'text': only outside math  // m 'math': only inside math
  // M 'block math': only inside block math
  
  //regular
  {trigger: "eqs", replacement: "\\left\\{\\begin{aligned}\n$0\n\\end{aligned}\\right.", options: "mA"},
  {trigger: "qed", replacement: "\\blacksquare", options: "mA"},
  {trigger: "deg", replacement: "\\degree", options: "mA"},

  //chemicals
  {trigger: "cek", replacement: "$\\ce{$0}$", options: "tA"},
  {trigger: "ce", replacement: "\\ce{$0}", options: "mA"},
  {trigger: "revreaction", replacement: "<=>", options: "mA"},
]
