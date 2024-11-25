import jwt from 'jsonwebtoken';

// 토큰 만료시간
const DEFAULT_SIGN_OPTION = {
  expiresIn: '1h',
};

// token을 만드는 함수
export function signJwtAccessToken(payload, options = DEFAULT_SIGN_OPTION) {
  const secret_key = process.env.SECRET_KEY;
  if (secret_key !== null) {
    const token = jwt.sign(payload, secret_key, options);
    return token;
  } else {
    console.log('secret키값이 없음');
  }
}

// 토큰을 검증하는 함수
export function verifyJwt(token) {
  try {
    const secret_key = process.env.SECRET_KEY;
    if (secret_key !== null) {
      const decoded = jwt.verify(token, secret_key);
      return decoded;
    } else {
      console.log('secret키값이 없음');
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
