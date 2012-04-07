//this function calculates cp stuff

var cp_needed, //somebody should move these variables into a function someday.
    cp_gained,
    cp_difference;

function calculate_cp() { //first, total number of hull and weapon upgrades is determined
    "use strict";
    var hull_upgrades = Number(document.upgrades.shield_upgrade.value)
        + Number(document.upgrades.structure_upgrade.value)
        + Number(document.upgrades.radar_upgrade.value)
        + Number(document.upgrades.booster_upgrade.value)
        + Number(document.upgrades.armor_upgrade.value),
        weapon_upgrades = Number(document.upgrades.damage_upgrade.value)
        + Number(document.upgrades.firing_rate_upgrade.value)
        + Number(document.upgrades.hullcrit_upgrade.value)
        + Number(document.upgrades.shieldcrit_upgrade.value)
        + Number(document.upgrades.range_upgrade.value);

    if (document.passives.E2.checked === true) { //if veteran engineers
        cp_needed = 270 * hull_upgrades;
    } else {
        cp_needed = 300 * hull_upgrades;
    }

    if (document.passives.G4.checked === true) { //if veteran gunners
        cp_needed += 270 * weapon_upgrades;
    } else {
        cp_needed += 300 * weapon_upgrades;
    }

    if (document.passives.N1.checked === true) { //if high ranking officer you get +.25 cp per second. otherwise you get 15 techlevels* 90sec per techlevel*2cp per second.
        cp_gained = 15 * 90 * 2.25;
    } else {
        cp_gained = 15 * 90 * 2;
    }
    if (document.upgrades.AC.checked === true) { //advanced colonization gives you another +0.4 cp per planet per second so, cpp^(-1)s^(-1), but it costs 300 cp and you can only get it at techlevel 5
        cp_needed += 300;
        cp_gained += 10 * 90 * 0.4;
    }
    if (document.upgrades.CO.checked === true) { //and thats for convoy, same deal. You get 25 cp per minute if all convoys make it.
        cp_needed += 100;
        cp_gained += 15 * 25;
    }


    cp_difference = cp_needed - cp_gained;

    document.results.needed_cp.value = cp_needed;
    document.results.earned_cp.value = cp_gained;
    document.results.to_farm_cp.value = cp_difference;
    document.results.escorts_to_farm.value = Math.round(cp_difference / 10);
}