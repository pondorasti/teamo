import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Typography,
  Snackbar,
  Alert,
} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import {
  acceptAgreements,
  selectAcceptAgreementsStatus,
  selectAgreementsError,
} from "./redux/agreementSlice"

import TMButton from "../../../atoms/TMButton"

const useStyles = makeStyles((theme) => ({
  titleText: {
    textAlign: "center",
  },
  bodyText: {
    maxWidth: 420,
    "& a": {
      color: theme.palette.info.main,
    },
  },
  illustration: {
    maxWidth: 420,
    marginTop: 24,
  },
}))

function CreateProfileDialog({ open, onClose }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const agreementStatus = useSelector(selectAcceptAgreementsStatus)
  const errorMessage = useSelector(selectAgreementsError)

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="agree-terms-modal">
      <DialogTitle id="agree-terms-modal-title">
        <Typography variant="h4" classes={{ root: classes.titleText }}>
          First things first: We promise <br /> to respect your data.
        </Typography>
        <img
          src="https://dl.airtable.com/.attachments/ab3dacaf87a2c16cb6e6a086898a42f7/64544b42/PolicyScene1x.png"
          srcSet="https://dl.airtable.com/.attachments/ab3dacaf87a2c16cb6e6a086898a42f7/64544b42/PolicyScene1x.png 1x, https://dl.airtable.com/.attachments/3f02ef58cad727d5c4ddf24d8322fbdf/2c871c3f/PolicyScene2x.png 2x"
          alt="Tall Shroomie enjoying his privacy in his house during sunrise."
          width="420"
          height="216"
          className={classes.illustration}
        />
      </DialogTitle>

      <DialogContent>
        <Typography variant="body" classes={{ root: classes.bodyText }}>
          Our mission is to create a network for gamers to find meaningful teammates.
          <br />
          <br />
          We take data privacy seriously and only collect what we need to provide you with
          the best gaming experience possible.
          <br />
          <br />
          By clicking &quot;Next&quot;, you agree to our{" "}
          <a
            href="https://www.notion.so/Teamo-Privacy-Policy-ee9045bf61e34089a8992c13c44127b6"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
          ,{" "}
          <a
            href="https://www.notion.so/Teamo-Terms-of-Service-27e13aaedf024e77bde44e7bf094fa43"
            target="_blank"
            rel="noreferrer"
          >
            Terms of Service
          </a>
          , and{" "}
          <a
            href="https://www.notion.so/Community-Guidelines-564514ab8eaa423d85dfcca2522038b6"
            target="_blank"
            rel="noreferrer"
          >
            Community Guidelines
          </a>
          .
        </Typography>
      </DialogContent>

      <DialogActions>
        <TMButton
          onClick={() => dispatch(acceptAgreements())}
          pending={agreementStatus === "loading"}
          color="primary"
        >
          Next
        </TMButton>
      </DialogActions>

      <Snackbar open={!!errorMessage}>
        <Alert variant="filled" severity="error">
          {errorMessage &&
            errorMessage.split("\n").map((item) => (
              <span key={item}>
                {item}
                <br />
              </span>
            ))}
        </Alert>
      </Snackbar>
    </Dialog>
  )
}

CreateProfileDialog.propTypes = {
  /** If `true`, the modal is presented. */
  open: PropTypes.bool.isRequired,

  /** A function that is called when the modal needs to be closed. */
  onClose: PropTypes.func.isRequired,
}

export default CreateProfileDialog
