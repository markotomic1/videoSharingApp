import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownIconOutlined from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import Comments from "../components/Comments";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  dislike,
  fetchFailure,
  fetchStart,
  fetchSuccess,
  like,
} from "../redux/videoSlice";
import { subscription } from "../redux/userSlice";
import { format } from "timeago.js";
import Recommendation from "../components/Recommendation";
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
const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const path = useLocation().pathname?.split("/")[2];

  const [channel, setChannel] = useState({});

  useEffect(() => {
    dispatch(fetchStart());
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );

        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (error) {
        dispatch(fetchFailure());
      }
    };
    fetchData();
  }, [path, dispatch]);

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };
  const handleSubscribe = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo.videoUrl} controls></VideoFrame>
        </VideoWrapper>
        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>
            {currentVideo?.views}views - {format(currentVideo?.createdAt)}
          </Info>
          <Buttons>
            <Button onClick={handleLike}>
              {currentVideo.likes.includes(currentUser._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpOutlinedIcon />
              )}
              {currentVideo.likes?.length}
            </Button>
            <Button onClick={handleDislike}>
              {currentVideo.dislikes.includes(currentUser._id) ? (
                <ThumbDownIcon />
              ) : (
                <ThumbDownIconOutlined />
              )}
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
            <Image src={channel.img} />
            <ChannelDetail>
              <ChannelName>{channel.name}</ChannelName>
              <ChanneCounter>{channel.subscribers} subscribers</ChanneCounter>
              <ChannelDesc>{currentVideo.desc}</ChannelDesc>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={handleSubscribe}>
            {currentUser.subscribedUsers?.includes(channel._id)
              ? "Subscribed"
              : "subscribe"}
          </Subscribe>
        </Channel>
        <Hr />
        <Comments videoId={currentVideo._id} />
      </Content>
      <Recommendation tags={currentVideo.tags} />
    </Container>
  );
};

export default Video;
