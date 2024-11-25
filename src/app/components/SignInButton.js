'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

export default function SignInButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <>
        <h2 className="pb-2">{session.user.name}님 어서오세요</h2>
        <div className="space-x-10">
          <button
            className="rounded-xl border bg-yellow-300 px-12 py-4"
            onClick={() => signOut()}
          >
            Log Out
          </button>
        </div>
      </>
    );
  } else {
    return (
      <div className="space-x-10">
        <button
          className="rounded-xl border bg-yellow-300 px-6 py-2"
          onClick={() => signIn()}
        >
          접속
        </button>
      </div>
    );
  }
}
