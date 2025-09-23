import { useEffect, useRef } from 'react';
import './RecentProjects.css';

const RecentProjects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          io.disconnect(); // animate once
        }
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="recent-projects reveal">
      <h2 className="section-heading">RECENT <br /> PROJECTS</h2>

      <div className="projects-grid">
        <article className="project-card">
          <h3 className="project-title">Project One</h3>
          <p className="project-desc">Short description of what it is and the stack.</p>
        </article>
        <article className="project-card">
          <h3 className="project-title">Project Two</h3>
          <p className="project-desc">Short description of what it is and the stack.</p>
        </article>
        <article className="project-card">
          <h3 className="project-title">Project Three</h3>
          <p className="project-desc">Short description of what it is and the stack.</p>
        </article>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default RecentProjects;