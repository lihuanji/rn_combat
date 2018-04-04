/**
 * @file 路由文件 基于react-navigation
 * @name router.ts
 * @author lihuanji
 */
import { StackNavigator } from 'react-navigation';
// 页面
import HomeView from '../views/home/index';
import DreamDetail from '../views/dreamDetail/index';

const Views = StackNavigator({
    home: {
        screen: HomeView,
        navigationOptions: {
            headerStyle: {
                height: 0,
                // backgroundColor: '#F5FCFF',
                borderBottomWidth: 0,
            },
            headerTransparent: true,
        },
    },
    DreamDetail: {
        screen: DreamDetail,
    },
});

export default Views;
