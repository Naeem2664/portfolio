import React, {useEffect}from 'react'
import Cookies from 'js-cookie'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../admin/layout/AdminSidebar/Sidebar'
import Footer from '../../admin/layout/AdminFooter/Footer'
const Protectedroute = () => {
    const navigate=useNavigate()
    const adminId=Cookies.get('adminId')
    const adminStatus=sessionStorage.getItem('admin')
    useEffect(()=>{ 
        if(!adminId || adminStatus !== 'true'){
            navigate('/login')
        }
    },[adminId,adminStatus,navigate])
    return (
        <>
        <Sidebar/>
        <Outlet/>
        <Footer/>
        </>
    )
    
}

export default Protectedroute
