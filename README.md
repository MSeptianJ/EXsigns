# EXsigns
ini adalah source code untuk submisi di kelas Belajar Fundamental Front-end Web Development di Dicoding

# How to Use
1. Open "Exigns" folder with text editor
2. Install dependencies with "npm install"
3. Go to src->script->data->flat-icon-api.js
4. Get Token

	How to get token:
      1. Go to https://developer.flaticon.com/landing
      2. Get the Apikey and copy it
      3. Use postman with Url: https://api.flaticon.com/v2/app/authentication with method POST
      4. Use the body at postman with KEY named 'apikey' dan VALUE with the apikey from before
      5. Send it, and there will be a response with the token inside
      6. Copy the token dan paste it inside variable 'token'
      
5. Run script with "npm run start-dev" on the terminal
6. Done
