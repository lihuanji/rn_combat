/**
 * @file info
 * @name info.tsx
 * @author lihuanji
 */
import ActionType from '../actions/ActionType';
export default (info = 'init', action) => {
    switch (action.type) {
        case ActionType.CHANGE_INFO:
            return action.payload;
        default:
            return info;
    }
};
