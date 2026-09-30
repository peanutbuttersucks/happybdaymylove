
const hateReasons = [
  {
    title: "<3",
    text: "I love how youre always on my mind and how unforgettable you are"
  },
  {
    title: "<3",
    text: "I love how you always find a way to cheer me up, even when im in a bad mood. And i love the way you pull all my attention to yourself and make me forget about everything else"
  },
  {
    title: "<3",
    text: "I love how kind you are. I love how your little heart holds so much pure, genuine love. Even though im not a believer, you sometimes make me wonder if angels are actually real "
  },
  {
    title: "<3",
    text: "I love the little silly questions we ask eachother. I love learning even the smallest things about you, because every detail of you is beautiful in its own way. And i fall in love with you a little more each time"
  },
  {
    title: "<3",
    text: "I love your sense of humour and all the videos, photos and stickers you send me. I love the positive energy you keep in that cute little heart of yours, and how you make me smile like a fool"
  },
  {
    title: "<3",
    text: "I love seeing you happy. I love that cute joyful smile of yours that brightens my whole day"
  },
  {
    title: "<3",
    text: "I love how gorgeous you are. I love the way your features come together so perfectly, and how your pretty face makes every other face look ordinary"
  },
  {
    title: "<3",
    text: "I love every curl of your dark brown hair"
  },
  {
    title: "<3",
    text: "I love how affectionate and cute you are. I love how you make my heart feel so soft and warm whenever im talking to you"
  },
  {
    title: "<3",
    text: "And most importantly, i love you just the way you are"
  }
];

let typewriterTimeout; 

function openNote(index) {
  const modal = document.getElementById("modal-overlay");
  const mainContainer = document.getElementById("main-container");
  const title = document.getElementById("note-title");
  const textElement = document.getElementById("note-text");

  
  const currentReason = hateReasons[index - 1];

  if (!currentReason) return; 

  
  title.innerText = currentReason.title;
  
  
  clearTimeout(typewriterTimeout);
  textElement.innerText = ""; 

  mainContainer.classList.add("blurred");
  modal.classList.add("active");

  
  typeWriter(currentReason.text, textElement, 0);
}

function typeWriter(text, element, charIndex) {
  if (charIndex < text.length) {
    element.textContent += text.charAt(charIndex);
    typewriterTimeout = setTimeout(() => {
      typeWriter(text, element, charIndex + 1);
    }, 40);
  }
}

function closeNote() {
  const modal = document.getElementById("modal-overlay");
  const mainContainer = document.getElementById("main-container");

  
  clearTimeout(typewriterTimeout);

  modal.classList.remove("active");
  mainContainer.classList.remove("blurred");
}

