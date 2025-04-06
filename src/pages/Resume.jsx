function Resume() {
    return (
      <section className="resume">
        <h2>Resume</h2>
        <p>
          Download my resume:{" "}
          <a
            href="/Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-gold)', fontWeight: 'bold' }}
          >
            Click here
          </a>
        </p>
  
        <h3>Proficiencies</h3>
        <ul className="skills-list">
          <li>HTML, CSS, JavaScript</li>
          <li>React, Vite, React Router</li>
          <li>Node.js, Express</li>
          <li>MongoDB, Mongoose</li>
          <li>REST APIs, GraphQL</li>
          <li>Git & GitHub, Netlify & Render Deployment</li>
        </ul>
      </section>
    );
  }
  
  export default Resume;
  