/**
 * @file reducer集合
 * @name index.tsx
 * @author lihuanji
 */
import { combineReducers } from 'redux';
import info from './info';

const rootReducer = combineReducers({
    info,
});

export default rootReducer;
