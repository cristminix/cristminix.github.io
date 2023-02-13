import { useState } from "react";
const useSocketState = () => {
  const [socketConnected, setSocketConnected] = useState("");
  return {
    socketConnected, setSocketConnected
  };
};

export default useSocketState;