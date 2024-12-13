import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"

import { UserModel } from "../model/user.js"

const Register = async (req, res) => {
    //request from frontend
    const {firstname, lastname, phone, email, password} = req.body;

    try{
        //Checking if user exist with given email
        //select * from users where email = email; sql code this is tala ko
        const user = await UserModel.findOne({ email });

        if(user){
            return res.status(403).json({message: "Account already exist"});
        }

        //Creating hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //Creating a new user
        const newuser = new UserModel({
            firstname,
            lastname,
            phone,
            email,
            password: hashedPassword
        });
        //yoh garepachi balla databse ma save huncha
        await newuser.save();
        res.status(201).json({message: "Registered Successfully"});

    }catch(error){
        res.status(500).json(error.message);
    }
}

const Login = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await UserModel.findOne({ email });
        
        //checking if email exist or not
        if(!user){
            return res.status(404).json({message: "Account doesn't exist."});
        }

        //checking password 
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(403).json({message: "Incorrect Password"});
        }

        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
        res.status(200).json({
            token, 
            userId: user._id,
            userName: user.firstname,
        });

    }catch(error){
        res.status(500).json(error.message);
    }
}

export {Register, Login}