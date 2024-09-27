// this code means that code runs on the server, here we create aand export actions
'use server'
import { CreateUserParams, UpdateUserParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../databes"
import User from "../models/userModel"
import Order from '../models/orderModel'
import Event from '../models/eventModel'
import {revalidatePath} from 'next/cache'

 
//server action that creates a user to our database
export const createUser = async (user: CreateUserParams) =>{
    try {
        await connectToDatabase();

        const newUser = await User.create(user);

        return JSON.parse(JSON.stringify(newUser));
        
    } catch (error) {
        handleError(error)
    }

}

// update user

export const updateUser = async (clerkId: string, user:UpdateUserParams) => {
    try {
        await connectToDatabase();

        const updatedUser = await User.findByIdAndUpdate({clerkId}, user, {new: true})
        
        if (!updatedUser) throw new Error('user was not updated')
        return JSON.parse(JSON.stringify(updateUser))
    } catch (error) {
        handleError(error)
    }
}


// deleting part

export const deleteUser = async (clerkId: string) => {
    try {
        await connectToDatabase()
        const userToDelete = await User.findOne({clerkId});

        if (!userToDelete) {
            throw new Error('user was not found')
        }
    ////// unlink relationships
     await Promise.all([
      // Update the 'events' collection to remove references to the user
      Event.updateMany(
        { _id: { $in: userToDelete.events } },
        { $pull: { organizer: userToDelete._id } }
      ),

      // Update the 'orders' collection to remove references to the user
      Order.updateMany({ _id: { $in: userToDelete.orders } }, { $unset: { buyer: 1 } }),
    ])

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id)
    revalidatePath('/')

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null


        
    } catch (error) {
        handleError(error)
    }
}

