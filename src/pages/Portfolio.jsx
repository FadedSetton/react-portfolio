import Project from '../components/Project';

function Portfolio() {
  const projects = [
    
    {
      title: 'Book Worm',
      image: 'https://raw.githubusercontent.com/FadedSetton/BookWorm/refs/heads/main/assets/saved-books.png',
      deployedLink: 'https://bookworm-q7n9.onrender.com/',
      githubLink: 'https://github.com/FadedSetton/BookWorm'
    },
    {
        title: 'Virtual Garage',
        image: 'https://via.placeholder.com/300x200',
        deployedLink: 'https://example.com',
        githubLink: 'https://github.com/FadedSetton/virtual-garage'
    },
    // Add more as needed
  ];

  return (
    <section className="portfolio">
      <h2>My Work</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
