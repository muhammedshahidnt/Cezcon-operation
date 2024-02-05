

import mongoose from 'mongoose'


// const { Schema } = mongoose;


const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
       

    },
    {timestamps: true}
)



export const User = mongoose.models.User || mongoose.model("User", UserSchema)
// export const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema)
// export const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema)