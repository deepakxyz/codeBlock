const express = require('express');
const app = express();
app.listen(3000, ()=> console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = [];

// route
app.post('/api', (request, response) => {
    console.log(request.body);
    const data = request.body;
    database.push(data);
    response.json({
        status: "success",
        lat: data.lat,
        long: data.long,
        name : data.name
    });
});