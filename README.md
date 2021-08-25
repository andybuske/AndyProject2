# Andy's Gift Tracker

## DESCRIPTION
This application is designed to help track gifts that were received for an occassion and ensure that the gift giver receives a Thank You Note.
It also includes User assignment to create a sort of To-Do list for each User so that they know which Notes they are expected to send.

## PROJECT LINKS
   * [github repo](https://github.com/andybuske/AndyProject2)
   * [deployed app on Heroku](https://andy-gift-tracker.herokuapp.com/users)

## WIREFRAMES
(Initial Wireframes shown here.  The navigation changed slightly as I was coding.)

![wireframes](https://github.com/andybuske/AndyProject2/blob/main/Readme-files/wireframe.png)

## USER STORIES

(All “As a User, I want to”…)
* Sign Up for the app so that I can help with Thank You Notes
* Log In to the app so that I can use it
* Delete my Profile
* Update my Profile
* Add a Giver (including their gifts) so that they get a note
* Assign a Giver to a User so that each User knows who they need to send notes to
* Edit the Giver:  
  - Name is wrong
  - Gifts are wrong or incomplete
  - Change which User the Giver is assigned to
* See which Givers are assigned to me (incl. Address) -> my to-do list
* Mark when a note has been sent to a Giver so that I know when I’m done
* See which Givers are not assigned to a User so that they are not forgotten

## REST-FUL ROUTES
![REST-ful Routes](https://github.com/andybuske/AndyProject2/blob/main/Readme-files/REST-ful%20Routes.png)


## TECHNOLOGIES USED
* Platform: Node.js with these NPM Packages:
  - DotEnv - manage environments
  - EJS - templating language that allows you to incorporate JavaScript in your HTML
  * Express - web framework
  * Method-Override - use HTTP verbs (PUT, DELETE)
  * PG - interact with a PostGreSQL database
  * Sequelize - update DB with JavaScript
* Database Management: PostGres
* Writing Code: Visual Studio Code
* Debug Code: nodemon & FireFox Developer Tools
* Version Control: GitHub
* Deployment: Heroku

## NEXT STEPS / FUTURE FEATURES
### Low-Hanging Fruit
* Stylize: fonts
* Stylize: backgrounds
### Should-do
* Better navigation (no "dead-ends")
* Responsive Design (design for mobile device)
* Use more Flexbox CSS to improve layout of some views and make them more consistent across the entire application
### Additional Features
* Add an Event Model (so that you can manage multiple Events with app; also makes it usable by other people)
* Add a Gift Model rather than including gift info in the Givers Table
  - Add an image of each gift
* USPS Address Validation (thanks to my wife for this extreme outside-the-box suggestion!)


## LESSONS-LEARNED
 * Spend more time on wireframing and make sure they have enough detail.
   + A lot of my debugging or additional work was because I dind't fully think through the navigation of my app.
 * Avoid re-factoring whenever possible.  If you "break" a naming convention initially, just suck it up rather than trying to go back and change all "users" to "user".
  