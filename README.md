## Intro

This project has both a server and frontend components. The tech stack for this repo is

NodeJS (version 10.X), ExpressJS, MongoDB (with Mongoose), React

The build system is webpack

## Before running

Before running the application make sure you have MongoDB installed and running on port `27017`
If for some reason that port is already in use, please make sure to update the port in the code.

If you need to install MongoDB here are some instructions:
- Mac
  - `brew tap mongodb/brew`
  - `brew install mongodb-community@4.2`
  - To start mongodb:
    - `brew services start mongodb-community@4.2`
  - To stop mongodb:
    - `brew services stop mongodb-community@4.2`
- Windows
  - Download and run the installer from https://www.mongodb.com/try/download/community?tck=docs_server
  - Unselect MongoDB Compass during the installation process.
  - The installation will install mongodb as a service and will require a computer restart.


## How to run

- `yarn`
- `yarn start`

Open http://localhost:8080 in a browser.

Once the project is running you should expect to see only an input field. Don't be alarmed, this is what is expected. Below are some tasks we would like you to complete.

## But before you get to that, here is some information about the API:

- GET `/pokemon`

Accepted query parameters:
  - search
  - limit
  - offset     

You should not have to update or change the server at all, but please feel free to do so.

## Given exercises/tasks

#### Implement search functionality for the application

We want to be able to search for particular pokemon by name and have the list display only the matching pokemon. 

Requirements:
- search by pokemon name
- case insensitive
- search string can appear anywhere within the pokemon name
- time permitting: implement a debounce function from scratch (no external libraries) that will be used when typing into the search field


#### Implement Lazy Loading of the pokemon

Because we cannot display all 151 pokemon on the screen at the same time we should not load all the pokemon at once; instead we should load only the necessary amount and then retrieve more when appropriate.

Requirements:
- React application retrieves more data when necessary for the user. Chained requests, timers, parallel/async requests should not be used.
- We are not asking for pagination, we are looking for lazy loading based on some conditions (to be determined by you).


#### Implement "Save to/Remove from" bag feature

We want the ability to "save" or "remove" a pokemon from our bag, and we would like to save this information in the database. When a pokemon is saved to our bag, there should be an indication in the list view that they are in the bag. Bonus: provide a way to toggle the list view to display "saved pokemon" & "all pokemon".

This should use client side storage to store the "saved to bag" value

Requirements:
- Able to save and remove a pokemon from the bag via the UI in list view
- Bag status is saved in a client/browser storage
- List view has a clear indication whether the pokemon is saved in bag or not
- Bonus: filter list view by bag status


#### Testing

Implement a unit test for at least one of the features above. 

Requirements
- create a unit test (to be run with Jest) for one or more of the features above


#### More bonus

We have stubbed out/provided a very plain, simple, basic UI. If you have time and if you would like, please feel free to make the UI a bit nicer on the eyes.