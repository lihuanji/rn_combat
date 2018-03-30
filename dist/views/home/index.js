/**
 * @file 首页
 * @name index.tsx
 * @author lihuanji
 */
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { changeInfo } from '../../actions/info';
import styles from './style';
class Index extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.changeInfo(`${new Date()}`);
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Text, null, "\u9996\u9875"),
            React.createElement(Text, null, this.props.info),
            React.createElement(Button, { title: "aa", onPress: this.onClick })));
    }
}
export default connect((state) => ({
    info: state.info,
}), (dispatch) => ({
    changeInfo: (newInfo) => (dispatch(changeInfo(newInfo))),
}))(Index);
