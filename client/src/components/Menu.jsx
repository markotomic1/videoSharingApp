import styled from "styled-components";
import LogoImage from "../images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
  font-size: 10px;
  position: sticky;
  top: 0;
  font-size: 10px;
`;

const Wrapper = styled.div`
  padding: 10px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Image = styled.img`
  height: 25px;
  color: red;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 2px 0px;
`;
const Hr = styled.hr`
  margin: 5px 0px;
  border: 0.5px solid #373737;
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 2px 10px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  margin-top: 5px;
  font-weight: 500;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 7px;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Image src={LogoImage} />
          Video App
        </Logo>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Library
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />

        <Login>
          Sign in to like videos, comment, and subscribe.
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Login>
        <Hr />
        {/* <Title>BEST OF VIDEO APP</Title> */}
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item>
          <SettingsBrightnessOutlinedIcon />
          Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
