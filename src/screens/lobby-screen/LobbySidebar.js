import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Drawer, Toolbar, Grid, Divider } from "@material-ui/core/"
import LobbyHeader from "./LobbyHeader"
import PlayerCard from "./PlayerCard"

const drawerWidth = 352
const useStyle = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    padding: 24,
    backgroundColor: theme.palette.grey[800]
  },
  drawerContainer: {
    overflow: "auto",
  },
}))

function LobbySidebar() {
  const classes = useStyle()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <Grid container spacing={3}>
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
          <Divider style={{ height: "1px" }}/>
        </Grid>

        <Grid container item spacing={2}>
          <PlayerCard
            username="Pondorasti"
            gamerTag="Lascorpy"
            avatarUrl="https://avatars0.githubusercontent.com/u/32957606?s=460&u=e631c3762c12d41f3ce0348b8137f0751a2eed75&v=4"
            bio="we only allow this many characters? 52 chars, let's make it 62"
          />
          <PlayerCard
            username="Pondorasti"
            gamerTag="Lascorpy"
            avatarUrl="https://avatars0.githubusercontent.com/u/32957606?s=460&u=e631c3762c12d41f3ce0348b8137f0751a2eed75&v=4"
            bio="we only allow this many characters? 52 chars, let's make it 62"
            isHost
            isAccepted
          />
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default LobbySidebar