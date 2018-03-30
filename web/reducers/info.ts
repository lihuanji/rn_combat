/**
 * @file info
 * @name info.tsx
 * @author lihuanji
 */
import ActionType from '../actions/ActionType';

export default (info: string = 'init', action: {type: string; payload: string}) => {
    switch (action.type) {
        case ActionType.CHANGE_INFO:
            return action.payload;
        default:
            return info;
    }
};
