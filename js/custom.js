const loginForm = document.getElementById("loginForm");
const welcomeMessage = document.getElementById("welcomeMessage");
// NOTE TO ME ABOUT IF : This ensures that the loginForm and
// welcomeMessage elements are not null or undefined.
// If either of them is missing, the code inside the if
// block will not execute, preventing runtime errors.
if (loginForm && welcomeMessage) {
  loginForm.addEventListener("submit", function (e) {
    console.log("Login form submission started.");
    e.preventDefault();
    // The function (e) is an anonymous function that is
    // being passed as a callback to the addEventListener method.
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
    console.log("Login form submission completed.");
  });
}

// Handle contact form
const contactForm = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");

if (contactForm && thankYouMessage) {
  contactForm.addEventListener("submit", function (e) {
    console.log("Contact form submission started.");
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const comments = document.getElementById("comments").value;
    const flavor = document.getElementById("flavor").value;
    const interest = document.querySelector(
      'input[name="interest"]:checked'
    ).value;
    //     WHY I USED : 'input[name="interest"]:checked'
    // targets an <input> element with the
    // name attribute set to interest and that
    // is currently checked (selected).
    // typically used for radio buttons or checkboxes.
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
    console.log("Contact form submission completed.");
  });
}
