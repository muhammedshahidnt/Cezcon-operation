import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import bcrypt from "bcrypt"
import { User } from "./dashboard/lib/models";
import connectToDB from "./dashboard/lib/utils";

const login = async (credentials) => {
    try {
        connectToDB()
        const user = await User.findOne({ username: credentials.username })
        if (!user) throw new Error("Wrong Cridentials")
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
        if (!isPasswordCorrect) throw new Error("Wrong Cridentials")
        return user;

    } catch (err) {
        console.log(err)
        throw new Error(err)
    }

}

export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;

                } catch (err) {
                    return null;
                }

            }
        })
    ],
    callbacks:{
        async jwt({token, user}){
            if(user){
                token.username = user.username
            }
            return token;
        },
        async session({session, token}){
            if(token){
                session.user.username = token.username
            }
            return session
            
        }
        // callbacks: {
        //     async jwt({ token, user }) {
        //       if (user) {
        //         token.username = user.username;
        //       }
        //       return token;
        //     },
        //     async session({ session, token }) {
        //       if (token) {
        //         session.user.username = token.username;
        //       }
        //       return session;
        //     },
    }
})
