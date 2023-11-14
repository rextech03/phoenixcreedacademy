import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import  PrismaClient  from "../../prisma/client"
import {authConfig} from "./auth.config"
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../prisma/client";
import { compare } from 'bcrypt';


export const { handlers, auth } = NextAuth({
  adapter: PrismaAdapter(PrismaClient),
  session: { strategy: "jwt" },
  ...authConfig,
  providers: [
    CredentialsProvider({
    
      name: "Credentials",
    
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || credentials?.password  ) {
          return null;
        }
        const existingUser = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!existingUser) {
          return null;
        }

        const passwordMatch = await compare(credentials?.password || '', existingUser.password);
       
        if (!passwordMatch) {
          return null;
        }

        return {
          id: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
          image: existingUser.image,
          createdAt: existingUser.createdAt
        }
        
      }
    })
  ],
  callbacks: {
    // async jwt(token, user, account, profile, isNewUser) {
    //   if (user) {
    //     token.id = user.id
    //   }
    //   return token
    // }
  }
})