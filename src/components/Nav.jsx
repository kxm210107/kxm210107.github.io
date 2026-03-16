import { useState, useEffect } from 'react'
import { Home, User, Folder, Briefcase, GraduationCap, Mail } from 'lucide-react'

export default function Nav() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))

    const onScroll = () => {
      if (window.scrollY < 50) setActiveSection('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const link = (href, icon, label) => {
    const id = href.replace('#', '')
    const isActive = activeSection === id || (id === '' && activeSection === '')
    return (
      <a href={href} className={isActive ? 'active' : ''}>
        {icon}<span>{label}</span>
      </a>
    )
  }

  return (
    <nav>
      <a href="#" className="nav-logo">Kevin Mai</a>
      <div className="nav-links">
        {link('#', <Home size={13} />, 'Home')}
        {link('#about', <User size={13} />, 'About')}
        {link('#projects', <Folder size={13} />, 'Projects')}
        {link('#experience', <Briefcase size={13} />, 'Experience')}
        {link('#education', <GraduationCap size={13} />, 'Education')}
        {link('#contact', <Mail size={13} />, 'Contact')}
      </div>
    </nav>
  )
}
