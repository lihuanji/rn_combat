/**
 * @file 解梦详情
 * @name index.tsx
 * @author lihuanji
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import styles from './style';

interface Props {
    readonly info: string | number;
}
class List extends Component<Props> {
    public render() {
        return (
            <View style={styles.container}>
                <Text>List</Text>
            </View>
        );
    }
}

export default connect(
    (state: Props) => ({
      info: state.info,
    }),
)(List);
