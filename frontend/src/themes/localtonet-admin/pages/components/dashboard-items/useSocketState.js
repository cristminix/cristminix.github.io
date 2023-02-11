import React, { useState } from "react";
// import { useBetween } from "use-between";

// Make a custom hook with your future shared state
const useSocketState = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
  const [socketConnected, setSocketConnected] = useState("");
  return {
    socketConnected, setSocketConnected
  };
};

export default useSocketState;