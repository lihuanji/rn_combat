/**
 * @file 周公解梦api
 * @name dream.ts
 * @author lihuanji
 */

import http from '../utils/http';

const key = 'f54882e0ac3be8e89f081445a896263b';

export const GetDreamQuery = (q: string) => http.get('/dream/query', {
    q,
    key,
});
