import React from 'react';
import Login from '../components/Login/Login';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h2>로그인</h2>
      <Login />
      <p>
        아직 회원이 아니신가요? <a href="/join">회원가입</a>
      </p>
    </div>
  );
};

export default LoginPage;
