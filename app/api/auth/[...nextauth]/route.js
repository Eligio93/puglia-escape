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
                console.log(credentials)
                const user = await User.findOne({ email: credentials.email })
                //checks if the user has signed up with google before, in case there's no password and he need to login with google again
                if(!user.password){
                    throw new Error('Invalid Password')
                }
               console.log(user)
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
        async signIn({ user, account, profile, email, credentials }) {
            console.log('SIUSER', user)
            console.log('SIACCOUNT', account)
            console.log('SIPROFILE', profile)
            console.log('SIEMAIL', email)
            console.log('SICREDENTIALS', credentials)
            if (account.provider === 'google') {
                await connectDB();
                const existingUser = await User.findOne({ email: user.email })
                console.log('EXISTINGUSER',existingUser)
                if (!existingUser) {
                    const newUser = new User({
                        name: profile.given_name,
                        lastName: profile.family_name,
                        email: profile.email,
                        picture: profile.picture,
                        isAdmin: false
                    })
                    console.log('Salvataggio nel DB')
                    await newUser.save()
                    return true
                }
                return true
            }
            return true
        },

        async jwt({ token, user, account }) {
            console.log('ACCOUNT', account)
            console.log('USERJWT', user)
            console.log('TOKENJWT', token)
            if (account && account.provider === 'google') {
                // await connectDB();
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