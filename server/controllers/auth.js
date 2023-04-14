//contains functions from users.js 
import jwt  from "jsonwebtoken"
import bcrypt from "bcryptjs"

import users from "../models/auth.js"

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try{
       const existinguser = await users.findOne({ email }); //interacting with the mongodb atlas database used in this application
       if(existinguser){
         return res.status(404).json({ message: "User already exists." })
       }

       const hashedPassword = await bcrypt.hash(password, 12) /*salt we have given as the number 12. A salt is a random string of data that is added to a password before it is hashed. 
                The salt is then stored with the hashed password, and can be used to verify the password later.*/

       const newUser = await users.create({ name, email, password: hashedPassword }) //using the hashedPassword stored in the db

       const token =  jwt.sign({ email: newUser.email, id: newUser._id } , process.env.JWT_SECRET, { expiresIn: '1h' }); //generating a token for authentication

       res.status(200).json({ result: newUser, token })
    } catch(error){
        res.status(500).json("Something went wrong...")
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try{
      
        const existingUser = await users.findOne({ email }); 

        if(!existingUser){
          return res.status(404).json({ message: "User doesn't exist." })
        }

        const isPasswordCrt = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCrt){
            return res.status(400).json({ message: "Wrong password. Please try again." })
        }
        
        const token = jwt.sign({ email: existingUser.email, id: newUser._id } , process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ result: existingUser, token })

    } catch(error){
        res.status(500).json("Something went wrong...")
    }
}