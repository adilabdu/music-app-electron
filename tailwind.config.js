module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                play: 'play 500ms linear infinite alternate',
                blink: 'blink 500ms linear infinite alternate'
            },
            keyframes: {
                play: {
                    '0%': { height: '0.125rem' },
                    '25%': { height: '0.25rem' },
                    '50%': { height: '0.5rem' },
                    '75%': { height: '0.75rem' },
                    '100%': { height: '1rem' }
                },
                blink: {
                    '0%': { opacity: '12.5%' },
                    '100%': { opacity: '100%' }
                }
            },
            fontFamily: {
                'basic': ['"Inter"']
            }
        },
    },
    plugins: [],
}