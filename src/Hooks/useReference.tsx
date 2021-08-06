
// import { useSelector } from "react-redux";

const useReference = () => {
  function makeid (length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
    }
    return result;
  }

  // const userObj = useSelector((state:any) => state.reference)
  const userObj = { id: `LS-HSC/2021-${makeid(8)}`, ref: `LS_HSC_2021_${makeid(8)}`, }
  return userObj || null;
}
export default useReference
