# Personal Resume Website

A modern, responsive resume website built with React, TypeScript, and Material Tailwind.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive
- 📧 Contact form functionality
- 📄 Resume download option
- 🎯 Easy to customize

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-resume
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Customization

### Personal Information
Edit the following files to add your personal information:

- `src/components/Hero.tsx`: Update your name and title
- `src/components/About.tsx`: Update your bio, skills, and education
- `src/components/Contact.tsx`: Add your preferred contact method

### Styling
The website uses Material Tailwind and Tailwind CSS for styling. You can customize the look and feel by:

1. Editing the `tailwind.config.js` file
2. Modifying the className properties in components
3. Updating the color scheme in the Material Tailwind components

### Contact Form
The contact form is set up to be integrated with your preferred email service. To set it up:

1. Choose an email service (EmailJS, SendGrid, etc.)
2. Add your API keys to an environment file
3. Update the `handleSubmit` function in `src/components/Contact.tsx`

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Technologies Used

- React
- TypeScript
- Material Tailwind
- Tailwind CSS
- Vite

## License

MIT
