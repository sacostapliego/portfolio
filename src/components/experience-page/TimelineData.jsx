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
    color: 'rgba(0, 113, 206, 1)', // Georgia State blue
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
    ],
    tags: ['Machine Learning', 'Cloud Computing', 'Data Structures', 'Linear Algebra'],
  },
  {
    id: 'capstone',
    color: 'rgba(230, 162, 60, 1)', // capstone amber
    title: 'Senior Capstone',
    org: 'Georgia State University',
    location: 'Atlanta, GA',
    start: '2025-08',
    end: '2026-05',
    summary:
      'Placeholder copy -- describe what the project actually did, who it was for, and what you owned on the team.',
    highlights: [
      'The problem it solved, in one line.',
      'The part you built.',
    ],
    tags: ['React', 'Python'],
  },
  {
    id: 'software-role',
    color: 'rgba(147, 39, 252, 1)', // employer purple
    title: 'Software Developer',
    org: 'Add your employer',
    location: 'Norcross, GA',
    start: '2026-04',
    end: null,
    summary:
      'Placeholder copy -- swap this for the real role. A sentence or two on what the team builds and what you own reads better here than a list of duties.',
    highlights: [
      'A result you can put a number on.',
      'Something you built or shipped end to end.',
    ],
    tags: ['React', 'FastAPI', 'PostgreSQL'],
  },
];

export default timelineData;
