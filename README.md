# UserReviews App

## How to run 
1. Run "npm install" to install all the dependencies.
2. Run "npm start" to start the nodemon server. The node server will start on default port of 3000 . In order to change the port , the change has to made in bin/.www file. 
3. The database configuration is in config/db.js file. 
4. Following are the routes :  
    '/review/fetch/?id=objectid' - To Read reviews(use query for specific review)  
    '/review/add' - To add a review  
    '/review/update/:id' - To update a review by id  
    '/review/delete/:id' - To delete a review by id  
    '/review/productaverage/?sku=sku' - To get average ratings per product (use query for specific product)  
    '/review/useraverage/?user=username' - To get average ratings per user  (use query for specific user)  