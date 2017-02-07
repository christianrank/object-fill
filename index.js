module.exports = (destination, source) => {
    const newDestination = Object.assign({}, destination);

    if (!source) return destination;

    for (const key in newDestination) {
        if ({}.hasOwnProperty.call(newDestination, key) &&
            {}.hasOwnProperty.call(source, key)
        ) {
            if (
                typeof source[key] === 'object'
                && typeof newDestination[key] === 'object'
                && !Array.isArray(source[key])
                && !Array.isArray(newDestination[key])
            ) {
                newDestination[key] = objectFill(newDestination[key], source[key]);
            } else {
                newDestination[key] = source[key];
            }
        }
    }

    return newDestination;
}
