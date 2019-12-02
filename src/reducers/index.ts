interface IPropState {
  menu: Array<any>,
  loading: boolean
}

const initialState:IPropState = {
  menu: [],
  loading: true,
}

const reducer = (state = initialState, action) => {
  const {type, payload} = action
  switch(type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: payload.map(item => {
          return {
            ...item,
            counter: 0
          }
        }),
        loading: false
      }
    case 'MENU_REQUESTED' :
      return {
        ...state,
        loading: true
      }
    case 'MENU_ERROR' : 
      return {
        loading: false
      }
    case 'ADD_ITEM_TO_CARD' :
      return {
        ...state,
        menu: state.menu.map(el => {
          if(el.id === payload) return {...el, counter: el.counter += 1}
          return {...el}
        })
      }
    case 'DELETE_FROM_CARD' :
      return {
        ...state,
        menu: state.menu.map(el => {
          if(el.id === payload) return {...el, counter: el.counter -= 1}
          return {...el}
        })
      }
    default:
      return state
  }
}

export default reducer