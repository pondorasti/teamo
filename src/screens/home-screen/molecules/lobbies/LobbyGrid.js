import React, { useEffect } from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector, useDispatch } from "react-redux"
import LobbyCard from "./LobbyCard"
import SelectedGameInfo from "./SelectedGameInfo"
import { selectAllLobbies, fetchLobbies } from "./redux/lobbiesSlice"

const useStyles = makeStyles((theme) => ({
  gridItem: {
    // Do not change this value without updating `maxWidth` for
    // LobbyGrid - `container` and SelectedGameInfo - `divContainer`
    maxWidth: 336,

    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}))

function LobbyGrid() {
  const classes = useStyles()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchLobbies())
  }, [])
  const lobbies = useSelector(selectAllLobbies)

  return (
    <div>
      <SelectedGameInfo />

      <Grid container spacing={2} justifyContent="center">
        {lobbies.map((lobby) => (
          <Grid
            key={lobby.id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            classes={{ root: classes.gridItem }}
          >
            <LobbyCard
              hostUsername={lobby.cache.hostUser.username}
              hostPicture={lobby.cache.hostUser.profilePictureUrl}
              gameLogoUrl={lobby.cache.game.logoUrl}
              gameName={lobby.cache.game.name}
              description={lobby.description}
              platform={lobby.platform}
              usesMic={lobby.microphone === "Microphone"}
              sizeStatus={`0/${lobby.size}`}
              isLoading={!!lobby.isLoading}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default LobbyGrid
