import pyIcon from '../assets/skills/pythonicon.svg';
import jsIcon from '../assets/skills/javascripticon.svg';
import tsIcon from '../assets/skills/typescripticon.svg';
import javaIcon from '../assets/skills/javaicon.svg';
import reactIcon from '../assets/skills/reacticon.svg';
import nodeIcon from '../assets/skills/nodeicon.svg';
import postgresIcon from '../assets/skills/postgresqlicon.svg';
import mongoIcon from '../assets/skills/mongoicon.svg';
import gitIcon from '../assets/skills/giticon.svg';
import awsIcon from '../assets/skills/awsicon.svg';
import supabaseIcon from '../assets/skills/supabaseicon.svg';
import expoIcon from '../assets/skills/expoicon.svg';
import claudeicon from '../assets/skills/claudeicon.svg';
import dockericon from '../assets/skills/dockericon.svg';
import n8nicon from '../assets/skills/n8nicon.svg';
import ociicon from '../assets/skills/ociicon.svg';
import rendericon from '../assets/skills/rendericon.svg';
import vercelicon from '../assets/skills/vercelicon.svg';
import nextjsicon from '../assets/skills/nextjsicon.svg';
import viteicon from '../assets/skills/viteicon.svg';
import fastapiicon from '../assets/skills/fastapiicon.svg';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { imageSrc: pyIcon,   title: 'Python',     subtitle: 'Backend/AI',          tags: ['Backend', 'AI', 'Data Analysis'] },
      { imageSrc: jsIcon,   title: 'JavaScript', subtitle: 'Frontend Web',         tags: ['Frontend', 'Web Development', 'Dynamic Content'] },
      { imageSrc: tsIcon,   title: 'TypeScript', subtitle: 'Frontend Web/Mobile',  tags: ['Frontend', 'Type Safety', 'Scalable Apps'] },
      { imageSrc: javaIcon, title: 'Java',        subtitle: 'Backend',             tags: ['Backend', 'OOP'] },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { imageSrc: reactIcon, title: 'React',   subtitle: 'Frontend',    tags: ['Frontend', 'UI/UX', 'Component-Based'] },
      { imageSrc: nextjsicon,    title: 'Next.js', subtitle: 'Fullstack',   tags: ['Frontend', 'SSR', 'React'] },
      { imageSrc: viteicon,    title: 'Vite',    subtitle: 'Build Tool',  tags: ['Frontend', 'Build', 'Bundler'] },
      { imageSrc: nodeIcon,  title: 'Node.js', subtitle: 'Packages',    tags: ['Backend', 'APIs', 'Server-Side'] },
      { imageSrc: expoIcon,  title: 'Expo',    subtitle: 'Mobile Apps', tags: ['Mobile', 'Cross-Platform', 'React Native'] },
      { imageSrc: fastapiicon,    title: 'FastAPI', subtitle: 'Backend',       tags: ['Backend', 'Web Development', 'RESTful APIs'] },
    ],
  },
  {
    category: 'Cloud & Deployment',
    skills: [
      { imageSrc: awsIcon, title: 'AWS',    subtitle: 'Cloud/Image Hosting', tags: ['Cloud', 'Hosting', 'Scalability'] },
      { imageSrc: ociicon,  title: 'OCI',    subtitle: 'Cloud',               tags: ['Cloud', 'Hosting', 'Oracle'] },
      { imageSrc: vercelicon,  title: 'Vercel', subtitle: 'Deployment',          tags: ['Deployment', 'Hosting', 'Frontend'] },
      { imageSrc: rendericon,  title: 'Render', subtitle: 'Deployment',          tags: ['Deployment', 'Hosting', 'Backend'] },
      { imageSrc: dockericon,  title: 'Docker', subtitle: 'Containerization',    tags: ['DevOps', 'Containers', 'Deployment'] },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { imageSrc: postgresIcon,  title: 'PostgreSQL', subtitle: 'Local Database', tags: ['Database', 'Relational', 'SQL'] },
      { imageSrc: supabaseIcon,  title: 'Supabase',   subtitle: 'Database',       tags: ['Database', 'Backend', 'Open Source'] },
      { imageSrc: mongoIcon,     title: 'MongoDB',    subtitle: 'Database',       tags: ['Database', 'NoSQL', 'Scalable'] },
      { imageSrc: n8nicon,        title: 'n8n',        subtitle: 'Automation',     tags: ['Automation', 'Workflows', 'Backend'] },
    ],
  },
  {
    category: 'Tools & Productivity',
    skills: [
      { imageSrc: gitIcon, title: 'Git',         subtitle: 'Version Control', tags: ['Version Control', 'Collaboration', 'Repositories'] },
      // { imageSrc: claudeicon,  title: 'Claude Code', subtitle: 'AI Coding',       tags: ['AI', 'Productivity', 'Automation'] },
    ],
  },
];

export default skillsData;