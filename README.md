# WebAppDev
Sweat 
Social Media Web Application
Jose Ramirez Quezada & Kyle VanSteelandt


Resources used:

Bootstrap 4.6.0
HTML5
icon8
Google Chrome Dev Tools
Google Fonts
Visual Studio Code
Github
Github Desktop
Vue JS

About Us:
Sweat is a social media web application that aims to connect athletes
and fitness enthusiasts with other like minded individuals!
Sweat aims to take inspiration from other, well known, social media
applications such as Twitter, Facebook, Instagram, and Reddit.

General Layout:
Most of our inspiration for the design comes from twitter where we
really like how the welcoming page, sign up, sign in and the landing
page flowed together. 

General Design: 
For our UX, we decided to select a color pallet
that we both liked. This colora pallet was enough for us to be able to 
contrast different elements when required. It would also allow us to highlight
any important info/buttons/text for the user to quickly see.

For a fun and creative side of the design, we decided to use small icons next to
labels/button to introduce the user to different meaning. Foir example, when the
width of the screen shrinks enough, the nav bar on the left will chnage size and
the labels will dissapear except for the icons. So, after the user had experienced 
the app for some time, they would have matched the icons.

Welcoming Page (Jose):
The purpose of this page was to simply ask the user whether they wanted to sign in or
sign up. One idea was to show the user the signin page and have a signup button if they
wanted to do that instead, but we liked this idea better. We thought this would keep the 
pages clean and compact.

Sign Up (Kyle):
The Sign Up page honestly has more fields than I'd like as while 
looking at examples for insperation and styles to implement every
website kept the sign up very simple (First Name, Last Name, Email,
Username, Password, though rarley some did have age and gender). As 
I originally wanted to have a quick pop-up on the welcoming page
just like twitter but found the enlarged form with all the requirements
looked out of place. I used the darker outline to try and 'focus' the
users eyes towards the form and I also wanted to keep the single line 
per entry that twitters sign up follows as it keeps everything legible
and easy for users of all ages.

Validation on Sign Up form (Kyle):
Followed the Vue.js documentation on form validation to create the nessesary
functions required to complete ethe assignment. Text fields turn red when
there is an error (Nothing in a required field, invalid characters, wrong confirmation),
and the top of the sign up form also informs the user as to where and why the error occured.
The submit button now brings the user to the sign in page. All required fields except for the 
users date of birth are validated and checked using vue.js. Date is not a format that vue could
handle which required me to keep the browser validation on for the date verification though I 
did follow the vaildateEmail() function in the vue.js documentation to create a validator that
worked without the brower. 

Sign In (Jose):
I took inspiration from Facebbok and decided to keep the sign in page as simple as possible.
As you will see throughout the app is that we have rounded the edges of the containers to give 
design a smoother look. The users can simply sign in with password and username/email

Landing(Jose & Kyle):

User Content Feed (Kyle):
For the content feed most of the insperation agian comes from twitter
giving the users a straight forward feed that allows them to see the 
content of the desired content creators in a simple (Scroll down for 
more) style. I followed W3 tutorials and refered to classwork to format 
the feed to something that I felt was presenable. Originally I had the 
header follow the users scroll but agreed with Jose that the lower parts
of the page looked better without. 

Navigation and Sidebars (Jose):
For the navigation bar, I wanted to make is as user friendly and responsive as possible. We have a 
design that is very common and traditional. We have the logo, some common options, and a button for more options
as we expand the project. The nav bar and its content will shrink based on the width of the screen. Once the
width gets too small, then the nav bar will shrink and the label will dissapear leaving only the icons for
simplicity. I have added a CSS effect that I implemented myself to be more visually appealing. The buttons will pop
up as they hover over to let the user know they are selecting the right button.

Logo (Jose):
This logo was created using logomakr. For the design we wanted to keep it simple, but it also had to relate to the 
name of the project. The name is sweat and hence the drop of water/sweat. The color pallet also had a little bit 
of influence on the logo. 