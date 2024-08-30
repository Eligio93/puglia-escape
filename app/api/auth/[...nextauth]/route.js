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
                    throw new Error('Invalid email and/or password')
                }
               throw new Error('Email is invalid')
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            console.log('ACCOUNT', account)
            console.log('USERJWT', user)
            console.log('TOKENJWT', token)
            if (account && account.provider === 'google') {

                //mettere logica di inserire l'user su DB e dare l'iD al token
                //mettere subito le informazioni che ci servono nel token
                return token
            }
            if (account && account.provider == 'credentials') {
                //mettere le informazioni che ci servono nel token
                token.userId = user._id
                token.picture = user.picture
                token.isAdmin = user.isAdmin
            }

            return token
        },

        async session({ session, token, user }) {
            console.log('SESSION', session)
            console.log('TOKEn', token)
            console.log('USER', user)
            //get the info about the user from the token 

            if (token) {
                session.user.userId = token.userId
                session.user.image = token.picture
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