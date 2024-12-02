import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "@emotion/styled";
import Theme from "../../styles/theme";
import { Title, Button, Container } from "../../styles/common";
import { PostLogin } from "../../apis/user";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // 로그인 함수
  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await PostLogin(name, password);
    localStorage.setItem("accessToken", response.data.result.token);
    console.log(response.data.result.token);
    navigate("/mypage");
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
        <PasswordWrapper>
          <Input
            placeholder="비밀번호"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordToggle
            onClick={() => setShowPassword((prev) => !prev)}
            type="button"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </PasswordToggle>
        </PasswordWrapper>
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

const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${Theme.color.gray};

  &:hover {
    color: ${Theme.color.black};
  }
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

const Input = styled.input`
  padding: 1rem 1rem;
  padding-right: 2rem;
  border: 1px solid ${Theme.color.gray};
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
`;
