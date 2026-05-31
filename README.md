# Elite School of Indian Film Music - Website

A modern, responsive website for Elite School of Indian Film Music built with React, Vite, Tailwind CSS, and Framer Motion.

## 🎵 Features

- **Modern Design**: Premium, elegant interface with gold and black theme
- **Responsive**: Fully responsive on mobile, tablet, and desktop
- **Animations**: Smooth animations powered by Framer Motion
- **SEO Optimized**: Meta tags and semantic HTML
- **Performance**: Optimized with lazy loading and code splitting
- **Accessibility**: WCAG compliant with proper accessibility features

## 🚀 Tech Stack

- **React** 18.2.0 - UI Library
- **Vite** 5.0.0 - Build tool
- **Tailwind CSS** 3.3.6 - Styling
- **Framer Motion** 10.16.4 - Animations
- **React Router DOM** 6.18.0 - Routing
- **Lucide React** 0.292.0 - Icons
- **TypeScript** - Type safety

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd elite-school-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

4. **Update environment variables** in `.env.local` with your details

## 🏃 Running the Project

### Development Server
```bash
npm run dev
```
The app will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── CourseCard.tsx
│   ├── TestimonialCard.tsx
│   ├── FloatingWhatsApp.tsx
│   └── ScrollToTop.tsx
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Courses.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── hooks/
│   └── useScrollToTop.ts
├── utils/
│   └── constants.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🌐 Deployment

### Netlify Deployment

1. **Push to Git repository**
   ```bash
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Set environment variables**
   - Add any required env vars in Netlify dashboard

### Vercel Deployment

1. **Push to Git repository**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Deploy**
   - Click "Deploy"

## 📱 Pages

- **Home** - Landing page with hero, courses preview, and testimonials
- **About** - School information, mission, vision, and values
- **Courses** - All courses with filtering options
- **Gallery** - Photo gallery with lightbox
- **Contact** - Contact form and information

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme.

### Content
Update constants in `src/utils/constants.ts`:
- School name
- WhatsApp number
- Email and phone
- Courses
- Testimonials

### Components
All components are in `src/components/` and fully customizable.

## 🚀 Performance Optimization

- Code splitting for faster initial load
- Image lazy loading
- Minified CSS and JavaScript
- Optimized animations
- Efficient routing

## 📞 Support

For inquiries, contact:
- Email: info@eliteschoolofmusic.com
- Phone: +91-9876543210

## 📄 License

All rights reserved © Elite School of Indian Film Music

## 👨‍💻 Developer

Created with ❤️ for music lovers