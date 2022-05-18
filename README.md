# shopify-challenge-2022

This is the repository for Shopify's challenge for Backend Dveloper Intern - Fall 2022. The challenge can be found on https://jobs.smartrecruiters.com/ni/Shopify/0b0efc82-7601-40c3-ae99-1c4fb6896b83-backend-developer-intern-fall-2022-remote-us-canada-?utm_source=Intern-site&utm_medium=Intern-site&utm_campaign=May2022

The optional feature I chose is:

* When deleting, allow deletion comments and undeletion

The application can be found on Replit: https://replit.com/@SeanLausanne/shopify-challenge-2022

## Author

* Xiao Ling, xsling28@gmail.com

## Built With

* Node.js
* Express
* MongoDB

## Implementation Details

This is the backend of a inventory management system. It has APIs to perform CRUD operations of inventory items and all deletion comments and undeletion when deleting. The application is built with Node.js and Express. The data are stored in cloud on MongoDB. 

Since this a backend challenge, I focused on the backend code. I didn't build any front UI, which makes it harder for reviewers to test the code. The best way to test backend APIs is to use Postman to send requests. However, reviewers may not be able to use Postman. I coded in the way that reviewers can perform all operations with browser. This caused some unwanted change in code, for example, I'm only using HTTP GET methods. It will be clarified in Test part and in the comments of the code.

## Test

Please go to https://replit.com/@SeanLausanne/shopify-challenge-2022#index.js

Hit Run button or type the following in Shell:

```
npm install
node index.js
```

1. Open the url in a new browser tag: 

   https://shopify-challenge-2022.seanlausanne.repl.co/inventory/cleardb

   The /inventory/cleardb endpoint will clear everything in the database so that we are ready to start a new test.

   ![Screen Shot 2022-05-18 at 17.55.52](/Users/xiaoling/Desktop/untitled folder 2/Screen Shot 2022-05-18 at 17.55.52.png)

!(/Users/xiaoling/Desktop/untitled folder 2/Screen Shot 2022-05-18 at 17.55.52.png)

2. View all inventory items:

   https://shopify-challenge-2022.seanlausanne.repl.co/inventory/view/all

   The /inventory/view/all endpoint will show all the items in inventory. Now we have nothing in the database so it's an empty table

   ![Screen Shot 2022-05-18 at 17.56.07](/Users/xiaoling/Desktop/untitled folder 2/Screen Shot 2022-05-18 at 17.56.07.png)

   

