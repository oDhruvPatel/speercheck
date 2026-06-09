# SpeerCheck

## Design Decisions

### 1. UI/UX Decisions 

**A. Grid-Based Calendar Layout:**
A custom CSS grid was used instead of a library to maintain complete control over the calendar and premium look.

**B. Visual Role Differentiation:**
Different colors represents unique Engineers and Candidate, used different color for overlaping slots with ★ symbol in it to identify the overlaping clearly.

**C. Familiar UI Patterns (Google/MS Teams):**
interface was modeled after industry leaders like Google Calendar and Microsoft Teams. Since HR professionals use these tools daily, adopting a similar UX pattern minimizes the learning curve.

---

### 2. Architecture

**A. Zustand for State Management:**
To ensure consisent data of selected candidates and booked slots, and Scalability.

**B. Day.js for Time Handling:**
Standard JavaScript Date objects are difficult to format. Day.js was chosen for its powerful API for managing the 30-minute intervals and 12-hour AM/PM formatting.

---

### 3. Getting Started with the project:

```bash
git clone https://github.com/oDhruvPatel/speercheck.git
cd speercheck
npm install
npm run dev
```

**Tech:** React + TypeScript  
**UI Libraries:** Tailwind.css, Shadcn, React-hot-toast

### AI Usage
- Used Google Antigravity as IDE, not used for fully generating code / no autopilot generation of code. Inline code completion used.
- `index.css` → AI generated. I gave the color palette, fonts and asked for making Tailwind classes of them.
- **Select** (Shadcn component) → AI assistance needed for overriding the default properties of the component.
- `Availability.ts` → Fully AI generated dummy data for Engineer and Candidate Availability.
- SVGs → All SVGs in the app were generated using AI.
