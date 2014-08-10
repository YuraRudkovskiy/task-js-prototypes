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

	Cat.scratch.call(Duck);

	Cat.sayHp();
	Duck.sayHp();

	Cat.scratch.call(Duck);
	Duck.peck.call(Cat);
	Cat.scratch.call(Duck);
	Duck.peck.call(Cat);
	Cat.scratch.call(Duck);
	Cat.scratch.call(Duck);
	Duck.peck.call(Cat);
	Duck.peck.call(Cat);
	Duck.peck();
	console.log("Sorry!)");
	Duck.peck.call(Cat);
	Duck.peck.call(Cat);
	Cat.scratch.call(Duck);
	Cat.scratch.call(Duck);
	Cat.scratch.call(Duck);

	Cat.sayHp();
	Duck.sayHp();

	fastDuck.peck.call(Cat);
	fastDuck.peck.call(Cat);
	fastDuck.peck.call(Cat);
	fastDuck.peck.call(Cat);
	fastDuck.peck.call(Cat);
	fastDuck.peck.call(Cat);
	fastDuck.peck.call(Cat);
	fastDuck.peck.call(Cat);
	fastDuck.peck.call(Cat);
	fastDuck.peck.call(Cat);
	fastDuck.peck.call(Cat);
	
	Cat.sayHp();
	Duck.sayHp();
}());