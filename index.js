const revString = (anystring) => {
    let namerev = anystring.split("");

    const arrayn = [];

    let i = 0;

    while (i < namerev.length) {
        const newel = namerev.splice(-1);

        arrayn.push(newel);
    }

    const newarray = arrayn.join("");

    return newarray;
};

export default revString


