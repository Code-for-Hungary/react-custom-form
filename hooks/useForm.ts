import {useEffect, useReducer} from "react";

const useForm = () => {
  const initialState = {
    inp1: '',
    inp2: '',
    sel1: 'DEFAULT',
    sel1options: [],
    cb1: false,
    cb2: false,
    cb3: false,
  }

  const getStateOnTextChange = (state, action) => {
    const cannotModify  = state.cb2 && state.sel1 === '2nd' && action.payload.name === 'inp2'

    if (cannotModify) return state

    return {
    ...state,
      [action.payload.name]: action.payload.value
    }
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_TEXT': return getStateOnTextChange(state, action)

      case 'SET_SELECT': return {
        ...state,
        [action.payload.name]: action.payload.value
      }

      case 'TOGGLE_CHECKBOX': return {
        ...state,
        [action.payload.name]: !state[action.payload.name]
      }

      case 'SET_DROPDOWN_DATA': return {
        ...state,
        sel1options: action.payload.data
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

  useEffect(() => {
    (fetch('/api/ordinal-numbers')
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'SET_DROPDOWN_DATA',
          payload: { data }
        })
      })
    )
  }, []);

  return {
    state,
    handleInputChange,
    handleSelectChange,
    handleCheckboxClick,
  }
}

export default useForm
