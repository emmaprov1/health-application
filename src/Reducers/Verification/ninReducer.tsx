
import { NIN_FAILURE, NIN_REQUEST, NIN_SUCCESS } from '../../Constants/VerificationConstants';

const ninReducer = (state = {}, action: { type: any; data: any; }) => {
  switch (action.type) {
    case NIN_SUCCESS:
      return { success: action.data }
    case NIN_REQUEST:
      return { loading: true }
    case NIN_FAILURE:
      return { error: action.data }
    default:
      return state
  }
}

export default ninReducer;
