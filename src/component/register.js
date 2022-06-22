import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate ,Navigate} from 'react-router-dom'
import { actions } from '../store'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function Register() {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    const user = useSelector((state)=>state)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!userName.match(/^[a-zA-Z0-9_ ]*$/) ){
            toast('Invalid Name',{
                position:toast.POSITION.TOP_CENTER,
                autoClose:1000
              })
        }
        else if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            toast('Invalid Email address',{
                position:toast.POSITION.TOP_CENTER,
                autoClose:1000
              })
        }
        else if(!phoneNumber.match(/^[0-9]+$/) ){
            toast('Invalid phone number',{
                position:toast.POSITION.TOP_CENTER,
                autoClose:1000
              })
        }
        else {
        toast('Registering User',{
            position:toast.POSITION.TOP_CENTER,
            autoClose:1000
          })
        localStorage.setItem("Email", JSON.stringify(email))
        localStorage.setItem("Password", JSON.stringify(password))
        dispatch(actions.addUser({
            userName: userName,
            email: email,
            password: password,
            age: age,
            phoneNumber: phoneNumber
        }))
        setTimeout(navigateTo,2000)
    }

    }
    const navigateTo =()=>{
        navigate('/login')
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
    if(!flag){
    return (
        <>
            <div className='row'>
                <div className="col-md-4 offset-md-4">
                    <div className='card' >
                        <h2 className='card-title'>Register</h2>
                        <div className='card-body'>

                            <form onSubmit={handleSubmit}>
                                <input type="text" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Name" />

                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

                                <input type="date" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />

                                <input type="number" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />

                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />

                                <input className='form-control btn btn-outline-success ' type="submit" value="Register" />

                            </form>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </div>
            {console.log(user)}
        </>
    )}
    else {
      return (
        <Navigate to='/detail' />
      )
    }
}
