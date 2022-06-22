import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Detail() {
  const user = useSelector((user) => user)
  const navigateTo = useNavigate()
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
  return (
    <>{flag ?
      <div className='row'>
        <div className='col-md-4 offset-md-4'>
          <h2>User Detail</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.phoneNumber}</td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
      :
      <div className='row'>
        <div className='col-md-4 offset-md-4'>

          <div className='card' >
            <div className='card-body'>

              <h3>Your are not login, go to login page and login again</h3>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  )
}
