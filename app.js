const express = require('express');
const app = express();
const users = [{
    id: 1,
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
},
{
    id: 2,
    name: "Bertram Gilfoyle",
    email: "gilfoyle@piedpiper.com",
},
];

app.get('/users', (req, res) => {
    res.send(users);
});
app.listen(4000, () => {
    console.log('Application listening on port 4000!');
});


