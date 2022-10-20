import { prop, getModelForClass, Ref } from '@typegoose/typegoose'
import { Comment } from './Comment'
import { User } from "./User"

//Decorador -> Que se gurada dentro de mongoose
class Product {

   @prop({ required: true, trim: true })
   name: string

   @prop({ default: 0 })
   price: number

   @prop({ lowercase: true })
   url: string

   @prop({ type: () => [String] })
   tags: Array<string>

   @prop({ type: () => [Comment] })
   comments: Comment[]

   @prop({ ref: () => User, required: true })
   owner: Ref<User>
}

const ProductModel = getModelForClass(Product)
export default ProductModel