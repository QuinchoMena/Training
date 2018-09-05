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


function effective(pTypePokemon1,pTypePokemon2){
  switch(pTypePokemon1){
    case 'fire':
      if(pTypePokemon2 == 'grass'){
        return 2;
      }
      else if(pTypePokemon2 === 'water'){
        return 0.5;
      }
      else if(pTypePokemon2 === 'fire'){
        return 0.5;
      }
      else if(pTypePokemon2 == 'electric'){
        return 1;     
      }
      else{
        console.log('Sorry, the type of Pokemon dont exist');
      }
      break;
    case 'grass':
      if(pTypePokemon2 == 'fire'){
        return 0.5;
      }
      else if(pTypePokemon2 === 'grass'){
        return 2;
      }
      else if(pTypePokemon2 === 'water'){
        return 2;
      }
      else if(pTypePokemon2 == 'electric'){
        return 1;  
      }
      else{
        console.log('Sorry, the type of Pokemon dont exist');
      }
      break;
    case 'water':
      if(pTypePokemon2 == 'fire'){
        return 2;
      }
      else if(pTypePokemon2 === 'grass'){
        return 0.5;
      }
      else if(pTypePokemon2 === 'water'){
        return 0.5;
      }
      else if(pTypePokemon2 == 'electric'){
        return 1;        
      }
      else{
        console.log('Sorry, the type of Pokemon dont exist');
      }
      break;
    case 'electric':
      if(pTypePokemon2 == 'fire'){
        return 1;        
      }
      else if(pTypePokemon2 === 'water'){
        return 2;
      }
      else if(pTypePokemon2 == 'grass'){
        return 1;
      }
      else if(pTypePokemon2 == 'electric'){
        return 1;
      }
      else{
        console.log('Sorry, the type of Pokemon dont exist');
      }
      break;
    default:
      console.log('Sorry, the type of Pokemon dont exist');
      break;
  }
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