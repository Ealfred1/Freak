
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Ben10 theme colors - updated with darker background and more green focus
				ben10: {
					light: '#c4fa65',
					DEFAULT: '#97f700',
					dark: '#5d9c00',
					accent: '#10d9ae',
					background: '#0a150a', // Darker background
					paper: '#152715' // Changed from brown to dark green
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				glare: {
					'0%': { transform: 'translateX(-50%) translateY(-50%) rotate(0deg)' },
					'100%': { transform: 'translateX(150%) translateY(150%) rotate(90deg)' },
				},
				shine: {
					'0%': { opacity: '0.5' },
					'50%': { opacity: '1' },
					'100%': { opacity: '0.5' },
				},
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				spin: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				"scale-up": {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				"scale-down": {
					'0%': { transform: 'scale(1.2)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-2deg)' },
					'50%': { transform: 'rotate(2deg)' },
				},
				blur: {
					'0%': { filter: 'blur(5px)' },
					'100%': { filter: 'blur(15px)' },
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				float: "float 3s ease-in-out infinite",
				glare: "glare 3s linear infinite",
				shine: "shine 2s ease-in-out infinite",
				marquee: "marquee 15s linear infinite",
				spin: "spin 8s linear infinite",
				pulse: "pulse 2s ease-in-out infinite",
				"scale-up": "scale-up 0.5s ease-out",
				"scale-down": "scale-down 0.5s ease-out",
				wiggle: "wiggle 1s ease-in-out infinite",
				blur: "blur 3s ease-in-out infinite alternate",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
