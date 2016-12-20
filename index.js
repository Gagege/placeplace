const app = require('express')();
const pgp = require('pg-promise')({
    pgNative: true
});
app.get('/', (req, res) => {
    res.send('Place Place Dot Space: Remember the rhyme and you\'ll have a good time!');
    
    const db = pgp('postgres://grmsirknzbiexo:QRZp6BzWLDJG7mKO2TP3Wj1LH1@ec2-54-247-186-89.eu-west-1.compute.amazonaws.com:5432/d1pev8t7dhfen3');

    db.one('SELECT $1 AS value', 123)
    .then(function (data) {
        console.log('DATA:', data.value)
    })
    .catch(function (error) {
        console.log('ERROR:', error)
    });
});
app.listen(3000);