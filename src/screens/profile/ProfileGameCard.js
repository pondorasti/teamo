import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import PropTypes from "prop-types"

const useStyles = makeStyles({
  root: {
    borderRadius: 8,
    
    // fixes safari overflow bug
    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
  },
  media: { height: 73 },
  cardContent: { padding: 8 },
})

function ProfileGameCard({ imageUrl, title }) {
  const classes = useStyles()

  return (
    <Card classes={{ root: classes.root }}>
      <CardActionArea>
        <CardMedia
          classes={{ root: classes.media }}
          image={imageUrl}
          title={title}
        />
        <CardContent classes={{ root: classes.cardContent }}>
          <Typography variant="h6">{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

ProfileGameCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ProfileGameCard
