import React, { useState } from "react"
import Slider from "react-slick"
import { makeStyles } from "@material-ui/core/styles"
import NextArrow from "./NextArrow"
import PrevArrow from "./PrevArrow"
import "./Carousel.css"
import LobbyCard from "./LobbyCard"

const useStyles = makeStyles({
  slider: {
    width: "50%",
    display: "flex",
    alignItems: "center",
  },
  card: {
    // width: 600,
    // height: 200,
  },
})

function Carousel() {
  const [imageIndex, setImageIndex] = useState(0)

  const classes = useStyles()

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  }

  return (
    <Slider {...settings} className={classes.slider}>
      {lobbies.map((lobby, index) => (
        <div key={index} className={index === imageIndex ? "slide activeSlide" : "slide"}>
          <LobbyCard
            hostUsername={lobby.username}
            hostPicture="https://qph.fs.quoracdn.net/main-qimg-3d69658bf00b1e706b75162a50d19d6c"
            gameLogo={lobby.gameLogo}
            gameName="Minecraft"
            description={lobby.description}
            platform="PS5"
            usesMic={false}
            sizeStatus="3/5"
            className={classes.card}
          />
        </div>
      ))}
    </Slider>
  )
}

export default Carousel

const lobbies = [
  {
    username: "Pondorasti",
    gameLogo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
    description: "This is my room decription, this should be no more than three lines long...",
  },
  {
    username: "Pondorasti",
    gameLogo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
    description: "This is my room decription, this should be no more than three lines long...",
  },
  {
    username: "Pondorasti",
    gameLogo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
    description: "This is my room decription, this should be no more than three lines long...",
  },
  {
    username: "Pondorasti",
    gameLogo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
    description: "This is my room decription, this should be no more than three lines long...",
  },
]
