import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            width: {
                '400': '400px',
                '900': '900px',
            },
            height: {
                '400': '400px',
                '800': '800px',
                '700': '700px',
                '900': '900px',
            },
            margin: {
                '25': '100px',
            },
            colors: {
                buttonShape: '#F0F0F2',
                mainBackground: '#FFFFFF',
                subText: '#A8A8AA',
                primaryBackground: 'rgba(106, 146, 111, 0.8)',
            },
        },
    },
    plugins: [],
};
export default config;
