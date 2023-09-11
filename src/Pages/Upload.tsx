import styled from "styled-components";
import Header from "../Block/Header";
import Uploadpage from "../Pages/Uploadpage";

const Upload = ()=>{
    return(
        <div>
     <Header/>
     <Uploadpage/>
        </div>
    );
}
export default Upload;

const Container= styled.div`
height: 600px;
width: 100vw;
display: flex;
background-color: red;
align-items: center;
justify-content: center;
`