import React from "react"
import { SvgIcon } from "@material-ui/core"

function MicIcon(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SvgIcon {...props}>
      <path
        id="Mic"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.99 11.5C14.99 13.16 13.66 14.5 12 14.5C10.34 14.5 9 13.16 9 11.5V5.5C9 3.84 10.34 2.5 12 2.5C13.66 2.5 15 3.84 15 5.5L14.99 11.5ZM17.25 12.21C17.31 11.8 17.66 11.5 18.08 11.5C18.6 11.5 19 11.96 18.93 12.47C18.47 15.44 15.96 17.79 13 18.22V20.5C13 21.05 12.55 21.5 12 21.5C11.45 21.5 11 21.05 11 20.5V18.22C8.02998 17.77 5.52998 15.44 5.06998 12.47C4.99998 11.96 5.39998 11.5 5.91998 11.5C6.32998 11.5 6.68998 11.8 6.74998 12.21C7.11998 14.83 9.46998 16.6 12 16.6C14.53 16.6 16.88 14.82 17.25 12.21Z"
      />
    </SvgIcon>
  )
}

export default MicIcon
