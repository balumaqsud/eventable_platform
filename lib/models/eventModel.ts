import  { Schema, model, models, Document } from 'mongoose';
import User from './userModel';
import Category from './categoryModel';


//This interface(IEvent) is used to 
//define the shape of event objects in the codebase. It serves several purposes:

export interface IEvent extends Document {
id: string,
title: string;
description?:string; 
location?: string; 
createdAt: Date; 
imageUrl: string;
startDateTime: Date;
endDateTime: Date;
price?: string;
isFree: boolean;
url?: string;
category: {_id: string, name: string};
organizer: {_id: string, firstName: string, lastName: string}
}

const Eventchema = new Schema({
    title: {type: String, reqirired: true},
    description: {type: String, reqirired: true},
    location: {type: String },
    createdAt: {type: Date, default: Date.now},
    imageURL:{type: String, reqirired: true},
    photo: {type: String, reqirired: true },
    startDateTime: {type: Date, default: Date.now},
    endDateTime: {type: Date, default: Date.now},
    price: {type: String},
    isFree: {type: Boolean, default: false}, 
    url: {type: String},
    category: { type: Schema.Types.ObjectId, ref: Category},
    orgoniser: {type: Schema.Types.ObjectId, ref: User}

});

const Event = models.Event || model('Event', Eventchema);

export default Event;


