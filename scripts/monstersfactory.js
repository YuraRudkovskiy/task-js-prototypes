(function(){
	"use strict"

	function Monster(name, currentHealth, initialHealth){
		this.name = name;
		this.currentHealth = currentHealth;
		this.initialHealth = initialHealth;
	};

	Monster.prototype.sayName = function(){
		console.log(this.name);
	};

	Monster.prototype.sayHp = function(){
		console.log(this.currentHealth);
	};

	Monster.prototype.changeDamage = function(damage){
		if(this.currentHealth < damage){
			this.currentHealth = 0;
			console.log(this.name, ' died.');
		}else{
			this.currentHealth -= damage;
			console.log(this.name, ' caused damage in ' + damage + ' HP');
		}
	};



	function CatMonster(name){
		Monster.call(this, name, 50, 50);
	};

	CatMonster.prototype = Object.create(Monster.prototype);

	CatMonster.prototype.scratch = function(obj){
		console.log(this.name, "atack");
		this.changeDamage.call(obj, 5);
	}



	function BirdMonster(name){
		Monster.call(this, name, 60, 60);
	};

	BirdMonster.prototype = Object.create(Monster.prototype);

	BirdMonster.prototype.peck = function(obj){
		console.log(this.name, "atack");
		this.changeDamage.call(obj, 3);
	}


	window.CatMonster = CatMonster;
	window.BirdMonster = BirdMonster;

}());