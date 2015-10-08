import React from 'react-native';
import {PixelRatio, StyleSheet, TouchableHighlight, Text} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 15,
    margin: 15,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#CDCDCD'
  }
});


export default class NavButton extends React.Component {

  static propTypes = {
    label: React.PropTypes.string.isRequired,
    onPress: React.PropTypes.func.isRequired
  }

  /**
   * レンダリング
   *
   * @return {ReactElement}
   */
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.button}
        underlayColor="#f2f2f2"
      >
        <Text>{this.props.label}</Text>
      </TouchableHighlight>
    );
  }
}
