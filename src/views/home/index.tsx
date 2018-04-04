/**
 * @file 路由文件 基于react-navigation
 * @name router.ts
 * @author lihuanji
 */
import { StackNavigator, TabNavigator } from 'react-navigation';
// 页面
import DreamView from '../dream/index';
import FortuneView from '../fortune/index';
import TodayView from '../today/index';

const Tab = TabNavigator({
    home: {
        screen: DreamView,
        navigationOptions: {
            tabBarLabel: '11',
        },
    },
    fortune: {
        screen: FortuneView,
        navigationOptions: () => ({
            tabBarLabel: '22',
        }),
    },
    today: {
        screen: TodayView,
        navigationOptions: () => ({
            tabBarLabel: '33',
        }),
    },
});

export default Tab;
