// import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { rootReducer } from './reducers'

// export default createStore(rootReducer, applyMiddleware(thunk))
import { configureStore } from "@reduxjs/toolkit";
import blogReducer  from './reducers/blog'

export const store = configureStore({
  reducer: {
    blog: blogReducer
  }
})
