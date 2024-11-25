export { default } from 'next-auth/middleware';

// matcher 부분을 추가해서 로그인한 상태만 볼 수 있는 페이지를 계속 추가
// userposts 밑으로 로그인한 사람만 볼 수 있음
export const config = {
  matcher: ['/userposts/:path*'],
};
