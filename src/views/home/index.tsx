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
import { fetchDreamUntie } from '../../actions/dream';
import styles from './style';

// const resetAction = NavigationActions.reset({
//     index: 0,
//     actions: [
//       NavigationActions.navigate({ routeName: 'Index'})
//     ]
// })

interface Props {
    readonly info: string;
    readonly dream: object;
    changeInfo(newInfo: string): any;
    fetchDreamUntie(q: string): any;
}

class Index extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    private onClick() {
        this.props.fetchDreamUntie('蛇');
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
        dream: state.dream,
    }),
    (dispatch) => ({
        changeInfo: (newInfo: string) => (dispatch(changeInfo(newInfo))),
        fetchDreamUntie: (q: string) => (fetchDreamUntie(q)(dispatch)),
    }),
)(Index);
