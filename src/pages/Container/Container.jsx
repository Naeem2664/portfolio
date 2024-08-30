import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import Home from "../../components/Home";
import About from "../../components/About";
import E_E from "../../components/E_E";
import Contact from "../../components/Contact";
import Projects from "../../components/Projects";
import Skills from '../../components/Skills'
import Services from '../../components/Services'
const Container = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <E_E/>
      <Skills></Skills>
      <Services />
      <Projects/>
      <Contact />
      <Footer />
    </>
  );
};

export default Container;
