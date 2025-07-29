import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        if (email === "admin@example.com" && password === "123456") {
          return { id: 1, name: "Admin", email };
        }
        return null;
      },
    }),
  ],
});
