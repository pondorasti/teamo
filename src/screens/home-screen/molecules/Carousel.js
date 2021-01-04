import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { IconButton } from "@material-ui/core"
import Slider from "react-slick"
import { ArrowLeft, ArrowRight } from "../../../assets/icons"
import HeroCard from "./HeroCard"
import "./Carousel.css"
import heroLobbies from "../../../api/dummy-data/heroLobbies"

const useStyles = makeStyles((theme) => ({
  slider: {
    display: "flex",
    alignItems: "center",
    "& > .slick-list > .slick-track > *": {
      outline: "none",
    },
  },
  "@keyframes centerCrossFade": {
    from: { zIndex: 60 },
    to: { zIndex: 100 },
  },
  "@keyframes leadignCrossFade": {
    from: { zIndex: 90 },
    to: { zIndex: 1 },
  },
  "@keyframes trailingCrossFade": {
    from: { zIndex: 90 },
    to: { zIndex: 1 },
  },
  allCards: {
    padding: "16px 0",
    transition: theme.transitions.create(["opacity", "transform"], {
      duration: theme.transitions.duration.carousel,
    }),

    pointerEvents: "none",

    position: "relative",
    zIndex: 5,

    // Disables focus interaction
    outline: "none",
  },

  centerCard: {
    transform: "scale(1)",
    opacity: 1,
    zIndex: 10,
    pointerEvents: "auto",
    animation: `$centerCrossFade ${theme.transitions.duration.carousel}ms linear`,
  },
  leadingCards: {
    opacity: 0,
    transform: "scale(0.5) translate(60%, 0)",
  },
  trailingCards: {
    opacity: 0,
    transform: "scale(0.5) translate(-60%, 0)",
  },
  leadingCard: {
    opacity: 1,
    animation: `$leadignCrossFade ${theme.transitions.duration.carousel}ms linear`,
    transform: "scale(0.8) translate(60%, 0)",
  },
  trailingCard: {
    opacity: 1,
    animation: `$trailingCrossFade ${theme.transitions.duration.carousel}ms linear`,
    transform: "scale(0.8) translate(-60%, 0)",
  },
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

  const mapCarousel = heroLobbies.map((lobby, index) => {
    const className = classNames(
      {
        [classes.centerCard]: (index === currentIndex),

        [classes.leadingCards]: (index + 1 <= currentIndex),
        [classes.trailingCards]: (index - 1 >= currentIndex),

        [classes.leadingCard]: (
          (index + 1 === currentIndex)
          || (index + 1 === heroLobbies.length && currentIndex === 0)
        ),
        [classes.trailingCard]: (
          (index - 1 === currentIndex)
          || (index - 1 === -1 && heroLobbies.length - 1 === currentIndex)
        ),
      },
      classes.allCards,
    )

    return (
      <div key={lobby.id} className={className}>
        <div>
          <HeroCard
            hostUsername={lobby.username}
            hostPicture="https://qph.fs.quoracdn.net/main-qimg-3d69658bf00b1e706b75162a50d19d6c"
            gameImg="https://cdn.mos.cms.futurecdn.net/MbZ8Yv6WNxjJkPaoQDUPLG-1200-80.jpg"
            gameName="Minecraft"
            description={lobby.description}
            platform="PS5"
            usesMic
            sizeStatus="3/5"
            isContentHidden={index !== currentIndex}
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

    beforeChange: (_, next) => { setCurrentIndex(next) },
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Slider {...settings} className={classes.slider}>
      {mapCarousel}
    </Slider>
  )
}

export default Carousel
