[
  // options
  // t 'text': only outside math  // m 'math': only inside math
  // M 'block math': only inside block math
  {trigger: "eqs", replacement: "\\left\\{\\begin{aligned}\n$0\n\\end{aligned}\\right.", options: "mA"},
  {trigger: "qed", replacement: "\\blacksquare", options: "mA"},
  {trigger: "deg", replacement: "\\degree", options: "mA"},
]
