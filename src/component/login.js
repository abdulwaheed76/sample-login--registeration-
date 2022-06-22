import React, { useState, useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import Detail from './details'
export default function Login() {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    // fetching from local storage
    var l_email = localStorage.getItem("Email").replace(/"/g, "")
    var l_password = localStorage.getItem("Password").replace(/"/g, "")
    // login validation
    if (l_email == email && l_password == password) {
      toast('Loging in', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
      })
      localStorage.setItem('loginFlag', true)
      setTimeout(navigateTo, 1500)
    }
    else {
      toast('Invalid Credential', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000
      })
    }
  }
  const navigateTo = () => {
    navigate('/detail')
  }
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    const loginFlag = localStorage.getItem('loginFlag')
    if (loginFlag == 'true') {
      setFlag(true)
    }
    else {
      setFlag(false)
    }
  }, [flag])
  if (!flag) {
    return (
      <>
        <div className='row'>
          <div className="col-md-4 offset-md-4">
            <div className='card' >

              <h2 className='card-title'>Login</h2>
              <div className='card-body'>

                <form onSubmit={handleSubmit}>
                  <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>

                  <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>

                  <input className='form-control btn btn-outline-success ' type="submit" value="Login" />

                </form>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </>
    )
  }
  else {
    return (
      <Navigate to='/detail' />
    )
  }
}
