import AboutSection from "./components/about/AboutSection"
import ContactHeader from "./components/about/ContactHeader"
import BlogSection from "./components/blog/BlogSection"
import EducationSection from "./components/education/EducationSection"
import ExperienceSection from "./components/experience/ExperienceSection"
import ContactSection from "./components/footer/ContactSection"
import PortfolioSection from "./components/portfolio/PortfolioSection"
import Profile from "./components/profile/Index"
import Recommendations from "./components/recommandation/Recommendations"
import SkillsAndLanguage from "./components/skilla.languages/SkillsAndLanguage"

function App() {

  return (
    <>
    <Profile/>
    <ContactHeader/>
    <AboutSection/>
    <ExperienceSection/>
    <EducationSection/>
    <SkillsAndLanguage/>
    <PortfolioSection/>
    <Recommendations/>
    <BlogSection/>
    <ContactSection/>
    </>
  )
}

export default App
