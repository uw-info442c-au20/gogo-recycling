const MAX_LEVEL = 4;
const LEVEL_INTERVAL = 15;

const computeLevel = points => {
    return Math.min(Math.floor(points / LEVEL_INTERVAL), MAX_LEVEL);
}

export default computeLevel;