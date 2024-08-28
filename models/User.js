import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    // comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    picture:{type:String},
    isAdmin:{type:Boolean}
})

userSchema.virtual('fullName').get(function () {
    return `${this.name} ${this.lastName}`
})

export default mongoose.models.User || mongoose.model('User', userSchema);