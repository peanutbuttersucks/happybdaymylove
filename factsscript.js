const factsData = [
  {
    text: "<span class='c-sapphire'>SAPPHIRE</span> IS THE BIRTHSTONE THAT IS ALLOCATED TO ANYBODY BORN DURING <u>SEPTEMBER</u>. <span class='c-sapphire'>SAPPHIRES</span> WERE ONCE BELIEVED TO BE PROTECTION AGAINST <span class='c-green'>POISON</span>. IT WAS THOUGHT THAT IF <span class='c-red'>VENOMOUS SNAKES OR SPIDERS</span> WERE CAPTURED IN A JAR CONTAINING THE GEM, THEY WOULD IMMEDIATELY DIE.",
    topImg: "sapphire1.png",
    bottomImg: "sapphire2.png",
    topNote: "YOU'RE THE PRETTIEST GEM IVE EVER LAID MY EYES ON",
    bottomNote: "(YES I LOOKED THESE FACTS UP)"
  },
  {
    text: "YOU WERE PROBABLY PLACED ON ORDER AROUND <u>JANUARY 7-8</u> OF THE SAME YEAR.",
    topImg: "jan.png",
    bottomImg: "sep.png",
    topNote: "ORDER DATE: JAN 7",
    bottomNote: "ARRIVAL: SEP 30"
  },
  {
    text: "<u>SEPTEMBER 30</u> IS INTERNATIONAL TRANSLATION DAY, CELEBRATING THE WORK OF TRANSLATORS <span class='c-green'>WO</span><span class='c-blue'>R</span><span class='c-blue'>L</span><span class='c-brown'>D</span><span class='c-brown'>W</span><span class='c-green'>I</span><span class='c-green'>D</span><span class='c-blue'>E</span>. THIS DAY RECOGNIZES THE IMPORTANCE OF LANGUAGE PROFESSIONALS IN CONNECTING NATIONS, FOSTERING UNDERSTANDING BETWEEN CULTURES, AND BUILDING A MORE INCLUSIVE <span class='c-green'>WO</span><span class='c-blue'>R</span><span class='c-blue'>L</span><span class='c-brown'>D</span>.",
    topImg: "translate1.png",
    bottomImg: "languageheart.png",
    topNote: "SENİ SEVİYORUM ♡",
    bottomNote: "ALL THESE LANGUAGES BUT NONE OF EM R ENOUGH TO TELL YOU HOW MUCH I LOVE YOU"
  },
  {
    text: "<u>SEPTEMBER 30</u> IS NATIONAL <span class='c-cyan'>C</span><span class='c-pink'>H</span><span class='c-cyan'>E</span><span class='c-pink'>W</span><span class='c-cyan'>I</span><span class='c-pink'>N</span><span class='c-cyan'>G</span> <span class='c-pink'>G</span><span class='c-cyan'>U</span><span class='c-pink'>M</span> DAY IN THE <span class='c-blue'>UNI</span><span class='c-red'>T</span><span class='c-grey'>E</span><span class='c-red'>D</span> <span class='c-blue'>STA</span><span class='c-red'>T</span><span class='c-grey'>E</span><span class='c-red'>S</span>. THIS DAY RECOGNIZES THE SWEET TREAT THAT HAS BEEN ENJOYED BY PEOPLE <span class='c-green'>W</span><span class='c-green'>O</span><span class='c-blue'>R</span><span class='c-blue'>L</span><span class='c-brown'>D</span><span class='c-brown'>W</span><span class='c-green'>I</span><span class='c-green'>D</span><span class='c-blue'>E</span> FOR THOUSANDS OF YEARS, AS WELL AS ITS POTENTIAL BENEFITS SUCH AS RELIEVING STRESS AND IMPROVING CONCENTRATION.",
    topImg: "strawberrygum.png",
    bottomImg: "bluegum.png",
    topNote: "YO THIS IS YOU",
    bottomNote: "AND YO THIS IS ME"
  }
];

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  updateFactPage();
});

function updateFactPage() {
  const currentData = factsData[currentIndex];

  
  document.getElementById("fact-text").innerHTML = currentData.text;
  document.getElementById("img-top").src = currentData.topImg;
  document.getElementById("img-bottom").src = currentData.bottomImg;
  document.getElementById("fact-counter").innerText = `${currentIndex + 1}/${factsData.length}`;

  
  document.getElementById("note-top").innerText = currentData.topNote;
  document.getElementById("note-bottom").innerText = currentData.bottomNote;

  
  document.querySelectorAll('.polaroid').forEach(p => p.classList.remove('hide-image'));
}

function changeFact(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = factsData.length - 1;
  } else if (currentIndex >= factsData.length) {
    currentIndex = 0;
  }

  updateFactPage();
}


function togglePolaroid(element) {
  element.classList.toggle("hide-image");
}