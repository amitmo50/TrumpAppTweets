const mongoose = require('mongoose');

const { Schema } = mongoose;

const tweetSchema = new Schema({
    id: Number,
    text: String,
    isRetweet: String,
    isDeleted: String,
    device: String,
    favorites: Number,
    retweets: Number,
    date: String,
    isFlagged: String
});

mongoose.model('tweets', tweetSchema);

