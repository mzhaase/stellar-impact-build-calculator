/*who needs a database, right? Here is all the raw data, as global variables. 
So if a patch comes, change here
*/

/* item effects [%] (0 upgrades, upgrade I, upgrade II, ..., upgrade V); */

/* HULL items */

var item_structure=[0, 6, 7, 8, 9, 10];
var item_armor=[0, 3, 3.5, 4, 4.5, 5];
var item_shield=[0, 6, 7, 8, 9, 10];
var item_booster=[0, 3, 3.5, 4, 4.5, 5];
var item_radar=[0, 3, 3.5, 4, 4.5, 5];


/* AMMO items */

var item_damage=[0, 3, 3.5, 4, 4.5, 5];
var item_firing_rate=[0, 3, 3.5, 4, 4.5, 5];
var item_hullcrit=[0, 3, 3.5, 4, 4.5, 5];
var item_shieldcrit=[0, 3, 3.5, 4, 4.5, 5];
var item_range=[0, 3, 3.5, 4, 4.5, 5];

/* turrets */

var turret_disruptive=[5];
var turret_ionic=[5];
var turret_proton=[5];
var turret_ballistic=[5];
var turret_plasma=[5];



/* Upgrades [%] */

/* HULL upgrades */

var upgrade_structure=[0, 10, 25, 45, 70, 100];
var upgrade_armor=[0, 5, 12.5, 22.5, 35, 50];
var upgrade_shield=[0, 10, 25, 45, 70, 100];
var upgrade_radar=[0, 5, 12.5, 22.5, 35, 50];
var upgrade_booster=[0, 5, 12.5, 22.5, 35, 50];

/* AMMO upgrades */

var upgrade_damage=[0, 5, 12.5, 22.5, 35, 50];
var upgrade_range=[0, 5, 12.5, 22.5, 35, 50];
var upgrade_firing_rate=[0, 5, 12.5, 22.5, 35, 50];
var upgrade_hullcrit=[0, 2.5, 6.25, 11.25, 17.5, 25];
var upgrade_shieldcrit=[0, 2.5, 6.25, 11.25, 17.5, 25];




/* Turret info (cooldown, damage, range, max range) */

var light_turret=[3,45,40,45];
var medium_turret=[6,120,50,55];
var heavy_turret=[9,225,60,65];


/* SKILLS 

skill[z][0] = ; //id
skill[z][1] = ; //type
skill[z][2] = ; //damge
skill[z][3] = ; //Aoe
skill[z][4] = ; // range
skill[z][5] = ; //debuff or buff
skill[z][6] = ; // heal in points
skill[z][7] = ; // duration
skill[z][8] = ; //cooldown
skill[z][9] = ; //skill type 10-maneuver usw
skill[z][10] = ; // special
skill[z][11] = ; //dps or effective buff
skill[z][12] = ; // name
*/
var skill = [];

 //Quantum Accelerator// 0 
skill[0] = [];
skill[0][0] = "qa";
skill[0][1] = "speed_buff";
skill[0][3] = 20;
skill[0][5] = [30,35,45,60];
skill[0][7] = [12,14,18,24];
skill[0][8] = 40;
skill[0][9] = 10;
skill[0][12] = "Quantum accelerator";

//Stealth generator// 1
skill[1] = [];
skill[1][0] = "sg";
skill[1][1] = "cloak";
skill[1][7] = [12,14,18,24];
skill[1][8] = 60;
skill[1][9] = 10;
skill[1][12] = "Stealth generator";

//Quantum leap 2
skill[2] = [];
skill[2][0] = "ql";
skill[2][1] = "teleport";
skill[2][2] = [0,40,120,240]; 
skill[2][3] = 10;
skill[2][4] = [21,24.5,31.5,42];
skill[2][8] = [75,72.5,67.5,60];
skill[2][9] = 10;
skill[2][11] = [];
skill[2][12] = "Quantum leap";
for (var i = 0; i <= 3; i += 1){
   skill[2][11][i] = skill[2][2][i] / skill[2][8][i];
}

//Stasis field 3
skill[3] = [];
skill[3][0] = "sf";
skill[3][1] = "snare";
skill[3][3] = 24;
skill[3][5] = [30,35,45,60];
skill[3][7] = [12,14,18,24];
skill[3][9] = 10;
skill[3][10] = [0,1.5,3,4.5]; //enemies are rooted for..
skill[3][12] = "Stasis field";

//Radar beacon 4
skill[4] = [];
skill[4][0] = "rr";
skill[4][1] = "range_buff";
skill[4][3] = [30,35,45,60];
skill[4][4] = 10;
skill[4][5] = [0,5,15,30];
skill[4][8] = [90,85,75,60];
skill[4][9] = 11;
skill[4][12] = "Radar beacon";

//Tracker 5
skill[5] = [];
skill[5][0] = "tr";
skill[5][1] = "dot";
skill[5][2] = [0,3,9,18]; //dps
skill[5][3] = [15,17.5,22.5,30]; //radar range around target
skill[5][4] = 100;
skill[5][7] = [15,17.5,22.5,30];
skill[5][8] = 60;
skill[5][9] = 11;
skill[5][11] = [];
skill[5][12] = "Tracker";
for (i = 0; i <= 3; i += 1){
     skill[5][11][i] = skill[5][7][i]*skill[5][2][i] / skill[5][8][i];
}

//Scanner 6
skill[6] = [];
skill[6][0] = "sc";
skill[6][1] = "damage_buff";
skill[6][5] = [0,5,15,30];
skill[6][4] = [30,35,45,60];
skill[6][7] = [15,17,21,27];
skill[6][8] = 60;
skill[6][9] = 11
skill[6][11] = [];
skill[6][12] = "Scanner";
for (i = 0; i <= 3; i += 1){
   skill[6][11][i] = (skill[6][7][i] / skill[6][8] * skill[6][5][i]);
}

//Jamming device 7
skill[7] = [];
skill[7][0] = "jd";
skill[7][1] = "blind";
skill[7][4] = 100;
skill[7][5] = [0,10,30,60]; //reduced radar range
skill[7][7] = [6,7,9,12]; // cannot target for...
skill[7][8] = 60;
skill[7][9] = 11;
skill[7][10] = [0,1,3,6]; //skills stop charging for..
skill[7][11] = [];
skill[7][12] = "Jamming device";

//Rocket battery 8 
skill[8] = [];
skill[8][0] = "rb";
skill[8][1] = "homing_projectile";
skill[8][2] = [360,483,696,1026];
skill[8][4] = [];
skill[8][7] = 6;
skill[8][8] = [45,42.5,37.5,30];
skill[8][9] = 12;
skill[8][11] = [];
skill[8][12] = "Rocket battery";
for (i = 0; i <= 3; i += 1){
   skill[8][11][i] = skill[8][2][i] / skill[8][8][i];
}

//Missile battery 9
skill[9] = [];
skill[9][0] = "mb";
skill[9][1] = "homing_projectile";
skill[9][2] = [385,442.75,558.25,731.5];
skill[9][3] = [4.5,5.25,6.75,9];
skill[9][4] = [];
skill[9][7] = [11,12.5,13.25,31.5];
skill[9][8] = 45;
skill[9][9] = 12;
skill[9][11] = [];
skill[9][12] = "Missile battery";
for (i = 0; i <= 4; i += 1){
   skill[9][11][i] = skill[9][2][i] / skill[9][8];
}

// Torpedoes 10
skill[10] = [];
skill[10][0] = "ts";
skill[10][1] = "projectile";
skill[10][2] = [525,603.75,761.25,997.5];
skill[10][4] = 
skill[10][8] = 45;
skill[10][9] = 12;
skill[10][11] = [];
skill[10][12] = "Torpedoes";
for (i = 0; i <= 4; i += 1){
   skill[10][11][i] = skill[10][2][i] / skill[10][8];
}

//Shockwave 11
skill[11] = [];
skill[11][0] = "se";
skill[11][1] = "aoe";
skill[11][2] = [285,327.75,413.25,541.5];
skill[11][3] = [9,10.5,13.5,18];
skill[11][4] = [9,10.5,13.5,18];
skill[11][8] = 45;
skill[11][9] = 12;
skill[11][10] = [0,2,4,6]; //enemy silenced for s
skill[11][11] = [];
skill[11][12] = "Shockwave";
for (i = 0; i <= 4; i += 1){
      skill[11][11][i] = skill[11][2][i]/skill[11][8];
}

//Forcefield 12
skill[12] = [];
skill[12][0] = "ff"; //short
skill[12][1] = "shield"; //type
skill[12][3] = [15,15,15,15]; //aoe
skill[12][4] = [0,0,0,0]; //range
skill[12][8] = [60,60,60,60]; //cooldown
skill[12][9] = 13; //skill class 10-maneuvering 11- recon 12- attack 13-defense 14- command 15-artillery 16-support 17-squadron
skill[12][10] = [600,700,900,1200]; //special HP of the shield
skill[12][12] = "Forcefield"; //name

//Emergency repairs 13
skill[13] = [];
skill[13][0] = "er"; //id
skill[13][1] = "heal"; //type
skill[13][3] = [17.5,,17.5,17.5,17.5]; //Aoe
skill[13][6] = [300,350,450,600]; // heal in points
skill[13][8] = [60,60,60,60]; //cooldown
skill[13][9] = 13; //skill type 10-maneuver usw
skill[13][10] = [0,50,150,300]; // heal others
skill[13][12] = "Emergency repairs"; // name


//Backup generator 14
skill[14] = [];
skill[14][0] = "bg"; //id
skill[14][1] = "heal"; //type
skill[14][2] = [0,50,150,300]; //damage to shield
skill[14][3] = [20,20,20,20]; //Aoe
skill[14][5] = [50,50,50,50]; //% damage less dealt to the ship
skill[14][6] = [300,420,660,1020]; // heal in points
skill[14][7] = [0,1,3,6]; // duration
skill[14][8] = [60,60,60,60]; //cooldown
skill[14][9] = 13; //skill type 10-maneuver usw
skill[14][12] = "Backup generator"; // name

//Countermeasures 15
skill[15] = [];
skill[15][0] = "cm"; //id
skill[15][1] = "block"; //type
skill[15][3] = [15,17.5,22.5,30]; //Aoe
skill[15][7] = [0,1,3,6]; // ship cannot be targeted for..
skill[15][8] = [45,42.5,37.5,30]; //cooldown
skill[15][9] = 13; //skill type 10-maneuver usw
skill[15][12] = "Countermeasures"; // name
//
//Quantum beacon 16
skill[16] = [];
skill[16][0] = "qb"; //id
skill[16][1] = "deployable"; //type
skill[16][9] = 14; //skill type 10-maneuver usw
skill[16][12] = "Quantum beacon"; // name

//Reinforcements 17
skill[17] = [];
skill[17][0] = "rf"; //id
skill[17][1] = "escort"; //type
skill[17][9] = 14; //skill type 10-maneuver usw
skill[17][12] = "Reinforcements"; // name

//Command field 18
skill[18] = [];
skill[18][0] = "cf";
skill[18][1] = "cooldown_buff";
skill[18][3] = 30;
skill[18][5] = [30,32.5,37.5,45]; //skill recharge
skill[18][7] = [15,17.5,22.5,30];
skill[18][8] = 60;
skill[18][9] = 14;
skill[18][10] = [30,35,45,60]; //additional cp
skill[18][11] = [];
skill[18][12] = "Command field";
for (i = 0; i <= 4; i += 1){
     skill[18][11][i] = 1 / (skill[18][7][i] * (skill[18][5][i] / 100) / skill[18][8][i]); // rechargetimebuff works like this: new recharge = recharge-buff*recharge. dps is damage/recharge so with buff we get d/(r-rb) = d/r - d/rb = dps-dps*1/b = 1/b
}

//Priority target 19
skill[19] = [];
skill[19][0] = "pt";
skill[19][1] = "critical_hit_buff";
skill[19][5] = [15,17.5,22.5,30]; //critchance
skill[19][7] = [15,17.5,22.5,30];
skill[19][8] = 60;
skill[19][9] = 14;
skill[19][10] = [0,2.5,7.5,15]; //increased crithit damage
skill[19][11] = [];
skill[19][12] = "Priority target";
for (i = 0; i <= 3; i += 1){
   skill[19][11][i] = (skill[19][7][i] / skill[19][8] * skill[19][5][i]);
}

//Fusion shells 20
skill[20] = [];
skill[20][0] = "fu"; //id
skill[20][1] = "shell"; //type
skill[20][3] = [30,30,30,30]; //Aoe
skill[20][7] = [15,17.5,22.5,30]; // duration
skill[20][8] = [75,72.5,67.5,60]; //cooldown
skill[20][9] = 15; //skill type 10-maneuver usw
skill[20][10] = [50,57.5,72.5,95]; // special dps
skill[20][11] = []; //dps or effective buff
skill[20][12] = "Fusion shells"; // name
for (i = 0; i <= 4; i +=1) {
    skill[20][11] = skill[20][10][i] * skill[20][7][i]/skill[20][8][i];
}

//Frag shells 21
skill[21] = [];
skill[21][0] = "fr"; //id
skill[21][1] = "shell"; //type
skill[21][2] = [450,517.5,652.5,855]; //damge
skill[21][3] = [20,20,20,20]; //Aoe
skill[21][5] = [0,15,30,45]; //slow for 6 seconds
skill[21][8] = [60,57.5,52.5,45]; //cooldown
skill[21][9] = 15; //skill type 10-maneuver usw
skill[21][11] = []; //dps or effective buff
skill[21][12] = "Frag shells"; // name
for (i = 0; i <= 4; i +=1) {
    skill[21][11] = skill[21][2][i]/skill[21][8][i];
}

//Gauss shells 22
skill[22] = [];
skill[22][0] = "ga"; //id
skill[22][1] = "shell"; //type
skill[22][2] = [450,517.5,652.5,855]; //damge
skill[22][3] = [0,0,0,0]; //Aoe
skill[22][8] = [60,57.5,62.5,45]; //cooldown
skill[22][9] = 15; //skill type 10-maneuver usw
skill[22][10] = [0,1,2,3]; // target cannot move for
skill[22][11] = []; //dps or effective buff
skill[22][12] = "Gauss shells"; // name
for (i = 0; i <= 4; i +=1) {
    skill[22][11] = skill[22][2][i]/skill[22][8][i];
}

//Nanite shells 23
skill[23] = [];
skill[23][0] = "na"; //id
skill[23][1] = "shell"; //type
skill[23][3] = [15,16.5,19.5,24]; //Aoe
skill[23][7] = [15,17.5,22.5,30]; // duration
skill[23][8] = [75,72.5,67.5,60]; //cooldown
skill[23][9] = 15; //skill type 10-maneuver usw
skill[23][10] = [30,30,30,30];
skill[23][11] = []; //dps or effective buff
skill[23][12] = "Nanite shells"; // name
for (i = 0; i <= 4; i +=1) {
    skill[23][11] = skill[23][10][i] * skill[23][7][i]/skill[23][8][i];
}

//Repair outpost 24
skill[24] = [];
skill[24][0] = "ro"; //id
skill[24][1] = "deployable"; //type
skill[24][9] = 16; //skill type 10-maneuver usw
skill[24][12] = "Repair outpost"; // name

//stealht field generator 25
skill[25] = [];
skill[25][0] = "sf"; //id
skill[25][1] = "deployable"; //type
skill[25][9] = 16; //skill type 10-maneuver usw
skill[25][12] = "Stealth field generator"; // name

//Defense turret 26
skill[26] = [];
skill[26][0] = "dt"; //id
skill[26][1] = "deployable"; //type
skill[26][9] = 16; //skill type 10-maneuver usw
skill[26][12] = "Defense turret"; // name

//Mine 27
skill[27] = [];
skill[27][0] = "mi"; //id
skill[27][1] = "deployable"; //type
skill[27][9] = 16; //skill type 10-maneuver usw
skill[27][12] = "Mine"; // name

//Assault ships 28
skill[28] = [];
skill[28][0] = "as"; //id
skill[28][1] = "squadron"; //type
skill[28][9] = 17; //skill type 10-maneuver usw
skill[28][12] = "Assault ships"; // name

//Drone 29
skill[29] = [];
skill[29][0] = "dr"; //id
skill[29][1] = "squadron"; //type
skill[29][9] = 17; //skill type 10-maneuver usw
skill[29][12] = "Drone"; // name

//Fighters 30
skill[30] = [];
skill[30][0] = "fi"; //id
skill[30][1] = "squadron"; //type
skill[30][4] = 200; // range
skill[30][7] = [60,60,60,60]; // duration
skill[30][8] = [90,90,90,90]; //cooldown
skill[30][9] = 17; //skill type 10-maneuver usw
skill[30][10] = [27,36.75,62,81]; // special
skill[30][11] = []; //dps or effective buff
skill[30][12] = "Fighters"; // name
for (i = 0; i <= 4; i +=1) {
    skill[30][11] = skill[30][10][i] * skill[30][7][i]/skill[30][8][i];
}

//Bombers 31
skill[31] = [];
skill[31][0] = "bo"; //id
skill[31][1] = "squadron"; //type
skill[31][2] = [750,1300,2000,2850]; //damge
skill[31][4] = 200; // range
skill[31][7] = [60,60,60,60]; // duration
skill[31][8] = [60,60,60,60]; //cooldown
skill[31][9] = 17; //skill type 10-maneuver usw
skill[31][11] = []; //dps or effective buff
skill[31][12] = "Bombers"; // name
for (i = 0; i <= 4; i +=1) {
    skill[31][11] = skill[31][2][i] / skill[31][8][i];
}

/* /Distortion engine 34
skill[z][0] = ; //id
skill[z][1] = ; //type
skill[z][9] = ; //skill type 10-maneuver usw
skill[z][12] = ; // name

//Echo impulse 35
skill[z][0] = ; //id
skill[z][1] = ; //type
skill[z][9] = ; //skill type 10-maneuver usw
skill[z][12] = ; // name

//Shield overload 36
skill[z][0] = ; //id
skill[z][1] = ; //type
skill[z][9] = ; //skill type 10-maneuver usw
skill[z][12] = ; // name

//High command 37
skill[z][0] = ; //id
skill[z][1] = ; //type
skill[z][9] = ; //skill type 10-maneuver usw
skill[z][12] = ; // name

//Traget ass 38
skill[z][0] = ; //id
skill[z][1] = ; //type
skill[z][9] = ; //skill type 10-maneuver usw
skill[z][12] = ; // name

//Heavy turret 39
skill[z][0] = ; //id
skill[z][1] = ; //type
skill[z][9] = ; //skill type 10-maneuver usw
skill[z][12] = ; // name */


                  



/* SHIP info
    [0][n]ship
    [10][0]corvette structure 
    [11][1]frigate shield
    [2]armor
    [3]radar
    [4]speed
    [5]turnrate
    [6]critchance
    [7]light turrets per broadside
    [8]medium
    [9]heavy
    [10]maneuver rank
    [11]recon
    [12]attack
    [13]defense
    [14]command
    [15]DLC 1: yes 0: no
         */


var shiparray=[]; 

shiparray[10] = [];
shiparray[10][0]=1000; //corvette
shiparray[10][1]=2000;
shiparray[10][2]=15;
shiparray[10][3]=55;
shiparray[10][4]=7;
shiparray[10][5]=52.5;
shiparray[10][6]=20;
shiparray[10][7]=3;
shiparray[10][8]=1;
shiparray[10][9]=0;
shiparray[10][10]=3;
shiparray[10][11]=2;
shiparray[10][12]=2;
shiparray[10][13]=1;
shiparray[10][14]=1;
shiparray[10][15]=0;
shiparray[10][16]="Corvette";


shiparray[11] = [];
shiparray[11][0]=1250; //frigate
shiparray[11][1]=1750;
shiparray[11][2]=20;
shiparray[11][3]=60;
shiparray[11][4]=6.5;
shiparray[11][5]=45;
shiparray[11][6]=15;
shiparray[11][7]=2;
shiparray[11][8]=2;
shiparray[11][9]=0;
shiparray[11][10]=2;
shiparray[11][11]=3;
shiparray[11][12]=2;
shiparray[11][13]=1;
shiparray[11][14]=1;
shiparray[11][15]=0;
shiparray[11][16]="Frigate";
  
shiparray[12] = [];  
shiparray[12][0]=1500; //destroyer
shiparray[12][1]=1500;
shiparray[12][2]=25;
shiparray[12][3]=50;
shiparray[12][4]=6;
shiparray[12][5]=37.5;
shiparray[12][6]=25;
shiparray[12][7]=2;
shiparray[12][8]=3;
shiparray[12][9]=0;
shiparray[12][10]=1;
shiparray[12][11]=2;
shiparray[12][12]=3;
shiparray[12][13]=2;
shiparray[12][14]=1;
shiparray[12][15]=0;
shiparray[12][16]="Destroyer";

shiparray[13] = [];
shiparray[13][0]=1750; //cruiser
shiparray[13][1]=1250;
shiparray[13][2]=35;
shiparray[13][3]=45;
shiparray[13][4]=5.5;
shiparray[13][5]=30;
shiparray[13][6]=10;
shiparray[13][7]=2;
shiparray[13][8]=2;
shiparray[13][9]=1;
shiparray[13][10]=1;
shiparray[13][11]=1;
shiparray[13][12]=2;
shiparray[13][13]=3;
shiparray[13][14]=2;
shiparray[13][15]=0;
shiparray[13][16]="Cruiser";

shiparray[14] = [];
shiparray[14][0]=2000; //dread
shiparray[14][1]=1000;
shiparray[14][2]=30;
shiparray[14][3]=40;
shiparray[14][4]=5;
shiparray[14][5]=22.5;
shiparray[14][6]=5;
shiparray[14][7]=3;
shiparray[14][8]=1;
shiparray[14][9]=2;
shiparray[14][10]=1;
shiparray[14][11]=1;
shiparray[14][12]=2;
shiparray[14][13]=2;
shiparray[14][14]=3;
shiparray[14][15]=0;
shiparray[14][16]="Dreadnought";
        
shiparray[15] = [];
shiparray[15][0]=1500; //Artillery
shiparray[15][1]=1500;
shiparray[15][2]=25;
shiparray[15][3]=50;
shiparray[15][4]=6;
shiparray[15][5]=37.5;
shiparray[15][6]=25;
shiparray[15][7]=4;
shiparray[15][8]=0;
shiparray[15][9]=0;
shiparray[15][10]=1;
shiparray[15][11]=2;
shiparray[15][12]=2;
shiparray[15][13]=1;
shiparray[15][14]=1;
shiparray[15][15]=1;
shiparray[15][16]="Artillery ship";

shiparray[16] = [];
shiparray[16][0]=1750; //support
shiparray[16][1]=1250;
shiparray[16][2]=35;
shiparray[16][3]=45;
shiparray[16][4]=5.5;
shiparray[16][5]=30;
shiparray[16][6]=10;
shiparray[16][7]=4;
shiparray[16][8]=1;
shiparray[16][9]=1;
shiparray[16][10]=1;
shiparray[16][11]=1;
shiparray[16][12]=1;
shiparray[16][13]=2;
shiparray[16][14]=2;
shiparray[16][15]=1;
shiparray[16][16]="Support ship";
        
shiparray[17] = [];
shiparray[17][0]=2000; //carrier
shiparray[17][1]=1000;
shiparray[17][2]=30;
shiparray[17][3]=40;
shiparray[17][4]=5;
shiparray[17][5]=22.5;
shiparray[17][6]=5;
shiparray[17][7]=7;
shiparray[17][8]=0;
shiparray[17][9]=0;
shiparray[17][10]=1;
shiparray[17][11]=1;
shiparray[17][12]=1;
shiparray[17][13]=2;
shiparray[17][14]=2;
shiparray[17][15]=1;     
shiparray[17][16]="Carrier";