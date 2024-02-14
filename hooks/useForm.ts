import { useReducer } from "react";

const useForm = () => {
  const initialState = {
    inp1: '',
    inp2: '',
    sel1: '',
    cb1: false,
    cb2: false,
    cb3: false
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_TEXT': return {
        ...state,
        [action.payload.name]: action.payload.value
      }

      case 'SET_SELECT': return {
        ...state,
        [action.payload.name]: action.payload.value
      }

      case 'TOGGLE_CHECKBOX': return {
        ...state,
        [action.payload.name]: !state[action.payload.name]
      }

      default: return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleInputChange = ({ target }) => {
    dispatch({
      type: 'SET_TEXT',
      payload: { name: target.name, value: target.value }
    })
  }

  const handleSelectChange = ({ target }) => {
    dispatch({
      type: 'SET_SELECT',
      payload: { name: target.name, value: target.value }
    })
  }

  const handleCheckboxClick = ({ target }) => {
    dispatch({
      type: 'TOGGLE_CHECKBOX',
      payload: { name: target.name }
    })
  }

  return {
    state,
    handleInputChange,
    handleSelectChange,
    handleCheckboxClick,
  }
}

export default useForm
