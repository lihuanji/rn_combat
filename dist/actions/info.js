/**
 * @file info
 * @name info.ts
 * @author lihuanji
 */
import ActionType from './ActionType';
export function changeInfo(data) {
    return {
        type: ActionType.CHANGE_INFO,
        payload: data,
    };
}
