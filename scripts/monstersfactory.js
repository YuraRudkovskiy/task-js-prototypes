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

	/*
		!!! Внимание. Это монстры... и они себе урон тоже могут наносить(Вот такие будут у меня монстры).
		можно сделать что б они, принимали обьект другого монстра и уменьшали их здоровье. А у меня будут монстры есть себя если будут голодными.))
	*/
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
	//CatMonster.prototype.constructor = CatMonster;
	/*
		по поводу этих записей, что я внес, подсмотрев после того как вы начали проверять. 
		Алексей на лекции ни разу не упоминал(до того как я его не спросил) о потере конструктора.
		Он сказал что так следует делать, когда нам действительно он необходим и в даном случае достаточно лишь (Object.create),
		по этому здесь я его не применял.
		+
		CatMonster.superclass = Monster.prototype;
		--- про такую запись он сказал вообще забыть, так что...
	*/

	CatMonster.prototype.scratch = function(obj){
		console.log(this.name, "atack");
		this.changeDamage.call(obj, 5);
	}



	function BirdMonster(name){
		Monster.call(this, name, 60, 60);
	};

	BirdMonster.prototype = Object.create(Monster.prototype);
	//BirdMonster.prototype.constructor = BirdMonster;

	BirdMonster.prototype.peck = function(obj){
		console.log(this.name, "atack");
		this.changeDamage.call(obj, 3);
	}


	window.CatMonster = CatMonster;
	window.BirdMonster = BirdMonster;

}());