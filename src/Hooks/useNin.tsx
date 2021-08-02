
import { useSelector } from "react-redux";

const useNin = () => {
  const userObj = useSelector((state:any) => state.ninVerification.success)
  return userObj || null;
}
export default useNin
