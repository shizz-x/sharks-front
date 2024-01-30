import Context from "./TronContex";
export default function UseTronContext() {
  const values = useContext(Context);
  return values;
}
