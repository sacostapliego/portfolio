/*
 * Work + education history.
 *
 * Dates are 'YYYY-MM' so the lane chart can place them on a real axis; `end:
 * null` means ongoing and is drawn running to today. Display strings like
 * "Aug 2022 – May 2026" are derived in dates.js, so there is nothing to keep in
 * sync by hand.
 *
 * Order does not matter -- the chart sorts oldest first (bars cascade with the
 * time axis) and the mobile list sorts newest first (résumé convention).
 *
 * Entry shape:
 *   id          stable key, also used to track the selected bar
 *   color       the entry's accent -- any CSS colour. Identifies this specific
 *               school/employer/project, so two employers get two colours and
 *               removing an entry never affects another one.
 *   title       role or degree
 *   org         employer or school
 *   location    optional
 *   start / end 'YYYY-MM'; end null = ongoing
 *   summary     optional paragraph
 *   highlights  optional bullet list
 *   tags        optional pills
 *
 * TODO(steven): fill in the real job title and employer below, and replace the
 * summary/highlights. The Apr 2026 start date is the one you gave.
 * TODO(steven): the capstone entry is a placeholder -- put in the real project
 * name, what it did and the stack. Its Aug 2025 – May 2026 dates are a guess at
 * "senior year" from your May 2026 graduation; correct them if it was one
 * semester rather than two.
 */

const timelineData = [
  {
    id: 'gsu-bs-cs',
    color: 'rgba(0, 113, 206, 1)',
    title: 'B.S. in Computer Science',
    org: 'Georgia State University',
    location: 'Atlanta, GA',
    start: '2022-08',
    end: '2026-05',
    summary:
      'Honors College. Coursework spans machine learning, cloud computing, big data programming and software development, alongside the core systems and math sequence.',
    highlights: [
      'GPA 3.82 / 4.0 — Magna Cum Laude',
      "President's List: Fall 2025, Summer 2025, Summer 2023, Spring 2023, Fall 2022",
      "Dean's List: Spring 2026, Spring 2025, Fall 2023"
    ],
    tags: ['Machine Learning', 'Cloud Computing', 'Data Structures', 'Linear Algebra', 'Software Development', 'Big Data Programming'],
  },
  {
    id: 'capstone',
    color: 'rgba(34, 88, 50, 1)',
    title: 'Software Engineering (Capstone)',
    org: 'Georgia State University',
    location: 'Atlanta, GA',
    start: '2025-08',
    end: '2026-05',
    summary:
      'Created Fresh Picks, a mobile app for discovering and sharing fresh produce.',
    highlights: [
      // TODO
    ],
    tags: ['React', 'Python', 'Supabase', 'Agile', 'GitHub', 'TypeScript'],
  },
  {
    id: 'software-role',
    color: 'rgba(147, 39, 252, 1)',
    title: 'Software Developer',
    org: 'USAN',
    location: 'Norcross, GA',
    start: '2026-04',
    end: null,
    summary:
      'Currently working as a software developer at USAN, contributing to projects, cordinating with QA teams, and collaborating with cross-functional teams to deliver high-quality solutions.',
    highlights: [
      // TODO
    ],
  },
];

export default timelineData;
