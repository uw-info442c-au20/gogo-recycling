const useScore = newPoints => {
    console.log("here");
    const level = defineLevel(newPoints);
    console.log("level", level)
    return level;
}
const defineLevel = (points) => {
    console.log("inside?");
    const levelInterval = 15;
    if (points <= levelInterval) {
        return 0;
    } else if  (points <= levelInterval * 2) {
        return 1;
    } else if (points <= levelInterval * 3) {
        return 2;
    } else if (points <= levelInterval * 4) {
        return 3;
    } else {
        return 4;
    }
}

export default useScore;