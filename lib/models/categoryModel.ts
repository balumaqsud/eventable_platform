
import {Document, Schema, model, models } from 'mongoose'

export interface Icategory extends Document {
    _id: string, 
    name: string
}

const categorySchema = new Schema({
    name: { type: String, required: true, unique: true}
})

const Category = model('Category', categorySchema) || models.Category;

export default Category; 