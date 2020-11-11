// requiring in models folder and path dependency to locate files  
const db = require('../models')
const path = require('path');

// exporting the function and having it execute upon user request for CRUD methods 
module.exports = (app) => {
    
//static page that will render the index file 
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
//static page that will render the stats file 
app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});
//static page that will render the exercise file 
    app.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });
}; 