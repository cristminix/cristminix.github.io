import { useState } from "react";
const useSocketState = () => {
  const [socketConnected, setSocketConnected] = useState(false);
  return {
    socketConnected, setSocketConnected
  };
};

export default useSocketState;