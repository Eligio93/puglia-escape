import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
    postSlug:{type:String},
    likes:{type:Number},
    comments:[{type:Schema.Types.ObjectId, ref:'Comment'}]
})

export default mongoose.models.Post || mongoose.model('Post', postSchema);