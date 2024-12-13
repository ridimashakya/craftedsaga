import express from 'express'
import Cart from '../model/cart.js'

const router = express.Router();

router.post ('/addToCart', async (req, res) => {
    const { userId, cartItems } = req.body;

    try{
        let cart = await Cart.findOne({ userId });

        if (cart) {
            // update exisitng cart
            cart.items = cartItems;
            await cart.save();
        } else {
            // create new cart
            cart = new Cart({ userId, items: cartItems });
            await cart.save();
        }

        res.status(200).json({ message: 'Cart updated successfully', cart });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router