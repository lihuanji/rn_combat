/**
 * @file dream
 * @name dream.ts
 * @author lihuanji
 */

import ActionType from './ActionType';
import { GetDreamQuery } from '../api/dream';
import { Dispatch } from 'redux';

export function fetchDreamUntie(value: string) {
    return (dispatch: any) => {
        GetDreamQuery(value).then((result: object) => {
            dispatch({
                type: ActionType.GET_DREAM_QUERY,
                payload: result,
            });
        });
    };
}
