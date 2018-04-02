/**
 * @file 首页
 * @name index.tsx
 * @author lihuanji
 */
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { changeInfo } from '../../actions/info';
import styles from './style';

// const resetAction = NavigationActions.reset({
//     index: 0,
//     actions: [
//       NavigationActions.navigate({ routeName: 'Index'})
//     ]
// })

interface Props {
    readonly info: string;
    changeInfo(newInfo: string): any;
}

class Index extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    private onClick() {
        this.props.changeInfo(`${new Date()}`);
    }
    public render() {
        return (
            <View style={styles.container}>
                <Text>首页</Text>
                <Text>{this.props.info}</Text>
                <Button title="aa" onPress={this.onClick}/>
            </View>
        );
    }
}

export default connect(
    (state: Props) => ({
        info: state.info,
    }),
    (dispatch) => ({
        changeInfo: (newInfo: string) => (dispatch(changeInfo(newInfo))),
    }),
)(Index);
