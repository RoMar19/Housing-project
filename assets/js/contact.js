function sendMail(contactForm) {
    emailjs.send("gmail", "inmadrid_contact_form", 
    {"rentout_apartment":"Please contact me to rent my house out.","typeof_house":"Studio",
    "from_name":"Elena de Troya","from_email":"rmf1312@hotmail.com"})
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; }// To block from loading a new page
