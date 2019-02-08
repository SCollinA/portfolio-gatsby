---
path: "/blog/my-second-post"
date: "2017-11-07"
title: "My first blog post"
---

# Space App
### Idea Origin
We love space, and one of our favorite things to do is go outside at night and look at the stars and wonder what is out there. So we designed an app to tell us what is out there and when we can see it.
Using just a user's location, we request space and weather data from various APIs to create and display events for the user.

### Demo
* Sign Up
<!-- ![alt text](../../readme-images/demo-sign-up.png?raw=true) -->
<p>
    <img src='readme-images/demo-sign-up.png'>
</p>

* Login
<p>
    <img src='readme-images/demo-login.png'>
    <img src='readme-images/login-phone.png'>
</p>

* View Your Profile
* Add Friends and Space Objects
<p>
    <img src='readme-images/demo-add-friends.png'>
</p>

* View Space Events
<p>
    <img src='readme-images/demo-events.png'>
    <img src='readme-images/demo-events-phone.png'>
</p>


### Backend
* User objects
* Space objects
* Events

### API Requests
##### Dark Sky API
(http://www.api.darksky.net)
##### lookUP API
(http://www.strudel.org.uk/lookUP)
##### NASA CAD API
(https://ssd-api.jpl.nasa.gov/cad.api)

### Libraries
##### Axios
* makes network requests from the backend
* essentially works like fetch from frontend
* used to get space data and add events to database

##### Node-schedule
* uses cron-like interface to schedule tasks
* create job with callback function

##### Passport
* used OAuth 2.0 to authorize users to login with Google+
* also created a normal login/register option 


##### Express, express-session, pg-promise, connect-pg-simple, bodyparser, bcrypt, dotenv
* Used connect-pg-simple to connect to PostgreSQL and express-session to start a user session when they login.


### Styling
* created the html and css in front-end folder
* view templates used to serve pages from backend
* NASA APOD archive used for webpage backgrounds
* flex box
* overflow hidden/scroll events
* position sticky for month headers

### Challenges
* calculating visibility of space objects
* Using OAuth with PostgreSQL (and not MongoDB). The arguments and parameters were needed to be the same length as in the schema and in the models. Empty arguments we entered null or ''.
* Having both normal login and google login to work. Fixed by taking from both user ids and authenticating them. 


### Future Plans
* Come up with better name
* Chat with users 
* Share pictures
* Notify users of events
* Add more space data


### Team Members
Collin Argo [https://github.com/scollina](https://github.com/scollina)<br>
Will Harris [https://github.com/harriswill22](https://github.com/harriswill22)<br>
Helen Hasegawa [https://github.com/mkdir-helen](https://github.com/mkdir-helen)<br>
Isaac Fonseca [https://github.com/isaacfo](https://github.com/isaacfo)<br>