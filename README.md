# Automation Portfolio

A modern, lightweight portfolio website showcasing automation engineering projects with a focus on workflow optimization and system integration.

## 🎯 Overview

This portfolio demonstrates expertise in building automated solutions that deliver measurable business impact. Each project showcases real-world implementations involving API integrations, workflow automation, and intelligent data processing.

## ✨ Features

- **Interactive Project Cards** - Browse automation projects with filterable technology tags
- **Detailed Project Modals** - Deep-dive into architecture, solutions, and lessons learned
- **Technology Filtering** - Filter projects by specific tech stacks (APIs, frameworks, tools)
- **Responsive Design** - Mobile-first approach with smooth animations
- **Accessibility** - Keyboard navigation, ARIA labels, and screen reader support
- **Performance Optimized** - Fast load times with efficient component architecture

## 🛠️ Tech Stack

### Frontend
- **React 18** - Component-based UI library
- **Vanilla CSS** - Custom CSS with CSS variables for theming
- **Lucide Icons** - Beautiful open-source icon set
- **PropTypes** - Runtime type checking for components

### Architecture Highlights
- **Component-Based Architecture** - Modular, reusable components
- **Custom Hooks** - `useFetch` for data loading, `useInitIcons` for icon initialization
- **Error Boundaries** - Graceful error handling with fallback UI
- **React.memo** - Performance optimization for expensive renders
- **Event-Driven Interactions** - Smooth filtering and modal transitions

### Code Quality
- **JSDoc Comments** - Comprehensive function and component documentation
- **PropTypes Validation** - Type safety for all component props
- **Semantic HTML** - Proper HTML5 structure for better accessibility
- **CSS Variables** - Centralized theming system

## 📁 Project Structure

```
myportfolio/
├── index.html                 # Entry point with CDN imports
├── app.jsx                    # Root React component
├── styles.css                 # Global styles and design system
├── projects.json              # Project data (content)
├── components/                # React components
│   ├── ErrorBoundary.jsx      # Error handling component
│   ├── Header.jsx             # Header with animated title
│   ├── Footer.jsx             # Footer with decorative shapes
│   ├── TechFilter.jsx         # Technology filter bar
│   ├── ProjectCard.jsx        # Individual project card
│   ├── ProjectModal.jsx       # Detailed project modal
│   └── ProjectGrid.jsx        # Main grid layout
├── hooks/                     # Custom React hooks
│   ├── useFetch.js            # Data fetching hook
│   └── useInitIcons.js        # Icon initialization hook
├── content/                   # Content JSON files
│   ├── header.json            # Header content
│   └── footer.json            # Footer content
└── assets/                    # Static assets
    └── images/                # Project images
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local development server (optional but recommended)

### Installation & Running

1. **Clone the repository**
```bash
git clone <repository-url>
cd myportfolio
```

2. **Serve the files locally**

Using Python:
```bash
python -m http.server 8000
```

Using Node.js (http-server):
```bash
npx http-server -p 8000
```

Using VS Code Live Server:
- Install the "Live Server" extension
- Right-click `index.html` and select "Open with Live Server"

3. **Open in browser**
```
http://localhost:8000
```

## 🎨 Design System

### Color Palette
- **Primary**: `#f2511b` (Vibrant orange)
- **Primary Dark**: `#d63d0f` (Darker orange for hover states)
- **Text Dark**: `#171717` (Headings and important text)
- **Text Medium**: `#525252` (Body text)
- **Text Light**: `#737373` (Secondary text)
- **Text Muted**: `#a3a3a3` (Captions and metadata)
- **Backgrounds**: Various grays (`#fff`, `#f5f5f5`, `#e5e5e5`)

### Typography
- **Font Family**: Inter (with system font fallbacks)
- **Weights**: 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)
- **Responsive Sizing**: Scales down gracefully on mobile devices

### Spacing & Layout
- **Border Radius**: `0.375rem` (small) to `1.25rem` (extra large)
- **Spacing Scale**: `0.5rem`, `1rem`, `1.5rem`, `2rem`, `5rem`
- **Max Content Width**: `1200px` for optimal readability

## 🏗️ Architecture Decisions

### Why CDN-based React?
- **Simplicity**: No build tools required for this portfolio size
- **Fast Prototyping**: Ideal for quick iterations and updates
- **Zero Configuration**: Works immediately without npm/webpack setup
- **Educational**: Shows React fundamentals without tooling complexity

### Component Design Patterns
1. **Separation of Concerns**: Each component has a single responsibility
2. **Composition Over Inheritance**: Components compose together cleanly
3. **Data-Driven**: Projects loaded from JSON for easy content updates
4. **Memoization**: `React.memo` prevents unnecessary re-renders on filter changes
5. **Custom Hooks**: Encapsulate reusable logic (fetching, icon initialization)

### Performance Optimizations
- **React.memo** on frequently re-rendered components
- **Conditional Rendering** for modal and optional sections
- **CSS Transitions** hardware-accelerated with `transform` and `opacity`
- **Debouncing** on filter changes via fade-out animation
- **Lazy Icon Loading** deferred until components mount

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support (Escape to close modal)
- **ARIA Labels**: Proper labeling for screen readers
- **Semantic HTML**: Correct heading hierarchy (h1, h2, h3)
- **Focus Management**: Proper focus states on interactive elements
- **Reduced Motion**: Respects `prefers-reduced-motion` for accessibility
- **Alt Text**: Descriptive image captions for all screenshots
- **Color Contrast**: WCAG AA compliant contrast ratios

## 📊 Project Data Structure

Each project in `projects.json` follows this schema:

```json
{
  "id": "unique-project-id",
  "name": "Project Name",
  "tagline": "Short catchy description",
  "description": "Longer project description for card",
  "techStack": ["Tech1", "Tech2", "Tech3"],
  "impact": "Measurable impact statement",
  "icon": "lucide-icon-name",
  "details": {
    "problem": "Problem statement",
    "solution": "Solution description",
    "architecture": "Architecture overview",
    "codeSnippet": "Optional code sample",
    "lessonsLearned": "Key takeaways",
    "image": "assets/images/project-id.png",
    "imageAlt": "Descriptive alt text"
  }
}
```

## 🔧 Customization Guide

### Adding a New Project
1. Add project data to `projects.json`
2. Add project image to `assets/images/{project-id}.png`
3. Follow the existing data structure (see schema above)

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --color-primary: #f2511b;
  --color-primary-dark: #d63d0f;
  /* ... other variables */
}
```

### Updating Content
- **Header**: Edit `content/header.json`
- **Footer**: Edit `content/footer.json`
- **Projects**: Edit `projects.json`

## 📝 Code Quality Standards

- **PropTypes**: All components have runtime type validation
- **JSDoc**: Functions and hooks documented with JSDoc comments
- **Error Handling**: Error boundaries catch and display errors gracefully
- **Consistent Naming**: PascalCase for components, camelCase for functions
- **No Console Errors**: Clean console in production
- **Linting**: Follows React best practices

## 🌐 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This portfolio is a personal project. Feel free to use the code structure as inspiration for your own portfolio.

## 👤 Author

**Automation Engineer Portfolio**

Built to showcase real-world automation engineering projects with measurable business impact.

---

**Note**: This portfolio uses CDN-hosted React for simplicity. For production applications with larger codebases, consider using a build tool like Vite or Create React App.
