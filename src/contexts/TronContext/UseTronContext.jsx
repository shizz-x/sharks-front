import Context from "./TronContex";
import { useContext } from "react";
export default function UseTronContext() {
  const values = useContext(Context);
  return values;
}
