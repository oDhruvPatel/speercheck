Design Decisions:

1. UI/UX

A. Grid-Based Calendar Layout:	A custom CSS grid was used instead of a library to maintain complete control over the calendar and premium look.
B. Visual Role Differentiation: Different colors represents unique Engineers and Candidate, used different color for overlaping slots with ★ symbol in it to identify the overlaping clearly.
C. Familiar UI Patterns (Google/MS Teams): interface was modeled after industry leaders like Google Calendar and Microsoft Teams. Since HR professionals use these tools daily, adopting a similar UX pattern minimizes the learning curve

2. Architecture

A. Zustand for State Management: To ensure consisent data of selected candidates and booked slots, and Scalability
B. Day.js for Time Handling: Standard JavaScript Date objects are difficult to format. Day.js was chosen for its powerful API for managing the 30-minute intervals and 12-hour AM/PM formatting.


3. Getting started with the project:

1. git clone https://github.com/oDhruvPatel/speercheck.git
2. cd speercheck
3. npm install
4. npm run dev
Tech: React + TypeScript
UI Libraries: Tailwind.css, Shadcn, React-hot-toast
