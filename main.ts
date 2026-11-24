import { mkdirSync, writeFileSync } from 'node:fs';

const entry = 'Human v34.1.2: Fixed pinky toe hitbox extending 2 cm past the actual toe. Bed frames no longer crit in the dark.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', entry, 'utf8');
