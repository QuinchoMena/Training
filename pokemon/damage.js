class Pokemon {
  constructor(pName,pType,pAttack,pDefense) {
    this._pName = pName;
    this._pType = pType;
    this._pAttack = pAttack;
    this._pDefense = pDefense;
  }

  get pName() {
    return this._pName;
  }
  get pType() {
    return this._pType;
  }   

  get pAttack(){
    return this._pAttack;
  }

  get pDefense(){
    return this._pDefense
  }
}


function damage(pPokemon1,pPokemon2){
  let resultdamage = 50 * (pPokemon1.pAttack/pPokemon2.pDefense) * effective(pPokemon1.pType,pPokemon2.pType);
  return resultdamage;
}



function getEffectivenessPoints(level){
  var point;
   function isHighEffectiveness () {
     return point = 2;
   }
   function isNeutralEffectiveness () {
     return point = 1;
   }
   function isLittleEffectiveness () {
     return point = 0.5;
   }

   var points = {
     'High' : isHighEffectiveness,
     'Neutral' : isNeutralEffectiveness,
     'Little' : isLittleEffectiveness,
   };

   return points[level]();
}



function effective(pTypePokemon1,pTypePokemon2){
  var pokemonEffectiveness

  var pokemonType = {
    'fire' : function () {
      if(pTypePokemon2 == 'grass'){
        pokemonEffectiveness = getEffectivenessPoints('High');
      }
      else if(pTypePokemon2 === 'water'){
        pokemonEffectiveness = getEffectivenessPoints('Little');
      }
      else if(pTypePokemon2 === 'fire'){
        pokemonEffectiveness = getEffectivenessPoints('Little');
      }
      else if(pTypePokemon2 == 'electric'){
        pokemonEffectiveness = getEffectivenessPoints('Neutral');    
      }
      else{
        console.log('Sorry, the type of Pokemon dont exist');
      }
    },
    'grass' : function () {
      if(pTypePokemon2 == 'fire'){
        pokemonEffectiveness = getEffectivenessPoints('Little');
      }
      else if(pTypePokemon2 === 'grass'){
        pokemonEffectiveness = getEffectivenessPoints('High');
      }
      else if(pTypePokemon2 === 'water'){
        pokemonEffectiveness = getEffectivenessPoints('High');
      }
      else if(pTypePokemon2 == 'electric'){
        pokemonEffectiveness = getEffectivenessPoints('Neutral'); 
      }
      else{
        console.log('Sorry, the type of Pokemon dont exist');
      }

    },
    'water' : function () {
      if(pTypePokemon2 == 'fire'){
        pokemonEffectiveness = getEffectivenessPoints('High');
      }
      else if(pTypePokemon2 === 'grass'){
        pokemonEffectiveness = getEffectivenessPoints('Little');
      }
      else if(pTypePokemon2 === 'water'){
        pokemonEffectiveness = getEffectivenessPoints('Little');
      }
      else if(pTypePokemon2 == 'electric'){
        pokemonEffectiveness = getEffectivenessPoints('Neutral');        
      }
      else{
        console.log('Sorry, the type of Pokemon dont exist');
      }

    },
    'electric' : function () {
      if(pTypePokemon2 == 'fire'){
        pokemonEffectiveness = getEffectivenessPoints('Neutral');         
      }
      else if(pTypePokemon2 === 'water'){
        pokemonEffectiveness = getEffectivenessPoints('High');
      }
      else if(pTypePokemon2 == 'grass'){
        pokemonEffectiveness = getEffectivenessPoints('Little');
      }
      else if(pTypePokemon2 == 'electric'){
        pokemonEffectiveness = getEffectivenessPoints('Little');
      }
      else{
        console.log('Sorry, the type of Pokemon dont exist');
      }
      

    },
    'default' : function () {
      pokemonEffectiveness = 'Sorry, the type of Pokemon dont exist';
    }
  };
  (pokemonType[pTypePokemon1] || pokemonType['default'])();

  return pokemonEffectiveness;

}





function main(){
  const pokemonFireCharizard = new Pokemon("Charizard","fire",Math.random() * 10,Math.random() * 10);
  const pokemonFireCharmander = new Pokemon("Charmander","fire",Math.random() * 10,Math.random() * 10);
  const pokemonFireHoundour = new Pokemon("Houndour","fire",Math.random() * 10,Math.random() * 10);
  
  const pokemonGrassBulbasaur = new Pokemon("Bulbasaur","grass",Math.random() * 10,Math.random() * 10);
  const pokemonGrassTreecko = new Pokemon("Treecko","grass",Math.random() * 10,Math.random() * 10);
  const pokemonGrassBudew = new Pokemon("Budew","grass",Math.random() * 10,Math.random() * 10);

  const pokemonWaterHorsea = new Pokemon("Horsea","water",Math.random() * 10,Math.random() * 10);
  const pokemonWaterLapras = new Pokemon("Lapras","water",Math.random() * 10,Math.random() * 10);
  const pokemonWaterStaryu = new Pokemon("Staryu","water",Math.random() * 10,Math.random() * 10);

  const pokemonElectricPikachu = new Pokemon("Pikachu","electric",Math.random() * 10,Math.random() * 10);
  const pokemonElectricAmpharos = new Pokemon("Ampharos","electric",Math.random() * 10,Math.random() * 10);
  const pokemonElectricRotom = new Pokemon("Rotom","electric",Math.random() * 10,Math.random() * 10);

  let fights = Math.ceil(Math.random() * 10);


  var pokemonArray = [
  pokemonFireCharizard,
  pokemonFireCharmander,
  pokemonFireHoundour,
  pokemonGrassBulbasaur,
  pokemonGrassTreecko,
  pokemonGrassBudew,
  pokemonWaterHorsea,
  pokemonWaterLapras,
  pokemonWaterStaryu,
  pokemonElectricPikachu,
  pokemonElectricAmpharos,
  pokemonElectricRotom
];

  for (var i = 0; i < fights; i++){
      var pokemonAttack = pokemonArray[Math.floor(Math.random()*pokemonArray.length)];
      var pokemonDefense = pokemonArray[Math.floor(Math.random()*pokemonArray.length)];

      let result = damage(pokemonAttack,pokemonDefense);
      result = Math.ceil(result);
      console.log(result);
  }

}

main()