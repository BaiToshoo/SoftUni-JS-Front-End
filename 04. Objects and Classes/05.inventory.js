function heroes(arr) {
    let heroes = [];
    arr.forEach((line) => {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        heroes.push({ name, level, items });
    });
    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach((hero) => {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}`);
    });
}

heroes(['Isacc / 25 / Apple, GravityGun','Derek / 12 / BarrelVest, DestructionSword','Hes / 1 / Desolator, Sentinel, Antara']); // Hero: Hes level => 1 items => Desolator, Sentinel, Antara Hero: Derek level => 12 items => BarrelVest, DestructionSword Hero: Isacc level => 25 items => Apple, GravityGun
