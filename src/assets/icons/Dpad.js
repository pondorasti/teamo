import React from 'react'
import { SvgIcon } from '@material-ui/core'

function DpadIcon(props) {
  return(
    <SvgIcon {...props}>
      <path d="M15 7.29V3C15 2.45 14.55 2 14 2H10C9.45 2 9 2.45 9 3V7.29C9 7.42 9.05 7.55 9.15 7.64L11.65 10.14C11.85 10.34 12.16 10.34 12.36 10.14L14.86 7.64C14.95 7.55 15 7.43 15 7.29V7.29ZM7.29 9H3C2.45 9 2 9.45 2 10V14C2 14.55 2.45 15 3 15H7.29C7.42 15 7.55 14.95 7.64 14.85L10.14 12.35C10.34 12.15 10.34 11.84 10.14 11.64L7.64 9.14C7.55 9.05 7.43 9 7.29 9ZM9 16.71V21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V16.71C15 16.58 14.95 16.45 14.85 16.36L12.35 13.86C12.15 13.66 11.84 13.66 11.64 13.86L9.14 16.36C9.05 16.45 9 16.57 9 16.71ZM16.35 9.15L13.85 11.65C13.65 11.85 13.65 12.16 13.85 12.36L16.35 14.86C16.44 14.95 16.57 15.01 16.7 15.01H21C21.55 15.01 22 14.56 22 14.01V10.01C22 9.46 21.55 9.01 21 9.01H16.71C16.57 9 16.45 9.05 16.35 9.15V9.15Z"/>
    </SvgIcon>
  )
}

export default DpadIcon