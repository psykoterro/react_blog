import { createStore, applyMiddleware, compose } from 'redux'

import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers/IndexReducer'
import { initialStates } from '../reducers/IndexReducer'


export default function configureStore(props, context) {

    // This is how we get initial props from Symfony into redux.
    const { articles, nbArticles, nbCategories, authToken, schema, initialValues } = props
    const { articlesState } = initialStates
    const baseUrl = context.base


    // Redux expects to initialize the store using an Object
    const initialState = {
        articlesState: { ...articlesState, authToken, articles, nbArticles, nbCategories, schema, initialValues, baseUrl },
    }

    // use devtools if we are in a browser and the extension is enabled
    let composeEnhancers = typeof(window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(thunkMiddleware)
        )
    )
    return store
}
