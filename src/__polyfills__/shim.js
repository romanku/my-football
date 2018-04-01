global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};

global.fetch = () => {
    return { json: () => {} };
};