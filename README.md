# App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Mock data was generated using [Mockaroo](https://www.mockaroo.com/).

### Run the app with single command

`docker-compose up --build -d`

Builds and starts containerized app with a single command (though it might take a while to build images for the first time). App is accessible on [http://localhost:3000](http://localhost:3000) where the Node `express` server runs the API as well as is serving static files to deliver frontend.

### To access other app running modes, first install dependencies via

`npm install`

### Run the app in development mode via

`npm run dev`

UI runs on [http://localhost:3000](http://localhost:3000) and api calls are proxied to the backend server running concurrently on [http://localhost:5000](http://localhost:5000).

### Run app in production mode via

`npm run start`

Runs the app in the _production_ mode. App is accessible on [http://localhost:3000](http://localhost:3000) where the Node `express` server runs the API as well as is serving static files to deliver frontend.

## Other commands

`npm run analyze`

Runs `source-map-explorer` on the built frontend artifact for conveniently overlooking bundle size and composition.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
