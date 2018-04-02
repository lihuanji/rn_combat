/**
 * @file http请求
 * @name http.ts
 * @author lihuanji
 */

import urlJoin from '../../node_modules/proper-url-join/lib/index.js';
import global from '../config/global';

type MethodType = 'get' | 'post' | 'put' | 'delete';

class Http {
    private use(method: MethodType, url: string, param: object): Promise<object> {
        let askUrl = urlJoin(global.baesUrl, url);
        let ContentType = 'application/x-www-form-urlencoded';
        const options: {method: string; headers: object; body?: string} = {
            method,
            headers: {
                'Content-Type': ContentType,
                'Accept': 'application/json',
            },
        };
        if (method === 'get') {
            askUrl = urlJoin(askUrl, { query: param });
            ContentType = 'application/json';
        } else {
            options.body = JSON.stringify(param);
        }
        return new Promise((resolve, reject) => {
            fetch(askUrl, {
                method,
                headers: {
                    'Content-Type': ContentType,
                    'Accept': 'application/json',
                },
            })
            .then((response) => response.json())
            .catch((e) => {
                throw e;
            })
            .then((result) => {
                resolve(result);
            });
        });
    }
    public get(url: string, param: object): Promise<object> {
        return this.use('get', url, param);
    }
    public post(url: string, param: object): Promise<object> {
        return this.use('post', url, param);
    }
    public put(url: string, param: object): Promise<object> {
        return this.use('put', url, param);
    }
    public delete(url: string, param: object): Promise<object> {
        return this.use('delete', url, param);
    }
}

export default new Http();
