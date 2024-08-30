import React from 'react'
import Header from '../../layout/AdminHeader/Header'
import Sidebar from '../../layout/AdminSidebar/Sidebar'
import Footer from '../../layout/AdminFooter/Footer'
import AboutUserComponent from '../../components/AboutUserComponent'
const About_Page = () => {
  return (
    <div>
      <Sidebar/>
      <AboutUserComponent/>
      <Footer/>
      
    </div>
  )
}

export default About_Page
