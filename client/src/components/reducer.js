import {
  LOGIN_START,LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_START,REGISTER_SUCCESS,REGISTER_FAIL,LOADTABS_START,LOADTABS_SUCCESS,LOADTABS_FAIL,ADDTABS_START,ADDTABS_SUCCESS, ADDTABS_FAIL,LOGOUT,DELETE_START,DELETE_SUCCESS,DELETE_FAIL,EDITTAB_START, EDITTAB_SUCCESS, EDITTAB_FAIL
} from './actions/index';



const initialState = {
  id: localStorage.getItem('user') || null,
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

            case ADDTABS_START:
              return {
                ...state,
                isLoading: true
              }
              case ADDTABS_SUCCESS:
                  return {
                    ...state,
                    isLoading:false,
                    tabs: action.payload
                  }

                  case ADDTABS_FAIL:
                      return{
                        ...state,
                        isLoading:false,
                        error: action.payload
                      }

                      case LOGOUT:
                        return {
                          ...state,
                          id: null
                        }

                        case DELETE_START:
                            return {
                              ...state,
                              isLoading: true
                            }
                            case DELETE_SUCCESS:
                                return {
                                  ...state,
                                  isLoading:false,
                                  tabs: action.payload
                                }

                                case DELETE_FAIL:
                                    return{
                                      ...state,
                                      isLoading:false,
                                      error: action.payload
                                    }

                                    case EDITTAB_START:
                                      return {
                                        ...state,
                                        isLoading:true
                                      }

                                      case EDITTAB_SUCCESS:
                                          return {
                                            ...state,
                                            isLoading:false,
                                            tabs: action.payload
                                          }

                                            case EDITTAB_FAIL:
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