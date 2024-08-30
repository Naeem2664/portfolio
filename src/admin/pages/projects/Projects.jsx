import React from 'react'
import Header from '../../layout/AdminHeader/Header'
import Footer from '../../layout/AdminFooter/Footer'
import Sidebar from '../../layout/AdminSidebar/Sidebar'
import ProjectsComponent from '../../components/ProjectsComponent'
const Projects = () => {
    return (
        <>
        <Sidebar/>
        <ProjectsComponent/>
        <Footer/>
        </>
    )
}

export default Projects