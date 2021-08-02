
import { DISABLE_STATUS } from '../../Constants/FormActivitiesConstant';

const disableStatusReducer = (state = true, action: { type: any; data: any; }) => {
  switch (action.type) {
    case DISABLE_STATUS:
      return action.data
    default:
      return state
  }
}

export default disableStatusReducer;
