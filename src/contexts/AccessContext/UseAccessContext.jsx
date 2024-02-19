import { useContext } from "react";
import Context from "./AccessContext";

export default function UseAccessContext() {
  const values = useContext(Context);
  return values;
}
