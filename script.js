console.log('connected')

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const navLinksMobile = document.querySelectorAll('.nav-links-mobile li');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuButton.classList.toggle('active');
});

navLinksMobile.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuButton.classList.remove('active');
  });
});

// Medlem - reset
function validateForm() {
  const name = document.getElementById("name").value;
  const postalCode = document.getElementById("postal-code").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const postalCodeRegex = /^\d{4}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || postalCode === "" || city === "" || email === "") {
    alert("Alle felter skal udfyldes!");
    return false;
  }

  if (!postalCodeRegex.test(postalCode)) {
    alert("Postnummer skal være 4 tal!");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Email skal være gyldig!");
    return false;
  }
}

function resetForm() {
  document.getElementById("myForm").reset();
}

//Timeline section
function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}
function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}

function myFunction5() {
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("myBtn5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}

function myFunction6() {
  var dots = document.getElementById("dots6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("myBtn6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}

function myFunction7() {
  var dots = document.getElementById("dots7");
  var moreText = document.getElementById("more7");
  var btnText = document.getElementById("myBtn7");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}

function myFunction8() {
  var dots = document.getElementById("dots8");
  var moreText = document.getElementById("more8");
  var btnText = document.getElementById("myBtn8");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}

function myFunction9() {
  var dots = document.getElementById("dots9");
  var moreText = document.getElementById("more9");
  var btnText = document.getElementById("myBtn9");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}

function myFunction10() {
  var dots = document.getElementById("dots10");
  var moreText = document.getElementById("more10");
  var btnText = document.getElementById("myBtn10");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}

function myFunction11() {
  var dots = document.getElementById("dots11");
  var moreText = document.getElementById("more11");
  var btnText = document.getElementById("myBtn11");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}

function myFunction12() {
  var dots = document.getElementById("dots12");
  var moreText = document.getElementById("more12");
  var btnText = document.getElementById("myBtn12");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}

function myFunction13() {
  var dots = document.getElementById("dots13");
  var moreText = document.getElementById("more13");
  var btnText = document.getElementById("myBtn13");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}

function myFunction14() {
  var dots = document.getElementById("dots14");
  var moreText = document.getElementById("more14");
  var btnText = document.getElementById("myBtn14");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}

function myFunction15() {
  var dots = document.getElementById("dots15");
  var moreText = document.getElementById("more15");
  var btnText = document.getElementById("myBtn15");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}

function myFunction16() {
  var dots = document.getElementById("dots16");
  var moreText = document.getElementById("more16");
  var btnText = document.getElementById("myBtn16");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Læs mere"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Læs mindre"; 
    moreText.style.display = "inline";
  }
}





const images = ["images/foreningen.jpg", "uimages/foreningen.jpg", "images/foreningen.jpg", "images/foreningen.jpg", "url_to_image_5"];
const texts = ["First set of text", "Second set of text", "Third set of text", "Fourth set of text", "Fifth set of text"];
let index = 0;

function changeContent() {
  document.getElementById("text").textContent = texts[index];
  document.getElementById("image").style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % 5;
}

setInterval(changeContent, 30000);