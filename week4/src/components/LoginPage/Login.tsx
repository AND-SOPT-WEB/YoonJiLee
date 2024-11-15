import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "@emotion/styled";
import Theme from "../../styles/theme";
import { Title, Input, Button, Container } from "../../styles/common";

import { PostLogin } from "../../apis/user";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 로그인 함수
  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await PostLogin(name, password);
    navigate("/mypage");
    localStorage.setItem("token",response.data.result.token)
    console.log(response.data.result.token);

  };

  return (
    <Container>
      <Title>로그인</Title>
      <LoginForm onSubmit={login}>
        <Input
          placeholder="아이디"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>로그인</Button>
      </LoginForm>
      <SignupLink to="/signup">회원가입</SignupLink>
    </Container>
  );
};

export default Login;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SignupLink = styled(Link)`
  margin: 0 auto;
  width: fit-content;
  font-size: ${Theme.fontSize.small};
  text-decoration: underline;
  color: ${Theme.color.gray};
  cursor: pointer;

  &:hover {
    color: ${Theme.color.black};
  }
`;
