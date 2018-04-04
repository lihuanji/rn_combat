/**
 * @file today
 * @name today.tsx
 * @author lihuanji
 */
import React, { PureComponent } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import SafeView from '../../components/safe-view/index';
import styles from './style';

LocaleConfig.locales['fr'] = {
    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    dayNames: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
};

LocaleConfig.defaultLocale = 'fr';

interface Props {
    readonly info: string | number;
}
class Today extends PureComponent<Props> {
    public render() {
        return (
            <SafeView color="#fff">
                <Calendar
                    theme={{
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                    }}
                    onDayPress={(day) => {
                        console.log(day);
                    }}
                />
            </SafeView>
        );
    }
}

export default connect(
    (state: Props) => ({
      info: state.info,
    }),
)(Today);
