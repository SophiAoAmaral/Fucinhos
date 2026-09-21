import React from 'react'
import { useLocation } from 'react-router'

export const Finalizar = () => {
    const {state} = useLocation();
    console.log(state)
  return (
    <div>Finalizar</div>
  )
}
