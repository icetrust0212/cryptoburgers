import React from 'react'
import styled from 'styled-components'
function Home() {
    return (
        <Container>
            <Header>
                <Play></Play>
                <WhitePaper></WhitePaper>
            </Header>
            <ImageBox>
                <Discord>
                    <img src="/ASSETS/discordia.png" />
                </Discord>
                <Twitter>
                <img src="/ASSETS/gorjeo.png" />
                </Twitter>
                <Telegram>
                <img src="/ASSETS/telegrama.png" />
                </Telegram>
            </ImageBox>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100vh;
background-image: url("/BACKGROUND/use.png");
background-size: cover;
background-position-x: 50%;
background-position-y: center;
background-size: cover;
background-repeat-x: initial;
background-repeat-y: initial;
background-attachment: initial;
background-origin: initial;
background-clip: initial;
background-color: initial;
background-size: cover;
background-position: 50%

`

const Header= styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  
  
`
const Play = styled.div`
width: 180px;
height: 70px;
border-radius: 15px;
margin: 20px 200px;
  background-image: url("/ASSETS/BOTON PLAY 1.png");
  background-size: cover;
  background-position-x: 50%;
  background-position-y: center;
  background-size: cover;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  background-size: cover;
  background-position: 50%;

  &:hover{
    background-image: url("/ASSETS/BOTON PLAY 2.png");
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    margin: 10px 20px;
  }
`

const  WhitePaper = styled.div`
width: 180px;
height: 70px;
border-radius: 15px;
margin: 20px 200px;
  background-image: url("/ASSETS/BOTON WP 1.png");
  background-size: cover;
  background-position-x: 50%;
  background-position-y: center;
  background-size: cover;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  background-size: cover;
  background-position: 50%;

  &:hover{
    background-image: url("/ASSETS/BOTON WP 2.png");
    cursor: pointer;
  }
  
  @media only screen and (max-width: 600px) {
    margin: 10px 20px;
  }
`

const ImageBox = styled.div`
  width: 200px;
  position: absolute;
  bottom: 10%;
  left: 2%;

`

const Discord = styled.div`
  width: 80px;
  margin-top: 10px;
  img{
      width: 100%;

      &:hover{
          transform: scale(1.1);
          cursor: pointer;
      }
  }
`

const Twitter = styled.div`
width: 80px;
margin-top: 10px;
img{
    width: 100%;

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
}
`

const Telegram = styled.div`
width: 80px;
margin-top: 10px;

img{
    width: 100%;

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
}
`
export default Home
