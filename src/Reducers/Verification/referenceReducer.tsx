
import { REF_FAILURE, REF_REQUEST, REF_SUCCESS } from '../../Constants/ReferenceConstants';

function makeid (length: number) {
  let result = '';
  const characters = 'ABCDEFGHJKMNPQRTUVWXYZ23456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
charactersLength));
  }
  return result;
}

const referenceReducer = (state = { id: `LS-HSC/2021-${makeid(8)}`, ref: `LS_HSC_2021_${makeid(8)}`, }, action: { type: any; data: any; }) => {
  switch (action.type) {
    case REF_SUCCESS:
      return { success: action.data }
    case REF_REQUEST:
      return { loading: true }
    case REF_FAILURE:
      return { error: action.data }
    default:
      return state
  }
}

export default referenceReducer;
