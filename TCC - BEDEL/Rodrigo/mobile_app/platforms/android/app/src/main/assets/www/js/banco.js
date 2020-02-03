class Banco{
	constructor()
	{
		this.dados = JSON.parse(localStorage.getItem('login')) || [];
	}
	tamanho()
	{
		return localStorage.length;
	}
	inserir(obj)
	{
		this.dados.push(obj);
		localStorage.setItem('login',  JSON.stringify(this.dados));
	}
}

class cadastroServidor{
	constructor()
	{
		this.dados = JSON.parse(localStorage.getItem('cadastroServidor')) || [];
	}
	tamanho()
	{
		return localStorage.length;
	}
	inserir(obj,objeto)
	{
		this.dados.push(obj);
		localStorage.setItem('cadastroServidor',  JSON.stringify(this.dados));
	}
}


class cadastroAluno{
	constructor()
	{
		this.dados = JSON.parse(localStorage.getItem('cadastroAluno')) || [];
	}
	tamanho()
	{
		return localStorage.length;
	}
	inserir(obj,objeto)
	{
		this.dados.push(obj);
		localStorage.setItem('cadastroAluno',  JSON.stringify(this.dados));
	}
}