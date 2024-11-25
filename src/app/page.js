import SignInButton from '@/app/components/SignInButton';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-semibold pb-5">DMshop</h1>
      <SignInButton />
    </main>
  );
}
