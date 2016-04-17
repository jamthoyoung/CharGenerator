function updDocAttr(name){
  document.getElementById(name).innerText = mychara[name].dicerolls;
  document.getElementById(name + 'm').innerText = mychara.mykindred[name];
  document.getElementById(name + '2').innerText = mychara[name].total();
}

var mychara = new Character(kindred.HUMAN, classtype.Fighter);
// this function will roll some dice
function updatePage(){
  updDocAttr('STR');
  updDocAttr('CON');
  updDocAttr('DEX');
  updDocAttr('SPD');
  updDocAttr('LK');
  updDocAttr('IQ');
  updDocAttr('WIZ');
  updDocAttr('CHR');
  document.getElementById("pa").innerText = mychara.adds();
  document.getElementById("lvl").innerText = mychara.level();
  document.getElementById("gold").innerText = mychara.gold;
  document.getElementById("combatdamage").innerText = mychara.damageDice() + "d6 + " + mychara.damageAdds();
  $('#equippedweapons').empty();
  for (var i = 0; i < mychara.equippedweapons.length; i++){
    var row = $('<tr></tr>');
    var w = mychara.equippedweapons[i];
    row.append($('<td></td>').text(w.name));
    row.append($('<td></td>').text(w.d6 + 'D6  + ' + (w.adds)));
    $('#equippedweapons').append(row);
    //alert(weapons[weapon].d6);
  }
}
function rollit(){
  mychara.reroll();
  updatePage();
}
function updateRace(race){
  mychara.mykindred = race;
  updatePage();
}
function updateClasstype(ct){
  mychara.myclasstype = ct;
  updatePage();
}
$(document).ready(function(){
  $('button#rollit').click(function(){
    rollit();
    return false;
  });
  $('#kin').change(function(){
    updateRace(kindred[$('#kin').val()]);
  });
  $('#classtype').change(function(){
    updateClasstype(classtype[$('#classtype').val()]);
  });

  for (weapon in weapons){
    var row = $('<tr></tr>');
    var w = weapons[weapon];
    row.append($('<td class="weapon"></td>').text(weapon));
    row.append($('<td></td>').text(w.d6 + 'D6'  + (w.adds > 0 ? ' + '+w.adds:'') ));
    row.append($('<td></td>').text(w.STR));
    row.append($('<td></td>').text(w.DEX));
    row.append($('<td></td>').text(w.cost));
    row.append($('<td></td>').text(w.weight));
    row.append($('<td></td>').text(w.hands));
    $('#storeweapons').append(row);
    //alert(weapons[weapon].d6);
  }

  $('td.weapon').click(function(){
    if (mychara.gold > weapons[$(this).text()].cost){
      mychara.gold = mychara.gold - weapons[$(this).text()].cost;
      mychara.equippedweapons.push(weapons[$(this).text()]);
      updatePage();
    } else {
      alert('You need more cash.');
    }
  });


});
