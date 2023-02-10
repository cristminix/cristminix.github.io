import * as React from "react"

const ToggleSvgIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 7H3c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z"
      fill="currentColor"
    />
    <path
      opacity={0.3}
      d="M21 14H3c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Zm1 6v-2c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h18c.6 0 1-.4 1-1Z"
      fill="currentColor"
    />
  </svg>
)

export default ToggleSvgIcon