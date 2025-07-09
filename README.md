# Georgia Family Adventure - React App

A beautiful, responsive React application showcasing an 8-day family trip itinerary through Georgia's most captivating destinations.

## 🌟 Features

- **Multi-page React Application** with React Router
- **Responsive Design** - Full buttons on desktop/tablet, icons on mobile
- **Beautiful Travel Journal Theme** with scrapbook-inspired design
- **Interactive Location Cards** with Google Maps integration
- **Modal System** for detailed location information
- **Smooth Animations** and transitions
- **Mobile-First Design** with touch-friendly interactions
- **GitHub Pages Deployment** with automated CI/CD

## 🎨 Design Theme

The application follows a modern travel journal aesthetic with:
- **Warm, neutral colors** with pastel accents
- **Crumpled paper texture** background
- **Polaroid-style photos** with tape effects
- **Script and sans-serif typography** combination
- **Glassmorphism effects** and soft shadows
- **Scrapbook elements** like doodles and visual accents

## 🚀 Technologies Used

- **React 18** with Hooks
- **React Router** for navigation
- **Vite** for fast development and building
- **CSS3** with modern features (Grid, Flexbox, Custom Properties)
- **Responsive Design** principles
- **GitHub Actions** for automated deployment

## 📱 Responsive Behavior

- **Desktop/Tablet**: Full buttons with text labels
- **Mobile**: Icon-only buttons for space efficiency
- **Adaptive Grid**: Responsive layout for all screen sizes
- **Touch-Friendly**: Optimized for mobile interactions

## 🗺️ Trip Overview

**8 Days | August 10-18**
- **Route**: Kutaisi → Tbilisi → Batumi → Kutaisi
- **Distance**: 1,000+ km self-drive adventure
- **Budget**: $250-350/night accommodation
- **Highlights**: Caves, Cathedrals, Black Sea, Wine Tasting, Cultural Sites

### Daily Itinerary

1. **Day 1 - Kutaisi**: Caves & Cathedrals
2. **Day 2 - Road to Tbilisi**: Ancient Wonders & Capital Discovery
3. **Day 3 - Tbilisi**: Urban Adventures & Cultural Immersion
4. **Day 4 - Journey to Batumi**: Coastal Adventure Begins
5. **Day 5 - Batumi**: Beach, Parks & Marine Life
6. **Day 6 - Batumi**: Culture & Views
7. **Day 7 - Batumi**: Nature Escape (Waterfalls & Wine)
8. **Day 8 - Return to Kutaisi**: Final Adventures & Farewell

## 🛠️ Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/bijutharakan/georgia-trip.git
cd georgia-trip

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🚀 Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

**Live Site**: https://bijutharakan.github.io/georgia-trip/

## 📦 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Responsive button component
│   ├── Header.jsx      # Trip overview header
│   ├── LocationCard.jsx # Interactive location cards
│   ├── Modal.jsx       # Modal dialog component
│   └── Navigation.jsx  # Route navigation
├── pages/              # Page components
│   ├── HomePage.jsx    # Trip overview page
│   └── DayPage.jsx     # Individual day details
├── data/               # Static data
│   └── itinerary.js    # Trip itinerary data
├── App.jsx             # Main app component
├── App.css             # App-specific styles
├── index.css           # Global styles
└── main.jsx            # React entry point
```

## 🌐 Key Features

### Interactive Location Cards
- **Google Maps Integration**: Direct links to location coordinates
- **Responsive Actions**: Full buttons on desktop, icons on mobile
- **Modal Details**: Expanded information in overlay
- **Share Functionality**: Native sharing or clipboard copy

### Mobile-First Design
- **Touch Targets**: Optimized button sizes for mobile
- **Swipe-Friendly**: Smooth scrolling and interactions
- **Adaptive Layout**: Content reflows for all screen sizes
- **Fast Loading**: Optimized images and efficient code

### Smooth Animations
- **Fade In Effects**: Staggered animations for content
- **Hover States**: Interactive feedback on all elements
- **Page Transitions**: Smooth navigation between routes
- **Micro-interactions**: Delightful small animations

## 🎯 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Bundle Size**: Optimized for fast loading
- **Image Optimization**: Responsive images with proper formats
- **Code Splitting**: Efficient chunk loading

## 🔗 Links

- **Live Site**: https://bijutharakan.github.io/georgia-trip/
- **Repository**: https://github.com/bijutharakan/georgia-trip
- **Issues**: https://github.com/bijutharakan/georgia-trip/issues

## 📄 License

MIT License - see LICENSE file for details

---

*Built with ❤️ for an unforgettable Georgian adventure*