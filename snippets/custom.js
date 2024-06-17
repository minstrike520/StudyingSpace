[
  // options
  // t 'text': only outside math  
  // m 'math': only inside math
  // M 'block math': only inside block math
  
  //regular
  {trigger: "eqs", replacement: "\\left\\{\\begin{aligned}\n$0\n\\end{aligned}\\right.", options: "mA"},
  {trigger: "qed", replacement: "\\blacksquare", options: "mA"},
  {trigger: "boxed", replacement: "\\boxed{$0}", options: "mA"},

  {trigger: "in", replacement: "\\in", options: "mA"},
  {trigger: "or", replacement: "\\cup", options: "mA"},

  //trig 
  {trigger: "angle", replacement: "\\angle {$0}", options: "mA"},
  {trigger: "deg", replacement: "\\degree", options: "mA"},


  //chemicals
  {trigger: "cek", replacement: "$\\ce{$0}$", options: "tA"},
  {trigger: "revreaction", replacement: "<=>", options: "mA"},
]
