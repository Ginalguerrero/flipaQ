
# flipaQ

## Description
filpaQ is a study app that is used to create and review "flashcards". it works similar to physical flash cards. A question is displayed on screen and the user answers it. Then with the press of a button the correct answer appears. User create their own flashcards using the webpage interface. The flashcards are saved to their user account.

## Deployed Link
Heroku: https://flipaq-app.herokuapp.com/

[React App (1).webm](https://user-images.githubusercontent.com/112473624/207942657-24835485-9b27-4536-bb45-7e92da9b897d.webm)

## GitHub Repo Link
GitHub: https://github.com/Ginalguerrero/flipaQ


## Features
- User creation
- User Login
- Create flashcards
- Update flashcards
- Delete Flashcards
- View Flashcards
- Reveal Answer with button press

## Technology Used
- HTML
- CSS
- JavaScript
- Express.js
- NodeJS
- Heroku
- React
- MongoDB
- useState
- useEffect
- bcrypt
- cookie parser
- axios
- ReactDOM
- http-status-codes
- jsonwebtoken

## Installation & Usage
- Run `npm i` or `npm install` to install the dependecies
- Run `npm run start:dev` to run the app

## User Stories

User
To be able to log in and make an account 
Store my info between sessions
FE: design for the login/signup pages
BE: login/signup routes

User
Create cards with front (q) and back(a)
Add to deck
FE: Form for card creation 
(input-> question,answer, and deck)
BE: Needs to store the card making sure that the field is not empty

User
Create a deck that is a collection of cards
Study the deck
FE: Form for deck creation
(input-> name)
BE: Needs to create the deck on the database and check if name is unique



## Code-Snippet
https://github.com/Ginalguerrero/flipaQ/blob/24fce8b6492d71ec6b0f70ec0f5a41c13d4f60b5/client/src/components/Deck/QuizCard.js#L27-L45

## Video Clip

![Creating cards](Screenshots/React-App.gif)

## Creators
- Gina Guerrero
- Jie Zou
- Greg Krolick
