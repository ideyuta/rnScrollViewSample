import React from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import Dimensions from 'Dimensions';
import AppAction from '../actions/AppAction';
import NavButton from './NavButton';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height,
    padding: 20,
    width
  },
  btnWrapper: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20
  }
});


export default class Scene extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired
  }

  /**
   * シーンを先頭に追加
   */
  onPressAddAfter = () => {
    AppAction.addAfter();
  }

  /**
   * シーンを末尾に追加
   */
  onPressAddBefore = () => {
    AppAction.addBefore();
  }

  /**
   * レンダリング
   *
   * @return {ReactElement}
   */
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.title}>{this.props.name}</Text>
        <View style={styles.btnWrapper}>
          <NavButton
            label={'add Before'}
            onPress={this.onPressAddBefore}
          />
          <NavButton
            label={'add After'}
            onPress={this.onPressAddAfter}
          />
        </View>
      </View>
    );
  }
}
