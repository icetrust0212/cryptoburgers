import React from 'react'
import styled from 'styled-components'
function Home() {
    return (
        <Container>
            <GameButtonLayout>
                <Link href="#">
                  <GameButton src="/ASSETS/btn_play.png"  />
                </Link>
                <Link href="https://whitepaper.cryptoburgers.io" target="_blank">
                  <GameButton src="/ASSETS/btn_whitepaper.png"/>
                </Link>
            </GameButtonLayout>
            <ImageBox>
              <Link href="https://discord.gg/qxqbJzRTZX" target="_blank"> 
                <SocialButton>
                    <img src="/ASSETS/discordia.png" />
                </SocialButton>
              </Link>
              <Link href="https://twitter.com/CryptoBurgerNFT" target="_blank"> 
                <SocialButton>
                <img src="/ASSETS/gorjeo.png" />
                </SocialButton>
              </Link>
              <Link href="https://t.me/cryptoburgersnft" target="_blank"> 
                <SocialButton>
                <img src="/ASSETS/telegrama.png" />
                </SocialButton>
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
background-size: 100% 100%;
background-position: center;
align-items: center;
justify-content: center;
display: flex;
@media(max-width: 767px) {
  background-image: url("/BACKGROUND/use-mobile.png");
  background-size: contain;
}
`

const GameButtonLayout= styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding-top: 40px;  
  @media(max-width: 767px) {
    padding-top: 80px;
  }
`
const GameButton = styled.img`
  height: 8vw;
  cursor: pointer;

  &:hover{
    padding: 3px;
  }

  @media only screen and (max-width: 767px) {
    height: 65px;
  }
`

const ImageBox = styled.div`
  width: fit-content;
  position: absolute;
  bottom: 10%;
  left: 2%;
`

const SocialButton = styled.div`
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
