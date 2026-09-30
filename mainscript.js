const notes = [
  "HAPPY BIRTHDAY MY BEAUTIFUL GIRL ❤︎⁠ <br> I HOPE THIS NEW YEAR OF YOUR LIFE BRINGS YOU EVERYTHING YOUR HEART DESIRES<br>I REALLY HOPE WE CAN SPEND EACHOTHER'S BIRTHDAY TOGETHER EVERY YEAR LIKE WE DID THIS YEAR AND WATCH EACHOTHER GROW OLD TOGETHER ❤︎⁠",
  "IM SO GLAD THAT YOU WERE BORN. I COULD NEVER HAVE ENJOYED MY LIFE THIS MUCH IF I HADNT MET YOU<br>THANK YOU FOR BEING THE MEANING OF MY LIFE<br>I LOVE YOU SO MUCH MY SWEET MALAY ❤︎⁠"
];

let currentIndex = 0;
let typewriterTimeout; 

const noteDisplay = document.getElementById("noteDisplay");
const pageIndicator = document.getElementById("pageIndicator");


function renderNote() {
  
  clearTimeout(typewriterTimeout);
  noteDisplay.innerHTML = "";

  
  pageIndicator.textContent = `${currentIndex + 1}/${notes.length}`;

  
  const currentText = notes[currentIndex];
  typeWriterHTML(currentText, noteDisplay, 0);
}


function typeWriterHTML(text, element, charIndex) {
  if (charIndex < text.length) {
    
    if (text.substring(charIndex, charIndex + 4).toLowerCase() === "<br>") {
      element.innerHTML += "<br>";
      charIndex += 4;
    } else {
      element.innerHTML += text.charAt(charIndex);
      charIndex++;
    }

    
    typewriterTimeout = setTimeout(() => {
      typeWriterHTML(text, element, charIndex);
    }, 40);
  }
}


function changeNote(direction) {
  currentIndex += direction;

  
  if (currentIndex < 0) {
    currentIndex = notes.length - 1;
  } else if (currentIndex >= notes.length) {
    currentIndex = 0;
  }

  renderNote();
}


renderNote();