# Interactive-Frontend-Development-Milestone-Project 2

This is the second Milestone Project based on the first one "User Centric Front-End Development Project: Milestone 1 - InMadrid.com / Housing for Young Professionals & Students".
Implementing JavaScript functionalities: Google Map, Send Mail with emailJS and first steps to filter listing. Listing is a JSON file that I will use to make the selection options for searchapartment.html page and searchappartment.ES.html.
Housing website with Welcome page, Search Apartment for tenants where I have added Google Map with markers for the listing options and Rent out Apartment page including dropdown with Home Staging services page and “Contact Us” form with Email JS Templates for owners/landlords.

 

## Demo ##
Link to live demo:  https://romar19.github.io/Interactive-Frontend-Development-Milestone-Project/


## UX Process Design: ##
All pages on this site include "Navigation" and "Footer" with collapsible navigation bar with a dropdown menu for Landlords to learn about How to rent out and Home Staging services. The Footer has links to contact info. with my own email address (rmf1312@hotmail.com, info@inmadrid.com doesn't exist yet) and Social Media links to the login pages of the sites (not real social links created yet for the brand InMadrid.): Facebook, Pinterest, Instagram.
The colors used in this project were:
"#434738" (Dark grey. Text Color) "#B5D43C" (Olive Green. Text color, Buttons) "#D9EF81" (Light Olive Green. Background, Button) "#F7F7F7" (Light Grey. Nav Text, Background) "#E6E3E3" (Lighter Grey. Navbar Hover Effect)
I have imported the fonts from Google Fonts: "'Nunito', sans-serif; “.”


## Technology used ##
For this project I have used HTML5, CSS3 and Bootstrap 4 (4.3.1) for the layout, forms, jumbotron... and added my own CSS to style the website, using also Google Fonts to add new fonts and Font Awesome 5 for icons.
This second Milestone include Java Scrip functionalities: 
- Using Google Map platform to implement Map with markers to the listing address on searchapartment.html and searchapartment.ES.html 
- Email JS to send Email with Auto-replay. Received emails from "Contac Us" at rentout.html and rentout.ES.html are linked to my Google account). 
- jQuery to add listing and filter listing options in future. 
- JSON file created for listing (data base).


## Testing  ##
Testing with Chrome Developer Tools. Resizing screen to see how pages respond to different sizes: forms, images and layout. Responsive design successfully achieved. 
Check in links and buttons one by one to match with the correct pages. Code HTML5 and CSS3 validated with W3C Validator without errors. 
Testing responsiveness and layout for small screens with different mobile brands from friends. 
Tested "Contact Us" Form at "rentout" page with required inputs in order to be submitted. Google map and EmailJS functionality and initial steps to filter listing tested with Chrome Developer Tools and jshint.com, not errors fund.


## Deployment ##
This project is hosted using Github pages, directly from the master branch. 
Using Gitpod terminal to add, commit and push my work to Github Website. Different commits during the development process editing, updating or changing files. Errors found during deployment process caused by C9 AWS, it doesn't recognize my Github account. After tutor's help we have to "force" my work overwriting my previous commits, I lost 38 commits, new ones created before submitting the project to update latest changes. 
New commits to save changes done during the implementation of JavaScript functionalities.
 


## Credits ##
All content of this site was written by me.

## Content ##

This is a Multilanguage site English/Spanish - Spanish/English with UK and Spain flags to click and change language.

Including 6 pages: 

### index.html ###
This is the landing page or Welcome page where to find a link to Search Apartment for tenants or to Rent Out for owners/landlords.

### index.ES.html ###
Spanish translation for landing/Welcome page.

### searchapartment.html ###
It is the searching options page with selection options for listing and photo gallery to search apartment for tenants (young professionals and students with a mid-long (per months) stay in Madrid. Adding Map with markers to the addresses of the listing and first steps to make a proper filter listing. 

### searchapartment.ES.html ###
Spanish translation for Searching Apartment page for tenants. Also including Map with markers to the addresses of the listing and first steps to make a proper filter listing.

### rentout.html ###
This is the page for owners/landlords who want to rent out an apartment, room or studio. Including "Contact us" form and Home Staging services explaining basic steps to style a place.
Here I have added the EmailJS functionality where user will receive a "Thanks to contact us" auto-replay once the user clicks on "Submit" button. The purpose is to let the user know that the team has received the email and team will contact user soon.

    Template: 

Hi {{from_name}},                                           

Thanks to contact us.

We will phone you in the next 8 hours. 

Have a good day!

InMadrid Team

*******************

Hola {{from_name}}, 

Muchas gracias por contactar con nosotros. 

Recibirás nuestra llamada en las próximas 8 horas.

Que tengas un buen día.

Equipo de InMadrid.

-----------------------

Upload a picture option is not working yet, due the need of a Premium account to add more features.

### rentout.ES.html ###
Spanish translation page for owners/landlords. Implemented also "Contact Us" sending email to me and auto-replay for the user in English and Spanish. 

### homestaging.html ### 
This is the Home Staging projects page to show owners/landlords how to style apartments to rent out faster and better plus services offered.

### homestaging.ES.html ###
Spanish translation page for Home Staging service/projects for owners/landlords.

On these pages I have used multiple Bootstrap components, such as:
Navbar, Modal forms, Images gallery, Timeline (to explain 3 steps).
Footer Links applied to all pages: With Contact info., About us and Social Media Links.

## Media ##
All photos are downloaded from Google, only using photos allowed to use even for commercial purposes. Some of them customized and cropped to have same size.

## Acknowledgements ##

Inspired in other Real Estate and Housing websites as: Spotahome.com, Housinganywhere.com, ...