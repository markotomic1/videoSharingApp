import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 600;
`;
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.span`
  font-size: 14px;
`;
const Comment = () => {
  return (
    <Container>
      <Avatar src='https://freepngimg.com/thumb/youtube/62644-profile-account-google-icons-computer-user-iconfinder.png' />
      <Details>
        <Name>
          John Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          veritatis, quis alias tempora odit cupiditate eaque corporis nulla
          neque eveniet.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
