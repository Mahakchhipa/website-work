module.exports = {
  plugins: {
    tailwindcss: {
      // Specify other configurations for Tailwind CSS here
      purge: {
        content: [
          "./pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",
          "./app/**/*.{js,ts,jsx,tsx,mdx}",
          "./lib/**/*.{js,ts,jsx,tsx,mdx}",
          // "./public/**/*.{js,ts,jsx,tsx,mdx}",
          "./lib/secondpage/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        options: {
          safelist: [
            'section1',
            'font-color',
            'color3',
            'sm-circle',
            'cir-color',
            'tiny',
            'new-shape',
            'slider',
            'techcolor',
            'section2',
            'section3',
            // Add other colors here if needed
          ],
        },
      },
    },
    autoprefixer: {},
  },
};
