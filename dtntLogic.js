function rollOneDice(){
  return Math.ceil(Math.random() * 6);
}

function getMultipleDice(numberofdice, taro){
  var dicearray = [];
  var i = 0;
  while(i < numberofdice){
    dicearray.push(rollOneDice());
    i =  i + 1;
  }
  if (taro){
    var firstvalue = dicearray[0];
    var issame = true;
    for(var x = 1; x < numberofdice; x++){
      if(firstvalue !== dicearray[x]){
        issame = false;
      }
    }
    if(issame){
      dicearray = dicearray.concat(getMultipleDice(numberofdice,true));
    }
  }
  return dicearray;
}

function Attribute(nm, c){
  this.dicerolls = getMultipleDice(3,true);
  this.total = function total() {
    var t = this.dicerolls.reduce(function(previousValue, currentValue, currentIndex, array) {
      return previousValue + currentValue;
    });
    if(c.mykindred[nm] > 1){
      return Math.floor(t * c.mykindred[nm]);
    } else {
      return Math.ceil(t * c.mykindred[nm]);
    }
  }
}

function Character(initialKindred, initialClasstype){
  this.mykindred = initialKindred;
  this.myclasstype = initialClasstype;
  this.equippedweapons = [];
  this.gold = this.rerollGold();
  this.STR = new Attribute("STR", this);
  this.CON = new Attribute("CON", this);
  this.DEX = new Attribute("DEX", this);
  this.SPD = new Attribute("SPD", this);
  this.LK = new Attribute("LK", this);
  this.IQ = new Attribute("IQ", this);
  this.WIZ = new Attribute("WIZ", this);
  this.CHR = new Attribute("CHR", this);

  this.reroll = function rerollAttr(){
    this.gold = this.rerollGold();
    this.STR = new Attribute("STR", this);
    this.CON = new Attribute("CON", this);
    this.DEX = new Attribute("DEX", this);
    this.SPD = new Attribute("SPD", this);
    this.IQ = new Attribute("IQ", this);
    this.LK = new Attribute("LK", this);
    this.WIZ = new Attribute("WIZ", this);
    this.CHR = new Attribute("CHR", this);
  }
}

Character.prototype.damageDice = function(){
  var totDice = 0;
  var w;
  for (var ew = 0; ew < this.equippedweapons.length; ew++){
    w = this.equippedweapons[ew];
    totDice = totDice + w.d6;
    if(this.myclasstype.weaponDiceDamPerLevel){
      totDice = totDice + this.level();
    }
  }
  return totDice;
}

Character.prototype.damageAdds = function(){
  var totAdds = 0;
  var maxWeaponDice = 0;
  var w;
  for (var ew = 0; ew < this.equippedweapons.length; ew++){
    w = this.equippedweapons[ew];
    maxWeaponDice = Math.max(maxWeaponDice, w.adds);
    totAdds = totAdds + w.adds;
  }
  var cAdds = this.adds();
  if(this.myclasstype.limit2d6 && (maxWeaponDice > 2)){
    cAdds = 0;
  }
  return totAdds + cAdds;
}

Character.prototype.rerollGold = function(){
    return 10 * (rollOneDice() + rollOneDice() + rollOneDice());
}

Character.prototype.adds = function() {
  return Math.max(0, this.STR.total() - 12) +
    Math.max(0, this.DEX.total() - 12) +
    Math.max(0, this.SPD.total() - 12) +
    Math.max(0, this.LK.total() - 12);
}

Character.prototype.level = function() {
  var maxattr = Math.max(this.STR.total(),
  this.CON.total(), this.DEX.total(), this.SPD.total(),
  this.IQ.total(), this.LK.total(), this.WIZ.total(), this.CHR.total());
  return Math.floor(maxattr / 10);
}
