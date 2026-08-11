

  // [number, symbol, name, mass, category, period(row), group(column)]
  const DATA = [
    [1,"H","Hydrogen","1.008","nm",1,1],
    [2,"He","Helium","4.003","ng",1,18],
    [3,"Li","Lithium","6.94","akm",2,1],
    [4,"Be","Beryllium","9.012","akem",2,2],
    [5,"B","Boron","10.81","mtl",2,13],
    [6,"C","Carbon","12.011","nm",2,14],
    [7,"N","Nitrogen","14.007","nm",2,15],
    [8,"O","Oxygen","15.999","nm",2,16],
    [9,"F","Fluorine","18.998","hal",2,17],
    [10,"Ne","Neon","20.180","ng",2,18],
    [11,"Na","Sodium","22.990","akm",3,1],
    [12,"Mg","Magnesium","24.305","akem",3,2],
    [13,"Al","Aluminium","26.982","ptm",3,13],
    [14,"Si","Silicon","28.085","mtl",3,14],
    [15,"P","Phosphorus","30.974","nm",3,15],
    [16,"S","Sulfur","32.06","nm",3,16],
    [17,"Cl","Chlorine","35.45","hal",3,17],
    [18,"Ar","Argon","39.948","ng",3,18],
    [19,"K","Potassium","39.098","akm",4,1],
    [20,"Ca","Calcium","40.078","akem",4,2],
    [21,"Sc","Scandium","44.956","tm",4,3],
    [22,"Ti","Titanium","47.867","tm",4,4],
    [23,"V","Vanadium","50.942","tm",4,5],
    [24,"Cr","Chromium","51.996","tm",4,6],
    [25,"Mn","Manganese","54.938","tm",4,7],
    [26,"Fe","Iron","55.845","tm",4,8],
    [27,"Co","Cobalt","58.933","tm",4,9],
    [28,"Ni","Nickel","58.693","tm",4,10],
    [29,"Cu","Copper","63.546","tm",4,11],
    [30,"Zn","Zinc","65.38","tm",4,12],
    [31,"Ga","Gallium","69.723","ptm",4,13],
    [32,"Ge","Germanium","72.630","mtl",4,14],
    [33,"As","Arsenic","74.922","mtl",4,15],
    [34,"Se","Selenium","78.971","nm",4,16],
    [35,"Br","Bromine","79.904","hal",4,17],
    [36,"Kr","Krypton","83.798","ng",4,18],
    [37,"Rb","Rubidium","85.468","akm",5,1],
    [38,"Sr","Strontium","87.62","akem",5,2],
    [39,"Y","Yttrium","88.906","tm",5,3],
    [40,"Zr","Zirconium","91.224","tm",5,4],
    [41,"Nb","Niobium","92.906","tm",5,5],
    [42,"Mo","Molybdenum","95.95","tm",5,6],
    [43,"Tc","Technetium","98","tm",5,7],
    [44,"Ru","Ruthenium","101.07","tm",5,8],
    [45,"Rh","Rhodium","102.906","tm",5,9],
    [46,"Pd","Palladium","106.42","tm",5,10],
    [47,"Ag","Silver","107.868","tm",5,11],
    [48,"Cd","Cadmium","112.414","tm",5,12],
    [49,"In","Indium","114.818","ptm",5,13],
    [50,"Sn","Tin","118.710","ptm",5,14],
    [51,"Sb","Antimony","121.760","mtl",5,15],
    [52,"Te","Tellurium","127.60","mtl",5,16],
    [53,"I","Iodine","126.904","hal",5,17],
    [54,"Xe","Xenon","131.293","ng",5,18],
    [55,"Cs","Caesium","132.905","akm",6,1],
    [56,"Ba","Barium","137.327","akem",6,2],
    [57,"La","Lanthanum","138.905","lan",9,3],
    [58,"Ce","Cerium","140.116","lan",9,4],
    [59,"Pr","Praseodymium","140.908","lan",9,5],
    [60,"Nd","Neodymium","144.242","lan",9,6],
    [61,"Pm","Promethium","145","lan",9,7],
    [62,"Sm","Samarium","150.36","lan",9,8],
    [63,"Eu","Europium","151.964","lan",9,9],
    [64,"Gd","Gadolinium","157.25","lan",9,10],
    [65,"Tb","Terbium","158.925","lan",9,11],
    [66,"Dy","Dysprosium","162.500","lan",9,12],
    [67,"Ho","Holmium","164.930","lan",9,13],
    [68,"Er","Erbium","167.259","lan",9,14],
    [69,"Tm","Thulium","168.934","lan",9,15],
    [70,"Yb","Ytterbium","173.045","lan",9,16],
    [71,"Lu","Lutetium","174.967","lan",9,17],
    [72,"Hf","Hafnium","178.49","tm",6,4],
    [73,"Ta","Tantalum","180.948","tm",6,5],
    [74,"W","Tungsten","183.84","tm",6,6],
    [75,"Re","Rhenium","186.207","tm",6,7],
    [76,"Os","Osmium","190.23","tm",6,8],
    [77,"Ir","Iridium","192.217","tm",6,9],
    [78,"Pt","Platinum","195.084","tm",6,10],
    [79,"Au","Gold","196.967","tm",6,11],
    [80,"Hg","Mercury","200.592","tm",6,12],
    [81,"Tl","Thallium","204.38","ptm",6,13],
    [82,"Pb","Lead","207.2","ptm",6,14],
    [83,"Bi","Bismuth","208.980","ptm",6,15],
    [84,"Po","Polonium","209","ptm",6,16],
    [85,"At","Astatine","210","hal",6,17],
    [86,"Rn","Radon","222","ng",6,18],
    [87,"Fr","Francium","223","akm",7,1],
    [88,"Ra","Radium","226","akem",7,2],
    [89,"Ac","Actinium","227","act",10,3],
    [90,"Th","Thorium","232.038","act",10,4],
    [91,"Pa","Protactinium","231.036","act",10,5],
    [92,"U","Uranium","238.029","act",10,6],
    [93,"Np","Neptunium","237","act",10,7],
    [94,"Pu","Plutonium","244","act",10,8],
    [95,"Am","Americium","243","act",10,9],
    [96,"Cm","Curium","247","act",10,10],
    [97,"Bk","Berkelium","247","act",10,11],
    [98,"Cf","Californium","251","act",10,12],
    [99,"Es","Einsteinium","252","act",10,13],
    [100,"Fm","Fermium","257","act",10,14],
    [101,"Md","Mendelevium","258","act",10,15],
    [102,"No","Nobelium","259","act",10,16],
    [103,"Lr","Lawrencium","262","act",10,17],
    [104,"Rf","Rutherfordium","267","tm",7,4],
    [105,"Db","Dubnium","268","tm",7,5],
    [106,"Sg","Seaborgium","269","tm",7,6],
    [107,"Bh","Bohrium","270","tm",7,7],
    [108,"Hs","Hassium","269","tm",7,8],
    [109,"Mt","Meitnerium","278","unk",7,9],
    [110,"Ds","Darmstadtium","281","unk",7,10],
    [111,"Rg","Roentgenium","282","unk",7,11],
    [112,"Cn","Copernicium","285","tm",7,12],
    [113,"Nh","Nihonium","286","unk",7,13],
    [114,"Fl","Flerovium","289","ptm",7,14],
    [115,"Mc","Moscovium","290","unk",7,15],
    [116,"Lv","Livermorium","293","unk",7,16],
    [117,"Ts","Tennessine","294","unk",7,17],
    [118,"Og","Oganesson","294","ng",7,18],
  ];

  const CATS = {
    akm:{label:"Alkali metal", color:"var(--c-akm)"},
    akem:{label:"Alkaline earth metal", color:"var(--c-akem)"},
    tm:{label:"Transition metal", color:"var(--c-tm)"},
    ptm:{label:"Post-transition metal", color:"var(--c-ptm)"},
    mtl:{label:"Metalloid", color:"var(--c-mtl)"},
    nm:{label:"Reactive nonmetal", color:"var(--c-nm)"},
    hal:{label:"Halogen", color:"var(--c-hal)"},
    ng:{label:"Noble gas", color:"var(--c-ng)"},
    lan:{label:"Lanthanide", color:"var(--c-lan)"},
    act:{label:"Actinide", color:"var(--c-act)"},
    unk:{label:"Unknown properties", color:"var(--c-unk)"},
  };

  const GAS = new Set(["H","He","N","O","F","Ne","Cl","Ar","Kr","Xe","Rn","Og"]);
  const LIQUID = new Set(["Br","Hg"]);
  function phaseOf(sym){
    if(GAS.has(sym)) return "Gas";
    if(LIQUID.has(sym)) return "Liquid (room temp)";
    return "Solid";
  }

  // Simplified sequential Bohr shell fill — capacities sum to 118.
  const SHELL_CAPS = [2,8,18,32,32,18,8];
  function shellsFor(z){
    let remaining = z;
    const shells = [];
    for(const cap of SHELL_CAPS){
      if(remaining <= 0) break;
      const fill = Math.min(cap, remaining);
      shells.push(fill);
      remaining -= fill;
    }
    return shells;
  }

  const grid = document.getElementById("grid");
  const legend = document.getElementById("legend");
  const search = document.getElementById("search");
  const panel = document.getElementById("panel");
  const overlay = document.getElementById("overlay");
  const panelBody = document.getElementById("panelBody");
  const closeBtn = document.getElementById("closeBtn");

  // Build legend
  let activeCatFilter = null;
  Object.entries(CATS).forEach(([key, meta])=>{
    const btn = document.createElement("button");
    btn.innerHTML = `<span class="swatch" style="background:${meta.color}"></span>${meta.label}`;
    btn.dataset.cat = key;
    btn.addEventListener("click", ()=>{
      activeCatFilter = activeCatFilter === key ? null : key;
      applyFilters();
      renderLegendState();
    });
    legend.appendChild(btn);
  });
  function renderLegendState(){
    [...legend.children].forEach(btn=>{
      btn.classList.toggle("dim", activeCatFilter !== null && btn.dataset.cat !== activeCatFilter);
    });
  }

  // Placeholder cells for the lanthanide/actinide slot in the main body
  const placeholders = [
    {period:6, group:3, label:"57–71"},
    {period:7, group:3, label:"89–103"},
  ];

  // Build grid
  const cellEls = [];
  DATA.forEach(entry=>{
    const [num, sym, name, mass, cat, period, group] = entry;
    const cell = document.createElement("button");
    cell.className = "cell";
    cell.style.setProperty("--cat-color", CATS[cat].color);
    cell.style.gridColumn = group;
    cell.style.gridRow = period;
    cell.innerHTML = `
      <span class="num">${num}</span>
      <span class="sym">${sym}</span>
      <span class="mass">${mass}</span>
    `;
    cell.dataset.name = name.toLowerCase();
    cell.dataset.sym = sym.toLowerCase();
    cell.dataset.cat = cat;
    cell.addEventListener("click", ()=> openPanel(entry));
    grid.appendChild(cell);
    cellEls.push(cell);
  });

  placeholders.forEach(p=>{
    const ph = document.createElement("div");
    ph.className = "placeholder";
    ph.style.gridColumn = p.group;
    ph.style.gridRow = p.period;
    ph.textContent = p.label;
    grid.appendChild(ph);
  });

  const spacer = document.createElement("div");
  spacer.className = "spacer-row";
  spacer.style.gridRow = 8;
  grid.appendChild(spacer);

  function applyFilters(){
    const q = search.value.trim().toLowerCase();
    cellEls.forEach(cell=>{
      const matchesSearch = !q || cell.dataset.name.includes(q) || cell.dataset.sym.includes(q);
      const matchesCat = !activeCatFilter || cell.dataset.cat === activeCatFilter;
      const isDim = !(matchesSearch && matchesCat);
      cell.classList.toggle("dim", isDim);
      cell.classList.toggle("match", q && matchesSearch && matchesCat);
    });
  }
  search.addEventListener("input", applyFilters);

  function buildShellSVG(shells){
    const cx = 140, cy = 140;
    const baseR = 22;
    const step = 18;
    let svg = `<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<circle cx="${cx}" cy="${cy}" r="4" fill="var(--ink)"></circle>`;
    shells.forEach((count, i)=>{
      const r = baseR + i*step;
      svg += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--ink-soft)" stroke-width="1" stroke-dasharray="2 3"></circle>`;
      for(let e=0; e<count; e++){
        const angle = (2*Math.PI/count) * e - Math.PI/2;
        const ex = cx + r*Math.cos(angle);
        const ey = cy + r*Math.sin(angle);
        svg += `<circle cx="${ex.toFixed(1)}" cy="${ey.toFixed(1)}" r="3.4" fill="var(--accent)"></circle>`;
      }
    });
    svg += `</svg>`;
    return svg;
  }

  function openPanel(entry){
    const [num, sym, name, mass, cat, period, group] = entry;
    const shells = shellsFor(num);
    const catMeta = CATS[cat];
    panel.style.setProperty("--cat-color", catMeta.color);
    panelBody.innerHTML = `
      <div class="panel-head">
        <div class="panel-symbol">${sym}</div>
        <div class="panel-titles">
          <div class="num">Element ${num}</div>
          <h2>${name}</h2>
          <div class="cat">${catMeta.label}</div>
        </div>
      </div>
      <div class="stat-grid">
        <div class="stat"><div class="label">Atomic mass</div><div class="value">${mass} u</div></div>
        <div class="stat"><div class="label">Phase</div><div class="value">${phaseOf(sym)}</div></div>
        <div class="stat"><div class="label">Period</div><div class="value">${period <= 7 ? period : (period === 9 ? "6 (f-block)" : "7 (f-block)")}</div></div>
        <div class="stat"><div class="label">Group</div><div class="value">${group <= 18 && period <= 7 ? group : "—"}</div></div>
      </div>
      <div class="shell-wrap">
        ${buildShellSVG(shells)}
        <div class="shell-config">Shells: ${shells.join(" · ")}</div>
      </div>
    `;
    panel.classList.add("open");
    panel.setAttribute("aria-hidden","false");
    overlay.classList.add("open");
  }

  function closePanel(){
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden","true");
    overlay.classList.remove("open");
  }
  closeBtn.addEventListener("click", closePanel);
  overlay.addEventListener("click", closePanel);
  document.addEventListener("keydown", e=>{
    if(e.key === "Escape") closePanel();
  });

