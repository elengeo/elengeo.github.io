// src/app/projects/page.js

const projects = [
    {
      title: "Instagram Clone",
      description: "A full-stack social media application with real-time updates, SQLite database, and REST API integration.",
      tech: ["React", "Flask", "SQLite", "REST API"],
    },
    {
      title: "MapReduce Framework",
      description: "A distributed MapReduce framework inspired by Google’s original MapReduce paper, built in Python.",
      tech: ["Python", "AWS EMR", "Distributed Systems"],
    },
    {
      title: "TinyTransformer",
      description: "A minimalist transformer attention mechanism implemented in NumPy, including Q/K/V computation and layer normalization.",
      tech: ["NumPy", "Machine Learning", "Transformers"],
    },
    {
      title: "Top 50 Library Database",
      description: "A Flask-based web app to manage and search a database of the Top 50 Books of 2023, with dynamic search functionality.",
      tech: ["Flask", "SQLite", "Web Development"],
    },
  ];
  
  export default function ProjectsPage() {
    return (
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {projects.map((project, index) => (
            <a
              key={index}
              target="_blank"
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all"
            >
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <ul className="flex flex-wrap mt-4 space-x-2">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="text-sm bg-gray-300 text-gray-900 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    );
  }