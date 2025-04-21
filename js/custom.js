const loginForm = document.getElementById("loginForm");
const welcomeMessage = document.getElementById("welcomeMessage");

if (loginForm && welcomeMessage) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("loginName").value;

    console.log("Name captured:", name);

    // Create the welcome message
    const welcomeText = `Welcome, ${name} to Cannons Coffee! You are logged in!`;
    console.log("Welcome message ready to display:", welcomeText);

    // Display the welcome message
    welcomeMessage.textContent = welcomeText;
    welcomeMessage.style.display = "block";

    // Hide the form
    loginForm.style.display = "none";
  });
}

// Handl contact form
const contactForm = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");

if (contactForm && thankYouMessage) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const comments = document.getElementById("comments").value;
    const flavor = document.getElementById("flavor").value;
    const interest = document.querySelector(
      'input[name="interest"]:checked'
    ).value;

    console.log("Name captured:", name);
    console.log("Email captured:", email);
    console.log("Phone captured:", phone);
    console.log("Comments captured:", comments);
    console.log("Favorite flavor captured:", flavor);
    console.log("Interest captured:", interest);

    // Create the thank-you message
    const thankYouText = `
      Thank you, ${name}! We appreciate your interest in ${interest}.
      Your favorite flavor is ${flavor}, and your comments were: "${comments}".
      We will contact you at ${email} or ${phone} soon!
    `;
    console.log("Thank-you message ready to display:", thankYouText);

    // Display the thank-you message
    thankYouMessage.textContent = thankYouText;
    thankYouMessage.style.display = "block";

    // Hide the form
    contactForm.style.display = "none";
  });
}
