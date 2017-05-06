import { Dimensions, StyleSheet } from 'react-native';

const COLOR_DARK = '#294a62'
,   COLOR_GRAY = '#bbb'
,   COLOR_GRAY_LIGHT = '#d9dce0'
,   COLOR_RED = '#c21640'

const FONT_SIZE_TITLE = 13
,   FONT_WEIGHT_TITLE = '700'

const DEVICE_WIDTH = Dimensions.get('window').width - 30;

const styles = StyleSheet.create({
  calendarContainer: {
    //backgroundColor: '#fff',
  },
  monthContainer: {
    width: DEVICE_WIDTH,
  },
  calendarControls: {
    flexDirection: 'row',
  },
  controlButton: {
  },
  controlButtonText: {
    margin: 10,
    fontSize: 15,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    margin: 10,
  },
  calendarHeading: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  dayHeading: {
    flex: 1,
    color: COLOR_DARK,
    fontSize: 13,
    textAlign: 'center',
    marginVertical: 5,
  },
  weekendHeading: {
    flex: 1,
    color: COLOR_DARK,
    fontSize: 13,
    textAlign: 'center',
    marginVertical: 5,
  },
   weekendDayText: {
    //color: COLOR_GRAY,
  },
  weekRow: {
    flexDirection: 'row',
  },
  weekendDayButton: {
    backgroundColor: '#fff',
  },
  dayButton: {
    alignItems: 'center',
    padding: 5,
    width: DEVICE_WIDTH / 7,
    borderTopWidth: 1,
    borderTopColor: '#e9e9e9',
  },
  dayButtonFiller: {
    padding: 5,
    width: DEVICE_WIDTH / 7,
  },
  day: {
    fontSize: 16,
    alignSelf: 'center',
  },
  eventIndicatorFiller: {
    marginTop: 3,
    borderColor: 'transparent',
    width: 4,
    height: 4,
    borderRadius: 2,
  },
  eventIndicator: {
    backgroundColor: '#cccccc',
  },
  dayCircleFiller: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  currentDayCircle: {         // dia actual selected
    borderWidth: 2,
    borderRadius: 14,
    borderColor: COLOR_RED,
    //backgroundColor: COLOR_GRAY_LIGHT,
  },
  currentDayText: {           // dia actual text selected
    color: COLOR_RED,
  },
  selectedDayCircle: {
    borderWidth: 2,
    borderColor: COLOR_RED,
    //backgroundColor: 'black',
  },
  hasEventCircle: {
  },
  hasEventDaySelectedCircle: {
  },
  hasEventText: {
  },
  selectedDayText: {          // dia selected
    color: COLOR_RED,
    fontWeight: '900',
  },
});

export default styles;
