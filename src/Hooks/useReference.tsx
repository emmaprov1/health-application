
import { useSelector } from "react-redux";

const useReference = () => {
  const userObj = useSelector((state:any) => state.reference)
  console.log("userObj", userObj)
  return userObj || null;
}
export default useReference
