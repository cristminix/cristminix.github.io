import { useState } from "react";
const useSocketClient = () => {
  const [socketClient, setSocketClient] = useState("");
  return {
    socketClient, setSocketClient
  };
};

export default useSocketClient;