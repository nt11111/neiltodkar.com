// Removes the previous build output from the repo root before `vite build`.
// Only touches paths the build writes (everything under app/public plus
// index.html and static/), never source files.
import { readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const publicEntries = readdirSync(join(root, 'app', 'public'));
const targets = ['index.html', 'static', ...publicEntries];

for (const name of targets) {
  rmSync(join(root, name), { recursive: true, force: true });
}
console.log(`cleaned ${targets.length} build paths`);
