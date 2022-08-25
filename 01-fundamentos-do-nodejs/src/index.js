const { application, request } = require('express');
const express = require('express');

const app = express();

app.get("/", (request, response) =>{
    return response.json({message: "Hello Word Ignite!"});
});

//localhost:3333
app.listen(3333);