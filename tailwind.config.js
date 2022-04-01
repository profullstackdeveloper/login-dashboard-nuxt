const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily : {
      'numberFont' : ['"Lato"', 'Regular']
    },
    textColor: theme => ({
      ...theme('colors'),
      'buttonText' : "#319795",
      'loginText' : '#319795',
      'headerText' : '#2D3748',
      'subHeaderText' : '#4A5568',
      'colorNumber' : '#718096'
    }),
    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary' : "#E6FFFA",
      "secondary" : '#ebf4ff',
      "linePrimary" : '#319795',
      'lineSecondary' : '#3182CE'
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'buttonBorder' : "#CBD5E0",
      'loginText' : '#319795',
      'headerText' : '#2D3748',
      'subHeaderText' : '#4A5568'
    }),

    backgroundColor: theme => ({
      ...theme('colors'),
      'forButton' : '#81E6D9'
    }),
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      'jobsite': '0px 1px 6px 1px rgba(0, 0, 0, 0.25)',
      'up' : '2px -6px 20px 1px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    fontSize : {
      jobsite : '42px',
      button1 : '17px',
      title1 : '21px',
      number : ['130px', {
        lineHeight : '156px'
      }],
      content : ['15.75px', {
        lineHeight : '15.75px'
      }]
    },
    extend : {
     
      width : {
        'tab2' : '310px',
        'tab3' : '299px'
      },
      borderWidth : {
        '1' : '1px'
      }

    }
  },
  variants: {
    extend: {},
  },
  plugins: [

  ],
}
