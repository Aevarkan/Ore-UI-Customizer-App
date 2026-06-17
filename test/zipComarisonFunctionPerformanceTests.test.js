function seededRandom(seed) {
    // Mulberry32 — fast, deterministic, great for this use case
    seed |= 0;
    return function () {
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function randomInt(rng, min, max) {
    return Math.floor(rng() * (max - min + 1)) + min;
}

function randomString(rng, length) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";
    let out = "";
    for (let i = 0; i < length; i++) {
        out += chars[randomInt(rng, 0, chars.length - 1)];
    }
    return out;
}

function generateFakePath(seed) {
    const rng = seededRandom(seed);

    const parts = randomInt(rng, 1, 5);
    const segments = [];

    for (let i = 0; i < parts; i++) {
        const len = randomInt(rng, 4, 20);
        segments.push(randomString(rng, len));
    }

    const extensions = ["txt", "dat", "bin", "json", "cfg", "log", "png", "jpg"];
    const ext = extensions[randomInt(rng, 0, extensions.length - 1)];

    segments[segments.length - 1] += "." + ext;

    return segments.join("/");
}

const randomInit = 7;

let zip1 = [];
let zip2 = [];

for (let i = 0; i < 1000; i++) {
    const path = generateFakePath(i * randomInit);
    zip1.push(path);
    zip2.push(path);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Add random non-matching entries.
for (let i = 0; i < Math.floor(Math.random() * 400 + 100); i++) {
    const path = generateFakePath(Math.random() * 10000 * randomInit);
    zip1.push(path);
}
for (let i = 0; i < Math.floor(Math.random() * 400 + 100); i++) {
    const path = generateFakePath(Math.random() * 10000 * randomInit);
    zip2.push(path);
}

zip1 = shuffleArray(zip1);
zip2 = shuffleArray(zip2);

function compareZips_1(zip1, zip2) {
    const zip1Entries = zip1;
    const zip2Entries = zip2;
    if (zip1Entries.length !== zip2Entries.length) return false;
    for (let i = 0; i < zip1Entries.length; i++) {
        if (zip1Entries[i] !== zip2Entries[i]) return false;
    }
    return true;
}

function compareZips_2(zip1, zip2) {
    const zip1Entries = new Set(zip1);
    const zip2Entries = new Set(zip2);
    if (zip1Entries.size !== zip2Entries.size) return false;
    for (let i = 0; i < zip1Entries.length; i++) {
        if (zip1Entries[i] !== zip2Entries[i]) return false;
    }
    return true;
}

const t1_1 = performance.now();
for (let i = 0; i < 1_000; i++) {
    compareZips_1(zip1, zip2);
}
const t2_1 = performance.now();

const t1_2 = performance.now();
for (let i = 0; i < 1_000; i++) {
    compareZips_2(zip1, zip2);
}
const t2_2 = performance.now();

console.log([t2_1 - t1_1, t2_2 - t1_2]);
