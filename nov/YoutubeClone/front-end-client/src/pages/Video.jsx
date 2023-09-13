import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { MdPlaylistAdd } from 'react-icons/md';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { IoMdShareAlt } from 'react-icons/io';
//import profile from "../img/profile.jpg";
import Comments from '../components/Comments';
//import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { dislike, fetchSuccess, like } from '../redux/videoSlice';
import { subscription } from "../redux/userSlice";
import Recommendation from "../components/Recommendation";
import ReactTimeago from 'react-timeago';
const Container = styled.div`
display:flex;
gap:24px;
color:${({theme})=>theme.text};
`

const Content = styled.div`
flex:5;
padding:10px 0px;
`

const VideoWrapper = styled.div`
width: 790px;
height: 575px;
left: 0px;
top: 0px;
outline: 0px;
object-fit: cover;
display: block;
`

const Title = styled.div`
font-size:18px;
font-weight:400;
margin-top:20px;
margin-bottom:10px;
color:${({theme})=>theme.text};
`



const Details = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;`

const Info = styled.span`
/** group of like dislike button */
color:${({theme})=>theme.textSoft};
`
const Buttons = styled.div`
  display:flex;
  gap:20px;
  justify-content:space-between;
  cursor:pointer;`


const Button = styled.div`
color:${({theme})=>theme.text};
`
const Hr =styled.hr`
   margin:15px 0px;
    border: 0.5px solid ${({theme})=>theme.soft};
`

// const Recommendation = styled.div`
// flex:2;`

const Channel = styled.div`
display:flex;
  justify-content:space-between;`

const ChannelImage = styled.img`
width:50px;
height:50px;
border-radius:50%;
  
margin:5px 0.5px 0.5px 0px;
padding:0px;
`
const ChannelInfo = styled.div`
  display:flex;
  gap:20px;`

const Subscribe = styled.button`
outline:none;
border:none;
font-weight:bold;
color:white;
cursor:pointer;
border-radius:4px;
height:max-content;
padding:10px 20px;
font-size:12px;
`

const ChannelDetail = styled.div`
display:flex;
flex-direction:column;`

const ChannelName = styled.span`
font-weight:500;`

const ChannelCounter = styled.span`
  font-size:10px;
  margin:5px 0px 20px 0px;`

const Description = styled.div`
color:${({theme})=>theme.text};
font-size:12px;
`
const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

function Video() {
  const [color,setChange]=useState(true);
  const colorHandler = ()=>{
    setChange(!color);
  }
  const {currentUser} =useSelector((state)=> state.user);
  const {currentVideo} =useSelector((state)=> state.video);
  const time = new Date(Date.parse(currentVideo.createdAt));
  const dispatch =useDispatch();
  const path = useLocation().pathname.split("/")[2];

 
  const [channel, setChannel] = useState({});
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`);
     
      setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      }
      catch(err){
        
      }
    };
    fetchData();
  },[path,dispatch]);
  const handleLike =async()=>{
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  }
  const handleDislike =async()=>{
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  }
  
  const handleSub = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };
  const videoLink = currentVideo.videoUrl;
  
  return (
  <Container>
    <Content>
    <VideoWrapper>
  <VideoFrame src={videoLink} controls />

    </VideoWrapper>
    <Title>{currentVideo.title}
    </Title>

    <Details>

    <Info>
      {currentVideo.views} views .  <ReactTimeago date={time} />   </Info>
    <Buttons>
      <Button onClick={handleLike}>{currentVideo.likes?.includes(currentUser?._id) ?
      (  <AiFillLike/>)
        :
      (<AiOutlineLike/>)
      }{" "}{currentVideo.likes?.length}</Button>
      <Button onClick={handleDislike}>

      {currentVideo.dislikes?.includes(currentUser?._id) ?
      <AiFillDislike/>:<AiOutlineDislike/>}
      {" "}
      {currentVideo.dislikes?.length}</Button>
      <Button><IoMdShareAlt/>Share</Button>
      <Button><MdPlaylistAdd/>Save</Button>
      <Button><BiDotsVerticalRounded/></Button>
    </Buttons>
  </Details>
    <Hr/>
    <Channel>
    <ChannelInfo>

    <ChannelImage src={channel.img}/>
    <ChannelDetail>
      <ChannelName>
      {channel.name}</ChannelName>
    <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>

    <Description>
  {currentVideo.description}
    </Description>
    </ChannelDetail>
    </ChannelInfo>
      <Subscribe onClick={colorHandler && handleSub}
      style={{backgroundColor: color ? "#cc1a00" : "lightgrey" }}    >
  { color ? "SUBSCRIBE" : "SUBSCRIBED"}
      </Subscribe>
    </Channel>

    <Hr/>
    <Comments videoId={currentVideo._id}/>
    </Content>
    <Recommendation tags={currentVideo.tags}>
    Recommendation
  
           </Recommendation>

  </Container>
    )
}
export default Video