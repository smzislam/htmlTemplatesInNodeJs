# htmlTemplatesInNodeJs
An example about how to create a RESTful API using Express.js and mongodb

  ## Installation:
    01. Install nodejs
    
    02. Install mongodb
    
    03. Configure your mongodb by changing DB_URL of your .env file
    
    04. From your command prompt install nodemon  (npm install -g nodemon)
    
    05. Start using it! npm start
    
  ## Generating auth_token
    01. Create a new User using post method at http://localhost:3000/api/user (you can easily do that using postman). 
        Send the json data as a request like bellow:

        {            
           "name": "Zara Islam",
           "email": "zara@gmail.com",
           "password": "123456"
        }
        
    02. Login using post method at http://localhost:3000/login
        Use the json data as a request like bellow:
        
          {
              "email": "zara@gmail.com",
              "password": "123456"
          }
          
    03. You will get auth_token value after login, use it as a auth_token key's value in your header request.
    
  ## Available end-points
  
    //Posts (auth_token value is required to the header, data type json)
    
    01. http://localhost:3000/api/post ( For get and post method )
    
    02. http://localhost:3000/api/post/:id ( For get, put and delete method )
    
    
    
    //Users (auth_token value is not required to the header, data type json)
    
    01. http://localhost:3000/api/user ( For get and post method )
    
    02. http://localhost:3000/api/user/:id ( For get, put and delete method )
    
    
