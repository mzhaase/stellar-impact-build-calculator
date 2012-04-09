//ALL OF THIS IS FORM RELATED STUFF. NO CALCULATIONS
//
//
/* functions to control the maximum of three checkboxes under passive skills. 
function  is called every time you check a box
*/
function checkcontrol_sci(j) {
    "use strict";
    var total = 0, i;
    for (i = 0; i < document.passives.sci.length; i += 1) {
        if (document.passives.sci[i].checked) {
            total += 1;
        }
        if (total > 3) {
            alert("Maximum number is three")
            document.passives.sci[j].checked = false ;
            return false;
        }
    }
}
function checkcontrol_nav(j) {
    var total = 0, i;
    for (i = 0; i < document.passives.nav.length; i += 1) {
        if (document.passives.nav[i].checked) {
            total += 1;
        }
        if (total > 3) {
            alert("Maximum number is three")
            document.passives.nav[j].checked = false ;
            return false;
        }
    }
}
function checkcontrol_eng(j) {
    var total = 0, i;
    for (i = 0; i < document.passives.eng.length; i += 1) {
        if (document.passives.eng[i].checked) {
            total += 1;
        }
        if (total > 3) {
            alert("Maximum number is three")
            document.passives.eng[j].checked = false ;
            return false;
        }
    }
}
function checkcontrol_gun(j) {
    var total = 0, i;
    for (i = 0; i < document.passives.gun.length; i += 1) {
        if (document.passives.gun[i].checked) {
            total += 1;
        }
        if (total > 3) {
            alert("Maximum number is three")
            document.passives.gun[j].checked = false ;
            return false;
        }
    }
}


/* this function resets the skill-list and adds class-specific skills. its 
called every time somebody changes the ship and once onload. 
This is so that if you choose artilleryship (artyskills get added, then carrier 
(carrierskills added on top) and then arty again you have all the artyskills 
two times. So the list is cleaned every time you change the ship.
*/
function addskills() {
    "use strict";
    var ship = Number(document.shipselect.ship.value), 
    i,
    j,
    k;
    while (document.skills.skill_1.length > 0) { /* this part removes all the entries */
        document.skills.skill_1.options[document.skills.skill_1.length - 1]
        = null;
        document.skills.skill_2.options[document.skills.skill_2.length - 1]
        = null;
        document.skills.skill_3.options[document.skills.skill_3.length - 1]
        = null;
        document.skills.skill_4.options[document.skills.skill_4.length - 1]
        = null;
    }
    for (i = 1; i <= 4; i += 1) { /* this loop adds the standard skills to skill_1 to skill_4 */
        for (j = 0; j < skill.length; j += 1) {
            if (skill[j][9] <= 14) {
                document.skills["skill_" + i].options[document.skills["skill_" + i].length] = new Option(skill[j][12], skill[j][0]);
            }
            if (ship >= 15) {
                if (ship === skill[j][13]) {
                    document.skills["skill_" + i].options[document.skills["skill_" + i].length] = new Option(skill[j][12], skill[j][0]);
                }
            }
        }
    }
    if (ship != 15) {
        document.shipselect.siegemode_checkbox.disabled = true;
        document.shipselect.siegemode_checkbox.checked = false;
    }
    if (ship === 15) {
        document.shipselect.siegemode_checkbox.disabled = false;
    }
}

function addships() {
    "use strict";
    
    var i;
    for (i = 10; i <= shiparray.length-1; i += 1) {
        document.shipselect.ship.options[document.shipselect.ship.length] = new Option(shiparray[i][16], i);
    }
}
/* this function updates the skillpoints left based on mark and how many points 
already spend it is called when you change mark or upgradelevel
*/

function update_skillpoints() {
    "use strict";
    var mark = Number(document.shipselect.mark.value),
    points_spend = Number(document.skills.skill_1_level.value)
    + Number(document.skills.skill_2_level.value)
    + Number(document.skills.skill_3_level.value)
    + Number(document.skills.skill_4_level.value),
    points_available = Number(mark) + 5;
    points_available -= points_spend;
    if (points_available < 0) {
        alert("You dont have enough skillpoints left");
    }
    document.skills.skillpoints_left.value = points_available;
}

/* this function updates the upgrade percentage, its called whenever the 
user changes an upgradelevel
*/
function update_upgrade_percentage() {
    "use strict";
    var upgradelevel;

    upgradelevel = document.upgrades.shield_upgrade.value;
    document.upgrades.shield_upgrade_percent.value
    = upgrade_shield[upgradelevel];

    upgradelevel = document.upgrades.structure_upgrade.value;
    document.upgrades.structure_upgrade_percent.value
    = upgrade_structure[upgradelevel];

    upgradelevel = document.upgrades.booster_upgrade.value;
    document.upgrades.booster_upgrade_percent.value
    = upgrade_booster[upgradelevel];

    upgradelevel = document.upgrades.armor_upgrade.value;
    document.upgrades.armor_upgrade_percent.value
    = upgrade_armor[upgradelevel];

    upgradelevel = document.upgrades.radar_upgrade.value;
    document.upgrades.radar_upgrade_percent.value
    = upgrade_radar[upgradelevel];

    upgradelevel = document.upgrades.damage_upgrade.value;
    document.upgrades.damage_upgrade_percent.value
    = upgrade_damage[upgradelevel];

    upgradelevel = document.upgrades.firing_rate_upgrade.value;
    document.upgrades.firing_rate_upgrade_percent.value
    = upgrade_firing_rate[upgradelevel];

    upgradelevel = document.upgrades.hullcrit_upgrade.value;
    document.upgrades.hullcrit_upgrade_percent.value
    = upgrade_hullcrit[upgradelevel];

    upgradelevel = document.upgrades.shieldcrit_upgrade.value;
    document.upgrades.shieldcrit_upgrade_percent.value
    = upgrade_shieldcrit[upgradelevel];

    upgradelevel = document.upgrades.range_upgrade.value;
    document.upgrades.range_upgrade_percent.value
    = upgrade_range[upgradelevel];
}


//calculate is the main function which starts all the others.

function calculate() {
    "use strict";
    generate_code();
    calculate_cp();
    calculate_dps();
    calculate_ehp();
}

function loadup() {
    "use strict";
    addskills();
    addships();
}