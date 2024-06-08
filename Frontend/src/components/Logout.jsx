import React from 'react'
import { useAuth } from '../context/AuthProvider'

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    const handleLogOut = () => {
        try {
            setAuthUser({...authUser, user: null});
            localStorage.removeItem("user")
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
    <div>
        <button className='px-3 py-1 bg-orange-600 text-white rounded-md cursor-pointer' onClick={handleLogOut}>Logout</button>
    </div>
    </>
  )
}

export default Logout