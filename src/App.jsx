import { useEffect, useState } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const personalInfo = {
    name: "Ahmad Abbas",
    firstName: "Ahmad",
    role: "Front-End Web Developer",
    email: "ahmadpaf1234@gmail.com",
    phone: "+92 308 6099963",
    location: "Islamabad, Pakistan",
    github: "https://github.com/ahmad-abbas-cui",
    linkedin: "https://www.linkedin.com/flagship-web/login/login-restriction/",
    fiverr: "https://www.fiverr.com/?source=breadcrumbs"
  };

  const typingText = "Front-End Web Developer";
  const typingSpeed = 100;

  const aboutDescription = [
    "I am a passionate Front-End Web Developer and BS Computer Science student at COMSATS University Islamabad, Attock Campus.",
    "I enjoy creating responsive, user-friendly, and modern websites using HTML, CSS, JavaScript, and React. I am continuously learning new technologies and improving my skills through projects and internships."
  ];

  const skillsData = [
    { name: "HTML5", percentage: 85 },
    { name: "CSS3", percentage: 70 },
    { name: "JavaScript", percentage: 65 },
    { name: "React.js", percentage: 60 },
    { name: "Tailwind CSS", percentage: 75 },
    { name: "Responsive Design", percentage: 60 },
    { name: "Git & GitHub", percentage: 70 },
    { name: "WordPress", percentage: 75 }
  ];

  const services = [
    { icon: "📱", title: "Responsive Development", description: "Mobile-first websites that look perfect on all devices and screen sizes." },
    { icon: "🎨", title: "Landing Page Design", description: "High-converting landing pages designed to capture leads and drive sales." },
    { icon: "🔄", title: "Website Redesign", description: "Modern redesigns that improve user experience and performance." },
    { icon: "💻", title: "Frontend Development", description: "Clean, efficient code using modern frameworks and best practices." },
    { icon: "🐛", title: "Bug Fixing", description: "Debugging and fixing issues to ensure smooth website performance." },
    { icon: "📂", title: "Portfolio Websites", description: "Professional portfolio websites that showcase your work beautifully." }
  ];

  const projects = [
    { id: 1, title: 'Personal Portfolio Website', description: 'A modern, responsive portfolio website built with React.js showcasing my skills and projects.', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600', tech: ['React', 'CSS3', 'JavaScript'], github: '#', live: '#' },
    { id: 2, title: 'TechNova Website', description: 'A technology company website with modern design and interactive elements.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600', tech: ['HTML5', 'CSS3', 'JavaScript'], github: '#', live: '#' },
    { id: 3, title: 'SINA Institute Clone', description: 'Clone of SINA Institute website with responsive design and clean layout.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600', tech: ['HTML5', 'Tailwind CSS', 'JavaScript'], github: '#', live: '#' },
    { id: 4, title: 'Responsive Landing Pages', description: 'Collection of beautiful, responsive landing pages for various businesses.', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600', tech: ['HTML5', 'CSS3', 'Bootstrap'], github: '#', live: '#' },
    { id: 5, title: 'Login Forms', description: 'Modern, secure login and registration forms with validation.', image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600', tech: ['HTML5', 'CSS3', 'JavaScript'], github: '#', live: '#' },
    { id: 6, title: 'React Practice Projects', description: 'Various React.js practice projects demonstrating component-based architecture.', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600', tech: ['React', 'JavaScript', 'CSS3'], github: '#', live: '#' }
  ];

  const experience = [
    { id: 1, title: "Software Development Intern", company: "Alfa Origin", period: "JUne 2026 - Present", description: ["Worked on modern website development.", "Built responsive UI components.", "Learned teamwork and real-world development.", "Improved HTML, CSS, JavaScript, and React skills."] }
  ];

  const education = [
    { id: 1, title: "Bachelor of Science in Computer Science", institution: "COMSATS University Islamabad", location: "Attock Campus", period: "2024 - 2028", description: "Currently pursuing BS in Computer Science with focus on web technologies and software development." }
  ];

  const testimonials = [
    { id: 1, name: "Ahmed Khan", role: "CEO, TechStart", text: "Ahmad delivered an outstanding portfolio website. His attention to detail and responsive design skills are impressive!", rating: 5 },
    { id: 2, name: "Sara Ali", role: "Project Manager", text: "Working with Ahmad was a great experience. He's quick, professional, and delivers high-quality work.", rating: 5 },
    { id: 3, name: "Usman Raza", role: "Freelance Client", text: "Excellent frontend developer! He redesigned my business website beautifully. Highly recommended!", rating: 5 }
  ];

  const stats = [
    { icon: "⏰", value: "2+", label: "Years Learning" },
    { icon: "📁", value: "10+", label: "Projects Completed" },
    { icon: "😊", value: "15+", label: "Happy Clients" },
    { icon: "💻", value: "8+", label: "Technologies" }
  ];

  const navLinks = ['home', 'about', 'skills', 'services', 'projects', 'experience', 'testimonials', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setShowScrollTop(currentScrollY > 500);
      const sections = navLinks.map(link => document.getElementById(link));
      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(navLinks[index]);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(typingText.slice(0, index + 1));
      index++;
      if (index === typingText.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <style>{styles}</style>

      {/* NAVBAR */}
      <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <h1 className="logo" onClick={() => scrollTo('home')}>
            {personalInfo.firstName}<span className="accent">.</span>
          </h1>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((section) => (
              <button key={section} className={`nav-link ${activeSection === section ? 'active' : ''}`} onClick={() => scrollTo(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
          <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">👋 Hello, I'm</p>
            <h1 className="name">{personalInfo.name}</h1>
            <div className="hero-typing"><span className="typing-text">{typedText}</span><span className="typing-cursor">|</span></div>
            <p className="description">I craft beautiful, performant, and user-friendly web experiences. Passionate about clean code and modern design.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollTo('projects')}>View My Work</button>
              <button className="btn-secondary" onClick={() => scrollTo('contact')}>Get In Touch</button>
            </div>
            <div className="social-links">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href={personalInfo.fiverr} target="_blank" rel="noopener noreferrer" className="social-link">Fiverr</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="profile-placeholder"><span className="profile-emoji">👨‍💻</span></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollTo('about')}>
          <div className="mouse"><div className="wheel"></div></div>
          <p>Scroll Down</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <div className="about-content">
            <div className="about-text">
              {aboutDescription.map((text, index) => <p key={index}>{text}</p>)}
              <div className="about-details">
                <div className="detail-item"><span className="detail-label">📧 Email:</span> {personalInfo.email}</div>
                <div className="detail-item"><span className="detail-label">📱 Phone:</span> {personalInfo.phone}</div>
                <div className="detail-item"><span className="detail-label">📍 Location:</span> {personalInfo.location}</div>
              </div>
              <div className="stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat"><h3>{stat.value}</h3><p>{stat.label}</p></div>
                ))}
              </div>
            </div>
            <div className="about-image">
              <div className="about-placeholder"><span>🎯</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills">
        <div className="section-container">
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <p className="section-description">Technologies and tools I've been working with</p>
          <div className="skills-grid">
            {skillsData.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header"><h3>{skill.name}</h3><span>{skill.percentage}%</span></div>
                <div className="skill-bar"><div className="skill-progress" style={{ '--progress-width': `${skill.percentage}%` }}></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <div className="section-container">
          <h2 className="section-title">What I <span className="gradient-text">Offer</span></h2>
          <p className="section-description">Professional services to help bring your ideas to life</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <div className="section-container">
          <h2 className="section-title">Recent <span className="gradient-text">Projects</span></h2>
          <p className="section-description">Check out some of my recent work</p>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                      <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">{project.tech.map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE & EDUCATION */}
      <section id="experience" className="experience">
        <div className="section-container">
          <h2 className="section-title">My <span className="gradient-text">Journey</span></h2>
          <div className="timeline-grid">
            <div className="timeline-column">
              <h3 className="timeline-heading">💼 Experience</h3>
              {experience.map(exp => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{exp.period}</span>
                    <h4>{exp.title}</h4>
                    <h5>{exp.company}</h5>
                    <ul>{exp.description.map((desc, i) => <li key={i}>{desc}</li>)}</ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="timeline-column">
              <h3 className="timeline-heading">🎓 Education</h3>
              {education.map(edu => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{edu.period}</span>
                    <h4>{edu.title}</h4>
                    <h5>{edu.institution}</h5>
                    <p className="timeline-location">📍 {edu.location}</p>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="testimonials">
        <div className="section-container">
          <h2 className="section-title">What Clients <span className="gradient-text">Say</span></h2>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-stars">{[...Array(testimonial.rating)].map((_, i) => <span key={i}>⭐</span>)}</div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">👤</div>
                  <div className="author-info"><h4>{testimonial.name}</h4><p>{testimonial.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-description">Have a project in mind? Let's work together!</p>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card-item"><span className="contact-icon">📧</span><h4>Email</h4><p>{personalInfo.email}</p></div>
              <div className="contact-card-item"><span className="contact-icon">📱</span><h4>Phone</h4><p>{personalInfo.phone}</p></div>
              <div className="contact-card-item"><span className="contact-icon">📍</span><h4>Location</h4><p>{personalInfo.location}</p></div>
              <div className="contact-social-links">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={personalInfo.fiverr} target="_blank" rel="noopener noreferrer">Fiverr</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group"><input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleFormChange} required /></div>
              <div className="form-group"><input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleFormChange} required /></div>
              <div className="form-group"><textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleFormChange} required></textarea></div>
              <button type="submit" className="btn-primary">Send Message ✉️</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-info"><h3>{personalInfo.firstName}<span className="accent">.</span></h3><p>Front-End Web Developer</p></div>
          <div className="footer-links"><h4>Quick Links</h4>{['home', 'about', 'projects', 'contact'].map(link => <button key={link} onClick={() => scrollTo(link)}>{link.charAt(0).toUpperCase() + link.slice(1)}</button>)}</div>
          <div className="footer-social"><h4>Connect</h4><div className="footer-social-icons"><a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={personalInfo.fiverr} target="_blank" rel="noopener noreferrer">Fiverr</a></div></div>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p></div>
      </footer>

      {/* SCROLL TO TOP */}
      <button className={`back-to-top ${showScrollTop ? 'visible' : ''}`} onClick={() => scrollTo('home')}>↑</button>
    </div>
  );
};

// COMPLETE CSS STYLES (NO CUTOFF)
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --primary: #6C63FF; --primary-dark: #5A52D5; --accent: #FF6B6B;
    --text: #2D3436; --text-light: #636E72; --bg: #FFFFFF;
    --bg-secondary: #F8F9FA; --card-bg: #FFFFFF; --border: #E9ECEF;
    --shadow: 0 10px 30px rgba(0,0,0,0.08); --shadow-hover: 0 20px 40px rgba(0,0,0,0.12);
    --gradient: linear-gradient(135deg, #6C63FF 0%, #FF6B6B 100%);
  }

  .dark {
    --text: #F8F9FA; --text-light: #ADB5BD; --bg: #0A0A0A;
    --bg-secondary: #111111; --card-bg: #1A1A1A; --border: #2A2A2A;
    --shadow: 0 10px 30px rgba(0,0,0,0.3); --shadow-hover: 0 20px 40px rgba(0,0,0,0.5);
  }

  .app { font-family: 'Poppins', sans-serif; background: var(--bg); color: var(--text); transition: all 0.3s ease; overflow-x: hidden; }

  .navbar { position: fixed; top: 0; width: 100%; padding: 1.5rem 2rem; z-index: 1000; transition: all 0.3s ease; background: transparent; }
  .navbar.scrolled { background: var(--bg); box-shadow: var(--shadow); padding: 1rem 2rem; backdrop-filter: blur(10px); }
  .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
  .logo { font-size: 1.8rem; font-weight: 700; cursor: pointer; color: var(--text); }
  .accent { color: var(--accent); }
  .nav-links { display: flex; gap: 1.5rem; align-items: center; }
  .nav-link { background: none; border: none; color: var(--text-light); cursor: pointer; font-size: 0.95rem; font-weight: 500; transition: color 0.3s ease; position: relative; padding: 0.5rem 0; }
  .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: var(--gradient); transition: width 0.3s ease; }
  .nav-link:hover::after, .nav-link.active::after { width: 100%; }
  .nav-link:hover, .nav-link.active { color: var(--text); }
  .theme-toggle { background: var(--bg-secondary); border: 2px solid var(--border); padding: 0.5rem; border-radius: 50%; cursor: pointer; font-size: 1.2rem; transition: all 0.3s ease; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; }
  .theme-toggle:hover { transform: rotate(180deg); }
  .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 5px; }
  .hamburger span { width: 25px; height: 3px; background: var(--text); transition: all 0.3s ease; }

  .hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; padding: 6rem 2rem 2rem; }
  .hero-content { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .greeting { font-size: 1.2rem; color: var(--text-light); margin-bottom: 0.5rem; animation: fadeInUp 0.6s ease; }
  .name { font-size: 3.5rem; font-weight: 800; margin-bottom: 0.5rem; animation: fadeInUp 0.6s ease 0.2s both; line-height: 1.2; }
  .hero-typing { font-size: 1.5rem; color: var(--primary); margin-bottom: 1.5rem; animation: fadeInUp 0.6s ease 0.3s both; font-weight: 600; min-height: 2rem; }
  .typing-cursor { animation: blink 0.7s infinite; color: var(--accent); }
  @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
  .gradient-text { background: var(--gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .description { font-size: 1.1rem; color: var(--text-light); line-height: 1.6; margin-bottom: 2rem; animation: fadeInUp 0.6s ease 0.6s both; }
  .hero-buttons { display: flex; gap: 1rem; margin-bottom: 2rem; animation: fadeInUp 0.6s ease 0.8s both; flex-wrap: wrap; }
  .btn-primary { background: var(--gradient); color: white; border: none; padding: 1rem 2rem; border-radius: 50px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 10px 20px rgba(108,99,255,0.3); }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 15px 30px rgba(108,99,255,0.4); }
  .btn-secondary { background: transparent; color: var(--text); border: 2px solid var(--border); padding: 1rem 2rem; border-radius: 50px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; }
  .btn-secondary:hover { border-color: var(--primary); color: var(--primary); transform: translateY(-2px); }
  .social-links { display: flex; gap: 1.5rem; animation: fadeInUp 0.6s ease 1s both; flex-wrap: wrap; }
  .social-link { color: var(--text-light); text-decoration: none; font-weight: 500; transition: all 0.3s ease; padding: 0.5rem 1rem; border-radius: 50px; border: 1px solid var(--border); }
  .social-link:hover { color: var(--primary); border-color: var(--primary); background: rgba(108,99,255,0.1); }
  .hero-image { animation: fadeInRight 0.8s ease; }
  .image-wrapper { position: relative; width: 100%; max-width: 400px; margin: 0 auto; }
  .profile-placeholder { width: 100%; aspect-ratio: 1; background: var(--gradient); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-hover); }
  .profile-emoji { font-size: 8rem; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2)); }
  .scroll-indicator { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 0.5rem; color: var(--text-light); animation: bounce 2s infinite; cursor: pointer; }
  .mouse { width: 25px; height: 40px; border: 2px solid var(--text-light); border-radius: 20px; display: flex; justify-content: center; padding-top: 8px; }
  .wheel { width: 4px; height: 8px; background: var(--text-light); border-radius: 2px; animation: scroll-anim 1.5s infinite; }

  section { padding: 6rem 2rem; }
  .section-container { max-width: 1200px; margin: 0 auto; }
  .section-title { font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem; text-align: center; }
  .section-description { text-align: center; color: var(--text-light); margin-bottom: 3rem; font-size: 1.1rem; }

  .about { background: var(--bg-secondary); }
  .about-content { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
  .about-text p { font-size: 1.05rem; line-height: 1.8; color: var(--text-light); margin-bottom: 1.5rem; }
  .about-details { display: flex; flex-direction: column; gap: 0.8rem; margin: 1.5rem 0; }
  .detail-item { color: var(--text-light); font-size: 0.95rem; }
  .detail-label { font-weight: 600; color: var(--text); }
  .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-top: 2rem; }
  .stat { text-align: center; padding: 1.5rem 1rem; background: var(--card-bg); border-radius: 15px; box-shadow: var(--shadow); transition: transform 0.3s ease; }
  .stat:hover { transform: translateY(-5px); }
  .stat h3 { font-size: 1.8rem; color: var(--primary); margin-bottom: 0.3rem; }
  .stat p { font-size: 0.85rem; color: var(--text-light); margin: 0; }
  .about-image { display: flex; align-items: center; justify-content: center; }
  .about-placeholder { width: 100%; max-width: 350px; aspect-ratio: 1; background: var(--card-bg); border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 8rem; box-shadow: var(--shadow); }

  .skills { background: var(--bg); }
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
  .skill-card { background: var(--card-bg); padding: 1.5rem; border-radius: 15px; box-shadow: var(--shadow); transition: all 0.3s ease; border: 2px solid transparent; }
  .skill-card:hover { transform: translateY(-5px); border-color: var(--primary); box-shadow: var(--shadow-hover); }
  .skill-header { display: flex; justify-content: space-between; margin-bottom: 0.8rem; }
  .skill-header h3 { font-size: 1rem; font-weight: 600; }
  .skill-header span { color: var(--primary); font-weight: 700; }
  .skill-bar { width: 100%; height: 8px; background: var(--bg-secondary); border-radius: 10px; overflow: hidden; }
  .skill-progress { height: 100%; background: var(--gradient); border-radius: 10px; width: var(--progress-width); transition: width 1.5s ease; }

  .services { background: var(--bg-secondary); }
  .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
  .service-card { background: var(--card-bg); padding: 2rem; border-radius: 20px; text-align: center; box-shadow: var(--shadow); transition: all 0.3s ease; border: 2px solid transparent; }
  .service-card:hover { transform: translateY(-10px); border-color: var(--primary); box-shadow: var(--shadow-hover); }
  .service-icon { font-size: 3rem; margin-bottom: 1rem; }
  .service-card h3 { font-size: 1.2rem; margin-bottom: 0.8rem; }
  .service-card p { color: var(--text-light); font-size: 0.95rem; line-height: 1.6; }

  .projects { background: var(--bg); }
  .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; }
  .project-card { background: var(--card-bg); border-radius: 20px; overflow: hidden; box-shadow: var(--shadow); transition: all 0.3s ease; }
  .project-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-hover); }
  .project-image { position: relative; overflow: hidden; height: 250px; }
  .project-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease; }
  .project-card:hover .project-image img { transform: scale(1.1); }
  .project-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(108,99,255,0.9); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; }
  .project-card:hover .project-overlay { opacity: 1; }
  .project-links { display: flex; gap: 1rem; }
  .project-link { padding: 0.8rem 1.5rem; background: white; color: var(--primary); text-decoration: none; border-radius: 50px; font-weight: 600; transition: transform 0.3s ease; }
  .project-link:hover { transform: scale(1.1); }
  .project-info { padding: 1.5rem; }
  .project-info h3 { font-size: 1.2rem; margin-bottom: 0.5rem; }
  .project-info p { color: var(--text-light); margin-bottom: 1rem; line-height: 1.6; font-size: 0.95rem; }
  .project-tech { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .tech-tag { padding: 0.3rem 0.8rem; background: var(--bg-secondary); border-radius: 50px; font-size: 0.85rem; color: var(--text-light); }

  .experience { background: var(--bg-secondary); }
  .timeline-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
  .timeline-heading { font-size: 1.5rem; margin-bottom: 2rem; text-align: center; }
  .timeline-item { position: relative; padding-left: 2rem; margin-bottom: 2rem; border-left: 2px solid var(--primary); }
  .timeline-dot { position: absolute; left: -8px; top: 5px; width: 14px; height: 14px; background: var(--primary); border-radius: 50%; }
  .timeline-content { background: var(--card-bg); padding: 1.5rem; border-radius: 15px; box-shadow: var(--shadow); }
  .timeline-period { display: inline-block; background: var(--gradient); color: white; padding: 0.3rem 1rem; border-radius: 50px; font-size: 0.85rem; margin-bottom: 0.8rem; }
  .timeline-content h4 { font-size: 1.1rem; margin-bottom: 0.3rem; }
  .timeline-content h5 { color: var(--primary); margin-bottom: 0.5rem; font-weight: 500; }
  .timeline-content ul { list-style: disc; padding-left: 1.2rem; color: var(--text-light); font-size: 0.9rem; }
  .timeline-content ul li { margin-bottom: 0.3rem; }
  .timeline-location { color: var(--text-light); font-size: 0.9rem; margin-bottom: 0.5rem; }
  .timeline-content p { color: var(--text-light); font-size: 0.9rem; line-height: 1.6; }

  .testimonials { background: var(--bg); }
  .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
  .testimonial-card { background: var(--card-bg); padding: 2rem; border-radius: 20px; box-shadow: var(--shadow); transition: all 0.3s ease; text-align: center; }
  .testimonial-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-hover); }
  .testimonial-stars { margin-bottom: 1rem; font-size: 1.2rem; }
  .testimonial-text { color: var(--text-light); font-style: italic; line-height: 1.6; margin-bottom: 1.5rem; }
  .testimonial-author { display: flex; align-items: center; gap: 1rem; justify-content: center; }
  .author-avatar { font-size: 2.5rem; }
  .author-info h4 { font-size: 1rem; margin-bottom: 0.2rem; }
  .author-info p { color: var(--text-light); font-size: 0.85rem; }

  .contact { background: var(--bg-secondary); }
  .contact-content { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
  .contact-card-item { background: var(--card-bg); padding: 1.5rem; border-radius: 15px; margin-bottom: 1rem; box-shadow: var(--shadow); display: flex; align-items: center; gap: 1rem; }
  .contact-icon { font-size: 2rem; }
  .contact-card-item h4 { font-size: 1rem; margin-bottom: 0.2rem; }
  .contact-card-item p { color: var(--text-light); font-size: 0.9rem; }
  .contact-social-links { display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap; }
  .contact-social-links a { color: var(--text-light); text-decoration: none; padding: 0.5rem 1rem; border: 1px solid var(--border); border-radius: 50px; font-size: 0.9rem; transition: all 0.3s ease; }
  .contact-social-links a:hover { color: var(--primary); border-color: var(--primary); }
  .contact-form { display: flex; flex-direction: column; gap: 1.5rem; background: var(--card-bg); padding: 2rem; border-radius: 20px; box-shadow: var(--shadow); }
  .form-group input, .form-group textarea { width: 100%; padding: 1rem 1.5rem; border: 2px solid var(--border); border-radius: 10px; background: var(--bg); color: var(--text); font-size: 1rem; font-family: inherit; transition: border-color 0.3s ease; }
  .form-group input:focus, .form-group textarea:focus { outline: none; border-color: var(--primary); }
  .form-group textarea { resize: vertical; }

  .footer { background: var(--bg); border-top: 1px solid var(--border); padding: 3rem 2rem 1.5rem; }
  .footer-content { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 2rem; }
  .footer-info h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }
  .footer-info p { color: var(--text-light); }
  .footer-links h4, .footer-social h4 { margin-bottom: 1rem; }
  .footer-links button { display: block; background: none; border: none; color: var(--text-light); cursor: pointer; padding: 0.3rem 0; font-size: 0.9rem; transition: color 0.3s ease; }
  .footer-links button:hover { color: var(--primary); }
  .footer-social-icons { display: flex; gap: 0.8rem; flex-wrap: wrap; }
  .footer-social-icons a { color: var(--text-light); text-decoration: none; font-size: 0.9rem; transition: color 0.3s ease; }
  .footer-social-icons a:hover { color: var(--primary); }
  .footer-bottom { text-align: center; padding-top: 1.5rem; border-top: 1px solid var(--border); color: var(--text-light); font-size: 0.85rem; }

  .back-to-top { position: fixed; bottom: 2rem; right: 2rem; width: 50px; height: 50px; background: var(--gradient); color: white; border: none; border-radius: 50%; font-size: 1.5rem; cursor: pointer; transition: all 0.3s ease; box-shadow: var(--shadow); opacity: 0; visibility: hidden; z-index: 999; display: flex; align-items: center; justify-content: center; }
  .back-to-top.visible { opacity: 1; visibility: visible; }
  .back-to-top:hover { transform: translateY(-5px); box-shadow: var(--shadow-hover); }

  @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fadeInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); } 40% { transform: translateY(-20px) translateX(-50%); } 60% { transform: translateY(-10px) translateX(-50%); } }
  @keyframes scroll-anim { 0% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(15px); } }

  @media (max-width: 992px) {
    .hero-content, .about-content, .contact-content, .timeline-grid { grid-template-columns: 1fr; gap: 3rem; }
    .hero-text { order: 2; text-align: center; }
    .hero-image { order: 1; }
    .hero-buttons, .social-links { justify-content: center; }
    .profile-placeholder { max-width: 280px; margin: 0 auto; }
    .profile-emoji { font-size: 6rem; }
    .name { font-size: 2.5rem; }
    .stats { grid-template-columns: repeat(2, 1fr); }
    .footer-content { grid-template-columns: 1fr; text-align: center; }
    .footer-social-icons { justify-content: center; }
  }

  @media (max-width: 768px) {
    .hamburger { display: flex; z-index: 1001; }
    .nav-links { position: fixed; top: 0; right: -100%; width: 70%; height: 100vh; background: var(--bg); flex-direction: column; justify-content: center; transition: right 0.3s ease; box-shadow: var(--shadow-hover); }
    .nav-links.active { right: 0; }
    .section-title { font-size: 2rem; }
    section { padding: 4rem 1.5rem; }
    .projects-grid, .services-grid, .testimonials-grid { grid-template-columns: 1fr; }
    .skills-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 576px) {
    .name { font-size: 2rem; }
    .hero-typing { font-size: 1.2rem; }
    .stats { grid-template-columns: 1fr; }
    .hero-buttons { flex-direction: column; }
    .section-title { font-size: 1.6rem; }
  }
`;

export default App;