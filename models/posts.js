const mongoose = require('mongoose');
const Schema = mongoose.Schema

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        slugName: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        creator: {
            type: Object,
            // required: true
        }
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;