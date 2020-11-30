import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import TMAutocomplete from '../atoms/TMAutocomplete'

const games = ['Minecraft', 'League of Legends', 'Among Us']
const platforms = ['PC', 'Play Station', 'XBOX', 'VR']

const useStyles = makeStyles((theme) => ({
  selectGameDiv: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0px',
    padding: '20px 0px',
    backgroundColor: theme.palette.grey[800],
  },
  leftSideDiv: {
    display: 'flex',
  },

  gameImg: {
    width: 152,
    height: 72,
    objectFit: 'cover',
  },
  gameInfo: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  gameStats: {
    marginTop: 4,
  },
  divSpacer: {
    flexGrow: 1,
  },
  selections: {
    display: 'flex',
    alignItems: 'space-between',
  },
}))

function TMSelectedGameInfo({
  selectGameImg,
  selectGameName,
  selectGameStats,
}) {
  const classes = useStyles()

  return (
    <div className={classes.selectGameDiv}>
      <div className={classes.leftSideDiv}>
        <img
          src={selectGameImg}
          alt="selected game"
          className={classes.gameImg}
        />

        <div className={classes.gameInfo}>
          <Typography variant="h4">{selectGameName}</Typography>
          <Typography variant="body1" classes={{ root: classes.gameStats }}>
            {selectGameStats}
          </Typography>
        </div>
      </div>

      <div className={classes.divSpacer} />

      {/* <div className={classes.selections}> */}
      <TMAutocomplete
        label="Game"
        options={games}
        getOptionLabel={(game) => game}
        style={{ 
          width: 176
        }}
      />

      <TMAutocomplete
        label="Platform"
        options={platforms}
        getOptionLabel={(platform) => platform}
        style={{ 
          marginLeft: 16,
          width: 176
        }}
      />
      {/* </div> */}
    </div>
  )
}

export default TMSelectedGameInfo
