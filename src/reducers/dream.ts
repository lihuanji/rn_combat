/**
 * @file dream reducer
 * @name dream.ts
 * @author lihuanji
 */
import ActionType from '../actions/ActionType';

export default (state: object = {}, action: {type: string; payload?: object}) => {
    switch (action.type) {
        case ActionType.GET_DREAM_QUERY:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
};
