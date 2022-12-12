import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import Comments from "../components/Comments";
import Card from "../components/Card";
const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 5px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 10px;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 600;
`;
const ChanneCounter = styled.span`
  margin-top: 3px;
  margin-bottom: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;
const ChannelDesc = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 4px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width='100%'
            height='340'
            src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
            title='Youtube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test video</Title>
        <Details>
          <Info>100,000 views - 1 day ago</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon />
              123
            </Button>
            <Button>
              <ThumbDownIcon />
              Dislike
            </Button>
            <Button>
              <ReplyIcon />
              Share
            </Button>
            <Button>
              <TurnedInNotIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src='https://freepngimg.com/thumb/youtube/62644-profile-account-google-icons-computer-user-iconfinder.png' />
            <ChannelDetail>
              <ChannelName>Video Channel</ChannelName>
              <ChanneCounter>200K subscribers</ChanneCounter>
              <ChannelDesc>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque esse deserunt laborum consequuntur modi blanditiis
                culpa tempore ipsam repudiandae natus.
              </ChannelDesc>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type='small' />
        <Card type='small' />
        <Card type='small' />
        <Card type='small' />
        <Card type='small' />
      </Recommendation>
    </Container>
  );
};

export default Video;
