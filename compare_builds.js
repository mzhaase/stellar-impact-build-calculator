var dps_guns_new = [],
    dps_skills_new = [],
    dps_effective_new = [],
    dps_guns_over_range_new = [],
    ehp_new = [],
    shield_new = [];

function compare_builds(){
    "use strict";
    
    var original_code,
    new_code,
    i;
                
        
    generate_code();
    original_code = document.code.code.value;
    new_code = document.compare.new_code.value;
    document.shipselect.code.value = new_code;
    loadbuild();
    calculate();
    for (i = 1; i <= 16; i += 1){
        dps_guns_new[i] = dps_guns[i];
        dps_skills_new[i] = dps_skills [i];
        dps_effective_new[i] = dps_effective[i];
        ehp_new[i] = ehp[i];
        shield_new[i] = shield[i];
    }
    for (i = 0; i <= 130; i += 1){
        dps_guns_over_range_new[i] = dps_guns_over_range[i];
    }
    document.shipselect.code.value = original_code;
    loadbuild();
    calculate();
    draw_dps_new();
    draw_dps_over_range_new();
    draw_ehp_new();
}

function compare_to_this(){
    "use strict";
    
    var i;
    calculate();     
    for (i = 1; i <= 16; i += 1){
        dps_guns_new[i] = dps_guns[i];
        dps_skills_new[i] = dps_skills [i];
        dps_effective_new[i] = dps_effective[i];
        ehp_new[i] = ehp[i];
        shield_new[i] = shield[i];
    }
    for (i = 0; i <= 130; i += 1){
        dps_guns_over_range_new[i] = dps_guns_over_range[i];
    }
    draw_dps_new();
    draw_dps_over_range_new();
    draw_ehp_new();
}
