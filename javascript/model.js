export default class Model
{
	constructor()
	{
		this.count = -1;
		this.question = ["Привіт", "Як тебе звати?", "Скільки тобі років?", "Ну ми починаємо!"];
		this.options = ["Привіт", "Hi", "Хай", "Добрий день"];
        this.numbers = /^[0-9]+$/i;    
        this.symbol = /^[a-zа-яёії]+$/i;
	}

	getNextQuestion()
	{
        this.count++;
        return this.question[this.count];
	}

	checkGreeting(greeting) 
    {
        return this.options.includes(greeting)? "" : "Привітайся нормально!";
    }
	checkname(name) 
    {
        return this.checkSymbol(name, this.symbol) ? "" : "Ти ж не робот, напиши нормально!";
    }

    checkSymbol(str, myRe) 
    {
        return myRe.test(str);
    }

	check_age(age) 
    {
        return !this.checkSymbol(age, this.numbers) ?  "Дані введені не коректно!":
                        age < 10 ? "Йди звідси, щеня!":
                        age > 100 ? "Що ти тут забув, старий?":"";
    }

	check (str) {
		switch(this.count)	
		{
			case 0: return this.checkGreeting(str);
			case 1: return this.checkname(str);
			case 2: return this.check_age(str);
			default: return "Не поспішай!";
		}
	}
}
