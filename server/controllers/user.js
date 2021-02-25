import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModal from "../models/user.js";

export const signin = async(req,res) => {
    const {email,password} = req.body;
    try {
        const alreadyUser = await UserModal.findOne({ email });
      

        if(!alreadyUser){
            return res.status(404).json({message:"User doesn't exist"});
        }
        const verifyPassword = await bcrypt.compare(password, alreadyUser.password);

        if(!verifyPassword){
            return res.status(404).json({message:"Incorrect Username or Password"});
            
        }

        const token = jwt.sign({ email: alreadyUser.email, id: alreadyUser._id }, 'test', { expiresIn: "5h" });

        res.status(200).json({result: alreadyUser, token});
    } catch (error) {
        res.status(500).json({message: 'Oops !! Something went wrong'});
    }

}

export const signup = async(req,res) => {
    const {fname, lname, email, password, confirmPassword} = req.body;

    try {
        const alreadyUser = await UserModal.findOne({ email });
       
        if(alreadyUser){
            return res.status(404).json({message:"User already exists"});
        }

        if(password !== confirmPassword) {
            return res.status(404).json({message:"Password doesn't match"});
        }
        const passwordHash = await bcrypt.hash(password,12);

        const result = await UserModal.create({email, password:passwordHash, name:`${fname} ${lname}`});

        const token = jwt.sign({email:result.email, id:result._id},'test',{expiresIn:"5h"});
       
        res.status(200).json({result, token});
    } catch (error) {
        res.status(500).json({message: 'Oops !! Something went wrong'});
    }
    
}
