import React from 'react'
import Header from '../../layout/AdminHeader/Header'
import Sidebar from '../../layout/AdminSidebar/Sidebar'
import DashboardComponent from '../../components/DashboardComponent'
import Footer from '../../layout/AdminFooter/Footer'
const Dashboard = () => {
  return (
    <div>
   <Sidebar/>
    <DashboardComponent/>
    <Footer/>
    
    </div>
  )
}

export default Dashboard
