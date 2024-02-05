// import Transacticcons from "../ui/dashboard/transactions/transactions";
import { User, Product, Transaction } from "./models";
import connectToDB from "./utils";


export const FetchUsers = async () => {

    
    try {
        connectToDB();
        const users = await User.find();
        return  users;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
};
// export const FetchTransaction = async (q, page) => {

//     const rejex = new RegExp(q, 'i');

//     const ITEM_PER_PAGE = 5;
//     try {
//         connectToDB();
//         const count = await Transaction.find({ username: { $regex: rejex } }).count();
//         const transactions = await Transaction.find({ username: { $regex: rejex } }).limit(ITEM_PER_PAGE).skip((page - 1) * ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
//         return { count, transactions };
//     } catch (err) {
//         console.log(err);
//         throw new Error(err);
//     }
// };






// export const FetchUser = async (id) => {

//     try {
//         connectToDB();
//         const user = await User.findById(id);
//         return user;
//     } catch (err) {
//         console.log(err);
//         throw new Error(err);
//     }
// };


// export const FetchProducts = async (q, page) => {

//     const rejex = new RegExp(q, 'i');

//     const ITEM_PER_PAGE = 2;
//     try {
//         connectToDB();
//         const count = await Product.find({ title: { $regex: rejex } }).count();
//         const products = await Product.find({ title: { $regex: rejex } }).limit(ITEM_PER_PAGE).skip((page - 1) * ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
//         return { count, products };
//     } catch (err) {
//         console.log(err);
//         throw new Error(err);
//     }
// };


// export const FetchProduct = async (id) => {
//     // console.log('====================================');
//     // console.log(id);
//     // console.log('====================================');
//     try {
//         connectToDB();
//         const product = await Product.findById(id);
//         return product;
//     } catch (err) {
//         console.log(err);
//         // throw new Error(err);
//     }
// };






// export const fetchAPI = async () => {

//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
   
//     return data
// }

