import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
export default function NavBar() {
    const navigate = useNavigate()
    const [flag, setFlag] = useState(false)
    
    const handleLogout = () => {
        toast('Loged Out', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 500
        })
        setTimeout(logout, 1000)
    }
    const logout = () => {
        localStorage.setItem('loginFlag', false)
        navigate('/login')
    }
    useEffect(()=>{
        const loginFlag = localStorage.getItem('loginFlag')
        if (loginFlag == 'true') {
            setFlag(true)
        }
        else {
            setFlag(false)
        }
    },[flag])
    return (
        < nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <a className="navbar-brand" href="#">CARE </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li> */}
                </ul>
                {flag ?
                    <button className="btn btn-outline-success my-2 my-sm-0 mr-2" onClick={handleLogout}>Logout</button>
                    :
                    <>
                        <button className="btn btn-outline-success my-2 my-sm-0 mr-5" onClick={() => navigate('/')}>Register User</button>
                        <button className="btn btn-outline-success my-2 my-sm-0 mr-2" onClick={() => navigate('/login')}>Login</button>
                    </>
                }
            </div>
        </nav >
    )
}
