const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: 'Invalid input format' });
    }

    // Filter numbers and alphabets
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    // Find highest lowercase alphabet
    const lowerAlphabets = alphabets.filter(item => item >= 'a' && item <= 'z');
    const highestLowercaseAlphabet = lowerAlphabets.length > 0 ? [Math.max(...lowerAlphabets)] : [];

    res.json({
        is_success: true,
        user_id: "Akanksha_Chhabra+18042003", 
        email: "akanksha0655@gmail.com", 
        roll_number: "21BCI0169", 
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
