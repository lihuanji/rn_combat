/**
 * @file 入口文件
 * @name App.tsx
 * @author lihuanji
 */
import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import createStore from './config/store';
// 页面
import HomeView from './views/home/index';
import ListView from './views/list/index';
const store = createStore();
const Tab = TabNavigator({
    home: {
        screen: HomeView,
        navigationOptions: () => ({
            tabBarLabel: '首页',
        }),
    },
    list: {
        screen: ListView,
        navigationOptions: () => ({
            tabBarLabel: '列表',
        }),
    },
});
const Views = StackNavigator({
    home: {
        screen: HomeView,
        navigationOptions: {
            headerTitle: '首页',
            headerBackTitle: null,
        },
    },
    List: {
        screen: ListView,
    },
});
class App extends Component {
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(Tab, null)));
    }
}
export default App;
