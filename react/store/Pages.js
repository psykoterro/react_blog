import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import currentPage from "../reducers/Pages"

const pagesStore = createStore(currentPage, devToolsEnhancer(
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));

export default pagesStore;