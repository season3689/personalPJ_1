# personalPJ_1
# NextJS를 이용한 간단 쇼핑몰 구현

사용 기술: react, nextJS, pirsma

Next.js를 사용하여 간단한 쇼핑몰을  개발하였습니다.  next-auth를 이용해 로그인 인증을 구현하고 prisma로 간단한 db를 구현하는게 목표입니다.

## 역할

- nextauth를 이용해 커스텀 사용자 인증, token을 만들어 검증을 거쳐 권한을 부여**
- kakao api를 이용해 로그인 인증**
- HOC(고차컴포넌트: higher order component) 사용(nextauth에서는 SessionProvider)**
- prisma를 이용해 관리자 db와 물건 db를 read**
- middleware를 구현해 로그인 했을 때 접근 가능한 url을 구현**
