 function(){
      emailjs.init("user_beHlAh5GReL0LXJKxQclh");
      emailjs.send("gmail", "inmadrid_contact_form", {
    name: 'Rocio',
    notes: 'I have an apartment available to rent out ...'
}; 


emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });