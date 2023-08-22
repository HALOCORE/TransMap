function bf(planet1, planet2) {
    var planet_names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    if (planet_names.indexOf(planet1) === -1 || planet_names.indexOf(planet2) === -1 || planet1 === planet2) {
        return [];
    }
    var planet1_index = planet_names.indexOf(planet1);
    var planet2_index = planet_names.indexOf(planet2);
    if (planet1_index < planet2_index) {
        return planet_names.slice(planet1_index + 1, planet2_index);
    } else {
        return planet_names.slice(planet2_index + 1, planet1_index);
    }
}

