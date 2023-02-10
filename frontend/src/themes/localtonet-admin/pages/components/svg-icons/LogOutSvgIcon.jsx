import * as React from "react"

const LogOutSvgIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      opacity={0.3}
      width={12}
      height={2}
      rx={1}
      transform="matrix(-1 0 0 1 15.5 11)"
      fill="currentColor"
    />
    <path
      d="m13.631 11.693-1.755-1.463a1.04 1.04 0 1 1 1.358-1.578l2.925 2.6a1 1 0 0 1 0 1.495l-2.925 2.6a1.04 1.04 0 1 1-1.358-1.577l1.755-1.463a.4.4 0 0 0 0-.614Z"
      fill="currentColor"
    />
    <path
      d="M8 5v1a1 1 0 0 0 2 0 1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1 1 1 0 1 0-2 0v1a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2Z"
      fill="currentColor"
    />
  </svg>
)

export default LogOutSvgIcon
