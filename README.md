# Google-Translate REST API Example
A RESTful API example for Translating text using NodeJS Express

It is a just simple rest api for translating text from one language to another language using **@vitalets/google-translate-api** (Google translate library) and **database caching** using MYSQL for repeated hits.And Tests are written in **Mocha** and **chai** framework.

## Installation & Run
```bash
# Download this project
git clone github.com/aj-gupta/node-translate
```

Before running API server, you should set the database config with yours.
Create a .env file into root directory And add your credentials as given below.
Create Database and tables
```bash
HOST=                         //specify host eg.localhost
DB_USER=                      //specify username
PASSWORD=                     //specify password
DB=                           //specify database name
NODE_ENV='development'
```

```
# Database
Create Databse of name freedbtech_translate
Create Table translate 
Table information is given in the database folder.
```

```bash
# Run
cd node-translate
npm start or npm run dev(using nodemon)
# Running Test
npm test
# API Endpoint : http://127.0.0.1:5000
```

## Structure
```
├── config
│   └── db.js                // Database connection
├── controllers
│   └── translate.js         // Controller for our translate-api
├── database
│   ├── schema.png           // Database Schema image file
│   └── sql-query.sql        // SQL query for creating table
├── middleware
│   └── errorHandler.js      // Error Handler for rest-api
├── routes
│   └── translate.js         // Translate Router
├── services
│   ├── cache-service.js     // Database caching strategy
│   ├── google-translate.js  // google translate service
│   └── language.js          // language and their codes
├── test
│   └── tanslate-api-test.js // translate api test  
├── .env                     // configuration variables
├── readme.md                // Readme file
├── package.json
├── package-lock.json
└── server.js                // entry point of application
```

## API

#### /translate
* `POST` : Translate Text
   
    * **`req.body`**:
        ```
        {
            "text":"Text for translate",
            "slang":"source language",
            "tlang":"target language"
        }
        ```
    * `response`:
        ```
        {
            "translatedText": "Translated Text."
        }
        ```

## Features and Further improvements and features

- [x] Support basic REST APIs.
- [x] Support translate of text of any language specified in google translate service.
- [x] Support Database caching(for repeated hits.).
- [x] Organize the code with packages
- [x] Service like google-translate and cache service are put in another folder so we can change easlily.
- [x] Rest api testing.
- [ ] Support smart pre-caching(if a user want to translate another language).
- [ ] Support for segment Translation.
- [ ] Support for google translation services like autoML etc.