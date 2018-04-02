/**
 * @file 路由文件 基于react-navigation
 * @name router.ts
 * @author lihuanji
 */
import { StackNavigator, TabNavigator } from 'react-navigation';
// 页面
import HomeView from '../views/home/index';
import ListView from '../views/list/index';

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
            tabBarLabel: '列表11',
        }),
    },
});

export default Tab;
