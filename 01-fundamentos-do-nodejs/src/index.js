const { request, response } = require('express');
const express = require('express');

const app = express();

/**
 * GET - Buscar uma informação dentro do servidor
 * POST - Inserir uma informação no  servidor
 * PUT - Alterar uma informação no servidor
 * PATH - Alterar uma informação especifica no servidor
 */

app.get("/courses", (request, response) => {
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3"
    ]);
});

app.post("/courses", (request, response) => {
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]);
});

app.put("/courses/:id", (request, response) => {
    return response.json([
        "Curso 6",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]);
})

app.path("/courses/:id", (request, response) => {
    return response.json([
        "Curso 6",
        "Curso 7",
        "Curso 3",
        "Curso 4"
    ]);
})

app.delete("/courses/:id", (request, response) => {
    return response.json([
        "Curso 6",
        "Curso 7",
        "Curso 4"
    ]);
})

//localhost:3333
app.listen(3333);