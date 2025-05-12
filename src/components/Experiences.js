// src/app/experiences/page.js
const experiences = [
    {
      title: "Student Researcher - Infrastructure as Code Benchmark",
      company: "University of Michigan EECS",
      date: "Dec 2023 - Jun 2024",
      description: "Developed 100+ Terraform scripts with Rego policy checks to validate GPT-generated cloud infrastructure. Focused on real-world resource configurations from GitHub and StackOverflow. Published paper at NeurIPS 2024.",
    },
    {
      title: "Code Instructor",
      company: "theCoderSchool",
      date: "May 2022 - Jul 2023",
      description: "Mentored 30+ students on Python projects and taught basic Scratch and Java programming. Oversaw coding camps and managed large student groups.",
    },
    {
      title: "Web Developer - Instagram Clone",
      company: "Personal Project",
      date: "Jan 2025",
      description: "Built a client-side dynamic web app using React and REST APIs for real-time updates. Designed an optimized SQLite database and implemented parameterized queries in Flask.",
    },
    {
      title: "Business Sustainability Researcher",
      company: "University of Michigan UROP",
      date: "Jan 2023 - May 2023",
      description: "Researched business sustainability laws and their impact on corporate operations. Presented findings to university faculty and peers.",
    },
  ];
  
  export default function ExperiencesPage() {
    return (
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold">My Experiences</h1>
        <div className="w-full max-w-3xl space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold">{exp.title}</h2>
              <h3 className="text-lg text-gray-700">{exp.company}</h3>
              <p className="text-sm text-gray-500">{exp.date}</p>
              <p className="mt-2 text-gray-800">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }