import React from 'react-native';
import {ScrollView, StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';
import AppStore from './stores/AppStore';
import AppAction from './actions/AppAction';
import Scene from './components/Scene';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#CCC'
  }
});


export default class rnScrollView extends React.Component {

  constructor() {
    super();
    this.state = this.getStateFromStore();
    AppStore.addChangeListener(this._onChange);
  }

  /**
   * 各種 Store を監視して state を更新する
   */
  _onChange = () => {
    this.setState(this.getStateFromStore());
  }

  /**
   * 現在のインデックスを設定する
   *
   * @param {Event} e event
   */
  onMomentumScrollEnd = e => {
    const x = e.nativeEvent.contentOffset.x;
    AppAction.setIndex(x / width);
  }

  /**
   * 現在の表示位置を返す
   *
   * @return {Object} offset
   */
  getOffset() {
    return {
      x: width * this.state.app.index,
      y: 0
    };
  }

  /**
   * 各種 Store から state に必要な情報を取得、整形して返す
   *
   * @return {Object}
   */
  getStateFromStore() {
    return {app: AppStore.getAll()};
  }

  /**
   * シーンをレンダリング
   *
   * @return {ReactElement}
   */
  renderScenes() {
    return this.state.app.stack.map(s => {
      return <Scene name={s.name} />;
    });
  }

  /**
   * レンダリング
   *
   * @return {ReactElement}
   */
  render() {
    return (
      <ScrollView
        contentOffset={this.getOffset()}
        horizontal={true}
        onMomentumScrollEnd={this.onMomentumScrollEnd}
        pagingEnabled={true}
        ref="scrollView"
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {this.renderScenes()}
      </ScrollView>
    );
  }
}
