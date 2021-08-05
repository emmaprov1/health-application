
import { REF_FAILURE, REF_REQUEST, REF_SUCCESS } from '../../Constants/ReferenceConstants';

const referenceReducer = (state = { id: 'emmaTester' }, action: { type: any; data: any; }) => {
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
