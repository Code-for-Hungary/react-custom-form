import { useContext, useEffect } from "react";
import {
  SET_DROPDOWN_DATA,
  SET_SELECT,
  SET_TEXT,
  SUBMIT__REQUEST,
  SUBMIT__SUCCESS,
  TOGGLE_CHECKBOX
} from "@/constants/form";
import { DEFAULT_SELECT_VALUE } from "@/components/Select";
import { GlobalStateContext } from "@/providers/GlobalState";

const getStateOnTextChange = (state, action) => {
  const cannotModify  = state.cb2 && state.sel1 === '2nd' && action.payload.name === 'inp2'

  if (cannotModify) return state

  return {
    ...state,
    [action.payload.name]: action.payload.value
  }
}

export type FormInitialState = {
  inp1: string
  inp2: string
  sel1: string
  sel1options: string[]
  cb1: boolean
  cb2: boolean
  cb3: boolean
  isSubmitting: boolean
}

export const formInitialState = {
  inp1: '',
  inp2: '',
  sel1: DEFAULT_SELECT_VALUE,
  sel1options: [],
  cb1: false,
  cb2: false,
  cb3: false,
  isSubmitting: false,
}
export const formReducer = (state, action) => {
  switch (action.type) {
    case SET_TEXT: return getStateOnTextChange(state, action)

    case SET_SELECT: return {
      ...state,
      [action.payload.name]: action.payload.value
    }

    case TOGGLE_CHECKBOX: return {
      ...state,
      [action.payload.name]: !state[action.payload.name]
    }

    case SET_DROPDOWN_DATA: return {
      ...state,
      sel1options: action.payload.data
    }

    case SUBMIT__REQUEST: return {
      ...state,
      isSubmitting: true
    }

    case SUBMIT__SUCCESS: return {
      ...state,
      isSubmitting: false
    }

    default: return state
  }
}
const useForm = () => {
  const { state, dispatch } = useContext(GlobalStateContext)
  const handleInputChange = ({ target }) => {
    dispatch({
      type: SET_TEXT,
      payload: { name: target.name, value: target.value }
    })
  }

  const handleSelectChange = ({ target }) => {
    dispatch({
      type: SET_SELECT,
      payload: { name: target.name, value: target.value }
    })
  }

  const handleCheckboxClick = ({ target }) => {
    dispatch({
      type: TOGGLE_CHECKBOX,
      payload: { name: target.name }
    })
  }


  const handleSubmit = () => {
    const { inp1, inp2, cb1, cb2, cb3, sel1 } = state
    dispatch({ type: SUBMIT__REQUEST })
    fetch('/api/data-entries', {
      method: 'POST',
      body: JSON.stringify({ inp1, inp2, cb1, cb2, cb3, sel1 })
    })
    .then(() => {
      dispatch({ type: SUBMIT__SUCCESS })
    })
  }



  useEffect(() => {
    (fetch('/api/ordinal-numbers')
        .then(res => res.json())
        .then(data => {
          dispatch({
            type: SET_DROPDOWN_DATA,
            payload: { data }
          })
        })
    )
  }, [dispatch]);


  return {
    state,
    handleInputChange,
    handleSelectChange,
    handleCheckboxClick,
    handleSubmit,
  }
}

export default useForm
