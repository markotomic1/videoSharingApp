import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 100px);
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;
const Title = styled.h1`
  font-size: 22px;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 5px 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  margin-top: 5px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;
const Link = styled.span`
  margin-left: 20px;
`;

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", { name, password });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to Video Page</SubTitle>
        <Input
          placeholder='username'
          type='text'
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleClick}>Sign in</Button>
        <Title>Or</Title>
        <Title>Sign Up</Title>

        <Input
          placeholder='username'
          type='text'
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder='email'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default Login;
