import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/config/mongoDB/connectDB";
import User from "@/models/User";
import bcrypt from 'bcryptjs'


export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }

        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: "email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await connectDB()

                const user = await User.findOne({ email: credentials.email })
                if (user) {
                    const matchingPassword = await bcrypt.compare(credentials.password, user.password)
                    if (matchingPassword) {
                        return user
                    }
                    return null

                }
                return null

            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            //from the user object returned from authorize, store info in token
            if (user) {
                token.userId = user._id
                token.userPicture = user.picture
                token.isAdmin = user.isAdmin
            }
            return token
        },
        async session({ session, token }) {
            //get the info about the user from the token 
            if (token) {
                session.user.userId = token.userId
                session.user.image = token.userPicture
                session.user.isAdmin = token.isAdmin
            }
            return session
        }

    },
    pages: {
        signIn: '/login'
    }

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }