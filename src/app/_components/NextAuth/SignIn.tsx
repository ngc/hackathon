"use client";

import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

// Page for signing in
const SignIn = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // For now, redirect to root page to display 'Welcome Back' page
  if (status === "authenticated") {
    router.push('/');
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button className='bg-yellow-300 rounded-md p-2' onClick={() => signIn('google')}>
        Sign in with Google
      </button>
    </div>
  )
}

export default SignIn;