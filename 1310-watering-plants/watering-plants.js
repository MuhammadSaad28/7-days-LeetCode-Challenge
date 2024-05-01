/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let steps = 0;
    let currCap = capacity;
    const n = plants.length;
    
    for (let i = 0; i < n; i++) {
        if (currCap >= plants[i]) {
            steps++;
            currCap -= plants[i];
        } else {
            currCap = capacity;
            currCap -= plants[i];
            steps += (2 * i + 1);
        }
    }
    
    return steps;
};
