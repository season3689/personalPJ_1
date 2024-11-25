'use client';
import react, { useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Login() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async () => {
    const currnetUrl = searchParams.get('redirect');
    const result = await signIn('credentials', {
      username: emailRef.current,
      password: passwordRef.current,
      redirect: false,
    });
    if (!currnetUrl) {
      router.push('./');
    } else {
      router.push(currnetUrl);
    }
  };

  const handleKakao = async () => {
    const result = await signIn('kakao', {
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center space-y-5 p-24">
      <h1 className="text-3xl font-semibold">로그인</h1>
      <div>
        <label htmlFor="email" className="block text-sm text-gray-800">
          email
        </label>
        <input
          ref={emailRef}
          onChange={(e) => {
            emailRef.current = e.target.value;
          }}
          name="email"
          type="email"
          autoFocus={true}
          className="mt-2 border px-4 py-2 "
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm text-gray-800">
          password
        </label>
        <input
          ref={passwordRef}
          id="password"
          name="password"
          type="password"
          onChange={(e) => {
            passwordRef.current = e.target.value;
          }}
          className="mt-2 border px-4 py-2"
        />
      </div>

      <div>
        <button
          onClick={handleSubmit}
          className="w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
        >
          로그인
        </button>
      </div>

      <div>
        <button
          onClick={handleKakao}
          className="w-full transform rounded-md bg-yellow-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
        >
          kakao login
        </button>
      </div>
    </main>
  );
}
