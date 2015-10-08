import Dispatcher from '../Dispatcher';
import {Action} from '../utils/ActionUtils';
import {KEYS} from '../constants/AppConstants';


/**
 * App 系 ActionCreator
 *
 */
export class AppAction extends Action {

  /**
   * シーンを先頭に追加
   */
  addAfter() {
    this.dispatch(KEYS.ADD_AFTER);
  }

  /**
   * シーンを末尾に追加
   */
  addBefore() {
    this.dispatch(KEYS.ADD_BEFORE);
  }

  /**
   * インデックスを設定
   *
   * @param {number} index index
   */
  setIndex(index) {
    this.dispatch(KEYS.SET_INDEX, {index});
  }

}

export default new AppAction(Dispatcher);
