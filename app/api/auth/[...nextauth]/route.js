import NextAuth from "next-auth"
import connectDB from "@/config/mongoDB/connectDB"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id:'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                // // You need to provide your own logic here that takes the credentials
                // // submitted and returns either a object representing a user or value
                // // that is false/null if the credentials are invalid.
                // // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // // You can also use the `req` object to obtain additional parameters
                // // (i.e., the request IP address)
                // const res = await fetch("/your/endpoint", {
                //   method: 'POST',
                //   body: JSON.stringify(credentials),
                //   headers: { "Content-Type": "application/json" }
                // })
                // const user = await res.json()
          
                // // If no error and we have user data, return it
                // if (res.ok && user) {
                //   return user
                // }
                // // Return null if user data could not be retrieved
                // return null
                console.log('CREDENTIALS',credentials)
                console.log('REQ',req)
                return true
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
            console.log("USER:", user)
            console.log('PROFILE', profile)
            console.log('EMAIL:', email)
            console.log('CREDENTIALS', credentials)
            if (account.provider == 'google') {
                return true
            }else{
                console.log('ciao')
                return false
            }

            //user.email
            //user.image
            //profile.given_name
            //profile.family_name
            // console.log(account)
            // return true
        },
        async session({ session, token, user }) {
            console.log('SESSION', session)
            console.log('TOKEN', token)
            console.log('USER', user)
            return session
        }
    },
    pages: {
        signIn: '/login'
    }

})

export { handler as GET, handler as POST }


