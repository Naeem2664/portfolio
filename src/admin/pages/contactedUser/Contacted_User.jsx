import React from 'react'
import Header from '../../layout/AdminHeader/Header'
import Sidebar from '../../layout/AdminSidebar/Sidebar'
import Footer from '../../layout/AdminFooter/Footer'
import ContectedUserComponent from '../../components/ContactedUserComponent'
const Contacted_User = () => {
  return (
    <div className='bg-gray-100'>
      <Sidebar/>
      <ContectedUserComponent/>
      <Footer/>
    </div>
  )
}

export default Contacted_User
