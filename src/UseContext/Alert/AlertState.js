import React, {useReducer} from 'react'
import {AlertConstext} from './AlertContext'
import {AlertReducer} from './AlertReducer'
import {HIDE_ALERT, SHOW_ALERT} from '../type'

export const AlertState = ({children}) => {
  const [state, dispatch] = useReducer(AlertReducer, {visible: false})

  const show = (text, type = 'warning') => {
    dispatch({
      type: SHOW_ALERT,
      payload: {text, type}
    })
  }

  const hide = () => dispatch({type: HIDE_ALERT})

  return (
    <AlertConstext.Provider value={{
      show, hide,
      alert: state
    }}>
      {children}
    </AlertConstext.Provider>
  )
}