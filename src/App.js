
import './App.css'
import LoginPage from './pages/Login/LoginPage'
import { BrowserRouter ,Routes,Route,} from 'react-router-dom'
import SignUpPage from './pages/SignUp/SignUpPage'
import HomePage from './pages/Home/HomePage'
import AboutMePage from './pages/About/AboutMePage'
import ContactPage from './pages/Contact/ContactPage'
import E_EPage from './pages/E&E/E_EPage'
import Container from './pages/Container/Container'
import Dashboard from './admin/pages/dashboard/Dashboard'
import ServicesPage from './pages/Services/ServicesPage'
import ProjectsPage from './pages/Projects/ProjectsPage'
import SkillsPage from './pages/skills/SkillsPage'
import BlogPage from './pages/Blog/BlogPage'
import About_Page from './admin/pages/about/About_Page'
import Contacted_User from './admin/pages/contactedUser/Contacted_User'
import Education from './admin/pages/education/Education'
import Experiences from './admin/pages/experiences/Experiences'
import Projects from './admin/pages/projects/Projects'
import Services from './admin/pages/services/Services'
import Skills from './admin/pages/skills/Skills'
import Blog from './admin/pages/blog/Blog'
import Cookies from 'js-cookie'
import Protectedroute from './routes/adminRoute/Protectedroute'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage/>} />      
      <Route path='/register' element={<SignUpPage/>} />      
      <Route path='/' index element={<Container/>} />      
      <Route path='/home' element={<HomePage/>} />
      <Route path='/about_me' element={<AboutMePage/>} />
      <Route path='/contact_me' element={<ContactPage/>} />
      <Route path='/my-services' element={<ServicesPage/>} />
      <Route path='/my-skills' element={<SkillsPage/>} />
      <Route path='/my-experiences_&_education' element={<E_EPage/>} />
      <Route path='/my-projects' element={<ProjectsPage/>} />
      <Route path='/blogs' element={<BlogPage/>} />
      <Route path='/admin' element={<Protectedroute/>}>
      <Route index element={<Dashboard/>} />
      <Route path='about_user' element={<About_Page/>} />
      <Route path='contacted_users' element={<Contacted_User/>} />
      <Route path='education' element={<Education/>} />
      <Route path='experiences' element={<Experiences/>} />
      <Route path='projects' element={<Projects/>} />
      <Route path='services' element={<Services/>} />
      <Route path='skills' element={<Skills/>} />
      <Route path='blogs' element={<Blog/>} />
      </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
