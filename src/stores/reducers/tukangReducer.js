const initialState = {
  tukang: [],
  profileUser: {},
  orderList: [],
  access_token: '',
  idUser: '',
  tukangPerCategory: []
}

function tukangReducer(state = initialState, action) {
  switch(action.type) {
    case "GET_TUKANG":
      return { ...state, tukang: action.payload}
    case "SET_TUKANGCATEGORY":
      return { ...state, tukangPerCategory: action.payload}
    case "SET_PROFILEUSER":
      return { ...state, profileUser: action.payload}
    case "SET_ORDERLIST":
      return { ...state, orderList: action.payload}
    case "ACCESS_TOKEN":
      return { ...state, access_token: action.payload}
    case "SET_LOADING":
      return { ...state, loading: action.loading}
    case "SET_ERROR":
      return { ...state, characters: action.error}
    case "SET_IDUSER":
      return { ...state, idUser: action.payload}
    default :
      return state
  }
}

export default tukangReducer