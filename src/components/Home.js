import React from 'react'
import styled from 'styled-components'
function Home() {
    return (
        <Container>
            <Header>
                <Link href="#">
                  <Play></Play>
                </Link>
                <Link href="https://whitepaper.cryptoburgers.io" target="_blank"><WhitePaper></WhitePaper></Link>
            </Header>
            <ImageBox>
              <Link href="https://discord.gg/qxqbJzRTZX" target="_blank"> 
                <Discord>
                    <img src="/ASSETS/discordia.png" />
                </Discord>
              </Link>
              <Link href="https://twitter.com/CryptoBurgerNFT" target="_blank"> 
                <Twitter>
                <img src="/ASSETS/gorjeo.png" />
                </Twitter>
              </Link>
              <Link href="https://t.me/cryptoburgersnft" target="_blank"> 
                <Telegram>
                <img src="/ASSETS/telegrama.png" />
                </Telegram>
              </Link>
            </ImageBox>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
min-height: 100vh;
height: fit-content;
background-image: url("/BACKGROUND/use.png");
background-size: cover;
background-position: center;
@media(max-width: 767px) {
  background-image: url("/BACKGROUND/use-mobile.png");
  background-size: contain;
}
`

const Header= styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;  
`
const Play = styled.img`
width: 180px;
height: 70px;
border-radius: 15px;
  background-image: url("/ASSETS/BOTON PLAY 1.png");
  background-size: cover;
  background-size: cover;
  background-position: center;

  &:hover{
    background-image: url("/ASSETS/BOTON PLAY 2.png");
    cursor: pointer;
  }

  @media only screen and (max-width: 767px) {
    width: 140px;
    height: 65px;
  }
`

const  WhitePaper = styled.img`
width: 180px;
height: 70px;
border-radius: 15px;
  background-image: url("/ASSETS/BOTON WP 1.png");
  background-size: cover;
  background-position: center;

  &:hover{
    background-image: url("/ASSETS/BOTON WP 2.png");
    cursor: pointer;
  }
  
  @media only screen and (max-width: 767px) {
    width: 140px;
    height: 65px;
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
  @media only screen and (max-width: 767px) {
    width: 50px;
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
@media only screen and (max-width: 767px) {
  width: 50px;
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
@media only screen and (max-width: 767px) {
  width: 50px;
}
`

const Link = styled.a`
  text-decoration: none;
`
export default Home
