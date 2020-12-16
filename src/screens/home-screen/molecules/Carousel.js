import React, { useState } from "react"
import Slider from "react-slick"
import { makeStyles } from "@material-ui/core/styles"
import NextArrow from "./NextArrow"
import PrevArrow from "./PrevArrow"
import "./Carousel.css"
import LobbyCard from "./LobbyCard"
import classNames from "classnames"

const useStyles = makeStyles({
  slider: {
    width: 800,
    paddingTop: 16,
    display: "flex",
    alignItems: "center",
  },
  cards: {
    // width: 400,
    // height: 200,
    margin: 32,
    // backgroundColor: "red",
  },
  slide: {
    transform: "scale(0.7)",
    transition: "transform 300ms",
    opacity: 0.5,
    margin: 16,
  },

  activeSlide: {
    transform: "scale(1.1)",
    opacity: 1,
    marginLeft: "-50px",
    marginRight: "-50px",
    marginTop: 8,
    padding: 16,
    zIndex: 9,
    position: "relative",
    filter: "drop-shadow(0px 0px 100px rgba(0, 0, 0, 0.75))",
  },
})

function Carousel() {
  const classes = useStyles()
  const [imageIndex, setImageIndex] = useState(0)

  const mapCarousel = lobbies.map((lobby, index) => {
    const className = classNames(
      {
        [classes.activeSlide]: index === imageIndex,
      },
      classes.slide
    )

    return (
      <div className={classes.cards} key={index}>
        <div className={className}>
          <LobbyCard
            hostUsername={lobby.username}
            hostPicture="https://qph.fs.quoracdn.net/main-qimg-3d69658bf00b1e706b75162a50d19d6c"
            gameLogo={lobby.gameLogo}
            gameName="Minecraft"
            description={lobby.description}
            platform="PS5"
            usesMic={false}
            sizeStatus="3/5"
          />
        </div>
      </div>
    )
  })

  const settings = {
    infinite: true,
    lazyLoad: true,
    focusOnSelect: true,
    // autoplay: true,
    // autoplaySpeed: 6000,
    speed: 400,
    pauseOnHover: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 30,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    className: classes.slide,
  }

  return (
    <Slider {...settings} className={classes.slider}>
      {mapCarousel}
    </Slider>
  )
}

export default Carousel

const lobbies = [
  {
    username: "Card - 1",
    gameLogo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
    description: "This is my room decription, this should be no more than three lines long...",
  },
  {
    username: "Card - 2",
    gameLogo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
    description: "This is my room decription, this should be no more than three lines long...",
  },
  {
    username: "Card - 3",
    gameLogo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
    description: "This is my room decription, this should be no more than three lines long...",
  },
  {
    username: "Card - 4",
    gameLogo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
    description: "This is my room decription, this should be no more than three lines long...",
  },
]
