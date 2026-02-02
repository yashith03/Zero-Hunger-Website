document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name.trim() == "") {
        alert("Please enter your name.");
        event.preventDefault();
        return false;
    }
  
    if (email.trim() == "") {
        alert("Please enter your email.");
        event.preventDefault();
        return false;
    }
  
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return false;
    }
  
    // Construct email body
    var subject = "Feedback Submission";
    var body = "Name: " + name + "\nEmail: " + email;
    // Add more fields to the body as needed
  
    // Construct mailto URL
    var mailtoURL = "mailto:dishenmalinga@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
  
    // Open default email client with pre-filled email
    window.location.href = mailtoURL;
  
    // Prevent default form submission
    event.preventDefault();
  });
  