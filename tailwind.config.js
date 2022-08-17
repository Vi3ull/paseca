let plugin = require('tailwindcss/plugin')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`
const lh = (fontSize, lineHeight) => `${round(lineHeight / fontSize)}`
// const paddingX = (screenSize, px) => {
//   return `calc(50vw - calc(50vw - ${(((px * 100) / (screenSize / 2))}))`;
// }


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
      'poppins': 'Poppins, sans-serif',
      'quicksand': 'Quicksand, sans-serif',
    },
    extend: {
      colors: {
        'clr-header': 'rgb(var(--clrHeader) / 1)',
        'clr-body': 'rgb(var(--clrBody) / 1)',
        'clr-footer': 'rgb(var(--clrFooter) / 1)',
        'clr-heading': 'rgb(var(--clrHeading) / 1)',
        'clr-text': 'rgb(var(--clrText) / 1)',
        'clr-link': 'rgb(var(--clrLink) / 1)',
        'clr-cta': 'rgb(var(--clrCta) / 1)',
        'clr-selection': 'rgb(var(--clrSelection) / 1)',
        'clr-hover': 'rgb(var(--clrHover) / 1)',
        'clr-overlay': 'rgb(var(--clrOverlay) / 1)',
      },
      spacing: {
        'padding-x': 'var(--padding-x)',
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
              color: theme('colors.clr-heading'),
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
              color: theme('colors.clr-heading'),
              lineHeight: theme('lineHeight.snug'),
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.3'),
            },
            h3: {
              fontFamily: theme('fontFamily.poppins'), 
              fontWeight: theme('fontWeight.bold'),
              fontSize: em(24, 16),
              color: theme('colors.clr-heading'),
              lineHeight: theme('lineHeight.snug'),
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.3'),
            },
            h4: {
              fontFamily: theme('fontFamily.poppins'), 
              fontWeight: theme('fontWeight.bold'),
              fontSize: em(20, 16),
              color: theme('colors.clr-heading'),
              lineHeight: theme('lineHeight.snug'),
              marginTop: theme('spacing.0'),
              marginBottom: theme('spacing.3'),
            },
            p: {
              fontFamily: theme('fontFamily.quicksand'), 
              fontWeight: theme('fontWeight.normal'),
              fontSize: em(18, 16),
              color: theme('colors.clr-text'),
              marginBottom: theme('spacing.4'),
            },
            a: {
              fontFamily: theme('fontFamily.quicksand'), 
              fontWeight: theme('fontWeight.bold'),
              fontSize: em(16, 16),
              color: theme('colors.clr-link'),
              textDecoration: 'none',
              transition: 'all .3s ease-in-out',
              '&:hover': {
                color: theme('colors.clr-cta'),
              },
            },
            blockquote: {
              border: 0,
              'p': {
                fontFamily: theme('fontFamily.quicksand'), 
                fontWeight: theme('fontWeight.semibold'),
                fontStyle: 'normal',
                fontSize: em(16, 16),
                color: theme('colors.clr-heading'),
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
    plugin(function ({ addVariant, addComponents, theme }) {
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
            '--padding-x': 'calc(50vw - calc(50vw - 3.125%))',
          },
          // '@screen md': {
          //   '--padding-x': 'calc(50vw - calc(50vw - 6.25%))',
          // },
          '@screen lg': {
            '--padding-x': 'calc(50vw - calc(50vw - 6.25%))',
          },
          // '@screen xl': {
          //   '--padding-x': 'calc(50vw - calc(50vw - 3.125%))',
          // },
          // '@screen 2xl': {
          //   '--padding-x': 'calc(50vw - calc(50vw - 3.125%))',
          // },
          // '@screen 3xl': {
          //   '--padding-x': 'calc(50vw - calc(50vw - 6.25%))',
          // },
        },
        '.button': {
          position: 'relative!important',
          display: 'inline-block!important',
          lineHeight: `${lh(58, 140)}!important`,
          paddingTop: `${em(10, 16)}!important`,
          paddingBottom: `${em(10, 16)}!important`,
          paddingLeft: `${em(50, 16)}!important`,
          paddingRight: `${em(50, 16)}!important`,
          fontFamily: `theme('fontFamily.quicksand')!important`, 
          fontSize: `${rem(16)}!important`,
          borderRadius: '30px!important',
          backgroundColor: `${theme('colors.white')}!important`,
          color: `${theme('colors.clr-text')}!important`,
          border: '2px!important',
          borderStyle: 'solid!important',
          borderColor: `${theme('colors.clr-text')}!important`,
          textAlign: 'center!important',
          backgroundPosition: '50% 50%!important',
          backgroundSize: 'cover!important',
          cursor: 'pointer!important',
          transition: 'all .3s ease-in-out!important',
          '&:hover': {
            color: `${theme('colors.clr-hover')}!important`,
            borderColor: `${theme('colors.clr-hover')}!important`,
          },
        },
        '.accent': {
          fontFamily: `theme('fontFamily.poppins')!important`, 
          fontWeight: `theme('fontWeight.bold')!important`,
          color: `theme('colors.clr-cta')!important`,
          fontStyle: 'normal!important',
        },
      });
    }),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
