const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };
  

const dragonAttack = (dragon) => {
    const minDamage = 15;
    const maxDamage = Math.floor(Math.random() * dragon.strength);
    if (maxDamage > minDamage){
        return maxDamage
    }else return minDamage
}

const warriorAttack = (warrior) => {
    const minDamage = warrior.strength;
    const maxDamage = minDamage * warrior.weaponDmg;
    const totalDamage = Math.floor(Math.random() * (maxDamage - minDamage))
    return totalDamage
}  

const mageAttack = (mage) => {
    const minDamage = mage.intelligence;
    const maxDamage = minDamage * 2;
    const mageStatus = {
        totalDamage: Math.floor(Math.random() * (maxDamage - minDamage)),
        manaGasta: 15,
    }
    if(mage.mana < 15){
        mageStatus.manaGasta = 0;
        return 'Não possui mana suficiente';
    }else return mageStatus
    
}

const gameActions = {
    warriorTurn: (warriorAttack) => {
      const warriorDamage = warriorAttack(warrior);
      warrior.damage = warriorDamage;
      dragon.healthPoints -= warriorDamage;
    },
    mageTurn: (mageAttack) => {
      const mageTurnStats = mageAttack(mage);
      const mageDamage = mageTurnStats.totalDamage;
      mage.damage = mageDamage;
      mage.mana -= mageTurnStats.manaGasta;
      dragon.healthPoints -= mageDamage;
    },
    dragonTurn: (dragonAttack) => {
      const dragonDamage = dragonAttack(dragon);
      mage.healthPoints -= dragonDamage;
      warrior.healthPoints -= dragonDamage;
      dragon.damage = dragonDamage;
    },
    turnResults: () => battleMembers,
  };
  
  gameActions.warriorTurn(warriorAttack);
  gameActions.mageTurn(mageAttack);
  gameActions.dragonTurn(dragonAttack);
  console.log(gameActions.turnResults());