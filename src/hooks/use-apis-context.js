import {useContext} from "react";
import ApisContext from "../context/api";

function useApisContext() {
  return useContext(ApisContext);
}

export default useApisContext;
