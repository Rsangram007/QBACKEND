const express = require('express');
const sequelize = require('./config/database');
const cryptoRoutes = require('./routes/cryptoRoutes');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(express.json());


// Enable CORS for all origins
app.use(cors({
    origin: '*',  // Replace with your frontend's origin
}));

// Use routes
app.use('/api', cryptoRoutes);

// Sync the database
sequelize.authenticate()
    .then(() => {
        console.log('Database connected successfully');
        // Sync the database
        // return sequelize.sync();
    })

    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.get ("/",(req,res)=>{
    res.send("Welcome")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});