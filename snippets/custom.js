[
  // options
  // t 'text': only outside math  
  // m 'math': only inside math
  // M 'block math': only inside block math
  
  //regular
  {trigger: "eqs", replacement: "\\left\\{\\begin{aligned}\n$0\n\\end{aligned}\\right.", options: "mA"},
  {trigger: "qed", replacement: "\\blacksquare", options: "mA"},
  {trigger: "boxed", replacement: "\\boxed{$0}", options: "mA"},
  {trigger: "\\implies tw", replacement: "Longleftrightarrow", options: "mA"},

  {trigger: "or", replacement: "\\cup", options: "mA"},

  //trig 
  {trigger: "angle", replacement: "\\angle {$0}", options: "mA"},
  {trigger: "deg", replacement: "\\degree", options: "mA"},


  //chemicals
  {trigger: "cek", replacement: "$\\ce{$0}$", options: "tA"},
  {trigger: "revreaction", replacement: "<=>", options: "mA"},

  //inequality
  {trigger: "lt", replacement: "\\lt", options: "mA"},
  {trigger: "gt", replacement: "\\gt", options: "mA"},
  {trigger: "le", replacement: "\\le", options: "mA"},
  {trigger: "ge", replacement: "\\ge", options: "mA"},

  {trigger: "\\ltq", replacement: "\\stackrel{?}{\\lt}", options: "mA"},
  {trigger: "\\gtq", replacement: "\\stackrel{?}{\\gt}", options: "mA"},
  {trigger: "\\leq", replacement: "\\stackrel{?}{\\le}", options: "mA"},
  {trigger: "\\geq", replacement: "\\stackrel{?}{\\ge}", options: "mA"},
 // {trigger: "gt", replacement: "\\gt", options: "mA"},
  // {trigger: "le", replacement: "\\le", options: "mA"},
  // {trigger: "ge", replacement: "\\ge", options: "mA"},

]
