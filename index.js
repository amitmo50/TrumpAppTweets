(async () => {
    const express = require('express');
    const mongoose = require('mongoose');
    const keys = require('./config/keys');
    const app = express();
    require('./models/tweet');
    await mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
    app.use(express.json());

    require('./routes/tweetsRoutes')(app);

    if(process.env.NODE_ENV === 'production'){
        // Express will serve up production assets
        app.use(express.static('client/build'));
        // Express will serve up the index.html if it doesn't recognized the rout
        const path = require('path');
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }

    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
        console.log('Backend run on http://localhost:5000');
    }); 

})();