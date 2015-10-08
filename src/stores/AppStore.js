import Dispatcher from '../Dispatcher';
import {Store} from '../utils/StoreUtils';
import {KEYS as APP_KEYS} from '../constants/AppConstants';

export class AppStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this._app = {
      index: 0,
      stack: [{name: 'Scene 1'}]
    };
    this.handleMethods = {
      [APP_KEYS.ADD_AFTER]: 'handleAddAfter',
      [APP_KEYS.ADD_BEFORE]: 'handleAddBefore',
      [APP_KEYS.SET_INDEX]: 'handleSetIndex'
    };
  }

  /**
   * データを返す
   *
   * @return {Object}
   */
  getAll() {
    return this._app;
  }

  /**
   * シーンを末尾に追加
   */
  handleAddAfter() {
    const index = this._app.stack.length + 1;
    this._app.stack = [].concat(this._app.stack, [{name: `Scene ${index}`}]);
    this.emitChange();
  }

  /**
   * シーンを先頭に追加
   */
  handleAddBefore() {
    const index = this._app.stack.length + 1;
    this._app.stack = [{name: `Scene ${index}`}].concat(this._app.stack);
    this._app.index += 1;
    this.emitChange();
  }

  /**
   * インデックスを設定
   *
   * @param {Object} action action
   * @param {number} action.index index
   */
  handleSetIndex(action) {
    this._app.index = action.index;
    this.emitChange();
  }

}

export default new AppStore(Dispatcher);
