//ALL OF THIS IS ABOUT CODE ENCRYPTION AND DECRYPTION
//
//so the way this works is that we have a large string and every variable is either one or two digits. to restore a build, we use slice to extract those numbers. easy and not very elegant ;)

function generate_code(){
    var code;
    code=document.shipselect.ship.value+document.shipselect.mark.value+"_"; //first two digits= ship, third digit=mark
    for (var i=1; i<4; i++){
        code+=document.items["hull_item_"+i].value+document.items["hull_item_"+i+"_tier"].value; //digits 4-13 hullupgrades
    }
    for (var i=1; i<4; i++){
        code+=document.items["ammo_item_"+i].value+document.items["ammo_item_"+i+"_tier"].value; //digits 13-22 ammoupgrades
    }
    code+=document.items.turret.value.slice(0, 2)+document.items.turret_tier.value;
    for (var i=1;i<6;i++){
        if(document.passives["S"+i].checked==false) code+=0;
        else code+=1;
    }
    for (var i=1;i<6;i++){
        if(document.passives["N"+i].checked==false) code+=0;
        else code+=1;
    }
    for (var i=1;i<6;i++){
        if(document.passives["E"+i].checked==false) code+=0;
        else code+=1;
    }
    for (var i=1;i<6;i++){
        if(document.passives["G"+i].checked==false) code+=0;
        else code+=1;
    }
    for (var i=1;i<5;i++){
        code+=document.skills["skill_"+i].value+document.skills["skill_"+i+"_level"].value;
    }
    code+=document.upgrades.shield_upgrade.value+document.upgrades.structure_upgrade.value+document.upgrades.armor_upgrade.value+document.upgrades.radar_upgrade.value+document.upgrades.booster_upgrade.value;
    code+=document.upgrades.hullcrit_upgrade.value+document.upgrades.shieldcrit_upgrade.value+document.upgrades.damage_upgrade.value+document.upgrades.firing_rate_upgrade.value+document.upgrades.range_upgrade.value;

    document.code.code.value=code;
}



function loadbuild(){
    var code = document.shipselect.code.value;
    document.shipselect.ship.value = code.slice(0,2);
    document.shipselect.mark.value = code.slice(2,3);
    addskills();
    for (var i=1; i<4;i++){
        document.items["hull_item_"+i].value=code.slice(4+3*(i-1),6+3*(i-1));
        document.items["hull_item_"+i+"_tier"].value=code.slice(6+3*(i-1),7+3*(i-1));
    }
    for (var i=1; i<4;i++){
        document.items["ammo_item_"+i].value=code.slice(13+3*(i-1),15+3*(i-1));
        document.items["ammo_item_"+i+"_tier"].value=code.slice(15+3*(i-1),16+3*(i-1));
    }
    document.items.turret.value=code.slice(22.24);
    document.items.turret_tier.value=code.slice(24.25);
    for (var i=1;i<6;i++){
        if(code.slice(25+(i-1),26+(i-1))==0) document.passives["S"+i].checked=false;
        else document.passives["S"+i].checked=true;
    }
    for (var i=1;i<6;i++){
        if(code.slice(30+(i-1),31+(i-1))==0) document.passives["N"+i].checked=false;
        else document.passives["N"+i].checked=true;
    }
    for (var i=1;i<6;i++){
        if(code.slice(35+(i-1),36+(i-1))==0) document.passives["E"+i].checked=false;
        else document.passives["E"+i].checked=true;
    }
    for (var i=1;i<6;i++){
        if(code.slice(40+(i-1),41+(i-1))==0) document.passives["G"+i].checked=false;
        else document.passives["G"+i].checked=true;
    }
    for (var i=1;i<5;i++){
        document.skills["skill_"+i].value=code.slice(45+3*(i-1),47+3*(i-1));
        document.skills["skill_"+i+"_level"].value=code.slice(47+3*(i-1),48+3*(i-1));
    }
    document.upgrades.shield_upgrade.value=code.slice(57,58);
    document.upgrades.structure_upgrade.value=code.slice(58,59);
    document.upgrades.armor_upgrade.value=code.slice(59,60);
    document.upgrades.radar_upgrade.value=code.slice(60,61);
    document.upgrades.booster_upgrade.value=code.slice(61,62);
    document.upgrades.hullcrit_upgrade.value=code.slice(62,63);
    document.upgrades.shieldcrit_upgrade.value=code.slice(63,64);
    document.upgrades.damage_upgrade.value=code.slice(64,65);
    document.upgrades.firing_rate_upgrade.value=code.slice(65,66);
    document.upgrades.range_upgrade.value=code.slice(66,67);
    update_upgrade_percentage();
    update_skillpoints();
}