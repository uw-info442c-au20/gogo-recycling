const scoreHelper = points => {
    const levelInterval = 15;
    return Math.min(Math.floor(points / levelInterval), 4);
}

export default scoreHelper;