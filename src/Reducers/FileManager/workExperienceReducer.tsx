
import { SAVE_WORK } from '../../Constants/FileConstants';

const workExperienceReducer = (state = { WorkExperience: [] }, action: any) => {
  switch (action.type) {
    case SAVE_WORK:
      return action.data
    default:
      return state
  }
}

export default workExperienceReducer;
