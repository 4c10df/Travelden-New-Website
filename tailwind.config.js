/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        'regal-blue': 'rgba(255, 255, 255, 0.5)',
      },
      

      screens: {
        'smipx': '300px',
        // => @media (min-width: 640px) { ... }

        'ipx': '375px',
        // => @media (min-width: 640px) { ... }

        'ip8': '414px',
        // => @media (min-width: 640px) { ... }

        'ip8n': '400px',
        // => @media (min-width: 640px) { ... }

        'at500': '500px',
        // => @media (min-width: 640px) { ... }

        'at540': '540px',
        // => @media (min-width: 640px) { ... }

       
      },

      fontFamily: {
        'open-sans' : ['Open Sans'],
        'inter' : ['Inter'],
        'palatino' : ['Palatino Linotype'],
        'garamond' : ['"poppins", sans-serif'],
        'mono' : ['"Montserrat", sans-serif'],
      },

      gridTemplateColumns: {
        'custom': '388px  33rem',
        
      },

    },
  },
  plugins: [],
}
