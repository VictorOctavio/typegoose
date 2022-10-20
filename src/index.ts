import mongoose from 'mongoose'
import Product from './models/Product'

async function connectDB() {
   const db = await mongoose.connect('mongodb://localhost/typegoosedb')
   console.log(`dababase is connected to ${db.connection.db.databaseName}`)
}

connectDB()


async function executeQueries() {
   // const user = new User({
   //    firstname: "Oct1",
   //    lastname: "victor",
   //    email: "oct1gauna@gmail.com",
   //    password: "Neyma"
   // })

   // await user.save()   
   // console.log(user)

   // const users = await User.find({}, {firstname: 1, _id: 0})
   // console.log(users)

   // const user = await User.findOne({firstname: "Oct1"}, {_id: 0})
   // console.log(user)

   // const user = await User.findOneAndUpdate({_id: "6351c39a60732ccf694a7076"}, {firstname: "Bebito", email: "bebito@gmail.com"}, {new: true})
   // console.log(user)

   // DeleteMany
   // const user = await User.deleteMany({email: "oct1gauna@gmail.com"})
   // console.log(user);

   // PRODUCT ----------------

   const product = await Product.create({
      name: "Product 1",
      price: 100,
      url: "http://proDUct1.com/products",
      tags: ["laptop", "gaming", "razer"],
      comments: [
         { text: "awesome product", }, { text: "not bad product" }],
      owner: '6351c39a60732ccf694a7076'
   })

   console.log(product);

}

executeQueries()