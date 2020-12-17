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

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      maxWidth: 672 // 336 * 2
    },

    [theme.breakpoints.up("md")]: {
      maxWidth: 1000, // 336 * 3
    },
  },
  slider: {
    display: "flex",
    alignItems: "center",
  },
  allCards: {
    padding: "16px 0",
    transition: "transform 500ms, opacity 500ms",

    pointerEvents: "none",

    // Disables focus interaction
    outline: "none",
  },

  centerCard: {
    transform: "scale(1)",
    pointerEvents: "auto",
    opacity: 1,

    zIndex: 1,
    position: "relative",
  },

  leadingCards: {
    opacity: 0,
    transform: "scale(0.8) translate(60%, 0) scale(0.5)",
    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.8) translate(80%, 0) scale(0.5)",
    },
  },
  trailingCards: {
    opacity: 0,
    transform: "scale(0.8) translate(-60%, 0) scale(0.5)",
    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.8) translate(-80%, 0) scale(0.5)",
    },
  },
  leadingCard: {
    opacity: 1,
    transform: "scale(0.8) translate(60%, 0)",
    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.8) translate(80%, 0)",
    },
  },
  trailingCard: {
    opacity: 1,
    transform: "scale(0.8) translate(-60%, 0)",
    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.8) translate(-80%, 0)",
    },
  }
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
  const [currentIndex, setCurrentIndex] = useState(0)

  const mapCarousel = lobbies.map((lobby, index) => {
    const className = classNames(
      {
        [classes.centerCard]: index === currentIndex,
        [classes.leadingCards]: (index + 1 <= currentIndex),
        [classes.trailingCards]: (index - 1 >= currentIndex),
        [classes.leadingCard]: (index + 1 === currentIndex || (index + 1 === lobbies.length && 0 === currentIndex )),
        [classes.trailingCard]: (index - 1 === currentIndex || (index - 1 === -1 && lobbies.length - 1 === currentIndex)),
      },
      classes.allCards
    )

    return (
      <div key={index} className={className}>
        <div>
          <HeroCard
            hostUsername={lobby.username}
            hostPicture="https://qph.fs.quoracdn.net/main-qimg-3d69658bf00b1e706b75162a50d19d6c"
            gameImg="https://cdn.mos.cms.futurecdn.net/MbZ8Yv6WNxjJkPaoQDUPLG-1200-80.jpg"
            gameName="Minecraft"
            description={lobby.description}
            platform="PS5"
            usesMic={true}
            sizeStatus="3/5"
            isContentHidden={index === currentIndex}
          />
        </div>
      </div>
    )
  })

  const settings = {
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    draggable: false,
    adaptiveHeight: true,
    centerPadding: 0,

    infinite: true,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    // pauseOnHover: true,
    // autoplay: true,
    // autoplaySpeed: 5000,

    beforeChange: (_, next) => setCurrentIndex(next),
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