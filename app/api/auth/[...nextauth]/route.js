import NextAuth from "next-auth"
import connectDB from "@/config/mongoDB/connectDB"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                name: { label: 'Name', type: 'text', placeholder: 'John' },
                lastName: { label: 'Last Name', type: 'text', placeholder: 'Smith' },
                password: { label: 'Password', type: 'password' }

            }
        })
        ,
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENTID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            //profile.given_name
            //profile.family_name
            //profile.email
            console.log(credentials)
            // return true
        }
    }
    // pages:{
    //     signIn:'/login'
    // }

})

export { handler as GET, handler as POST }


