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
      { imageSrc: pyIcon, title: 'Python', subtitle: 'Backend/AI', proficiency: 'Advanced', tags: ['Backend', 'AI', 'Data Analysis'] },
      { imageSrc: jsIcon, title: 'JavaScript', subtitle: 'Frontend Web', proficiency: 'Advanced', tags: ['Frontend', 'Web Development', 'Dynamic Content'] },
      { imageSrc: tsIcon, title: 'TypeScript', subtitle: 'Frontend Web/Mobile', proficiency: 'Intermediate', tags: ['Frontend', 'Type Safety', 'Scalable Apps'] },
      { imageSrc: javaIcon, title: 'Java', subtitle: 'Backend', proficiency: 'Intermediate', tags: ['Backend', 'OOP'] },
    ],
  },
  {
    category: 'Frameworks',
    skills: [
      { imageSrc: reactIcon, title: 'React', subtitle: 'Frontend', proficiency: 'Advanced', tags: ['Frontend', 'UI/UX', 'Component-Based'] },
      { imageSrc: nodeIcon, title: 'Node.js', subtitle: 'Packages', proficiency: 'Intermediate', tags: ['Backend', 'APIs', 'Server-Side'] },
      { imageSrc: chakraIcon, title: 'Chakra UI', subtitle: 'Styling', proficiency: 'Advanced', tags: ['Styling', 'Responsive Design', 'UI Components'] },
      { imageSrc: expoIcon, title: 'Expo', subtitle: 'Mobile Apps', proficiency: 'Intermediate', tags: ['Mobile', 'Cross-Platform', 'React Native'] },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { imageSrc: gitIcon, title: 'Git', subtitle: 'Version Control', proficiency: 'Advanced', tags: ['Version Control', 'Collaboration', 'Repositories'] },
      { imageSrc: awsIcon, title: 'AWS', subtitle: 'Cloud/Image Hosting', proficiency: 'Intermediate', tags: ['Cloud', 'Hosting', 'Scalability'] },
      { imageSrc: postgresIcon, title: 'PostgreSQL', subtitle: 'Local Database', proficiency: 'Intermediate', tags: ['Database', 'Relational', 'SQL'] },
      { imageSrc: supabaseIcon, title: 'Supabase', subtitle: 'Database', proficiency: 'Beginner', tags: ['Database', 'Backend', 'Open Source'] },
      { imageSrc: mongoIcon, title: 'MongoDB', subtitle: 'Database', proficiency: 'Intermediate', tags: ['Database', 'NoSQL', 'Scalable'] },
    ],
  },
];

export default skillsData;