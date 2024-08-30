import React from 'react'
import Header from '../../layout/AdminHeader/Header'
import Sidebar from '../../layout/AdminSidebar/Sidebar'
import Footer from '../../layout/AdminFooter/Footer'
import ExperiencesComponent from '../../components/ExperiencesComponent'
const Experiences = () => {
  return (
    <>
    <Sidebar/>
    <ExperiencesComponent/>
    <Footer/>
    </>
  )
}

export default Experiences
