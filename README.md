# UserReviews App

## How to run 
1. Run "npm install" to install all the dependencies.
2. Run "npm start" to start the nodemon server. The node server will start on default port of 3000 . In order to change the port , the change has to made in bin/.www file. 
3. The database configuration is in config/db.js file. 
4. Following are the routes :  
    '/review/fetch' - To Read all reviews  
    '/review/add' - To add a review  
    '/review/:id' - To get review by id  
    '/review/update/:id' - To update a review by id  
    '/review/delete/:id' - To delete a review by id  
    '/review/productaverage' - To get average ratings per product  
    '/review/useraverage' - To get average ratings per user  
