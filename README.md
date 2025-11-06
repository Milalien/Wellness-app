# WELLNESS-APP

A project we made with a classmate, this version has been seperated so I could keep working on it and keep it on my GitHub.

It is an Angular web app made for a user to track their training, nutrition and mood from day to day.

Currently it is a working prototype frontend, backend could be created and connected but I've moved on from this project.

## Login

When you first open the app in your browser, it directs you to the login page. There is only one user that you can use to sign in, sign up isn't implemented since the login uses a simple Firebase backend.

## Frontpage

Frontpage is displayed after you log in. 
It has:
a To-do list you can add items on,
a mood tracker you can change by clicking on the plus sign, 
a display of the user's measurements with a button to go change them along with profile info, 
a smaller display of the calendar,
and also the Food diary.

The calendar and the food diary have ther own pages as well, but are completely usable from the frontpage.

## Profile

Profile page can be accessed from the toolbar's menu. 
It displays the user's profile info and measurements, and has the buttons to go and change some of the info. 
Currently changing the example user's email and password isn't possible, since it has been created seperately in firebase.

## Programs

In the programs page you can see one example program and create new ones.
You can choose between two excercise types and the form will display the correct input fields for that type.

## Calendar

This calendar was copied from https://mattlewis-github.com/angular-calendar/#/kitchen-sink and modified to work in this Angular version and for our purpose.
Changed the event saving to work in "events service" so that implementing the backend might be easier.

## Food diary

You can fill the form with the "users" daily intake, and it will be displayed below in the table. 
The table only shows the last 10 inputs as a temporary fix because the Angular Material Paginator didn't work in this for some reason. Will look into it later on.
