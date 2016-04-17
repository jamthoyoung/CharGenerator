var kindred = {};
kindred.HUMAN =
{"STR":1,"CON":1,"DEX":1,"SPD":1,"LK":1,"IQ":1,"WIZ":1,"CHR":1,"hight":1,"weight":1};
kindred.GRISTLEGRIM =
{"STR":2,"CON":2,"DEX":1,"SPD":1,"LK":0.75,"IQ":1,"WIZ":1,"CHR":1,"hight":0.67,"weight":2};
kindred.MIDGARDIAN =
{"STR":2,"CON":2,"DEX":1,"SPD":1,"LK":1,"IQ":1,"WIZ":1,"CHR":0.75,"hight":0.67,"weight":0.8};
kindred.ELF =
{"STR":1,"CON":0.67,"DEX":1.33,"SPD":1,"LK":1,"IQ":1.5,"WIZ":1.5,"CHR":1.5,"hight":1.1,"weight":1};
kindred.FAIRY =
{"STR":0.25,"CON":0.25,"DEX":1.75,"SPD":1,"LK":1.5,"IQ":1,"WIZ":2,"CHR":1.5,"hight":0.1,"weight":0.01};
kindred.HOBB =
{"STR":0.5,"CON":2,"DEX":1.5,"SPD":1,"LK":1.5,"IQ":1,"WIZ":1,"CHR":1,"hight":0.5,"weight":0.75};
kindred.LEPRECHAUN =
{"STR":0.33,"CON":0.67,"DEX":1.5,"SPD":1,"LK":1.5,"IQ":1.25,"WIZ":1.5,"CHR":1,"hight":0.33,"weight":0.1};

var weapons = {
  "Short Sword" : { "name":"Short Sword","d6":3,"adds":0,"cost":50,"STR":8,"DEX":7,"weight":35,"hands":1},
  "Medium Sword" : { "name":"Medium Sword","d6":4,"adds":0,"cost":60,"STR":12,"DEX":12,"weight":70,"hands":1},
  "Long Sword" : { "name":"Long Sword","d6":5,"adds":0,"cost":70,"STR":16,"DEX":18,"weight":120,"hands":1},
  "Great Sword" : { "name":"Great Sword","d6":7,"adds":0,"cost":90,"STR":25,"DEX":21,"weight":140,"hands":2},
  "Gigantic Sword" : { "name":"Gigantic Sword","d6":10,"adds":0,"cost":110,"STR":35,"DEX":25,"weight":200,"hands":2},
  "Large Combat Dagger" : { "name":"Large Combat Dagger","d6":2,"adds":3,"cost":25,"STR":5,"DEX":7,"weight":20,"hands":1}
};

var classtype = {
  "Fighter" : { "weaponDiceDamPerLevel":true, "limit2d6":false},
  "Magician" : {"weaponDiceDamPerLevel":false, "limit2d6":true},
  "Rogue" : {"weaponDiceDamPerLevel":false, "limit2d6":false}
};
