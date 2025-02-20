const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/deals', (req, res) => {
    const deals = [
        { name: "Restaurant ABC", discount: "20%" },
        { name: "Store XYZ", discount: "50%" },
        { name: "Cafe 123", discount: "Free Drink" }
    ];
    res.json(deals);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
