const mongoose = require('mongoose');
const Tweet = mongoose.model('tweets');

module.exports = (app) => {
    
    app.get('/api/getSortData', async (req, res) => {
        const tweet = await Tweet.find({}, null, {sort: {date: 1}});
        res.send(tweet);
    });
}
