import { useState } from "react";
const useServerCfgState = () => {
  const [serverCfg, setServerCfg] = useState("");
  return {
    serverCfg, setServerCfg
  };
};

export default useServerCfgState;