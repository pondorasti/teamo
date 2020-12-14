import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Drawer, Toolbar, Grid, Divider } from "@material-ui/core/"
import LobbyHeader from "./LobbyHeader"
import PlayerCard from "./PlayerCard"
import data from "../../lobbyPlayersDummyData"

const drawerWidth = 352
const useStyle = makeStyles(theme => ({
  drawerRoot: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.grey[800]
  },
  drawerContainer: {
    overflow: "auto",
    padding: 24,
  },
}))

function LobbySidebar() {
  const classes = useStyle()

  return (
    <Drawer
      variant="permanent"
      classes={{
        root: classes.drawerRoot,
        paper: classes.drawerPaper
      }}
    >
      {/* An extra toolbar for shifting the content of the page under the app bar */}
      <Toolbar />

      <div className={classes.drawerContainer}>
        <Grid container spacing={3} >
          <LobbyHeader
            lobbyHost="Pondorasti"
            gameName="Minecraft"
            gameLogo="https://logos-world.net/wp-content/uploads/2020/04/Minecraft-Logo.png"
            lobbyDesc="This is my room decription, this should be no more than three lines long..."
            platform="PC"
            mic="Microphone"
            players="4/4 Players, 1 waiting"
          />

          <Grid item style={{ width: "100%" }}>
            <Divider style={{ height: "1px" }} />
          </Grid>

          <Grid container item spacing={2}>
            {data.map((player, index) => (
              <PlayerCard
                key={index}
                username={player.username}
                gamerTag={player.gamerTag}
                avatarUrl={player.avatarUrl}
                bio={player.bio}
                isHost={player.isHost}
                isAccepted={player.isAccepted}
              />
            ))}
          </Grid>
        </Grid>
      </div>
    </Drawer>
  )
}

export default LobbySidebar