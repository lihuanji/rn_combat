/**
 * @file 安全容器，适配iphoneX
 * @name index.tsx
 * @author lihuanji
 */

import React, { Component } from 'react';
import { View, Dimensions, Platform, StyleSheet } from 'react-native';

interface Props {
    style?: object;
    color?: string;
}

class SafeView extends Component<Props> {
    private getHeight() {
        const dimen = Dimensions.get('window');
        let height = 0;
        if (Platform.OS === 'ios') {
            height = 20;

            // iphone X
            if (dimen.height === 812 || dimen.width === 812) {
                height = 50;
            }
        }
        return StyleSheet.create({
            view: {
                paddingTop: height,
                backgroundColor: this.props.color,
                ...this.props.style,
            },
        });
    }

    public render() {
        return(
            <View
                style={this.getHeight().view}
            >
                {this.props.children}
            </View>
        );
    }
}

export default SafeView;
