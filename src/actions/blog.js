import { actionType } from './actionType'
import { getBlogs } from '../services'

const startFetchBlogList = () => {
  return {
    type: actionType.FETCH_BLOG_LIST_START,
  }
}

const fetchBlogListSuccess = payload => {
  return {
    type: actionType.FETCH_BLOG_LIST_SUCCESS,
    payload,
  }
}

const fetchBlogListError = () => {
  return {
    type: actionType.FETCH_BLOG_LIST_ERROR,
  }
}

export const fetchBlogList = () => dispatch => {
  dispatch(startFetchBlogList())
  getBlogs()
    .then(res => {
      if (res.status === 200) {
        console.log(res)
        dispatch(
          fetchBlogListSuccess({
            data: res.data,
          })
        )
      } else {
        console.log(`fetch blogs failed! because of ${res.status}`)
        dispatch(fetchBlogListError)
      }
    })
    .catch(err => {
      console.log(`fetch blogs failed! because of ${err}`)
      dispatch(fetchBlogListError())
    })
}
