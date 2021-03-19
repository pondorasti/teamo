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
  selectUserNeedsProfile,
  subscribeToCurrentUser,
} from "./screens/redux/slices/currentUser/currentUserSlice"
import { fetchGames } from "./screens/redux/slices/games/gamesSlice"
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

  const userNeedsAgreement = useSelector(selectUserNeedsAgreement)
  const [loadAgreement, setLoadAgreement] = useState(false)
  const [showAgreement, setShowAgreement] = useState(false)

  const userNeedsProfile = useSelector(selectUserNeedsProfile)
  const [loadCreateProfile, setLoadCreateProfile] = useState(false)
  const [showCreateProfile, setShowCreateProfile] = useState(false)

  // Profile Settings Dialog
  if (userNeedsProfile && !loadCreateProfile) {
    setLoadCreateProfile(true)
  } else if (!userNeedsProfile && loadCreateProfile) {
    setLoadCreateProfile(false)
  }
  if (!userNeedsAgreement && userNeedsProfile && !showCreateProfile) {
    setShowCreateProfile(true)
    setShowAgreement(false)
  } else if (!userNeedsProfile && showCreateProfile) {
    setShowCreateProfile(false)
  }

  // Agreement Dialog (Always have this before the other dialog)
  if (userNeedsAgreement && !loadAgreement) {
    setLoadAgreement(true)
  } else if (!userNeedsAgreement && loadAgreement) {
    setLoadAgreement(false)
  }
  if (userNeedsAgreement && !showAgreement) {
    setShowAgreement(true)
  } else if (!userNeedsAgreement && showAgreement) {
    setShowAgreement(false)
  }

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={TMTheme}>
        <CssBaseline />
        <div style={{ backgroundColor: TMTheme.palette.grey[800] }}>
          {/* <LobbyScreen /> */}
          <HomeScreen />

          {loadAgreement && (
            <AgreementDialog
              open={showAgreement}
              onClose={() => setShowAgreement(false)}
            />
          )}
          {loadCreateProfile && (
            <ProfileSettingsDialog
              open={showCreateProfile}
              onClose={() => setShowCreateProfile(false)}
            />
          )}
        </div>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
