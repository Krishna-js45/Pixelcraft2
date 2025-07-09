// quizData.js — generates 400 diverse questions (general knowledge, tech, history, games, logic)

const quizData = [];

// ---------- helper shuffle ----------
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// ---------- 1. Capitals (General Knowledge) ----------
const capitals = [
  ["France","Paris"],["Germany","Berlin"],["Spain","Madrid"],["Italy","Rome"],["Canada","Ottawa"],
  ["Brazil","Brasília"],["Japan","Tokyo"],["India","New Delhi"],["Australia","Canberra"],["Russia","Moscow"],
  ["Mexico","Mexico City"],["China","Beijing"],["Egypt","Cairo"],["Kenya","Nairobi"],["Argentina","Buenos Aires"],
  ["South Korea","Seoul"],["United Kingdom","London"],["Turkey","Ankara"],["Nigeria","Abuja"],["Greece","Athens"],
  ["Sweden","Stockholm"],["Norway","Oslo"],["Netherlands","Amsterdam"],["Switzerland","Bern"],["Thailand","Bangkok"],
  ["Indonesia","Jakarta"],["Philippines","Manila"],["Vietnam","Hanoi"],["Saudi Arabia","Riyadh"],["UAE","Abu Dhabi"],
  ["South Africa","Pretoria"],["New Zealand","Wellington"],["Portugal","Lisbon"],["Poland","Warsaw"],["Belgium","Brussels"],
  ["Chile","Santiago"],["Colombia","Bogotá"],["Peru","Lima"],["Denmark","Copenhagen"],["Finland","Helsinki"],
  ["Ireland","Dublin"],["Austria","Vienna"],["Czechia","Prague"],["Ukraine","Kyiv"],["Hungary","Budapest"],
  ["Iran","Tehran"],["Iraq","Baghdad"],["Israel","Jerusalem"],["Pakistan","Islamabad"],["Bangladesh","Dhaka"]
];
capitals.forEach((c)=>{
  const wrong=shuffle(capitals.filter(x=>x!==c)).slice(0,3).map(x=>x[1]);
  quizData.push({
    question:`What is the capital of ${c[0]}?`,
    options: shuffle([c[1], ...wrong]),
    answer: c[1]
  });
});

// ---------- 2. Tech & Programming ----------
const techQA = [
  ["What does CPU stand for?","Central Processing Unit",["Computer Primary Unit","Central Performance Unit","Control Processing Unit"]],
  ["Which company created the iPhone?","Apple",["Google","Samsung","Microsoft"]],
  ["HTML is primarily used to ____ web pages.","Structure",["Style","Program","Encrypt"]],
  ["Who co‑founded Microsoft with Bill Gates?","Paul Allen",["Steve Jobs","Larry Page","Tim Berners‑Lee"]],
  ["What language is known for its snake logo?","Python",["Ruby","Cobra","Java"]],
  ["Git command to upload local commits?","git push",["git pull","git init","git clone"]],
  ["Which database is NoSQL?","MongoDB",["MySQL","PostgreSQL","SQLite"]],
  ["CSS property to change text color?","color",["font-color","text-style","paint"]],
  ["Year JavaScript was created?","1995",["1989","2000","1990"]],
  ["Creator of Linux kernel?","Linus Torvalds",["Richard Stallman","Ken Thompson","Dennis Ritchie"]]
];
techQA.forEach(([q,ans,wrongs])=>{
  quizData.push({question:q,options:shuffle([ans,...wrongs]),answer:ans});
});

// ---------- 3. History ----------
const historyQA = [
  ["Who was the first President of the USA?","George Washington",["Abraham Lincoln","Thomas Jefferson","John Adams"]],
  ["Year the Berlin Wall fell?","1989",["1991","1979","1984"]],
  ["Which ship sank in 1912?","Titanic",["Lusitania","Bismarck","Queen Mary"]],
  ["Empire ruled by Julius Caesar?","Roman Empire",["Ottoman Empire","British Empire","Mongol Empire"]],
  ["Inventor of the telephone?","Alexander Graham Bell",["Thomas Edison","Nikola Tesla","Guglielmo Marconi"]],
  ["Explorer who reached India via sea in 1498?","Vasco da Gama",["Christopher Columbus","Ferdinand Magellan","Marco Polo"]],
  ["First human in space?","Yuri Gagarin",["Neil Armstrong","Buzz Aldrin","Valentina Tereshkova"]],
  ["Civilization that built Machu Picchu?","Inca",["Maya","Aztec","Olmec"]],
  ["War fought 1914‑1918?","World War I",["World War II","Korean War","Vietnam War"]],
  ["Document signed in 1215 limiting king’s power?","Magna Carta",["Declaration of Independence","Treaty of Versailles","Bill of Rights"]]
];
historyQA.forEach(([q,ans,wrongs])=>{
  quizData.push({question:q,options:shuffle([ans,...wrongs]),answer:ans});
});

// ---------- 4. Gaming ----------
const gameQA = [
  ["Main protagonist of The Legend of Zelda?","Link",["Zelda","Ganon","Mario"]],
  ["Block‑building sandbox game released 2011?","Minecraft",["Roblox","Terraria","Fortnite"]],
  ["Company behind PlayStation?","Sony",["Microsoft","Nintendo","Sega"]],
  ["Fast blue hedgehog character?","Sonic",["Mario","Crash","Kirby"]],
  ["Term for rare item color in many RPGs?","Legendary",["Common","Uncommon","Broken"]],
  ["In which game do you catch Pokémon?","Pokémon GO",["Digimon World","Yu‑Gi‑Oh!","Animal Crossing"]],
  ["Weapon used by Master Chief?","Energy Sword",["Buster Sword","Keyblade","Portal Gun"]],
  ["Popular battle royale by Epic Games?","Fortnite",["PUBG","Apex Legends","Valorant"]],
  ["First commercially successful video game?","Pong",["Space Invaders","Pac‑Man","Tetris"]],
  ["Cheat code ↑↑↓↓←→←→BA from?","Contra",["Mario","Doom","GTA"]]
];
gameQA.forEach(([q,ans,wrongs])=>{
  quizData.push({question:q,options:shuffle([ans,...wrongs]),answer:ans});
});

// ---------- 5. Math / Logic auto‑generate (to reach 400) ----------
for(let i=0;i<200;i++){
  const a=Math.floor(Math.random()*50)+1;
  const b=Math.floor(Math.random()*50)+1;
  const ans=a+b;
  const wrong = [ans+1, ans-1, ans+2];
  quizData.push({
    question:`What is ${a} + ${b}?`,
    options: shuffle([ans.toString(), ...wrong.map(String)]),
    answer: ans.toString()
  });
}

// Ensure we have at least 400 questions; if not, duplicate some capitals with slight twists
while(quizData.length<400){
  const [country,cap]=capitals[Math.floor(Math.random()*capitals.length)];
  const wrong=shuffle(capitals.filter(x=>x[1]!==cap)).slice(0,3).map(x=>x[1]);
  quizData.push({question:`${country}'s capital is?`,options:shuffle([cap,...wrong]),answer:cap});
}

console.log(`Loaded ${quizData.length} questions.`);
