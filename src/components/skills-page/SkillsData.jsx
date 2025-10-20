import pyIcon from '../assets/skills/pythonicon.svg';
import jsIcon from '../assets/skills/javascripticon.svg';
import tsIcon from '../assets/skills/typescripticon.svg';
import javaIcon from '../assets/skills/javaicon.svg';
import reactIcon from '../assets/skills/reacticon.svg';
import nodeIcon from '../assets/skills/nodeicon.svg';
import chakraIcon from '../assets/skills/chakraicon.svg';
import postgresIcon from '../assets/skills/postgresqlicon.svg';
import mongoIcon from '../assets/skills/mongoicon.svg';
import gitIcon from '../assets/skills/giticon.svg';
import awsIcon from '../assets/skills/awsicon.svg';
import supabaseIcon from '../assets/skills/supabaseicon.svg';
import expoIcon from '../assets/skills/expoicon.svg';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { imageSrc: pyIcon, title: 'Python', subtitle: 'Backend/AI', tags: ['Backend', 'AI', 'Data Analysis'] },
      { imageSrc: jsIcon, title: 'JavaScript', subtitle: 'Frontend Web', tags: ['Frontend', 'Web Development', 'Dynamic Content'] },
      { imageSrc: tsIcon, title: 'TypeScript', subtitle: 'Frontend Web/Mobile', tags: ['Frontend', 'Type Safety', 'Scalable Apps'] },
      { imageSrc: javaIcon, title: 'Java', subtitle: 'Backend', tags: ['Backend', 'OOP'] },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { imageSrc: reactIcon, title: 'React', subtitle: 'Frontend', tags: ['Frontend', 'UI/UX', 'Component-Based'] },
      { imageSrc: nodeIcon, title: 'Node.js', subtitle: 'Packages', tags: ['Backend', 'APIs', 'Server-Side'] },
      { imageSrc: expoIcon, title: 'Expo', subtitle: 'Mobile Apps', tags: ['Mobile', 'Cross-Platform', 'React Native'] },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { imageSrc: gitIcon, title: 'Git', subtitle: 'Version Control', tags: ['Version Control', 'Collaboration', 'Repositories'] },
      { imageSrc: awsIcon, title: 'AWS', subtitle: 'Cloud/Image Hosting', tags: ['Cloud', 'Hosting', 'Scalability'] },
      { imageSrc: postgresIcon, title: 'PostgreSQL', subtitle: 'Local Database', tags: ['Database', 'Relational', 'SQL'] },
      { imageSrc: supabaseIcon, title: 'Supabase', subtitle: 'Database', tags: ['Database', 'Backend', 'Open Source'] },
      { imageSrc: mongoIcon, title: 'MongoDB', subtitle: 'Database', tags: ['Database', 'NoSQL', 'Scalable'] },
      { imageSrc: chakraIcon, title: 'Chakra UI', subtitle: 'Styling', tags: ['Styling', 'Responsive Design', 'UI Components'] },
    ],
  },
];

export default skillsData;