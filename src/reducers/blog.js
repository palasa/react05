import { actionType } from '../actions/actionType'

const initState = {
  data: [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
  ],
  isLoading: false,
  errorMessage: '',
}

export default function blog(state = initState, action) {
  switch (action.type) {
    case actionType.FETCH_BLOG_LIST_START:
      return {
        ...state,
        isLoading: true,
      }
    case actionType.FETCH_BLOG_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        errorMessage: ''
      }
    case actionType.FETCH_BLOG_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: '获取BlogList出错!'
      }
    default:
      return state
  }
}
