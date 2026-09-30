
const cakeOptions = {
  cake: [
    { name: "CHOCOLATE CAKE", img: "chocolate-cake.png" },
    { name: "CARROT CAKE", img: "carrot-cake.png" },
    { name: "RED VELVET", img: "redvelvet-cake.png" },
    { name: "STRAWBERRY CAKE", img: "strawberry-cake.png" },
    { name: "VANILLA CAKE", img: "vanilla-cake.png" }
  ],
  filling: [
    { name: "CHOCOLATE FILLING", img: "chocolate-filling.png" },
    { name: "COOKIE FILLING", img: "cookie-filling.png" },
    { name: "DUBAI FILLING", img: "dubai-filling.png" },
    { name: "MINT FILLING", img: "mint-filling.png" },
    { name: "STRAWBERRY FILLING", img: "strawberry-filling.png" },
    { name: "VANILLA FILLING", img: "vanilla-filling.png" }
  ],
  topping: [
    { name: "NONE", img: null },
    { name: "CARROT TOPPING", img: "carrot-topping.png" },
    { name: "CHOCOLATE TOPPING", img: "chocolate-topping.png" },
    { name: "COOKIE TOPPING", img: "cookies-topping.png" },
    { name: "STRAWBERRY TOPPING", img: "strawberry-topping.png" },
    { name: "VANILLA TOPPING", img: "vanilla-topping.png" }
  ],
  candles: [
    { name: "NONE", img: null },
    { name: "BIG HOT PINK CANDLE", img: "bighotpink-candle.png" },
    { name: "BIG LILAC CANDLE", img: "biglilac-candle.png" },
    { name: "HOT PINK CANDLES", img: "hotpink-candle.png" },
    { name: "LILAC CANDLES", img: "lilac-candle.png" }
  ]
};


const currentIndices = {
  cake: 0,
  filling: 0,
  topping: 0,
  candles: 0
};


function changeOption(category, direction) {
  const options = cakeOptions[category];
  currentIndices[category] += direction;

  
  if (currentIndices[category] < 0) {
    currentIndices[category] = options.length - 1;
  } else if (currentIndices[category] >= options.length) {
    currentIndices[category] = 0;
  }

  updateDisplay(category);
}


function updateDisplay(category) {
  const selected = cakeOptions[category][currentIndices[category]];
  const imgElement = document.getElementById(`layer-${category}`);
  
  
  document.getElementById(`display-${category}`).innerText = selected.name;
  
  
  if (selected.img) {
    imgElement.src = selected.img;
    imgElement.style.display = "block";
  } else {
    imgElement.src = "";
    imgElement.style.display = "none";
  }
}


window.onload = () => {
  Object.keys(cakeOptions).forEach(category => {
    updateDisplay(category);
  });
};


const chefPhrases = [
  "yo I'm a fucking chef",
  "looks good fr",
  "um..!",
  "yum",
  "ew this is nasty (im jk ofc)",
  "I love theo",
  "theo is a good boy",
  "woah",
  "looks delicious (js like you)",
  "I'm the best cook EVER",
  "ts bussin",
  "you're the real dessert",
  "I bet you taste sweeter"
];

let bubbleTimeout;
let lastPhraseIndex = -1; 

function showChefBubble() {
  const bubble = document.getElementById("speech-bubble");
  
 
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * chefPhrases.length);
  } while (randomIndex === lastPhraseIndex && chefPhrases.length > 1);
  
  lastPhraseIndex = randomIndex; 

  
  bubble.innerText = chefPhrases[randomIndex];

  
  bubble.classList.remove("hidden");

  
  clearTimeout(bubbleTimeout);

  
  bubbleTimeout = setTimeout(() => {
    bubble.classList.add("hidden");
  }, 2500);
}


function changeOption(category, direction) {
  const options = cakeOptions[category];
  currentIndices[category] += direction;

  if (currentIndices[category] < 0) {
    currentIndices[category] = options.length - 1;
  } else if (currentIndices[category] >= options.length) {
    currentIndices[category] = 0;
  }

  updateDisplay(category);
  
  
  showChefBubble();
}

function saveCake() {
  
  launchConfetti();

  const cakeBox = document.querySelector('.cake-preview-box');
  if (!cakeBox) return;

  html2canvas(cakeBox, {
    backgroundColor: null,
    scale: 2
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'my-pixel-cake.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}


function launchConfetti() {
  
  let container = document.getElementById('confetti-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'confetti-container';
    document.body.appendChild(container);
  }

  
  const colors = [
    '#da3636', '#ff4081', '#dc81ec', '#926ff3', 
    '#53d2dc', '#b3ffda', '#fce9a5', '#ffffff'
  ];

  
  for (let i = 0; i < 180; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti-piece');
    
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomLeft = Math.random() * 100; 
    const randomDelay = Math.random() * 0.7; 
    const randomDuration = 1.5 + Math.random() * 1.6; 
    const randomSize = Math.floor(Math.random() * 6) + 6; 

    confetti.style.backgroundColor = randomColor;
    confetti.style.left = randomLeft + 'vw';
    confetti.style.width = randomSize + 'px';
    confetti.style.height = randomSize + 'px';
    confetti.style.animationDelay = randomDelay + 's';
    confetti.style.animationDuration = randomDuration + 's';

    container.appendChild(confetti);

    
    setTimeout(() => {
      confetti.remove();
    }, 3500);
  }
}