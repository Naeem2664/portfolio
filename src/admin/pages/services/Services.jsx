import React from 'react'
import Header from '../../layout/AdminHeader/Header'
import Sidebar from '../../layout/AdminSidebar/Sidebar'
import Footer from '../../layout/AdminFooter/Footer'
import ServicesComponent from '../../components/ServicesComponent'
const Services = () => {
    return (
        <>
        <Sidebar/>
        <ServicesComponent/>
        <Footer/>
        </>
    )
}    
export default Services