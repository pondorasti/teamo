import React from 'react'
import { SvgIcon } from '@material-ui/core'

function PersonIcon(props) {
  return (
    <SvgIcon {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15 8C15 6.34 13.66 5 12 5C10.34 5 9 6.34 9 8C9 9.66 10.34 11 12 11C13.66 11 15 9.66 15 8ZM6 15.98C7.29 17.92 9.5 19.2 12 19.2C14.5 19.2 16.4999 18 18 15.98C17.97 13.99 13.99 12.9 12 12.9C10 12.9 6.03 13.99 6 15.98Z"/>
    </SvgIcon>
  )
}

export default PersonIcon