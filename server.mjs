import express from 'express';
const PORT = 8000;        // Might need to change Port Number - Should be unique/different
const app = express();
app.use(express.json());

app.use(function(req, res, next) {
    var allowedOrigins = ['http://localhost:8000','http://localhost:9124'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
  });

app.post('/randomnumber', (req,res) => { 

    // Range sent by partners client
    const range = req.body.range;

    // Using that range to generate a random number within in
    let min = 0;
    let max = Math.floor(req.body.range);

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNumberText = randomNumber.toString();

    // Finally sending the random number within range back to partners client.
    res.json({ randomnumber: randomNumberText})
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});