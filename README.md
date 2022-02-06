# Example of the game

https://user-images.githubusercontent.com/3522527/152663807-ad1fd74a-792e-4748-a3cd-84d66ac90722.mp4


# Run the project

1) Git clone 
2) npm install
3) To be able to use the online functionality you need to have an account on firebase and just create one empty real time database
4) Create an .env.local file with the following variables and insert the data that has firebase:
    REACT_APP_FIREBASE_APIKEY=  
    REACT_APP_FIREBASE_AUTHDOMAIN=  
    REACT_APP_FIREBASE_DATABASEURL=  
    REACT_APP_FIREBASE_PROJECTID=  
    REACT_APP_FIREBASE_STORAGEBUCKET=  
    REACT_APP_FIREBASE_MESSAGINGSENDERID=  
    REACT_APP_FIREBASE_APPID=  
5) npm run start
6) After the cretion of the room and the initial player, please update manually on firebase the propertye isGM, that one controls the person who is going to run 
  the game
7) Enjoy! 
