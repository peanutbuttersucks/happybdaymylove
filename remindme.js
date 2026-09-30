const photoData = [
  
  {
    src: "amusementpark.png",
    message: "Amusement park lights always remind me of your bright energy and joy that lights up my life ❤︎"
  },
  
  {
    src: "nyc.png",
    message: "I really hope we can move to Nyc together one day and enjoy the city lights with you my love"
  },
  
  {
    src: "2000s.png",
    message: "Every time i see a rom-com, i think of you and the way you enthusiastically tell me about them"
  },
  
  {
    src: "starbucksdrink.png",
    message: "You and your obsession with starbucks (no further explanation needed i love you talking about it)"
  },
  
  {
    src: "dubaichocolate.png",
    message: "Youre sweeter than any kind of chocolate ❤"
  },
  
  {
    src: "cozywinter.png",
    message: "Youre like a warm room lit by a fireplace and candles on a cold winter night, comforting and cozy"
  },
  
  {
    src: "sunlightthroughthewindow.png",
    message: "Your presence warms my heart, just like a sunlight streaming through the window"
  },
  
  {
    src: "cinnamonroll.png",
    message: "Cinnamon rolls are sweet and so are you (is this rizz)"
  },
  
  {
    src: "clarinet.png",
    message: "You came into my life and gave my heart its most beautiful rhythm just like the way you play your clarinet ❤"
  },
  
  {
    src: "bedazzle.png",
    message: "I love how you can turn even the dullest things into something pretty and shiny, almost like you can bedazzle everything you touch with your love"
  },
  
  {
    src: "cutelilbunny.png",
    message: "Youre my cute little bunny, and i love you so much"
  },
  
  {
    src: "pinkhibiscus.png",
    message: "Your favourite flower is hibiscus, and mine is you. Youre the prettiest flower to bloom in my life"
  },
  
  {
    src: "thecurelyrics.png",
    message: "I highkey agree with the lyrics"
  },
  
  {
    src: "sunrise.png",
    message: "Youre the prettiest and the brightest sunrise in my life, without you, my days would be completely dark ❤"
  },
 
  {
    src: "hotpink.png",
    message: "Your favourite colour might be hot pink, but mine will always be the colours you brought into my monotone life"
  }
];

let typewriterTimeout;


function openPhotoModal(index) {
  const modal = document.getElementById('photo-modal');
  const modalImg = document.getElementById('modal-img');
  const modalText = document.getElementById('modal-text');

  const data = photoData[index];

  if (!data) return;

  modalImg.src = data.src;

  clearTimeout(typewriterTimeout);
  modalText.textContent = "";

  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // SAYFA KAYDIRMASINI ENGELLER

  typeWriter(data.message, modalText, 0);
}

function typeWriter(text, element, charIndex) {
  if (charIndex < text.length) {
    element.textContent += text.charAt(charIndex);
    typewriterTimeout = setTimeout(() => {
      typeWriter(text, element, charIndex + 1);
    }, 35);
  }
}

function closePhotoModal() {
  const modal = document.getElementById("photo-modal");
  
  
  clearTimeout(typewriterTimeout);
  modal.classList.remove("active");
  document.body.style.overflow = '';
}