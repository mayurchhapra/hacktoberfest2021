# Shopping app back-end
----------------
Online Ecommerce App built on React js and Node js.




[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Demo api path
----------------
 https://shopping-app-hs.herokuapp.com/

 ## API Documentation
----------------
 https://app.swaggerhub.com/apis-docs/hitesh-soni/XenditECommerce/1.0

  
## Environment Variables
----------------
To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL`

`BASE_URL`

`PUBLIC_KEY`

`PRIVATE_KEY`


## Prerequisites
----------------
- [Node.js v14.0+](http://nodejs.org)
- [MongoDB](https://www.mongodb.com/download-center/community)
- Git installed in system

  
## Local development setup
----------------
Clone latest code from github

Go to project directory

Install node packages

```bash
  npm install
```
Now configure env variables and user below command to start project

```bash
  npm run watch
```

  
## Deployement setup
----------------
Generate build

```bash
  npm run build
```
Use below command to deply this app on heroku (You have to configure heroku CLI in your system)

```bash
  git pish heroku main
```

  ## Test cases
----------------
To test all the test cases defined in test folder use below command

```bash
  npm run test
```

  ## Test coverage
----------------
To get NYC test coverage result use below command

```bash
  npm run coverage-test
```


## License
-------

The MIT License (MIT)


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
