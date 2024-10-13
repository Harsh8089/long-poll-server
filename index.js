const express = require('express');
const axios = require('axios'); 
const app = express();

setInterval(async () => {
    try {
        const response = await axios.get('https://koinx-0jk4.onrender.com');
        console.log('Response from external service:', response.data);
    } catch (error) {
        console.error('Error making request:', error.message);
    }
}, 5000); 

app.get('/', (req, res) => {
    return res.send("Server is running and polling every 5 seconds.");
});

app.listen(1000, () => {
    console.log('Server activated on PORT 1000');
});
