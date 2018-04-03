/**
 * @file 路由文件 基于react-navigation
 * @name router.ts
 * @author lihuanji
 */
import { StackNavigator, TabNavigator } from 'react-navigation';
// 页面
import DreamView from '../dream/index';
import FortuneView from '../fortune/index';

const Tab = TabNavigator({
    home: {
        screen: DreamView,
        navigationOptions: () => ({
            tabBarLabel: '周公解梦',
        }),
    },
    list: {
        screen: FortuneView,
        navigationOptions: () => ({
            tabBarLabel: '星座运势',
        }),
    },
});

export default Tab;
