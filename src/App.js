import React, { useEffect, useState } from "react"
import { StylesProvider, CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"
import { useAuthState } from "react-firebase-hooks/auth"
import { useDispatch, useSelector } from "react-redux"
import { TMTheme } from "./atoms"
import HomeScreen from "./screens/home-screen/HomeScreen"
// import LobbyScreen from "./screens/lobby-screen/LobbyScreen"
import {
  selectUserNeedsAgreement,
  selectUserFinishedSignUp,
  subscribeToCurrentUser,
} from "./redux/slices/currentUser/currentUserSlice"
import { fetchGames } from "./redux/slices/games/gamesSlice"
import { auth } from "./api/firebase"
import AgreementDialog from "./screens/dialogs/agreement/AgreementDialog"
import ProfileSettingsDialog from "./screens/dialogs/profile-settings/ProfileSettingsDialog"

function App() {
  const dispatch = useDispatch()

  // retrive games data from airtable
  useEffect(() => {
    dispatch(fetchGames())
  }, [])

  // update current user redux slice
  const [user] = useAuthState(auth)
  useEffect(() => {
    if (user != null && user.uid != null) {
      const id = user.uid
      subscribeToCurrentUser(dispatch, id)
    }
  }, [user])

  const [showAgreement, setShowAgreement] = useState(false)
  const userNeedsAgreement = useSelector(selectUserNeedsAgreement)
  if (userNeedsAgreement && !showAgreement) {
    setShowAgreement(true)
  }

  const [showCreateProfile, setShowCreateProfile] = useState(false)
  const userFinishedSignUp = useSelector(selectUserFinishedSignUp)
  if (!userNeedsAgreement && userFinishedSignUp && !showCreateProfile) {
    setShowCreateProfile(true)
    setShowAgreement(false)
  } else if (!userFinishedSignUp && showCreateProfile) {
    setShowCreateProfile(false)
  }

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={TMTheme}>
        <CssBaseline />
        <div style={{ backgroundColor: TMTheme.palette.grey[800] }}>
          {/* <LobbyScreen /> */}
          <HomeScreen />

          <AgreementDialog open={showAgreement} onClose={() => setShowAgreement(false)} />
          <ProfileSettingsDialog
            open={showCreateProfile}
            onClose={() => setShowCreateProfile(false)}
          />
        </div>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
