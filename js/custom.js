// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Contact Form Logic
  const contactForm = document.getElementById("contactForm");
  const thankYouMessage = document.getElementById("thankYouMessage");

  if (contactForm && thankYouMessage) {
    contactForm.addEventListener("submit", function onSubmit(e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const dataObject = Object.fromEntries(formData.entries());

      console.log("Form data collected:", dataObject);

      const name = dataObject.name || "Guest";
      const email = dataObject.email || "No email provided";
      const phone = dataObject.phone || "No phone provided";
      const comments = dataObject.comments || "No comments provided";
      const flavor = dataObject.flavor || "No flavor selected";
      const interest = dataObject.interest || "No interest selected";

      const thankYouText = `
        Thank you, ${name}! We appreciate your interest in ${interest}.
        Your favorite flavor is ${flavor}, and your comments were: "${comments}".
        We will contact you at ${email} or ${phone} soon!
      `;
      console.log("Thank-you message ready to display:", thankYouText);

      thankYouMessage.textContent = thankYouText;
      thankYouMessage.style.display = "block";
      contactForm.style.display = "none";
    });
  } else {
    console.error("Contact form or thank-you message element not found.");
  }

  // Login Form Logic
  const loginForm = document.getElementById("loginForm");
  const welcomeMessage = document.getElementById("welcomeMessage");

  if (loginForm && welcomeMessage) {
    loginForm.addEventListener("submit", function onSubmit(e) {
      e.preventDefault();
      const formData = new FormData(loginForm);
      const dataObject = Object.fromEntries(formData.entries());

      console.log("Login data collected:", dataObject);

      const name = dataObject.loginName || "Guest";

      const welcomeText = `Welcome, ${name} to Cannons Coffee! You are logged in!`;
      console.log("Welcome message ready to display:", welcomeText);

      welcomeMessage.textContent = welcomeText;
      welcomeMessage.style.display = "block";
      loginForm.style.display = "none";
    });
  } else {
    console.error("Login form or welcome message element not found.");
  }
});
