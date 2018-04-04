/**
 * @file 首页
 * @name index.tsx
 * @author lihuanji
 */
import React, { Component } from 'react';
import { View, Text, Button, TextInput, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { fetchDreamUntie } from '../../actions/dream';
import SafeView from '../../components/safe-view/index';
import styles from './style';

interface Props {
    readonly dream: {
        data: object;
    };
    fetchDreamUntie(q: string): any;
    navigation: any;
}

class Index extends Component<Props> {
    constructor(props: Props) {
        super(props);
        this.state = {
            text: null,
        };
        this.onClick = this.onClick.bind(this);
    }

    private onClick() {
        // this.props.fetchDreamUntie(this.searchInput._lastNativeText);
        this.props.navigation.push('DreamDetail');
    }

    private searchInput: any;

    public render() {
        return (
            <SafeView>
                <View style={styles.searchView}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="查询文字"
                        ref={(ref) => { this.searchInput = ref; }}
                    />
                </View>
                <Button title="查询" onPress={this.onClick}/>

                <ActivityIndicator />
            </SafeView>
        );
    }
}

export default connect(
    (state: Props) => ({
        dream: state.dream,
    }),
    (dispatch) => ({
        fetchDreamUntie: (q: string) => (fetchDreamUntie(q)(dispatch)),
    }),
)(Index);
