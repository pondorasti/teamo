import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Typography,
} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { acceptAgreement, selectAgreementStatus } from "./redux/agreementSlice"

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

  const agreementStatus = useSelector(selectAgreementStatus)

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
          className={classes.illustration}
        />
      </DialogTitle>

      <DialogContent>
        <Typography variant="body" classes={{ root: classes.bodyText }}>
          We take data privacy seriously and only collect what we need to provide you with
          the best experience possible.
          <br />
          <br />
          Please read our{" "}
          <a
            href="https://dl.airtable.com/.attachments/818d15b9ea60eaa119b00186a6d5cb3c/144095e9/TeamoCommunityGuidelines.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Community Guidelines
          </a>
          ,{" "}
          <a
            href="https://dl.airtable.com/.attachments/d618b0837abd0dbba06b9db8c2b61578/7d0cec16/TeamoTermsofService.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="https://dl.airtable.com/.attachments/1292e12b052ee17ea2132a5f86f33ace/2248c84a/TeamoPrivacyPolicy.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
          .
          <br />
          <br />
          By clicking &quot;Next&quot;, you are agreeing to our Community Guidelines,
          Terms of Service, and Privacy Policy.
        </Typography>
      </DialogContent>

      <DialogActions>
        <TMButton
          onClick={() => dispatch(acceptAgreement())}
          pending={agreementStatus === "loading"}
          color="primary"
        >
          Next
        </TMButton>
      </DialogActions>
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
