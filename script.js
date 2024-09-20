
const profileData = {
  name: "Asad Mehmood",
  skills: {
    soft: ["Leadership", "Communication", "Teamwork"],
    hard: ["HTML", "CSS", "JavaScript", "Python"]
  },
  projects: [
    { name: "Website Redesign", date: "August 2023" },
    { name: "JavaScript Game Development", date: "July 2023" }
    
  ],
  awards: ["Certified Web Developer - 2022","JavaScript Expert Certification - 2021","Google UX Design Certificate -     2023","Short Course on Agile Development - 2022","Hackathon Winner - March 2023","Front-End Development Certification"]
};

document.getElementById('skills').innerHTML = `
  <h2>Skills</h2>
  <ul>
    <li><strong>Soft Skills:</strong> ${profileData.skills.soft.join(', ')}</li>
    <li><strong>Hard Skills:</strong> ${profileData.skills.hard.join(', ')}</li>
  </ul>
`;

document.getElementById('projects').innerHTML = `
  <h2>Projects</h2>
  <ul>
    ${profileData.projects.map(project => `<li><strong>${project.name}:</strong> ${project.date}</li>`).join('')}
  </ul>
`;

document.getElementById('awards').innerHTML = `
  <h2>Awards & Certifications</h2>
  <ul>
    ${profileData.awards.map(award => `<li>${award}</li>`).join('')}
  </ul>
`;
