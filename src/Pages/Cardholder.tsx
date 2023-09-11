import React from "react";
import styled from "styled-components";
import img from "../Assets/motivation.jpg";
import ims from "../Assets/main p .jpg";
import ima from "../Assets/romance.jpg";
import imr from "../Assets/aboutmytechlife.JPG";
import imd from "../Assets/comedy.JPG"
import imm from "../Assets/WhatsApp Image 2023-07-31 at 11.01.20 AM.jpeg"
import pro from "../Assets/profileimage.png"
import chi from "../Assets/whatlifetells.JPG"
import la from "../Assets/LORS5861.JPG"

import {BsEyeFill} from "react-icons/bs"

const Cardholder = () =>{
    return(
        <div>
            <Container>
                <Maincard>
                    <Holdfor>
                    <Card src= {img} />
                    <Textholder>
                    <Text>Motivational</Text>
                    </Textholder>
                    <Hover> 
                        <Test3>i cant make this up</Test3>
                    </Hover>
                    <Under>
                        <Mage></Mage>
                        <Profile src= {pro} />
                           <Text1>Sean etang........</Text1>
                           <Views></Views>
                           <BsEyeFill/>
                           <Text2>150.9kk</Text2>
                       </Under>
                    </Holdfor>
                    <Holdfor>
                    <Card src= {imd} />
                    <Textholder>
                    <Text>Comedy</Text>
                    </Textholder>
                    <Hover> 
                        <Test3>Be sure to catch some fun</Test3>
                    </Hover>
                    <Under>
                        <Mage></Mage>
                        <Profile src= {pro} />
                           <Text1>Sean etang........</Text1>
                           <Views></Views>
                           <BsEyeFill/>
                           <Text2>125.6k</Text2>
                       </Under>
                    </Holdfor>
                    <Holdfor>
                    <Card src= {ima} />
                    <Textholder>
                    <Text>Romance</Text>
                    </Textholder>
                    <Hover> 
                        <Test3>love till death</Test3>
                    </Hover>
                    <Under>
                        <Mage></Mage>
                        <Profile src= {pro} />
                           <Text1>Sean etang........</Text1>
                           <Views></Views>
                           <BsEyeFill/>
                           <Text2>560.8k</Text2>
                       </Under>
                    </Holdfor>
                    <Holdfor>
                    <Card src= {imm} />
                    <Textholder>
                    <Text>music</Text>
                    </Textholder>
                    <Hover> 
                        <Test3>Best jam you can ever get</Test3>
                    </Hover>
                    <Under>
                        <Mage></Mage>
                        <Profile src= {pro} />
                           <Text1>Sean etang........</Text1>
                           <Views></Views>
                           <BsEyeFill/>
                           <Text2>1.5m</Text2>
                       </Under>
                    </Holdfor>
                    <Holdfor>
                    <Card src= {imr} />
                    <Textholder>
                    <Text>About tech life</Text>
                    </Textholder>
                    <Hover> 
                        <Test3>Change your mindset</Test3>
                    </Hover>
                    <Under>
                        <Mage></Mage>
                        <Profile src= {pro} />
                           <Text1>Sean etang........</Text1>
                           <Views></Views>
                           <BsEyeFill/>
                           <Text2>6.2m</Text2>
                       </Under>
                    </Holdfor>
                    <Holdfor>
                    <Card src= {ims} />
                    <Textholder>
                    <Text>About christmas</Text>
                    </Textholder>
                    <Hover> 
                        <Test3>santaclus is coming soon.......</Test3>
                    </Hover>
                    <Under>
                        <Mage></Mage>
                        <Profile src= {pro} />
                           <Text1>Sean etang........</Text1>
                           <Views></Views>
                           <BsEyeFill/>
                           <Text2>12k</Text2>
                       </Under>
                    </Holdfor>
                    <Holdfor>
                    <Card src= {chi} />
                    <Textholder>
                    <Text>life</Text>
                    </Textholder>
                    <Hover> 
                        <Test3>the right part</Test3>
                    </Hover>
                    <Under>
                        <Mage></Mage>
                        <Profile src= {pro} />
                           <Text1>Sean etang........</Text1>
                           <Views></Views>
                           <BsEyeFill/>
                           <Text2>8.1m</Text2>
                       </Under>
                    </Holdfor>
                    <Holdfor>
                    <Card src= {la} />
                    <Textholder>
                    <Text>way to Richies</Text>
                    </Textholder>
                    <Hover> 
                        <Test3>thinking possitive🤗🤗</Test3>
                    </Hover>
                    <Under>
                        <Mage></Mage>
                        <Profile src= {pro} />
                           <Text1>Sean etang........</Text1>
                           <Views></Views>
                           <BsEyeFill/>
                           <Text2>10m</Text2>
                       </Under>
                    </Holdfor>
                </Maincard>
            </Container>
            </div>
    )
}

export default Cardholder;

const Test3 = styled.div`
margin-top: 130px;
`

const Textholder = styled.div`
height: 100px;
position: absolute;
top: 0;
width: 100%;
z-index: 1;  

`

const Mage = styled.div``

const Views = styled.div``

const Text2 = styled.div``

const Text1 = styled.div``

const Profile = styled.img`
height: 60px;
width: 65px;
border-radius: 40px;
margin-right: 20px;
object-fit:contain;
`

const Under = styled.div`
height: 60px;
width: 300px;
display:flex;
align-items:center;
justify-content: space-between;
`

const Text = styled.div`
height: 35px;
width: 55%;
background-color: rgba(0, 0, 0, 10);
border-radius: 20px;
font-style: Bold;
color: white;
font-size: 20px;
margin-top:5px;
margin-left: 15px;
z-index: 1;  
display:flex;
justify-content: center;
align-items:center;
`

const Holdfor = styled.div`
position: relative;
color:red;
font-size: 15px;
`

const Hover = styled.div`
Height: 160px;
width: 300px;
object-fit: cover;
background-color: rgba(0, 0, 0, 0.3);
position: absolute;
top:0;
transition: all 350ms;
margin-top: 40px;

opacity: 0;

&:hover{
    opacity: 1
}


`


const  Card = styled.img`
Height: 200px;
width: 300px;
object-fit: cover;
`

const Maincard = styled.div`
min-Height: 500px;
width: 90%;
display:flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Container = styled.div`
Height: 100vh;
width: 100%;
display:flex;
justify-content:center;
align-items:center;
`