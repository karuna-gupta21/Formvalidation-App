import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client";
import {Request ,Response} from "express";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

const Prisma = new PrismaClient();

 console.log(process.env.JWT_SECRETKEY)
export const  signUp = async(req: Request,res : Response)=>{
try {
const {email,password}=req.body;
const existingUser = await Prisma.user.findUnique({where:{email}})
if(existingUser){
  return res.status(400).json({message : "User already exits"})
}

const hashedPassword =  await bcrypt.hash(password,10)

const newUser = await Prisma.user.create({
  data:{email , password:hashedPassword}
})
return res.status(201).json({message : "User created succesfully", user : newUser})
}catch(error){
return res.status(500).json({message :  'Internal server error',error})
}
}

export const login = async(req: Request , res: Response)=>{
  try{
 const {email,password}=req.body;
 const user= await Prisma.user.findUnique({where:{email}})
if(!user){
return res.status(400).json({message: "Invalid credintials"})
}

if (!email || !password) {
  return res.status(400).json({ message: "Email and password are required" });
}

const isValidPassword = await bcrypt.compare(password,user.password)
if(!isValidPassword){
  return res.status(400).json({message : "Invalid credintials"})
}

const token= jwt.sign({userId : user.id},"JWT_SECRETKEY")
return res.json({message : "Login succesfully",token})
  }catch(error){
    console.log(error)
return res.status(500).json({message : "Internal server error",error})
  }

}