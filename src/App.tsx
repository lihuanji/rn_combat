/**
 * @file 入口文件
 * @name App.tsx
 * @author lihuanji
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Provider } from 'react-redux';
import createStore from './config/store';
import Router from './config/router';

const store = createStore();

class App extends Component {
    public render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
