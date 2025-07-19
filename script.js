const profile = {
  name: "Dilli Karuru",
  tagline: "Data Engineer @ Deloitte USI | Data Enthusiast",
  email: "mailto:dilli.karuru@gmail.com",
  linkedin: "https://www.linkedin.com/in/dilli-karuru-0920091a9/",
  github: "https://github.com/karuru330",
  summary: "Passionate data engineer with a focus on building scalable, real-time data pipelines and cloud-native solutions. Experienced in AWS services, Python automation, and GenAI integrations. I thrive on solving complex problems with elegant solutions and enjoy exploring how data intersects with everyday life.",
  skills: {
      "Programming": ["Python", "SQL"],
      "AWS Cloud Services": ["Lambda", "S3", "Glue", "Step Functions", "DynamoDB", "CloudFormation", "SQS", "EventBridge"],
      "Data Engineering": ["ETL", "Batch Processing", "Data Quality Checks"],
      "DevOps & Automation": ["GitHub Actions", "AWS CloudFormation", "Conflict Resolution"],
  },
  education: [
      {
          degree: "B.Tech in Computer Science and Engineering",
          university: "IIIT RK Valley",
          cgpa: "8.04/10",
          years: "2016 - 2020"
      },
      {
          degree: "Pre University course",
          university: "IIIT RK Valley",
          cgpa: "8.47/10",
          years: "2014 - 2016"
      },
      {
          degree: "10th or SSC",
          university: "Z.P.H.S School, Pichatur",
          cgpa: "10/10",
          years: "2014"
      }
  ],
  experience: [
        {
          company: "Deloitte USI",
          roles: [
          {
              client: "Eli Lilly and Company",
              title: "Data Engineer",
              domain: "Pharmaceuticals Manufacturing",
              start: "Nov 2024",
              end: "Present",
              summary: [
                "Engineered modular data pipelines using Python, with components across AWS Glue and AWS Lambda",
                "Ingested from multiple data sources:",
                "Unstructured: SharePoint, OneNote, Veeva QDocs — retrieved, converted DOC/XLSX to PDF, stored in Amazon S3",
                "Structured: Redshift datasets — retrieved, transformed and stored in AWS Aurora PostgreSQL",
                "Tracked ingestion and metadata using DynamoDB for document-level monitoring",
                "Orchestrated pipeline scheduling via EventBridge for unstructured flows",
                "Implemented structured data workflows using Step Functions for multi-stage transformations",
                "Deployed data pipelines infrastructure and code using CloudFormation templates, with automated CI/CD via GitHub Actions",
                "Integrated Clien'ts GenAI platform for document parsing and LLM-based query handling"
              ]
            }
          ]
      },
      {
          company: "Tata Consultancy Services",
          roles: [
              {
                  client: "Eli Lilly and Company",
                  domain: "Pharmaceuticals",
                  title: "Data Engineer",
                  start: "Oct 2023",
                  end: "Nov 2024",
                  summary: [
                  "Developed data pipeline using glue job with python to extract data from s3 raw buckets and store it in refined database(Amazon Aurora Postgresql database)",
                  "Implemented data quality checks and handled error reprocessing in the glue job.",
                  "Integrated AWS SES with glue job to send error report summary email to source team automatically.",
                  "Analyzed and fixed production issues reported by downstream teams.",
                  "Utilized AWS cloudwatch to analyze the logs.",
                  "Utilized AWS Athena to query the data available in s3 buckets.",
                  "Created deployed end-to-end data pipeline using AWS Cloudformation template through GitHub Actions.",
                  ]
              },
              {
                  client: "Tata Digital Limited",
                  "domain": "E-commerce",
                  title: "Python Developer",
                  start: "Feb 2021",
                  end: "Oct 2023",
                  summary: [
                      "Acquired hands-on experience in creating and scheduling CI/CD pipelines using GitHub on Azure cloud",
                      "Automated below mentioned tasks using Python scripting and deployed the same using Azure CI/CD pipelines to run automatically on daily basis. Also, integrated the sendgrid email API to send the notification email to respective stakeholders.",
                      "i) Validation of the data quality and redundancy in MySQL database.",
                      "ii) Application sanity such as checking Database accessibility, APIs response time and failure rate.",
                      "iii) Synchronization of data in two different No SQL databases based on the data received in azure blob storage from data warehouse team.",
                      "Developed REST APIs using Django to collect data from different retailer websites using web scrapping to compare details of products such as price, features, customer feedback etc to derive meaningful insights.",
                      "Utilized tools such as Grafana, Azure application insights for proactive monitoring and log analysis.",
                      "Utilized and acquired experience of working with Git, GitHub for version control.",
                      "Worked on multiple data loading , data clean-up activities in MySQL database.",
                      "Improved problem solving and analytical skills by analyzing the production issues and resolving them within the SLA.",
                      "Collaborated with different teams within the project and helped them to solve critical production issues."
                  ]
              }
          ]
      }
  ],
  awards: [
     {
      title: "🏆Applause Award",
      desc: "Recognized for impelementing and deploying data pipeline on AWS with given strict project timelines",
      link: "#",
      associatedWith: "Deloitte"
    },
    {
      title: "🏆Innovation Pride Award",
      desc: "Ranked in the top 3 participants in Tata Neu app improvement ideathons",
      link: "https://drive.google.com/file/d/1y863XQ8WVf2ewJHXyvoCac8e-SVrff54/view?usp=drive_link",
      associatedWith: "Tata Consultancy Services"
    },
    {
      title: "🏆Beyond Excellence Award",
      desc: "Recognized for implementing a python-based automation that helped to synchronize data in two different NoSQL databases",
      link: "https://drive.google.com/file/d/1PW33ZALIESnldND1LDPH_JVbmCZhxBNe/view?usp=drive_link",
      associatedWith: "Tata Consultancy Services"
    }
  ],

  projects: [
    {
      title: "ServiceNow Data Analysis",
      desc: "ETL pipeline to extract, transform, and load data from ServiceNow into AWS S3 to be further used by LLM.",
      link: "https://github.com/karuru330/service-now-data-analysis",
    },
    {
      title: "Coding Club Management System",
      desc: "A web application to manage coding club activities, including event scheduling, member management, and resource sharing.",
      link: "https://github.com/karuru330/coding-club-management-system",
    }
  ]
};

// Inject Header Info
document.getElementById("name").textContent = profile.name;
document.getElementById("tagline").textContent = profile.tagline;
document.getElementById("email").href = profile.email;
document.getElementById("linkedin").href = profile.linkedin;
document.getElementById("github").href = profile.github;

// Summary
document.getElementById("summary-content").textContent = profile.summary;

// Education
const eduContainer = document.getElementById("education-info");
profile.education.forEach(edu => {
  const div = document.createElement("div");
  div.className = "edu-entry";
  div.innerHTML = `
    <h3>${edu.degree}</h3>
    <p><strong>University:</strong> ${edu.university}</p>
    <p><strong>CGPA:</strong> ${edu.cgpa}</p>
    <p><strong>Years:</strong> ${edu.years}</p>
  `;
  eduContainer.appendChild(div);
});

// Experience
const experienceContainer = document.getElementById("experience-list");
profile.experience.forEach(company => {
  const div = document.createElement("div");
  div.className = "exp-company";
  div.innerHTML = `
    <h3>${company.company}</h3>
  `;
  company.roles.forEach(role => {
    const roleDiv = document.createElement("div");
    roleDiv.className = "exp-entry";
    roleDiv.innerHTML = `
      <h4>Role: ${role.title}</h4>
      <h4>Client: ${role.client}</h4>
      <h4>Domain: ${role.domain}</h4>
      <p><strong>Tenure:</strong> ${role.start} – ${role.end}</p>
      <ul>${role.summary.map(point => `<li>${point}</li>`).join("")}</ul>
    `;
    div.appendChild(roleDiv);
  });
  experienceContainer.appendChild(div);
});

// Skills
const skillsContainer = document.getElementById("skills-list");
Object.entries(profile.skills).forEach(([category, skillList]) => {
  const categoryDiv = document.createElement("div");
  categoryDiv.className = "skill-category";
  categoryDiv.innerHTML = `<h4>${category}</h4>`;
  skillList.forEach(skill => {
    const span = document.createElement("span");
    span.textContent = skill;
    categoryDiv.appendChild(span);
  });
  skillsContainer.appendChild(categoryDiv);
});

// Awards & Achievements
const awardsContainer = document.getElementById("awards-list");
profile.awards.forEach(award => {
  const div = document.createElement("div");
  div.className = "award";
  div.innerHTML = `
    <h3><a href="${award.link}" target="_blank">${award.title}</a></h3>
    <p>${award.desc}</p>
    <p>Associated with: ${award.associatedWith}</p>
  `;
  awardsContainer.appendChild(div);
});

// Projects (Horizontal Layout)
const projectsContainer = document.getElementById("projects-list");
profile.projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
    <a class="btn-link" href="${project.link}" target="_blank">View Project</a>
  `;
  projectsContainer.appendChild(div);
});
