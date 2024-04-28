import { build } from './src/app.js';

const app = await build();
const addr = await app.listen({ host: 'localhost', port: '8080' });
console.log(`Server started. Listening in ${addr}`);