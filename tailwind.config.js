let plugin = require('tailwindcss/plugin')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`


module.exports = {
  content: [
    'layouts/**/*.{htm,js}',
    'pages/**/*.{htm,js}',
    'pages/**/*.{htm,js}',
    'content/**/*.htm',
    'partials/**/*.{htm,js}',
    'src/**/*.js',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '820px',
      'xl': '1024px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    fontFamily: {
      'poppins': "'Poppins', 'sans-serif'",
      'quicksand': "'Quicksand', 'sans-serif'",
    },
    extend: {
      colors: {
        'padding-x': '1rem',
        'overlay': 'rgba(81,87,105,.4);',
      },
      gridAutoRows: {
        '2fr': 'minmax(660px, 2fr)',
      },
      typography: theme => ({
				DEFAULT: {
					css: {
            h1: {
              fontFamily: theme('fontFamily.poppins'),
              fontWeight: theme('fontWeight.bold'),
              fontSize: em(40, 16),
              color: theme('colors.zinc[900]'),
              lineHeight: theme('lineHeight.snug'),
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.3'),
              '@screen md': {
                fontSize: em(54, 16),
              },
            },
            h2: {
              fontFamily: theme('fontFamily.poppins'), 
              fontWeight: theme('fontWeight.bold'),
              fontSize: em(40, 16),
              color: theme('colors.zinc[900]'),
              lineHeight: theme('lineHeight.snug'),
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.3'),
            },
            h3: {
              fontFamily: theme('fontFamily.poppins'), 
              fontWeight: theme('fontWeight.bold'),
              fontSize: em(24, 16),
              color: theme('colors.zinc[900]'),
              lineHeight: theme('lineHeight.snug'),
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.3'),
            },
            h4: {
              fontFamily: theme('fontFamily.poppins'), 
              fontWeight: theme('fontWeight.bold'),
              fontSize: em(20, 16),
              color: theme('colors.zinc[900]'),
              lineHeight: theme('lineHeight.snug'),
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.3'),
            },
            p: {
              fontFamily: theme('fontFamily.quicksand'), 
              fontWeight: theme('fontWeight.normal'),
              fontSize: em(18, 16),
              color: theme('colors.gray[600]'),
              marginBottom: theme('spacing.4'),
            },
            // span: {
            //   fontFamily: theme('fontFamily.quicksand'), 
            //   fontWeight: theme('fontWeight.normal'),
            //   fontSize: em(12, 16),
            //   color: theme('colors.red-500'),
            //   lineHeight: theme('140%'),
            //   // marginBottom: theme('spacing.5'),
            //   // marginRight: theme('spacing.2'),
            //   textTransform: 'uppercase',
            //   letterSpacing: theme('letterSpacing.widest'),
            //   borderRadius: theme('borderRadius.3xl'),
            // },
            a: {
              fontFamily: theme('fontFamily.quicksand'), 
              fontWeight: theme('fontWeight.bold'),
              fontSize: em(16, 16),
              color: theme('colors.zinc[900]'),
              textDecoration: 'none',
              transition: 'all .3s ease-in-out',
              '&:hover': {
                color: theme('colors.red[500]'),
              },
            },
            blockquote: {
              border: 0,
              'p': {
                fontFamily: theme('fontFamily.quicksand'), 
                fontWeight: theme('fontWeight.semibold'),
                fontStyle: 'normal',
                fontSize: em(16, 16),
                color: theme('colors.zinc[900]'),
              },
              'img': {
                display: 'inline-block',
                width: rem(80),
                height: rem(80),
                borderRadius: '100%',
                marginBottom: rem(20),
              }
            },
          },
				},
			})
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    plugin(function ({ addVariant, addComponents }) {
      addVariant('header--sticky', '&.header--sticky');
      addVariant('open', '&.open');
      addVariant('isActive', '&.isActive');
      addVariant('carousel-inited', '&.carousel--inited');
      addVariant('slide-active', '&.carousel-slide-active');
      addVariant('slide-next', '&.carousel-slide-next');
      addVariant('slide-prev', '&.carousel-slide-prev');  
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: '0 var(--padding-x)',
          '@screen sm': {
            '--padding-x': 'calc(50vw - 300px)',
          },
          '@screen md': {
            '--padding-x': 'calc(50vw - 360px)',
          },
          '@screen lg': {
            '--padding-x': 'calc(50vw - 480px)',
          },
          '@screen xl': {
            '--padding-x': 'calc(50vw - 600px)',
          },
          '@screen 2xl': {
            '--padding-x': 'calc(50vw - 720px)',
          },
          '@screen 3xl': {
            '--padding-x': 'calc(50vw - 940px)',
          },
        }
      })
    }),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
