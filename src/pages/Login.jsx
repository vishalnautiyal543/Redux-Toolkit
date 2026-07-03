import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {loginSuccess} from "../features/auth/authSlice"

const Login = () => {

    const[text,setText]=useState("")

    const dispatch = useDispatch()

    function hanldeSubmit(e){
        e.preventDefault()
        const res = {user:text}
        dispatch(loginSuccess(res))
    }

  return (
    <div>
        <input 
        type="text" 
        placeholder='enter name'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        <button onClick={hanldeSubmit} >Submit</button>
    </div>
  )
}

export default Login