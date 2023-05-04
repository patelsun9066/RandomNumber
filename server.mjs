import express from 'express';
const PORT = 8000;        // Might need to change Port Number - Should be unique/different
const app = express();
app.use(express.json());


app.post('/randomnumber', (req,res) => { 

    // Range sent by partners client
    // const range = req.body.range;

    // Using that range to generate a random number within in
    let min = Math.ceil(req.body.min);
    let max = Math.floor(req.body.max);

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let randomNumberText = randomNumber.toString();

    console.log(randomNumber);
    
    // Finally sending the random number within range back to partners client.
    res.json({ randomnumber: randomNumberText})
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});