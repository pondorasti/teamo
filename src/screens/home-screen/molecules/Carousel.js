import React, { useState } from "react"
import Slider from "react-slick"
import { makeStyles } from "@material-ui/core/styles"
import { ArrowLeft, ArrowRight } from "../../../assets/icons"
import "./Carousel.css"
import classNames from "classnames"
import HeroCard from "./HeroCard"
import { IconButton } from "@material-ui/core"
import PropTypes from "prop-types"

const useStyles = makeStyles({
  container: {
    width: "100%",
  },
  slider: {
    width: "100%",
    display: "flex",
    alignItems: "center",

    "& > .slick-list > .slick-track": {
      paddingTop: 24,
      paddingBottom: 24,
    },
  },
  slide: {
    width: 400,
    transform: "scale(0.7)",
    transition: "transform 300ms",
    opacity: 0.5,
  },

  activeSlide: {
    transform: "scale(1.1)",
    opacity: 1,
    zIndex: 9,
    position: "relative",
    filter: "drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.75))",
  },
})

const PrevArrow = ({ onClick }) => {
  return (
    <IconButton size="small" className="arrow next" onClick={onClick}>
      <ArrowLeft style={{ fontSize: 48 }} />
    </IconButton>
  )
}

const NextArrow = ({ onClick }) => {
  return (
    <IconButton size="small" className="arrow next" onClick={onClick}>
      <ArrowRight style={{ fontSize: 48 }} />
    </IconButton>
  )
}
PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
}
NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
}

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
      <div key={index}>
        <div className={className}>
          <HeroCard
            hostUsername={lobby.username}
            hostPicture="https://qph.fs.quoracdn.net/main-qimg-3d69658bf00b1e706b75162a50d19d6c"
            gameImg="https://cdn.mos.cms.futurecdn.net/MbZ8Yv6WNxjJkPaoQDUPLG-1200-80.jpg"
            gameName="Minecraft"
            description={lobby.description}
            platform="PS5"
            usesMic={true}
            sizeStatus="3/5"
            isContentHidden={index === imageIndex}
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
    speed: 300,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    // centerPadding: 60,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  }

  return (
    // <div className={classes.container}>
    <Slider {...settings} className={classes.slider}>
      {mapCarousel}
    </Slider>
    // </div>
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
