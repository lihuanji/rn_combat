/**
 * @file 首页
 * @name index.tsx
 * @author lihuanji
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';
class List extends Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, null, "List")));
    }
}
export default connect((state) => ({
    info: state.info,
}))(List);
