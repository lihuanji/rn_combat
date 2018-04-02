/**
 * @file reducer集合
 * @name index.tsx
 * @author lihuanji
 */
import { combineReducers } from 'redux';
import info from './info';
import dream from './dream';

const rootReducer = combineReducers({
    info,
    dream,
});

export default rootReducer;
