import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			white: '#fff',
  			'text-primary': '#404040',
  			'color-states-common-black': '#223354',
  			'text-secondary': '#35353A',
  			indianred: '#eb5757',
  			seagreen: '#219653',
  			dimgray: 'rgba(97, 97, 97, 0.9)',
  			darkgray: '#aeaeae',
  			color: '#130912',
  			whitesmoke: {
  				'100': '#f8f8f8',
  				'200': '#ebebeb'
  			},
  			silver: {
  				'100': '#c7c7c7',
  				'200': 'rgba(196, 202, 205, 0.4)'
  			},
  			chocolate: 'rgba(231, 121, 23, 0.16)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		spacing: {},
  		fontFamily: {
  			'title-lg': 'Inter'
  		},
  		borderRadius: {
  			'9xl': '28px',
  			lgi: '19px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	fontSize: {
  		'5xl': '24px',
  		lg: '18px',
  		'17xl': '36px',
  		'15xl': '32px',
  		'13xl': '28px',
  		xs: '12px',
  		'2xs': '10px',
  		xxs: '8px',
  		base: '16px',
  		xl: '20px',
  		inherit: 'inherit'
  	}
  },
  corePlugins: {
    preflight: false,
  },
    plugins: [require("tailwindcss-animate")]
};
export default config;

