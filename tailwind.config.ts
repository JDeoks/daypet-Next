import type { Config } from 'tailwindcss';

const generateSpacingScale = (): { [key: string]: string } => {
    const scale: { [key: string]: string } = {};
    for (let i = 10; i <= 1000; i += 10) {
        scale[i.toString()] = `${i}px`;
    }
    return scale;
};

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
            width: generateSpacingScale(),
            height: generateSpacingScale(),
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
