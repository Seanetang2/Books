import React from "react";
import styled from "styled-components"
import video from "../Assets/dribble.mp4"
import {BsSearch} from "react-icons/bs"



const Hero = () =>{
    return(
        <div>
         <Container>
         <Video src={video} muted loop autoPlay playsInline />
        <Cover />
        <ContentHolder>
          <Category>
            <Box>Romance</Box>
            <Box>Romance</Box>
            <Box>Romance</Box>
            <Box>Comedy</Box>
            <Box>Comedy</Box>
            <Box>Comedy</Box>
            <Box>Comedy</Box>
            <Box>Comedy</Box>
            <Box>Comedy</Box>
            <Box>Comedy</Box>
            <Box>Comedy</Box>
            <Box>Comedy</Box>
            <Box>music</Box>
            <Box>music</Box>
            <Box>Comedy</Box>
            <Box>Comedy</Box>
            <Box>Comedy</Box>
            <Box>Comedy</Box>
            <Box>music</Box>
            <Box>music</Box>
            <Box>music</Box>
            <Box>Comedy</Box>
            <Box>music</Box>
            <Box>music</Box>
            <Box>music</Box>
            <Box>music</Box>
          </Category>
          <Big></Big>
          <BoldText>Explore the world’s leading Books Autors</BoldText>
          <SmallText>
            Millions of designers and agencies around the world showcase their
            portfolio work on Dribbble - the home to the world’s best design and
            creative professionals.
          </SmallText>
          <InputIconHolder>
            <BsSearch />
            <Input placeholder="Search By Author Name.....  " />
          </InputIconHolder>
        </ContentHolder>
         </Container>
        </div>
    )
}

export default Hero;

const  Big = styled.div``

const Box = styled.div`
  padding: 10px 25px;
  border: 1px solid silver;
  border-radius: 25px;
  cursor: pointer;
  transition: all 350ms;
  scroll-snap-align: start;

  &:hover {
    border: 1px solid white;
  }
`;

const Text = styled.div``;

const Category = styled.div`
  width: 90%;
  margin: 20px 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  scroll-behaviour: auto;
  overflow-y: auto; 
  overscroll-behaviour-x: contain;
  scroll-snap-type: x mandatory;
  scroll-bar-type: none;

  
  &::-webkit-scrollbar{
    display: none;
  }
`;

const Icon = styled.div`
  color: #908b8b;
  font-size: 20px;
  margin-right: 10px;
`;

const Input = styled.input`
  flex: 1;
  height: 100%;
  border: 0;
  outline: 0;
  font-size: 17px;
  color: grey;

  &::placeholder {
    font-size: 17px;
  }
`;

const InputIconHolder = styled.div`
  background-color: #fff;
  width: 23%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 25px;
`;

const BoldText = styled.div`
  font-weight: 900;
  font-size: 40px;
  width: 40%;
`;

const SmallText = styled.div`
  font-weight: 600;
  font-size: 15px;
  width: 45%;
  margin: 30px 0;
`;

const ContentHolder = styled.div`
  position: absolute;
  color: white;
  top: 70px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
//   background-color: rgba(0, 0, 0, 0.7);
  top: 0;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Container = styled.div`
height:90vh;
width:100%;
background-color: black;
`