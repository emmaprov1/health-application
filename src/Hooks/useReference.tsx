
import { useSelector } from "react-redux";

const useReference = () => {
  const userObj = useSelector((state:any) => state.reference)
  return userObj || null;
}
export default useReference
