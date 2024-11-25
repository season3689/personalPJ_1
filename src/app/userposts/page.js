'use client';
import { useSession } from 'next-auth/react';
import React from 'react';
import Link from 'next/link';

export default function UserPosts() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <Link href={'./'} className="border">
          Home
        </Link>
        <div className="pt-5">{session.user.name}님 안녕하세요</div>
      </main>
    );
  }
}
