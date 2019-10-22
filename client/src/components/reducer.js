import {
  LOGIN_START,LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_START,REGISTER_SUCCESS,REGISTER_FAIL,LOADTABS_START,LOADTABS_SUCCESS,LOADTABS_FAIL
} from './actions/index';



const initialState = {
  id: null,
  isLoading:false,
  error:null,
  tabs:[]

}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START: 
     return {
       ...state,
      isLoading: true
     }

    case LOGIN_SUCCESS:
     return {
       ...state,
       isLoading: false,
       id: action.payload
     }

    case LOGIN_FAIL:
     return {
       ...state,
       isLoading: false,
       error: action.payload
     }

    case REGISTER_START:
     return {
       ...state,
       isLoading: true
     }

    case REGISTER_SUCCESS:
      return {
        ...state,
       isLoading: false,
       id: action.payload
      }

    case REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

      case LOADTABS_START:
        return {
          ...state,
          isLoading: true
        }

        case LOADTABS_SUCCESS:
          return {
            ...state,
            isLoading:false,
            tabs: action.payload
          }

          case LOADTABS_FAIL:
            return{
              ...state,
              isLoading:false,
              error: action.payload
            }


  
    default:
      return state;
  }
}


export default reducer;