function sendMail(contactForm) {
    emailjs.send("gmail", "inmadrid_contact_form", {
        "subject": contactForm.subject.value,
        "typeof_house": contactForm.typeofhouse.value,
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "uploaded_photo": contactForm.input_file_now.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; }// To block from loading a new page






