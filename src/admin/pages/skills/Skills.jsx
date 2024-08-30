import React from 'react'
import Header from '../../layout/AdminHeader/Header'
import Sidebar from '../../layout/AdminSidebar/Sidebar'
import Footer from '../../layout/AdminFooter/Footer'
import SkillsComponent from '../../components/SkillsComponent'
const Skills = () => {
    return (
        <>
        <Sidebar/>
        <SkillsComponent/>
        <Footer/>
        </>
    )
}

export default Skills