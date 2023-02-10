import generator from 'generate-password';


export const genPassword = () => generator.generate({
    length: 8,
    numbers: true,
    uppercase: true,
    symbols: true
});




