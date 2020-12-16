import React, { useState } from "react"
import Slider from "react-slick"
import { makeStyles } from "@material-ui/core/styles"
import { ArrowLeft, ArrowRight } from "../../../assets/icons"
import "./Carousel.css"
import classNames from "classnames"
import HeroCard from "./HeroCard"
import { IconButton } from "@material-ui/core"
import PropTypes from "prop-types"

const useStyles = makeStyles(theme => ({
  container: {
    margin: "auto",

    [theme.breakpoints.up("sm")]: {
      maxWidth: 672 // 336 * 2
    },

    [theme.breakpoints.up("md")]: {
      maxWidth: 1008, // 336 * 3
    },
  },
  slider: {
    display: "flex",
    alignItems: "center",

    "& > .slick-list > .slick-track": {
      // padding: "48px 0",
    },
  },
  slide: {
    transform: "scale(0.8)",
    outline: "none",
    transition: "transform 300ms",

    padding: "16px 0",
  },

  activeSlide: {
    transform: "scale(1)",

    // zIndex: 9,
    // position: "relative",
  },
}))

const PrevArrow = ({ onClick }) => {
  return (
    <IconButton
      size="small"
      onClick={onClick}
      style={{ marginRight: 16 }}
    >
      <ArrowLeft style={{ fontSize: 48 }} />
    </IconButton>
  )
}

const NextArrow = ({ onClick }) => {
  return (
    <IconButton
      size="small"
      onClick={onClick}
      style={{ marginLeft: 16 }}
    >
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
      <div key={index} className={className} style={{ width: 400 }}>
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
    )
  })

  const settings = {
    focusOnSelect: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,

    className: "center",

    variableWidth: true,
    adaptiveHeight: true,
    centerPadding: 0,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    // pauseOnFocus
    // pauseOnHover: true,
    // autoplay: true,
    // autoplaySpeed: 6000,

    beforeChange: (current, next) => setImageIndex(next),
  }

  return (
    <div className={classes.container}>
      <Slider {...settings} className={classes.slider}>
        {mapCarousel}
      </Slider>
    </div>
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
  {
    username: "Card - 5",
    gameLogo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
    description: "This is my room decription, this should be no more than three lines long...",
  },
  {
    username: "Card - 6",
    gameLogo: "https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png",
    description: "This is my room decription, this should be no more than three lines long...",
  },
]

// function Arrow(props) {
//   let className = props.type === "next" ? "nextArrow" : "prevArrow";
//   className += " arrow";
//   const char = props.type === "next" ? "👉" : "👈";
//   return (
//     <span className={className} onClick={props.onClick}>
//       {char}
//     </span>
//   );
// }