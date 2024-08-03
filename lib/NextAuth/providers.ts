import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const googleProvider = GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
});

const credentialsProvider = CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: { label: "Email", type: "text" },
    password: { label: "Password", type: "password" },
  },
  authorize: async (credentials) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/sign-in`,
      {
        method: "POST",
        body: JSON.stringify({
          email: credentials?.email,
          password: credentials?.password,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const user = await res.json();

    if (res.ok && user) {
      return { ...user.data, token: user.token };
    }
    return null;
  },
});
const providers = [googleProvider, credentialsProvider];
export default providers;
