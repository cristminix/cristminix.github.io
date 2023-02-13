import { useState } from "react";
const useSessionState = () => {
  const [isLogedIn, setIsLogedIn] = useState("");
  return {
    isLogedIn, setIsLogedIn
  };
};

export default useSessionState;