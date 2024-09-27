import mongoose, { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    clerkId: {type: String, reqirired: true, unique: true},
    email: {type: String, reqirired: true, unique: true},
    username: {type: String, reqirired: true, unique: true},
    firstName: {type: String, reqirired: true},
    lastName:{type: String, reqirired: true},
    photo: {type: String, reqirired: true }
});

const User = models.User || mongoose.model('User', UserSchema);

export default User;