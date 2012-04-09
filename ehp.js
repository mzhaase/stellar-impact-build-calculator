var ehp = [],
    shield = [],
    armorbonus = [];

//this function works alsmost exactly as dps.js. Understand dps.js first, 
//its better documented. In fact, i just copied dps.js and changed a couple of 
//variable names around to create this file
function calculate_ehp_function() {
    "use strict"; //JSLint told me this was a good idea
    var structuremultiplier = [],
    shieldmultiplier = [],
    ship = Number(document.shipselect.ship.value),
    structureitems = 0,
    armoritems = 0,
    shielditems = 0,
    stmaxupgrade = Number(document.upgrades.structure_upgrade.value),
    shmaxupgrade = Number(document.upgrades.shield_upgrade.value),
    armaxupgrade = Number(document.upgrades.armor_upgrade.value),
    n,
    i,
    j,
    temp;
    //first, total boni by items

    for (i = 1; i < 4; i += 1) {
        if (document.items["hull_item_" + i].value === "ar") {
            n = Number(document.items["hull_item_" + i + "_tier"].value);
            armoritems += Number(item_armor[n]);
            continue;
        }
        if (document.items["hull_item_" + i].value === "sh") { 
            n = Number(document.items["hull_item_" + i + "_tier"].value);
            shielditems += Number(item_shield[n]);
            continue;
        }
        if (document.items["hull_item_" + i].value === "st") { 
            n = Number(document.items["hull_item_" + i + "_tier"].value);
            structureitems += Number(item_structure[n]);
        }
    } // now we calculate the multiplier-arrays
    for (i = 1; i < 16; i += 1) {
        structuremultiplier[i] = 0;
        shieldmultiplier[i] = 0;
        armorbonus[i] = 0;
    }
    for (i = 1; i < 6; i += 1) {
        if (stmaxupgrade > i) {
            structuremultiplier[3 * i] = 1 + (Number(upgrade_structure[i]) + Number(structureitems)) / 100; //without groundbreaking tech, upgrades are at techlevel 3 6 9 12 15
        } else {
            structuremultiplier[3 * i] = 1 + (Number(upgrade_structure[Number(stmaxupgrade)]) + Number(structureitems)) / 100;
        }
        if (shmaxupgrade > i) {
            shieldmultiplier[3 * i] += 1 + (Number(upgrade_shield[i]) + Number(shielditems)) / 100;
        } else {
            shieldmultiplier[3 * i] += 1 + (Number(upgrade_shield[Number(shmaxupgrade)]) + Number(shielditems)) / 100;
        }
        if (armaxupgrade > i) {
            armorbonus[3 * i] = ((Number(upgrade_armor[i])) + Number(armoritems)) / 100;
        } else {
            armorbonus[3 * i] = (Number(upgrade_armor[Number(armaxupgrade)]) + Number(armoritems)) / 100;
        }
    }
        Tech: for (i = 1; i < 17; i += 1) { //now that we calculated the changes in damagemultiplier due to upgrades, we fill the rest of the arrays
            for (j = 0; j <= 4; j += 1){
                if (i < 3){
                    structuremultiplier[i] = 1 + (Number(structureitems) / 100);
                    shieldmultiplier[i] = 1 + Number(shielditems) / 100;
                    armorbonus[i] = (Number(armoritems) / 100);
                    continue Tech;
                }
                if (i > j * 3 && i < (j + 1) * 3) {
                    structuremultiplier[i] = structuremultiplier[3 * j];
                    shieldmultiplier[i] = shieldmultiplier[3 * j];
                    armorbonus[i] = armorbonus[3 * j];
                    continue Tech;
                }
            }
        }
   

    //Now we should hopefully be able to calculate dps for guns for each techlevel. yay.
    for (i = 1; i < 17; i += 1) { //basically: number of turrets * (1/cooldown*damage*damagemulti+2*1/cooldown*damage*damagemulti*(basecritrate+critupgrade))
        ehp[i] = (1 + 2 * (shiparray[ship][2] / 100 + armorbonus[i]))
        * shiparray[ship][0] * structuremultiplier[i];
        shield[i] = shiparray[ship][1] * shieldmultiplier[i];
        ehp[i] = Math.round(ehp[i]);
        shield[i] = Math.round(shield[i]);
    } // and thats hat. 
    if (document.passives.S5.checked === true) {
        temp = ehp[16];
        ehp.shift();
        ehp[16] = temp;
        temp = shield[16];
        shield.shift();
        shield[16] = temp;
    }
    document.results.min_ehp.value = ehp[1];
    document.results.max_ehp.value = ehp[15];
    document.results.min_shield.value = shield[1];
    document.results.max_shield.value = shield[15];
}

function calculate_regen() {
    "use strict";
    
    var regen = [],
        ship = Number(document.shipselect.ship.value), //find out selected ship
        techlevel;
        
    for (techlevel = 1; techlevel <= 16; techlevel += 1) {
        regen[techlevel] = skills_regeneration_per_second[techlevel] + armorbonus[techlevel] * 10 + shiparray[ship][2] / 10;
        if (document.passives.E1.checked === true) {
            regen[techlevel] += 2;
        }
    }
    document.results.regeneration.value = regen[15];
}

function calculate_ehp() {
    calculate_ehp_function();
    draw_line_ehp();
    calculate_regen();
}