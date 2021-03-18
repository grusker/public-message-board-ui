# PublicMessageBoard
Coding challenge - A Public Message Board

This is a simple UI project to show the functionality of the project in my `public-message-board` repository.

The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

## How to run

In the root directory of this repository, there is a docker-compose.yml file. Create a copy of this file in your local computer. In a terminal, navigate to the same folder with this file and just run the command below.

````docker-compose up````

This will download the images for both backend and frontend application (if they don't exist in your local machine) and run them. 

Navigate ``http://localhost:4200/`` in your browser and you can start to use the application.

<br/>
You can access/download the docker image via the link below.

``https://hub.docker.com/repository/docker/gruske/public-message-board-ui``

If you still want to build it yourself, project has a Dockerfile. Just run the command below:

``docker build -t gruske/public-message-board-ui .``

## Without docker images

If you want to run the application in your local computer, clone this repo and change proxy.conf.json file like this.

````
{
  "/server": "http://localhost:8080",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug",
    "pathRewrite": {
      "^/server": ""
    }
  }
}
````

Then run the application with `npm start` and navigate to `http://localhost:4200/`.

To make the UI work, also run the backend application in my `public-message-board` repository. You may find the instructions in README.md file of the project.
