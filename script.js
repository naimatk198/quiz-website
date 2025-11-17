// ================================
// BEC Quiz — JS
// ================================

// Full bank of 150 questions (question, options [a,b,c,d], correct index 0-3)
const QUESTION_BANK = [
  { q: "Water covers approximately what percentage of the Earth's crust?", opts:["25%","50%","75%","90%"], a:2 },
  { q: "Which form is water capable of existing in under natural Earth conditions?", opts:["Gas only","Liquid only","Solid only","Gas, liquid, and solid"], a:3 },
  { q: "Hard water mainly contains dissolved salts of:", opts:["Na⁺ and K⁺","Ca²⁺ and Mg²⁺","Cl⁻ and Br⁻","Fe³⁺ and Al³⁺"], a:1 },
  { q: "Water is colorless and:", opts:["Fruity","Odorless","Alkaline","Acidic"], a:1 },
  { q: "The density of water at room temperature is:", opts:["1 g/cm³","0.5 g/cm³","2 g/cm³","5 g/cm³"], a:0 },
  { q: "Bond angle in a water molecule is:", opts:["90°","104.5°","120°","180°"], a:1 },
  { q: "Which impurity causes diseases like cholera and typhoid?", opts:["Suspended impurities","Biological impurities","Dissolved impurities","Chemical impurities"], a:1 },
  { q: "Suspended impurities may include:", opts:["Calcium bicarbonate","Leaves and twigs","Dissolved gases","Ammonia"], a:1 },
  { q: "Colloidal impurities include:", opts:["Sodium chloride","Calcium carbonate","Iron hydroxide","Oxygen gas"], a:2 },
  { q: "Dissolved impurities include:", opts:["Viruses","Sand","Dissolved gases and salts","Branches"], a:2 },
  { q: "TDS stands for:", opts:["Total Dissolved Substances","Total Dissolved Solids","Total Dry Suspensions","Total Density of Solids"], a:1 },
  { q: "Ideal TDS value of drinking water is:", opts:["0–10 mg/L","25–250 mg/L","500–1000 mg/L","20000 mg/L"], a:1 },
  { q: "Seawater TDS level is around:", opts:["500 mg/L","2000 mg/L","35000 mg/L","10 mg/L"], a:2 },
  { q: "Dissolved oxygen is measured in:", opts:["atm","ppm","kg/m³","% salinity"], a:1 },
  { q: "DO helps in survival of:", opts:["Metals","Aquatic organisms","Rocks","Soil minerals"], a:1 },
  { q: "COD stands for:", opts:["Chemical Oxygen Demand","Carbon Oxygen Density","Critical Oxygen Deficiency","Calcium Oxygen Demand"], a:0 },
  { q: "pH range for neutral water is:", opts:["0","7","12","14"], a:1 },
  { q: "Hard water is caused by salts of:", opts:["Ca²⁺ and Mg²⁺","Na⁺ and K⁺","Cl⁻ and Br⁻","SO₄²⁻ and NO₃⁻"], a:0 },
  { q: "Hard water does not form:", opts:["Scum","Soap lather","Salts","Precipitates"], a:1 },
  { q: "Hardness due to bicarbonates is called:", opts:["Permanent hardness","Temporary hardness","Organic hardness","Chemical hardness"], a:1 },
  { q: "Temporary hardness is removed by:", opts:["Boiling","Freezing","Burning","Dissolving sugar"], a:0 },
  { q: "Permanent hardness is caused by:", opts:["Ca(HCO₃)₂ only","CaSO₄, MgCl₂ etc.","Sand","Oil"], a:1 },
  { q: "Unit ppm stands for:", opts:["Parts per millimeter","Parts per million","Per person measure","Per metal mass"], a:1 },
  { q: "Degree Clarke expresses hardness per:", opts:["1 part of water","70000 parts water","10⁶ parts","105 parts"], a:1 },
  { q: "1 ppm is equal to:", opts:["10 mg/L","1 mg/L","100 mg/L","50 mg/L"], a:1 },
  { q: "EDTA is used in hardness determination because it forms:", opts:["Insoluble salt","Stable complexes","Gas","Precipitate"], a:1 },
  { q: "Indicator used in EDTA titration is:", opts:["Phenolphthalein","Methyl orange","Eriochrome Black-T","Litmus"], a:2 },
  { q: "Buffer pH in EDTA titration is maintained at:", opts:["4","7","10","14"], a:2 },
  { q: "Color change at EDTA titration endpoint:", opts:["Blue to red","Wine-red to blue","Green to yellow","Yellow to pink"], a:1 },
  { q: "CaCO₃ equivalent is used because it:", opts:["Is very soluble","Has molecular weight of 100","Is acidic","Is a gas"], a:1 },
  { q: "Alkalinity is due to presence of:", opts:["OH⁻, CO₃²⁻, HCO₃⁻","Na⁺ only","H⁺ ions","Silica"], a:0 },
  { q: "Phenolphthalein alkalinity detects:", opts:["OH⁻ and CO₃²⁻","HCO₃⁻ only","Sulphates","Iron"], a:0 },
  { q: "Methyl orange alkalinity detects:", opts:["CO₃²⁻ fully","All alkaline ions","OH⁻ only","HCO₃⁻ only"], a:3 },
  { q: "Boiler corrosion mainly results from:", opts:["Soap formation","Dissolved salts","Scale removal","Hardness reduction"], a:1 },
  { q: "Sludge is:", opts:["Hard and adherent","Soft and slimy","Good heat conductor","Metallic"], a:1 },
  { q: "Scale is harmful because it:", opts:["Improves heating","Reduces fuel consumption","Wastes fuel and overheating","Makes water pure"], a:2 },
  { q: "Boiler explosion can occur due to:", opts:["Uniform expansion","No scale formation","Uneven heating due to scale","Reduction of salts"], a:2 },
  { q: "Priming is formation of:", opts:["Wet steam","Dry steam","Sludge","Acids"], a:0 },
  { q: "Foaming is caused by:", opts:["Silica","Oil and alkalies","Sodium chloride","Sand"], a:1 },
  { q: "Caustic embrittlement is caused by:", opts:["CaSO₄","NaOH","HCl","SO₂ gas"], a:1 },
  { q: "Sodium carbonate in boiler water forms:", opts:["NaOH","H₂SO₄","CO₂ + H₂O","HCl"], a:0 },
  { q: "Preventive measure for caustic embrittlement includes:", opts:["Adding silica","Keeping pH 8–9","Adding oil","Increasing alkalinity"], a:1 },
  { q: "Zeolite formula includes:", opts:["Na₂O.Al₂O₃.SiO₂.6H₂O","CaCO₃","MgSO₄","NaCl"], a:0 },
  { q: "Zeolite removes:", opts:["Only anions","Only cations","Both cations and anions","Gases"], a:1 },
  { q: "Regeneration of zeolite uses:", opts:["HCl","NaCl","MgSO₄","NaOH"], a:1 },
  { q: "Ion exchange method removes:", opts:["Only Ca²⁺","Both cations and anions","Only silica","Only suspended matter"], a:1 },
  { q: "Cation exchange resin releases:", opts:["H⁺ ions","Na⁺","OH⁻ ions","HCO₃⁻ ions"], a:0 },
  { q: "Anion exchanger releases:", opts:["H⁺ ions","OH⁻ ions","Ca²⁺","Mg²⁺"], a:1 },
  { q: "Ultrafiltration removes:", opts:["Only gases","Dissolved solids","Suspended particles and microbes","Only hardness"], a:2 },
  { q: "Ultrafiltration membrane pore size:", opts:["1 cm","1 mm","0.1–0.01 microns","10 microns"], a:2 },
  { q: "Main purpose of UF:", opts:["Remove dissolved salts fully","Remove turbidity-causing particles","Add minerals","Only soften water"], a:1 },
  { q: "Sustainability means fulfilling needs of:", opts:["Only present","Only future","Present without harming future","Only industries"], a:2 },
  { q: "Pillars of sustainability include:", opts:["Economic only","Economic, social, environmental","Industrial only","Geological only"], a:1 },
  { q: "Environmental pollution refers to unwanted change in:", opts:["Water only","Air, water, soil, noise","Metals only","Space only"], a:1 },
  { q: "Pollutants are:", opts:["Useful substances","Any harmful substance","Medicines","Vitamins"], a:1 },
  { q: "Air pollution may occur due to:", opts:["Pure oxygen","Harmful gases","Clean air","Minerals"], a:1 },
  { q: "Water pollution makes water:", opts:["More potable","Unsuitable for use","Cleaner","Hard"], a:1 },
  { q: "Noise pollution is caused by:", opts:["Slow breeze","Excessive sound","Purified air","Rain"], a:1 },
  { q: "Land pollution mainly due to:", opts:["Proper waste disposal","Contaminants and waste mismanagement","Photosynthesis","Soil conservation"], a:1 },
  { q: "Surface water pollution is seen in:", opts:["Rivers and lakes","Atmosphere","Buildings","Noise-free zones"], a:0 },
  { q: "Dissolved CO₂ reacts with CaCO₃ to form:", opts:["CaCl₂","Ca(HCO₃)₂","CaSO₄","CaO"], a:1 },
  { q: "Very soft water hardness level is:", opts:["0–25 ppm","200–250 ppm","Above 250 ppm","500 ppm"], a:0 },
  { q: "Hard water affects:", opts:["Soap efficiency","Plant growth only","Noise levels","Temperature of air"], a:0 },
  { q: "Dissolved oxygen decreases due to runoff of:", opts:["Soil","Fertilizers and manure","Oxygen cylinders","Sand"], a:1 },
  { q: "COD is measured in:", opts:["mg/L","kg","liters only","mm"], a:0 },
  { q: "Acid used in COD test:", opts:["HNO₃","K₂Cr₂O₇ (acidified)","H₂O","NaCl"], a:1 },
  { q: "pH less than 7 indicates:", opts:["Neutral","Acidic","Basic","Hard"], a:1 },
  { q: "pH greater than 7 indicates:", opts:["Acidic","Neutral","Basic","None"], a:2 },
  { q: "Boiler troubles include:", opts:["Lower efficiency","Corrosion","Scale","All the above"], a:3 },
  { q: "Dissolution of MgCl₂ in boilers produces:", opts:["NaOH","Mg(OH)₂ + HCl","CaO","H₂ gas"], a:1 },
  { q: "Scale mainly contains:", opts:["CaSO₄ and CaSiO₃","Pure water","Chlorides only","Sand"], a:0 },
  { q: "Sludge forms at:", opts:["Hot regions of boiler","Cooler regions","External wall","Air space"], a:1 },
  { q: "Antifoaming agent:", opts:["Castor oil","NaCl","HCl","MgCl₂"], a:0 },
  { q: "Zeolite process produces water with hardness:", opts:["0 ppm","15 ppm","150 ppm","250 ppm"], a:1 },
  { q: "Zeolite bed gets damaged by:", opts:["Distilled water","Mineral acids","Heat","Soap"], a:1 },
  { q: "Cation exchanger example:", opts:["RH₂","R’(OH)₂","NaCl","CaCO₃"], a:0 },
  { q: "Anion exchanger example:", opts:["RH₂","R’(OH)₂","Zn²⁺","Ca²⁺"], a:1 },
  { q: "UF requires:", opts:["High chemicals","Membrane","Coal","Strong acids"], a:1 },
  { q: "UF strongly removes:", opts:["Heavy hardness","Viruses and bacteria","Pure oxygen","Silica only"], a:1 },
  { q: "Three pillars of sustainability maintain balance between:", opts:["Nature, money, and people","Sports and culture only","Metals and rocks","Noise and energy"], a:0 },
  { q: "Air pollution prevention includes:", opts:["Use more crackers","Using natural gas","Remove trees","Use diesel more"], a:1 },
  { q: "Water pollution control:", opts:["Reduce plastic","No wastewater treatment","Use more fertilizers","Encourage sewage runoff"], a:0 },
  { q: "Protective gear in noisy areas helps reduce:", opts:["Water hardness","Noise pollution","Soil erosion","Air purity"], a:1 },
  { q: "Land pollution sustainable practice:", opts:["Dump waste anywhere","Proper waste disposal","Use excessive drilling","Overuse pesticides"], a:1 },
  { q: "COD indicates ______ matter in water.", opts:["Organic","Inorganic","Radioactive","Metallic"], a:0 },
  { q: "DO decreases with increase in:", opts:["Purity","Temperature","Cold water","Snow"], a:1 },
  { q: "UF is placed before:", opts:["EDTA titration","Reverse osmosis","Photosynthesis","Combustion"], a:1 },
  { q: "Rhombic sulfur formation occurs due to:", opts:["FeS₂ reaction","Silica removal","COD test","Corrosion"], a:0 },
  { q: "Degasifier removes:", opts:["CO₂ and O₂","Calcium","Sodium","Magnesium"], a:0 },
  { q: "Caustic embrittlement mainly affects:", opts:["Boiler joints","Water color","pH measurement","UF membranes"], a:0 },
  { q: "M-EBT complex color:", opts:["Blue","Wine-red","Pink","Yellow"], a:1 },
  { q: "UF requires:", opts:["Electricity only","Hydrostatic pressure","Solar heater","Radiation"], a:1 },
  { q: "High-pressure boilers require hardness:", opts:["0–10 ppm","150–200 ppm","Above 250 ppm","No limit"], a:0 },
  { q: "Drinking water hardness recommended:", opts:["150–200 ppm","0–10 ppm","250–300 ppm","Above 500 ppm"], a:0 },
  { q: "Textile industry hardness preferred:", opts:["0–50 ppm","100–200 ppm","0–10 ppm","200–250 ppm"], a:1 },
  { q: "EDTA forms a complex with:", opts:["Metals","Plastics","Glass","Oils"], a:0 },
  { q: "Presence of Silica forms scale of:", opts:["CaSiO₃","CaCO₃","MgSO₄","NaOH"], a:0 },
  { q: "Lather formation with soap is:", opts:["Easy in soft water","Easy in hard water","Same for all water","No relation"], a:0 },
  { q: "IF P = 0 in alkalinity test, presence of:", opts:["Only OH⁻","Only HCO₃⁻","No alkaline ions","Only CO₃²⁻"], a:0 },
  { q: "Sustainability ensures:", opts:["Unlimited resource use","Balance of resources","Overuse of fertilizers","Increased pollution"], a:1 },
  { q: "Water used in sugar industry should be:", opts:["Very hard","0–50 ppm","300–500 ppm","No restriction"], a:1 },
  { q: "DO expression mg/L equals:", opts:["ppm","ppb","mg/g","g/L"], a:0 },
  { q: "Scale removal operation is called:", opts:["Blow-down","Boiling","Charging","Cooling"], a:0 },
  { q: "Main pollutant in boiler corrosion:", opts:["O₂ and CO₂","CaCO₃","Soap","NaCl"], a:0 },
  { q: "UF removes arsenic by:", opts:["10–20%","90–95%","0%","1–2%"], a:1 },
  { q: "Sustainability in industries concerns:", opts:["Air, water, land, noise","Only plastics","Only metals","None"], a:0 },
  { q: "COD test uses:", opts:["Acids and oxidants","Sugars","Oils","Sand"], a:0 },
  { q: "Sharp endpoint in EDTA titration due to complex:", opts:["Colorless","Blue","Yellow","Red"], a:1 },
  { q: "Na₂SO₄ prevents:", opts:["Scale","Caustic embrittlement","Lather","Boiling"], a:1 },
  { q: "Hardness after boiling gives:", opts:["Non-carbonate hardness","Total hardness","Carbonate hardness","No hardness"], a:2 },
  { q: "Carbonate hardness is:", opts:["Total − non-carbonate","Only boiling sample","Only EDTA","Only temporary removed"], a:0 },
  { q: "NaOH in boiler leads to formation of:", opts:["Sodium ferrate","Sodium chloride","Silica","Calcium metal"], a:0 },
  { q: "Water used as:", opts:["Coolant","Solvent","Industrial use","All of these"], a:3 },
  { q: "Colloidal impurities include:", opts:["Iron hydroxide","CO₂ gas","NaCl salt","Clay only"], a:0 },
  { q: "Pollutant causes:", opts:["No harm","Discomfort or damage","Medicinal effect","Comfort"], a:1 },
  { q: "Bicarbonates removed by:", opts:["Cooling","Boiling","Ion exchange only","Freezing"], a:1 },
  { q: "Oven drying removes:", opts:["Suspended solids","Dissolved solids","Hardness","Oxygen"], a:0 },
  { q: "TDS of lakes generally:", opts:["50–250 mg/L","500–1000 mg/L","Above 20000 mg/L","Below 1 mg/L"], a:0 },
  { q: "CaSO₄ forms:", opts:["Silica","Hard scale","Gas","Soft sludge"], a:1 },
  { q: "Scale types include:", opts:["Carbonates","Sulphates","Silicates","All"], a:3 },
  { q: "Zeolite process advantage:", opts:["Quick and clean","Very large space required","Produces corrosive water","No regeneration possible"], a:0 },
  { q: "UF is alternative to:", opts:["Sedimentation","RO pretreatment","pH indicator","Combustion chambers"], a:1 },
  { q: "Noise-absorbing buildings help reduce:", opts:["Air pollution","Noise pollution","Water alkalinity","Hardness"], a:1 },
  { q: "Sludge mainly deposited due to:", opts:["Soluble impurities","Insoluble impurities at cooler areas","Reacting with soap","Dissolved gases"], a:1 },
  { q: "Air pollution due to:", opts:["Bursting crackers","Using natural gas","More trees","Filtration"], a:0 },
  { q: "Pollution affects:", opts:["Only plants","All living things","Only metals","Earth’s core"], a:1 },
  { q: "Zeolite exchanges:", opts:["Mg²⁺ for Na⁺","H⁺ for OH⁻","CO₂ for H₂O","SO₄²⁻ for OH⁻"], a:0 },
  { q: "Ion exchange anion resin functional group:", opts:["Sulphonic acid","Quaternary ammonium hydroxide","Hydroxide radicals","Silica"], a:1 },
  { q: "UF membrane requires cleaning due to:", opts:["Corrosion","Fouling","Dissolution","Ignition"], a:1 },
  { q: "Sustainable land practice:", opts:["Integrated waste management","Open dumping","Excess fertilizer","Burning plastic"], a:0 },
  { q: "COD test removes organic matter using:", opts:["Strong oxidizing agent","Water","Air","Fire"], a:0 },
  { q: "DO high means water is:", opts:["Polluted","Fresh for aquatic life","Hard","Acidic"], a:1 },
  { q: "Alkalinity measured by titrating with:", opts:["Strong acid","Strong base","Solvent","Soap solution"], a:0 },
  { q: "Carbonate ions convert to bicarbonate at:", opts:["Methyl orange endpoint","Phenolphthalein endpoint","Evaporation","Freezing"], a:1 },
  { q: "Turbidity removed by:", opts:["UF","EDTA","CaCO₃","COD"], a:0 },
  { q: "Caustic embrittlement type:", opts:["Mechanical corrosion","Chemical corrosion","Lubrication","Ion exchange"], a:1 },
  { q: "Pollution results from:", opts:["Natural or human activity","Photosynthesis","Gravity only","Fresh oxygen"], a:0 },
  { q: "Hardness measured using:", opts:["CaCO₃ equivalent","HCl concentration","Soap volume","COD value"], a:0 },
  { q: "Heat of fusion of water is:", opts:["High","Low","Zero","Moderate"], a:0 },
  { q: "Soft water:", opts:["No Ca²⁺, Mg²⁺ salts","High Ca²⁺ salts","High Mg²⁺ salts","High Fe³⁺ salts"], a:0 },
  { q: "Temporary hardness:", opts:["Carbonate hardness","Sulphate hardness","Nitrate hardness","Silica hardness"], a:0 },
  { q: "Sustainable Practice for Water:", opts:["Treat wastewater","Wastewater directly to rivers","Excess pesticide","Overuse plastics"], a:0 },
  { q: "Noise pollution caused by:", opts:["Reading books","Loudspeakers","Natural silence","Whispering"], a:1 },
  { q: "High silica leads to:", opts:["Corrosion","Silicate scale","Noise pollution","Improved heat transfer"], a:1 },
  { q: "Environmental pillar focuses on:", opts:["Nature protection","Money growth","Only industries","Strict laws only"], a:0 },
  { q: "Social sustainability focuses:", opts:["Fair treatment of people","Mining","Waste dumping","Noise generation"], a:0 },
  { q: "Economic sustainability aims to:", opts:["Reduce jobs","Long-term economic growth","Pollute land","Increase poverty"], a:1 },
  { q: "Using electric stoves helps reduce:", opts:["Water pollution","Air pollution","Soil pollution","Noise pollution"], a:1 },
  { q: "UF is helpful in:", opts:["Concentration of proteins","Combustion of coal","Removing heat","Adding hardness"], a:0 },
  { q: "EDTA titration detects:", opts:["Total hardness","pH","DO","COD"], a:0 }
];

// shuffle array in-place (Fisher–Yates)
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// pick n random unique questions
function pickRandomQuestions(n) {
  const copy = QUESTION_BANK.slice();
  shuffle(copy);
  return copy.slice(0, n);
}

// render chosen questions
const questionsContainer = document.getElementById('questions');
const submitBtn = document.getElementById('submitBtn');
const reloadBtn = document.getElementById('reloadBtn');
const resultBox = document.getElementById('result');
const scoreText = document.getElementById('scoreText');
const percentText = document.getElementById('percentText');

let chosenQuestions = [];

function renderQuiz() {
  resultBox.classList.add('hidden');
  questionsContainer.innerHTML = '';
  chosenQuestions = pickRandomQuestions(10);

  chosenQuestions.forEach((item, idx) => {
    const qCard = document.createElement('div');
    qCard.className = 'question-card';
    const qNo = idx + 1;
    const html = `
      <div class="q-top">
        <div class="q-no">Q${qNo}.</div>
        <div class="q-text">${escapeHtml(item.q)}</div>
      </div>
      <div class="options" id="opts-${idx}">
        ${item.opts.map((opt, oi) => `
          <label class="option" data-q="${idx}" data-opt="${oi}">
            <input type="radio" name="q-${idx}" value="${oi}" />
            <span class="opt-label">${String.fromCharCode(65+oi)})</span>
            <span class="opt-text">${escapeHtml(opt)}</span>
          </label>
        `).join('')}
      </div>
      <div class="meta hidden" id="meta-${idx}"></div>
    `;
    qCard.innerHTML = html;
    questionsContainer.appendChild(qCard);
  });

  // add click handler to label containers to toggle radio cleanly
  document.querySelectorAll('.option').forEach(label => {
    label.addEventListener('click', (e) => {
      const input = label.querySelector('input[type="radio"]');
      if (input) input.checked = true;
    });
  });
}

// escape HTML helper
function escapeHtml(text){
  return text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
}

function gradeQuiz(){
  let score = 0;
  chosenQuestions.forEach((item, idx) => {
    const selected = document.querySelector(`input[name="q-${idx}"]:checked`);
    const optsDiv = document.getElementById(`opts-${idx}`);
    const meta = document.getElementById(`meta-${idx}`);
    meta.classList.remove('hidden');
    // clear previous states
    optsDiv.querySelectorAll('.option').forEach(el => { el.classList.remove('correct','wrong','dim'); });

    const correctIndex = item.a;
    if (selected) {
      const selIndex = Number(selected.value);
      if (selIndex === correctIndex) {
        score++;
      }
    }
    // highlight options
    optsDiv.querySelectorAll('.option').forEach(el => {
      const thisOpt = Number(el.getAttribute('data-opt'));
      if (thisOpt === correctIndex) {
        el.classList.add('correct');
      } else {
        // if user selected this wrong option show wrong
        const radio = el.querySelector('input[type="radio"]');
        if (radio.checked) el.classList.add('wrong');
        else el.classList.add('dim');
      }
    });

    // meta: show correct answer text
    meta.innerHTML = `<strong>Correct:</strong> ${String.fromCharCode(65+correctIndex)}) ${escapeHtml(item.opts[correctIndex])}`;
  });

  const percent = Math.round((score / chosenQuestions.length) * 100);
  scoreText.textContent = `Score: ${score} / ${chosenQuestions.length}`;
  percentText.textContent = `Percentage: ${percent}%`;
  resultBox.classList.remove('hidden');

  // scroll to result smoothly
  resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // disable submit to prevent regrading without reload
  submitBtn.disabled = true;
  submitBtn.style.opacity = 0.6;
}

// initial render
renderQuiz();

// button events
submitBtn.addEventListener('click', () => {
  gradeQuiz();
});

reloadBtn.addEventListener('click', () => {
  submitBtn.disabled = false;
  submitBtn.style.opacity = 1;
  renderQuiz();
});
