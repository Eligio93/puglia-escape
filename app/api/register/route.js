import User from "@/models/User";
import connectDB from "@/config/mongoDB/connectDB";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";
import googleIcon from '@/public/googleIcon.svg'


export const POST = async (req) => {
    const body = await req.json();
    await connectDB();
    const existingUser = await User.findOne({ email: body.email })
    if (existingUser) {
        return NextResponse.json('This email has been already registered', { status: 409 })
    }
    const hashedPassword = await bcrypt.hash(body.password, 8);
    try {
        const user = new User({
            name: body.name,
            lastName: body.lastName,
            email: body.email,
            password: hashedPassword,
            picture:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            isAdmin: false
        })
        await user.save();
        return NextResponse.json('User Created Correctly',{status:200})

    } catch (err) {
        console.log(err)
        return NextResponse.json('Server Error - Impossible to Register', { status: 500 })

    }
}


