// these functions calculate buffs and dps


var dps_guns = [],
dps_guns_over_range = [],
dps_skills = [],
dps_skills_over_range = [],
skills_dps_bonus = [],
skills_range_bonus = [],
skills_cooldown_bonus = [],
skills_critical_hit_bonus = [],
skills_critical_hit_damage_bonus = [],
dps_effective = [];

// this function calculates turret dps    
function calculate_dps_guns() { //dps for turrets
    "use strict";
    var damagemultiplier = [],
    critmultiplier = [],
    frmultiplier = [],
    rangemultiplier,
    ship = Number(document.shipselect.ship.value), //find out selected ship
    crititems = 0,
    damageitems = 0,
    fritems = 0,
    rangeitems = 0,
    dps_guns_light = [],
    dps_guns_medium = [],
    dps_guns_heavy = [],
    dmgmaxupgrade = document.upgrades.damage_upgrade.value,
    frmaxupgrade = document.upgrades.firing_rate_upgrade.value,
    hcmaxupgrade = document.upgrades.hullcrit_upgrade.value,
    n,
    i,
    j,
    temp;
    //first, total boni by items

    for (i = 1; i < 4; i += 1) {
        if (document.items["ammo_item_" + i].value === "dm") { //damageitems
            n = Number(document.items["ammo_item_" + i + "_tier"].value);
            damageitems += Number(item_damage[n]);
            continue;
        }
        if (document.items["ammo_item_" + i].value === "fr") { //firing rate
            n = Number(document.items["ammo_item_" + i + "_tier"].value);
            fritems += Number(item_firing_rate[n]);
            continue;
        }
        if (document.items["ammo_item_" + i].value === "hc") { //hullcrit
            n = Number(document.items["ammo_item_" + i + "_tier"].value);
            crititems += Number(item_hullcrit[n]);
            continue;
        }
        if (document.items["ammo_item_" + i].value === "rn") { //range
            n = Number(document.items["ammo_item_" + i + "_tier"].value);
            rangeitems += Number(item_range[n]);
        }
    } // now we calculate the multiplier-arrays
    for (i = 1; i < 16; i += 1) {
        damagemultiplier[i] = 0;
        critmultiplier[i] = 0;
        frmultiplier[i] = 0;
    }  
    for (i = 1; i < 6; i += 1) {
        if (dmgmaxupgrade > i) {
            damagemultiplier[3 * i] = 1 + (Number(upgrade_damage[i]) + Number(damageitems)) / 100;
        //without groundbreaking tech, upgrades are at techlevel 3 6 9 12 15
        //so we only define the arrays at those points, because 3-5 6-8 etc
        // are all the same value anyway
        } else {
            damagemultiplier[3 * i]
            = 1 + (Number(upgrade_damage[Number(dmgmaxupgrade)]) + Number(damageitems)) / 100;
        }
        if (frmaxupgrade > i) {
            frmultiplier[3 * i]
            += 1 + (Number(upgrade_firing_rate[i]) + Number(fritems)) / 100;
        } else {
            frmultiplier[3 * i]
            += 1 + (Number(upgrade_firing_rate[Number(frmaxupgrade)]) + Number(fritems)) / 100;
        }
        if (hcmaxupgrade > i) {
            critmultiplier[3 * i]
            = ((Number(upgrade_hullcrit[i])) + Number(crititems)) / 100;
        } else {
            critmultiplier[3 * i]
            = (Number(upgrade_hullcrit[Number(hcmaxupgrade)]) + Number(crititems)) / 100;
        }
    }
        Tech: for (i = 1; i < 17; i += 1) {
            //now that we calculated the changes in damagemultiplier due to 
            //upgrades, we fill the rest of the arrays. basically, damagemultiplier[3] to damagemultiplier[5] = damagemultiplier[3] (set above), dmgmultiplier[6] to damagemultiplier [8] = damagemultiplier[6] and so on.
            for (j = 0; j <= 4; j += 1){
                if (i < 3){
                    damagemultiplier[i] = 1 + Number(damageitems) / 100;
                    critmultiplier[i] = Number(crititems) / 100;
                    frmultiplier[i] = 1 + Number(fritems) / 100;
                    continue Tech;
                }
                if (i > j * 3 && i < (j + 1) * 3) {
                    damagemultiplier[i] = damagemultiplier[3 * j];
                    critmultiplier[i] = critmultiplier[3 * j];
                    frmultiplier[i] = frmultiplier[3 * j];
                    continue Tech;
                }
            }
        }

    //Now we should hopefully be able to calculate dps for guns for 
    //each techlevel. yay.
    //basically: number of turrets * 
    //(1/cooldown*damage*damagemulti+2*1/cooldown*damage*damagemulti
    //*(basecritrate+critupgrade))
    rangemultiplier = 1 + (upgrade_range[Number(document.upgrades.range_upgrade.value)] + rangeitems + skills_range_bonus[15])/100;
    if (document.shipselect.siegemode_checkbox.checked === false) {
        for (i = 1; i < 17; i += 1) {
            dps_guns_light[i] = Math.round(shiparray[ship][7] * ((1 / light_turret[0]) 
                * light_turret[1] * damagemultiplier[i] * frmultiplier[i] + 2 
                * (1 + (skills_critical_hit_damage_bonus[i] / 100)) 
                * ((1 / light_turret[0]) * light_turret[1] * damagemultiplier[i] 
                    * frmultiplier[i] * (shiparray[ship][6] / 100 
                        + critmultiplier[i] + skills_critical_hit_bonus[i] / 100))));
            dps_guns_medium[i] = Math.round(shiparray[ship][8] * ((1 / medium_turret[0]) 
                * medium_turret[1] * damagemultiplier[i] * frmultiplier[i] + 2 
                * (1 + (skills_critical_hit_damage_bonus[i] / 100)) 
                * ((1 / medium_turret[0]) * medium_turret[1] * damagemultiplier[i] 
                    * frmultiplier[i] * (shiparray[ship][6] / 100 
                        + critmultiplier[i] + skills_critical_hit_bonus[i] / 100))));
            dps_guns_heavy[i] = Math.round(shiparray[ship][9] * ((1 / heavy_turret[0]) 
                * heavy_turret[1] * damagemultiplier[i] * frmultiplier[i] + 2 
                * (1 + (skills_critical_hit_damage_bonus[i] / 100)) 
                * ((1 / heavy_turret[0]) * heavy_turret[1] * damagemultiplier[i] 
                    * frmultiplier[i] * (shiparray[ship][6] / 100 
                        + critmultiplier[i] + skills_critical_hit_bonus[i] / 100))));
            dps_guns[i] = dps_guns_light[i] + dps_guns_medium[i] + dps_guns_heavy[i];
        }
        for (i = 0; i <= 200; i += 1){
            if (i <= (light_turret[3] * rangemultiplier)) {
                dps_guns_over_range[i] = dps_guns[15];
                continue;
            }
            if (i <= (medium_turret[3] * rangemultiplier) && i > (light_turret[3] * rangemultiplier)) {
                dps_guns_over_range[i] = dps_guns[15] - dps_guns_light[15];
                continue;
            } 
            if (i <= (heavy_turret[3] * rangemultiplier) && i > (medium_turret[3] * rangemultiplier)) {
                dps_guns_over_range[i] = dps_guns_heavy[15];
                continue;
            } 
            if (i > (heavy_turret[3] * rangemultiplier)) {
                dps_guns_over_range[i] = 0;
            }
        }
    } else {
        for (i = 1; i <= 16; i += 1){ // artilleryship, siege mode activated
            dps_guns[i] = 1/ shc[0] * shc[1] * damagemultiplier[i] * frmultiplier[i];
        }
        for (i = 0; i <= 200; i += 1) {
            if (i < shc[3] * rangemultiplier && i >= 40) {
                dps_guns_over_range[i] = dps_guns[15];
            } else {
                dps_guns_over_range[i] = 0;
            }
        }
    }  
        
    //// and thats hat. 
    //damage calculated, now we  check if we have groundbreaking technology 
    //(makes all upgrades available one techlevel sooner
    if (document.passives.S5.checked === true) {
        temp = dps_guns[16];
        dps_guns.shift();
        dps_guns[16] = temp;
    }
    // now we calculate the DPS over range
}


//this is a horribly piece of progra -HEY! BEHIND YOU! A THREE HEADED MONKEY!
function calculate_dps_skills() {
    "use strict";

    var i,
    j,
    k,
    techlevel,
    maxlevel,
    ship_skill_rank;

    for (i = 1; i <= 16; i += 1) {
        dps_skills[i] = 0;
        skills_dps_bonus[i] = 0;
        skills_range_bonus[i] = 0;
        skills_critical_hit_bonus[i] = 0;
        skills_critical_hit_damage_bonus[i] = 0;
        skills_cooldown_bonus[i] = 0;
    }
    for (i = 1; i <= 4; i += 1) { //for the 4 skill slots
        if (document.shipselect.siegemode_checkbox.checked === false) {
            for (j = 0; j <= skill.length-1; j += 1) { //scan all the skills!
                if (document.skills["skill_" + i].value === skill[j][0]) { //yay, we found our skill with the id j
                    maxlevel = Number(document.skills["skill_" + i + "_level"].value);
                    ship_skill_rank = shiparray[document.shipselect.ship.value][skill[j][9]]; // gets the rank the ship has in the skill so if the skill is maneuver and ship is corvette == 3
                        Tech: for (techlevel = 0; techlevel <= 16; techlevel += 1) { // with this, we set dps for every techlevel
                            for (k = 0; k <= 3; k += 1){ // basically, from techlevel 1 to the techlevel where you can first upgrade the skill, you get the unupgraded dps/buff, then between upgrade 1 and 2 you get the upgraded etc..
                                if (techlevel < (((k + 1) * 6) - (k + 1) * ship_skill_rank) 
                                    && techlevel >= k * 6 - k * ship_skill_rank 
                                    || maxlevel === k) {
                               
                                    if (skill[j][1] === "projectile" //different skill-types do different things
                                        || skill[j][1] === "homing_projectile"
                                        || skill[j][1] === "aoe"
                                        || skill[j][1] === "dot"
                                        || skill[j][1] === "squadron_dmg") {
                                        dps_skills[techlevel] += skill[j][11][k];
                                    }
                                    if (skill[j][1] === "buff"
                                        || skill[j][1] === "damage_buff") {
                                        skills_dps_bonus[techlevel] += skill[j][11][k];
                                    }
                                    if (skill[j][1] === "range_buff") {
                                        skills_range_bonus[techlevel] += skill[j][5][k];
                                    }
                                    if (skill[j][1] === "critical_hit_buff") {
                                        skills_critical_hit_bonus[techlevel] += skill[j][11][k];
                                    }
                                    if (skill[j][1] === "cooldown_buff") {
                                        skills_cooldown_bonus[techlevel] += skill[j][11][k];
                                    }
                                    if (skill[j][0] === "pt") {  //priority target unfortunately has more than one effect, so i have to detect it seperately
                                        skills_critical_hit_damage_bonus[techlevel] += skill[j][10][k];
                                    }
                                    continue Tech;
                                } 
                            }
                        }
                }
            }
        }
        if (document.shipselect.siegemode_checkbox.checked === true) { // this is for artilleryship in siegemode
            for (j = 0; j <= skill.length-1; j += 1) { //scan all the skills!
                if (document.skills["skill_" + i].value === skill[j][0]) { //yay, we found our skill with the id j
                    maxlevel = Number(document.skills["skill_" + i + "_level"].value);
                    ship_skill_rank = shiparray[document.shipselect.ship.value][skill[j][9]]; // gets the rank the ship has in the skill so if the skill is maneuver and ship is corvette == 3
                        Tech: for (techlevel = 0; techlevel <= 16; techlevel += 1) { // i am truly sorry, but we need to set dps for every techlevel.
                            for (k = 0; k <= 3; k += 1){
                                if (techlevel < (((k + 1) * 6) - (k + 1) * ship_skill_rank) 
                                    && techlevel >= k * 6 - k * ship_skill_rank 
                                    || maxlevel === k) {
                                    if (skill[j][1] === "range_buff") {
                                        skills_range_bonus[techlevel] += skill[j][5][k];
                                    }
                                    if (skill[j][1] === "shell"){
                                        dps_skills[techlevel] += skill[j][11][k];
                                    }
                                    continue Tech;
                                }
                            }
                        
                        }

                }
            }
        }
    }
}


function calculate_dps_effective() {
    "use strict";
    var i;
    for (i = 1; i <= 17; i += 1) {
        dps_effective[i] = (dps_guns[i] + (dps_skills[i] * (1 + skills_cooldown_bonus[i] / 100)) * (1 + skills_dps_bonus[i] / 100));
    }

    document.results.min_dps_guns.value = Math.round(dps_guns[1]);
    document.results.max_dps_guns.value = Math.round(dps_guns[15]);
    document.results.min_dps_skills.value = Math.round(dps_skills[1]);
    document.results.max_dps_skills.value = Math.round(dps_skills[15]);
    document.results.min_dps_combined.value = Math.round(dps_effective[1]);
    document.results.max_dps_combined.value = Math.round(dps_effective[15]);
    draw_dps();
    draw_dps_over_range();
}

function calculate_dps() {
    "use strict";
    calculate_dps_skills();
    calculate_dps_guns();    
    calculate_dps_effective();
}