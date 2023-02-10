import * as React from "react"

const MyTokenSvgIcon = (props) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity={0.3}
      d="m8.9 21-1.7 1.7c-.4.4-1 .4-1.4 0L4.1 21h4.8ZM4 16.1l-1.7 1.7c-.4.4-.4 1 0 1.4L4 20.9v-4.8Zm15.3-6.9-3.5-3.5c-.4-.4-1-.4-1.4 0L9 11.1V21l10.3-10.3c.4-.4.4-1.1 0-1.5Z"
      fill="currentColor"
    />
    <path
      d="M21 15v5c0 .6-.4 1-1 1h-8.2l7-7H20c.6 0 1 .4 1 1Zm-11 6V4c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v17c0 .6.4 1 1 1h5c.6 0 1-.4 1-1Zm-2.5-2.5c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1Z"
      fill="currentColor"
    />
  </svg>
)

export default MyTokenSvgIcon