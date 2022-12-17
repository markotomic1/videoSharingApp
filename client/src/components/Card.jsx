import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";

const Container = styled.div`
  width: ${(props) => props.type !== "small" && "230px"};
  cursor: pointer;
  margin-bottom: ${(props) => (props.type === "small" ? "10px" : "30px")};
  display: ${(props) => props.type === "small" && "flex"};
`;
const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "small" ? "100px" : "152px")};
  background-color: #999;
  object-fit: cover;
  flex: 1;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "small" && "16px"};
  margin-left: ${(props) => props.type === "small" && "5px"};
  gap: 12px;
  flex: 1;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: ${(props) => props.type === "small" && "none"};
`;
const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 5px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const getChannel = async () => {
      try {
        const res = await axios.get(`/users/find/${video.userId}`);
        setChannel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getChannel();
  }, [video.userId]);
  console.log(channel);
  return (
    <Link to='/video/test' style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image src={video.imgUrl} type={type} />
        <Details type={type}>
          <ChannelImage type={type} src={channel.img} />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {video.views} views -{format(video.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
