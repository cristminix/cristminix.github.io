import * as React from "react"

const HistorySvgIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M22 7H2v4h20V7Z" fill="currentColor" />
    <path
      opacity={0.3}
      d="M21 19H3c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1Zm-7-5c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1Zm2 1.5c0 .8.7 1.5 1.5 1.5h1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5Z"
      fill="currentColor"
    />
  </svg>
)

export default HistorySvgIcon