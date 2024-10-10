/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nayan's Portfolio",
  description:
    "A driven professional with a passion for delivering end-to-end solutions that enhance both technical and social systems for long-term sustainability and impact.",
  og: {
    title: "Nayan Mehta's Portfolio",
    type: "website",
    url: "http://nayanmehta.com/",
  },
};

//Home Page
const greeting = {
  title: "Nayan Mehta",
  logo_name: "NayanMehta",
  nickname: "",
  subTitle:
    "Seasoned DevOps Engineer with 7+ years of experience in cloud deployment, focusing on continuous integration, configuration management, and automation through platforms like Azure DevOps, GitHub Actions, and Terraform. Adept at scripting in PowerShell and Python, and experienced with Docker, Kubernetes, and observability solutions like ELK Stack and Azure Monitor. Committed to enhancing security and scalability, with a focus on integrating DevSecOps practices. Holder of multiple certifications, including Microsoft Certified Azure Administrator and DevOps Engineer Expert.",
  resumeLink:
    "https://drive.google.com/file/d/1F67FtPoNo58cc7Kbn99_JiAXQm586AFE/view?usp=sharing",
  portfolio_repository: "https://calendly.com/mehtanayan730",
  githubProfile: "https://github.com/nayan947",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",

  {
    name: "Github",
    link: "https://github.com/nayan947",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nayan-m-/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mehtanayan730@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

];

const skills = {
  data: [
    {
      title: "DevOps & Cloud Engineering",
      fileName: "DevOpsImg",
      skills: [
        "⚡ Designing and maintaining scalable cloud infrastructure using AWS, Azure, and GCP",
        "⚡ Automating CI/CD pipelines with Azure DevOps, GitHub Actions, and Terraform",
        "⚡ Containerization and orchestration using Docker and Kubernetes",
        "⚡ Implementing monitoring solutions using ELK Stack and Azure Monitor",
        "⚡ Expertise in scripting with PowerShell and Python for task automation",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#5C4EE5",
          },
        },
        {
          skillName: "PowerShell",
          fontAwesomeClassname: "simple-icons:powershell",
          style: {
            color: "#5391FE",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "ELK Stack",
          fontAwesomeClassname: "simple-icons:elastic",
          style: {
            color: "#005571",
          },
        },
      ],
    },
    {
      title: "CI/CD & Automation",
      fileName: "CICDImg",
      skills: [
        "⚡ Designing CI/CD pipelines for seamless deployment and software delivery",
        "⚡ Automating infrastructure with Terraform and CloudFormation",
        "⚡ Integrating security into CI/CD pipelines using DevSecOps practices",
        "⚡ Managing source control with GitHub, GitLab, and Azure Repos",
        "⚡ Version control and code quality enforcement using SonarQube",
      ],
      softwareSkills: [
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "Azure DevOps",
          fontAwesomeClassname: "simple-icons:azuredevops",
          style: {
            color: "#0078D7",
          },
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: {
            color: "#FC6D26",
          },
        },
        {
          skillName: "SonarQube",
          fontAwesomeClassname: "simple-icons:sonarqube",
          style: {
            color: "#4E9BCD",
          },
        },
        {
          skillName: "JIRA",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
      ],
    },
    {
      title: "Infrastructure as Code (IaC)",
      fileName: "IaCImg",
      skills: [
        "⚡ Automating cloud infrastructure provisioning using Terraform and CloudFormation",
        "⚡ Implementing configuration management and orchestration with Ansible and Chef",
        "⚡ Streamlining deployments with reusable infrastructure templates",
        "⚡ Managing infrastructure security with Snyk and other DevSecOps tools",
      ],
      softwareSkills: [
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#5C4EE5",
          },
        },
        {
          skillName: "CloudFormation",
          fontAwesomeClassname: "logos:aws-cloudformation",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: {
            color: "#EE0000",
          },
        },
        {
          skillName: "Chef",
          fontAwesomeClassname: "simple-icons:chef",
          style: {
            color: "#70B37E",
          },
        },
        {
          skillName: "Snyk",
          fontAwesomeClassname: "simple-icons:snyk",
          style: {
            color: "#4C4A73",
          },
        },
      ],
    },
  ],
};


// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "MEDI-CAPS University",
      subtitle: "Bachelor of Technology",
      logo_path: "medicaps_logo.png",
      alt_name: "MEDI-CAPS University",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ I studied core subjects such as Operating Systems, Networking, Databases, and Distributed Systems, which laid the foundation for my expertise in DevOps and cloud-based deployments.",
        "⚡ Additionally, I completed courses in Cloud Computing, Containerization (Docker), and Infrastructure as Code (Terraform), which are critical for modern DevOps practices.",
        "⚡ I was awarded the Merit cum Means Scholarship for my academic achievements, placing in the top 10% of my class, and I received recognition for my contributions to various tech initiatives within the university.",
      ],
    },
    {
      title: "SICA School",
      subtitle: "Math & Science",
      logo_path: "sica_logo.png",
      alt_name: "SICA School",
      duration: "2009 - 2013",
      descriptions: [
        "⚡ I developed a strong foundation in problem-solving, mathematics, and logical thinking, which are essential skills in the DevOps field.",
        "⚡ My passion for automation and optimization started during this time, where I worked on projects related to scripting and basic infrastructure management.",
        "⚡ I was also involved in organizing tech events and workshops that introduced students to the concepts of coding and cloud technologies.",
      ],
    },
  ],
};


const certifications = {
  certifications: [
    {
      title: "Azure Administrator Associate",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link: "#",
      alt_name: "Microsoft",
      color_code: "#0089D6",
    },
    {
      title: "DevOps Engineer Expert",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link: "#",
      alt_name: "Microsoft",
      color_code: "#D83B01",
    },
    {
      title: "Linux Foundation Certified System Administrator",
      subtitle: "- Linux Foundation",
      logo_path: "linux_logo.png",
      certificate_link: "#",
      alt_name: "Linux Foundation",
      color_code: "#333333",
    },
    {
      title: "AWS Certified Solutions Architect",
      subtitle: "- Amazon Web Services",
      logo_path: "aws_logo.png",
      certificate_link: "#",
      alt_name: "AWS",
      color_code: "#FF9900",
    },
    {
      title: "Certified Kubernetes Administrator",
      subtitle: "- CNCF",
      logo_path: "kubernetes_logo.png",
      certificate_link: "#",
      alt_name: "CNCF",
      color_code: "#326CE5",
    },
    {
      title: "Terraform Associate",
      subtitle: "- HashiCorp",
      logo_path: "terraform_logo.png",
      certificate_link: "#",
      alt_name: "HashiCorp",
      color_code: "#5C4EE5",
    },
    {
      title: "Docker Certified Associate",
      subtitle: "- Docker",
      logo_path: "docker_logo.png",
      certificate_link: "#",
      alt_name: "Docker",
      color_code: "#1488C6",
    },
    {
      title: "Google Cloud Professional DevOps Engineer",
      subtitle: "- Google",
      logo_path: "gcp_logo.png",
      certificate_link: "#",
      alt_name: "Google Cloud",
      color_code: "#4285F4",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am an experienced DevOps Engineer specializing in cloud-based deployments, CI/CD, configuration management, and automation. I have worked extensively with tools like Azure DevOps, GitHub Actions, Docker, Kubernetes, and Terraform. I also have a strong background in scripting and cloud infrastructure management.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior DevOps Engineer",
          company: "CodesCure Technology Pvt. Ltd.",
          company_url: "https://www.codescure.com/",
          logo_path: "codescure_logo.jpg",
          duration: "2022 - Present",
          location: "Indore, M.P., India",
          descriptions: [
            "⚡ Designed and optimized CI/CD pipelines to automate software deployment processes.\n",
            "⚡ Automated cloud infrastructure using Terraform and CloudFormation.\n",
            "⚡ Managed and maintained cloud solutions on AWS, Azure, and GCP.\n",
            "⚡ Integrated security into CI/CD pipelines to ensure compliance.\n",
            "⚡ Deployed and managed containerized applications using Docker and Kubernetes.\n",
            "⚡ Monitored application performance using ELK Stack and Azure Monitor.\n",
            "⚡ Led DevOps teams, collaborated with developers, and mentored junior engineers.",
          ],
          color: "#000000",
        },
        {
          title: "DevOps Engineer",
          company: "Tata Consultancy Services",
          company_url: "https://www.tcs.com/",
          logo_path: "tcs_logo.png",
          duration: "2017 - 2022",
          location: "Indore, M.P., India",
          descriptions: [
            "⚡ Developed and managed CI/CD pipelines with Azure DevOps.\n",
            "⚡ Deployed applications on AWS and Azure, utilizing Amazon EKS and Azure Functions.\n",
            "⚡ Applied DevSecOps practices using reusable templates in Azure DevOps for secure deployments.\n",
            "⚡ Managed containerized applications with Docker and Kubernetes.\n",
            "⚡ Automated infrastructure with Terraform and optimized performance monitoring using ELK Stack.",
          ],
          color: "#0879bf",
        },
      ],
    },
  ],
  experiences: [
    {
      title: "Senior DevOps Engineer",
      company: "CodesCure Technology Pvt. Ltd.",
      company_url: "https://www.codescure.com/",
      logo_path: "codescure_logo.jpg",
      duration: "2022 - Present",
      location: "Indore, M.P., India",
      descriptions: [
        "⚡ Designed and optimized CI/CD pipelines to automate software deployment processes.\n",
        "⚡ Automated cloud infrastructure using Terraform and CloudFormation.\n",
        "⚡ Managed and maintained cloud solutions on AWS, Azure, and GCP.\n",
        "⚡ Integrated security into CI/CD pipelines to ensure compliance.\n",
        "⚡ Deployed and managed containerized applications using Docker and Kubernetes.\n",
        "⚡ Monitored application performance using ELK Stack and Azure Monitor.\n",
        "⚡ Led DevOps teams, collaborated with developers, and mentored junior engineers.",
      ],
      color: "#000000",
    },
    {
      title: "DevOps Engineer",
      company: "Tata Consultancy Services",
      company_url: "https://www.tcs.com/",
      logo_path: "tcs_logo.png",
      duration: "2017 - 2022",
      location: "Indore, M.P., India",
      descriptions: [
        "⚡ Developed and managed CI/CD pipelines with Azure DevOps.\n",
        "⚡ Deployed applications on AWS and Azure, utilizing Amazon EKS and Azure Functions.\n",
        "⚡ Applied DevSecOps practices using reusable templates in Azure DevOps for secure deployments.\n",
        "⚡ Managed containerized applications with Docker and Kubernetes.\n",
        "⚡ Automated infrastructure with Terraform and optimized performance monitoring using ELK Stack.",
      ],
      color: "#0879bf",
    },
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "In my projects, I utilize a diverse range of cutting-edge DevOps tools and cloud platforms. I specialize in streamlining CI/CD pipelines, implementing infrastructure as code, and deploying scalable applications on cloud services such as AWS and Azure, with a focus on container orchestration using Docker and Kubernetes.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_nayan.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Indore, Madhya Pradesh, India",
    locality: "Indore",
    country: "INDIA",
    region: "Madhya Pradesh",
    postalCode: "451010",
    streetAddress: "Ranjeed Path, Indore",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
