import mongoose from 'mongoose'
const mediaPlayerSchema = new mongoose.Schema({
    title: {
    type: String,
    required: 'title is mandatory'
},
description: String,
genre: String,
views: {
    type: Number,
    default: 0
},
postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
},
updated: Date,
created: {
    type: Date,
    default: Date.now
}
})

export default mongoose.model('Media', mediaPlayerSchema)

