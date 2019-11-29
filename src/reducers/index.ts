interface IPropState {
  menu: Array<any>,
  loading: boolean,
  total: number
}

const initialState:IPropState = {
  menu: [],
  loading: true,
  total: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload.map(item => {
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
        menu: state.menu,
        loading: true
      }
    case 'MENU_ERROR' : 
      return {
        menu: state.menu,
        loading: false
      }
    case 'ADD_ITEM_TO_CARD' :
      const id = action.payload
      
      const item = state.menu.find(el => {
        return el.id === id
      })
      item.counter += 1
      return {
        ...state,
        total: state.total += item.price
      }
    case 'DELETE_FROM_CARD' :
      const index = action.payload 
      const itemIndex = state.menu.find(el => {
        return el.id === index
      })
      const newState = state.menu.map(el => {
        if(el === itemIndex) {
          let {counter} = el
          console.log(counter)
          return {
            ...el,
            counter: counter -= 1
          }
        }
      })
      console.log(newState)
      return {
        ...state,
        newState,
        total: state.total - itemIndex.price,
      }
    default:
      return state
  }
}

export default reducer