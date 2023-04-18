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

function validateForm() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var motivation = document.getElementById("motivation").value.trim();
 
  // Validate name field
  if (name === "") {
    alert("Angiv navn");
    return false;
  }

  // Validate email field
  if (email === "") {
    alert("Angiv korrekt email addresse");
    return false;
  } else {
    var email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email_regex.test(email)) {
      alert("Angiv korrekt email addresse");
      return false;
    }
 }

   // Validate name field
   if (motivation === "") {
    alert("Angiv motivation");
    return false;
  }


  // Submit the form if all validations pass
  alert("Sign up successful!");
  return true;
}

