import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { IconButton } from "@material-ui/core"
import { ArrowLeft, ArrowRight } from "../../../assets/icons"
import HeroCard from "./HeroCard"
import Slider from "react-slick"
import "./Carousel.css"

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
    justifyContent: "space-between",
    "& > .slick-list": {
      // maxWidth: 672 // 336 * 2
    }
  },
  "@keyframes crossFade": {
    "from": { zIndex: 1 },
    "to": { zIndex: 10 },
  },
  allCards: {
    padding: "16px 0",
    transition: theme.transitions.create(["opacity", "transform"], {
      duration: theme.transitions.duration.carousel,
    }),

    pointerEvents: "none",

    // Disables focus interaction
    zIndex: 5,
    position: "relative",
    outline: "none",
  },

  centerCard: {
    transform: "scale(1)",
    pointerEvents: "auto",
    opacity: 1,
    zIndex: 10,

    animation: `${theme.transitions.duration.carousel}ms linear $crossFade`,
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
    animation: `${theme.transitions.duration.carousel}ms linear reverse $crossFade`,
    transform: "scale(0.8) translate(60%, 0)",
    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.8) translate(80%, 0)",
    },
  },
  trailingCard: {
    opacity: 1,
    animation: `${theme.transitions.duration.carousel}ms linear reverse $crossFade`,
    transform: "scale(0.8) translate(-60%, 0)",
    [theme.breakpoints.down("sm")]: {
      transform: "scale(0.8) translate(-80%, 0)",
    },
  }
}))

function PrevArrow({ onClick }) {
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

function NextArrow({ onClick }) {
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
  const theme = useTheme()
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
            isContentHidden={index != currentIndex}
          />
        </div>
      </div>
    )
  })

  const settings = {
    focusOnSelect: true,
    speed: theme.transitions.duration.carousel,
    slidesToShow: 3,
    centerMode: true,
    draggable: false,
    adaptiveHeight: true,
    centerPadding: 0,

    infinite: true,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,

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