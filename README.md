<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# personalPJ_1
# NextJS를 이용한 간단 쇼핑몰 구현

사용 기술: react, nextJS, pirsma

Next.js를 사용하여 간단한 쇼핑몰을  개발하였습니다.  next-auth를 이용해 로그인 인증을 구현하고 prisma로 간단한 db를 구현하는게 목표입니다.

## 역할

- nextauth를 이용해 커스텀 사용자 인증, token을 만들어 검증을 거쳐 권한을 부여
- kakao api를 이용해 로그인 인증
- HOC(고차컴포넌트: higher order component) 사용(nextauth에서는 SessionProvider)
- prisma를 이용해 관리자 db와 물건 db를 read
- middleware를 구현해 로그인 했을 때 접근 가능한 url을 구현
>>>>>>> 77b6c29ae22557e46977cb5887145d4c999f539a
