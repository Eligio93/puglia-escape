import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author:{type: Schema.Types.ObjectId, ref: 'User'},
    message:{type:String}
},{timestamps:true})

export default mongoose.models.Comment || mongoose.model('Comment', commentSchema);