import mongoose from 'mongoose'

const CartSchema = new mongoose.Schema({
    userId: {type: String, required: true, unique: true},
    items: [
        {
            id: { type: Number, required: true },
            name: { type: String, required: true },
            image: { type: String, required: true },
            new_price: { type: Number, required: true },
            quantity: { type: Number, required: true },
        },
    ],
       
});

const Cart = mongoose.model('Cart', CartSchema);
export default Cart;