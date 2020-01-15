function sendMail(contactForm) {
    emailjs.send("gmail", "inmadrid_contact_form", 
    {"rentout_apartment":"","typeof_house":"","from_name":"","from_email":""})
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; }// To block from loading a new page






