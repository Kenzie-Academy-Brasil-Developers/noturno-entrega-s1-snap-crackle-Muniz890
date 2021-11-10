function snapCrackle(maxValue) {
    let text = "";
    for (let value = 1; value <= maxValue; value++) {
        if (value % 2 !== 0 && value % 5 === 0) {
            text += "SnapCrackle, ";
            continue;
        }
        if (value % 2 !== 0) {
            text += "Snap, ";
            continue;
        }
        if (value % 5 === 0) {
            text += "Crackle, ";
            continue;
        }
        text += value + ", ";
    }
    console.log(text);
}

snapCrackle(15);