# README #

Tint Trotter

Simple React application that interfaces with the Tint API `/feed` endpoint for fetching social media
feeds.

For this specific application, Instagram feeds were targeted from all the places that I lived
or frequently visited during my time living abroad in Switzerland. Each feed corresponds to a geography
location on the map, as indicated by the pin icon.  As the pins travels from each location, the feeds will
change to reflect the Instagram feeds from that region.

## Purpose ##

I wrote this app for 4 reasons:

1. To learn more about Tint, it's API and account management
2. Creating a good starting React app that gives examples of Redux, async calls, and testing.
this app could act as a good seed app future projects.
3. Brush-up on my React skills.
4. Have fun building something that can remind me of beautiful places I lived and saw in CH.

## Technology Stack ##

* React
* Redux
* scss
* Jest (testing)


### Setup ###

1. Install npm `brew install npm`
2. Install yarn `npm install yarn`
3. Install project dependencies `yarn install`
4. Run local dev server `yarn dev`
5. Open browser and navigate to `localhost:8080`


### Notes ###

* Fix container tests. The container tests are currently failing because I of an unmocked dependency on scss.

### Known Issues ###
* Need to add better error handing for async calls to Tint API
