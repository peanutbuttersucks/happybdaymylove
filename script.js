// Şifrenizi buraya tanımlayabilirsiniz (Örn: Ay ve Gün "0524" veya "524")
const CORRECT_PASSCODE = "0930"; // Test için varsayılan "1234" belirlendi. Değiştirebilirsiniz!

let currentInput = "";
const display = document.getElementById("display");

// Numaraya basıldığında ekrana yaz
function appendNumber(num) {
  if (currentInput.length < 6) { // Maksimum 6 hane sınırı
    currentInput += num;
    updateDisplay();
  }
}

// Ekranı/Girdiyi Temizle (C Butonu)
function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

// Ekran Görünümünü Güncelle
function updateDisplay() {
  if (currentInput === "") {
    display.textContent = "----";
    display.style.color = "#000";
  } else {
    display.textContent = currentInput;
    display.style.color = "#000";
  }
}

// Şifreyi Kontrol Et (OK Butonu)
function checkPasscode() {
  if (currentInput === CORRECT_PASSCODE) {
    display.textContent = "Woah gj!";
    display.style.color = "green";
    
    // Doğru şifrede mainpage.html sayfasına yönlendirir
    setTimeout(() => {
      window.location.href = "mainpage.html";
    }, 500);
  } else {
    display.textContent = "Hell naw";
    display.style.color = "red";
    
    // Hatalı girildiğinde 1 saniye sonra temizle
    setTimeout(() => {
      clearDisplay();
    }, 1000);
  }
}