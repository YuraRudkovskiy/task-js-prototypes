(function(){
	"use strict"
	var Cat = new CatMonster('Tom'),
		Duck = new BirdMonster('Scrooge McDuck'),
		fastDuck = new BirdMonster('Daffy Duck');

	console.log(Cat);
	console.log(Duck);
	console.log(fastDuck);

	Cat.sayName();
	Duck.sayName();

	Cat.sayHp();
	Duck.sayHp();

	Cat.scratch(Duck);

	Cat.sayHp();
	Duck.sayHp();

	Cat.scratch(Duck);
	Duck.peck(Cat);
	Cat.scratch(Duck);
	Duck.peck(Cat);
	Cat.scratch(Duck);
	Cat.scratch(Duck);
	Duck.peck(Cat);
	Duck.peck(Cat);
	// Duck.peck();
	// console.log("Sorry!)");
	Duck.peck(Cat);
	Duck.peck(Cat);
	Cat.scratch(Duck);
	Cat.scratch(Duck);
	Cat.scratch(Duck);

	Cat.sayHp();
	Duck.sayHp();

	fastDuck.peck(Cat);
	fastDuck.peck(Cat);
	fastDuck.peck(Cat);
	fastDuck.peck(Cat);
	fastDuck.peck(Cat);
	fastDuck.peck(Cat);
	fastDuck.peck(Cat);
	fastDuck.peck(Cat);
	fastDuck.peck(Cat);
	fastDuck.peck(Cat);
	fastDuck.peck(Cat);
	
	Cat.sayHp();
	Duck.sayHp();
}());