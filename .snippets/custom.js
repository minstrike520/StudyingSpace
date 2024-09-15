[
  // options
  // t 'text': only outside math  
  // m 'math': only inside math
  // M 'block math': only inside block math
  //
  //temp
  {trigger: "WP", replacement: "---\npage-type: Waypoint\n---\n\%\% Waypoint \%\%", options: "tA"},
  {trigger: "REAP", replacement: "---\npage-type: reaction\ntags:\n  - review_物/反應\n---\n", options: "tA"},
  {trigger: "REAM", replacement: "---\npage-type: reaction\ntags:\n  - review_數/反應\n---\n", options: "tA"},
  {trigger: "REAC", replacement: "---\npage-type: reaction\ntags:\n  - review_化/反應\n---\n", options: "tA"},

  //regular
  {trigger: "eqs", replacement: "\\left\\{\\begin{aligned}\n$0\n\\end{aligned}\\right.", options: "mA"},
  {trigger: "qed", replacement: "\\blacksquare", options: "mA"},
  {trigger: "boxed", replacement: "\\boxed{\\ $0\\ }$1", options: "mA"},
  {trigger: "\\implies tw", replacement: "\\Longleftrightarrow", options: "mA"},

  {trigger: "triangle", replacement: "\\triangle ", options: "mA"},
  {trigger: "prllg", replacement: "▱", options: "mA"},
  {trigger: "aa", replacement: "å", options: "mA"},
  {trigger: "AA", replacement: "Å", options: "mA"},
  {trigger: "not", replacement: "\\lnot", options: "mA"},

  // intervals
  {trigger: "ocin", replacement: "($0, $1]", options: "mA"},
  {trigger: "coin", replacement: "[$0, $1)", options: "mA"},
  {trigger: "ccin", replacement: "[$0, $1]", options: "mA"},
  {trigger: "ooin", replacement: "($0, $1)", options: "mA"},
  
  //trig 
  {trigger: "angle", replacement: "\\angle {$0}$1", options: "mA"},
  {trigger: "deg", replacement: "\\degree", options: "mA"},
  {trigger: "cancel", replacement:"\\cancel{$0}$1", options: "mA"},
  {trigger: "underset", replacement: "\\underset{$1}{$0}$2", options: "mA"},
  {trigger: "underbracket", replacement: "\\underbracket{$1}{$0}$2", options: "mA"},
  {trigger: "overline", replacement: "\\overline{$0}$1", options: "mA"},
  {trigger: "overlr", replacement: "\\overleftrightarrow{$0}$1", options: "mA"},
  {trigger: "barr", replacement: "$\\overline{$0}$ $1", options: "tA"},


  //chemicals
  {trigger: "cek", replacement: "$\\ce{$0}$", options: "tA"},
  {trigger: "revreaction", replacement: "<=>", options: "mA"},
  {trigger: "phring", replacement: "⌬", options: "mA"},

  //inequality
  {trigger: "<?", replacement: "\\stackrel{?}{<}", options: "mA"},
  {trigger: ">?", replacement: "\\stackrel{?}{>}", options: "mA"},
  {trigger: "=?", replacement: "\\stackrel{?}{=}", options: "mA"},
  {trigger: "\\le?", replacement: "\\stackrel{?}{\\le}", options: "mA"},
  {trigger: "\\ge?", replacement: "\\stackrel{?}{\\ge}", options: "mA"},
 // {trigger: "gt", replacement: "\\gt", options: "mA"},
  // {trigger: "le", replacement: "\\le", options: "mA"},
  // {trigger: "ge", replacement: "\\ge", options: "mA"},
  


]
