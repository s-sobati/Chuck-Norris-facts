import {Action} from '../../Action.model';
import {Actions} from './types';


export const testAction = (data: any): Action => ({
  type: Actions.TEST_ACTION,
  data,
});
