#pragma strict

//var dados : Transform[];
//var spawn : Transform;
//var dadoAtual : Transform;

var casas : Transform[];

private var casaAtual : int = 0;

var dado : int;

//30
var isCasa : boolean[];
isCasa = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

var isCasaVoltar : boolean = false;


function Start () {

}

function Update () {

}

function OnGUI()
{
	if(!isCasaVoltar)
	{
		if(GUI.Button(new Rect(10,10,150,50), "RODAR DADO"))
		{
			dado = Random.Range(1,6);
			
			print("print do btn p/ rodar dado. casa atual: " + casaAtual + " dado: " + dado);

			VerificarCasa();
		}
	}
	
	//Casas com boss

	//Casas que fazem voltar
	if(isCasa[7])
	{
		isCasaVoltar = true;

		if(GUI.Button(new Rect(100,100,300,150), "Você voltará 3 casas"))
		{
			casaAtual -= 3;

			transform.position = casas[casaAtual].position;

			print("casa atual: " + casaAtual + " dado: " + dado);

			isCasa[7] = false;
			isCasaVoltar = false;
		}
	}

	if(isCasa[13])
	{
		isCasaVoltar = true;

		if(GUI.Button(new Rect(100,100,300,150), "Você voltará 2 casas"))
		{
			casaAtual -= 2;

			transform.position = casas[casaAtual].position;

			print("casa atual: " + casaAtual + " dado: " + dado);

			isCasa[13] = false;
			isCasaVoltar = false;
		}
	}

}

//               <   !							   !							 !
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29
function VerificarCasa()
{
	//Veirifica se a casa para a qual o jogador vai é de algum boss
	for(var i=0; i < dado; i++)
	{
		casaAtual++;

		if(casaAtual == 9)
		{
			
		}

		if(casaAtual == 19)
		{
			
		}

		if(casaAtual == 29)
		{
			
		}
	}

	//print("casa atual: " + casaAtual + " dado: " + dado);
	//print(casas.length + "" + casas[casaAtual].position);

	//Veirifica se a casa para a qual o jogador vai é uma casa que faz voltar
	if(casaAtual == 7)
	{
		transform.position = casas[casaAtual].position;
		print("casa atual: " + casaAtual + " dado: " + dado);
		isCasa[7] = true;

		return false;
	}

	if(casaAtual == 13)
	{
		transform.position = casas[casaAtual].position;
		print("casa atual: " + casaAtual + " dado: " + dado);
		isCasa[13] = true;

		return false;
	}

	if(casaAtual < casas.length)
	{	
		
		transform.position = casas[casaAtual].position;
		print("casa atual: " + casaAtual + " dado: " + dado);
	}
	else
		casaAtual -= dado;

}

/*
	if(casaAtual > casas.length)
	{
		print(dado + "HAAAAA IÉ IÉ" + casas[casaAtual]);
	}
	else //(casaAtual < casas.length)
	{
		transform.position = casas[casaAtual].position;
		print("dado: " + dado + " " + casas[casaAtual]);
	}
	*/	


//==========================================================================================================


/*
var casas : Transform[];

private var casaAtual : int = 0;

var dado : int;

//Array para saber em qual casa o jogador está e se esta faz voltar ou é um boss
var isCasas : boolean[];
isCasas = [false,false,false,false,false,false,false,false,false];

//var para saber se o jogador está em alguma casa que faz voltar ou há um boss PARA ESCONDER O BOTÃO DE RODAR O DADO
//var necessária porque se não no lugar de: if(!isCasaEspecifica) (linha 34) teria que ser feito: 
//if(GUI.Button(new Rect(10,10,150,50), "Rodar Dado") && !isCasas[0] || GUI.Button(new Rect(10,10,150,50), "Rodar Dado") && !isCasas[1]) ...
var isCasaEspecifica = false;
*/


/*
function OnGUI()
{
    //Se o jogador não está em alguma casa que faça voltar ou que tenha boss, o botão para rodar o dado aparecere
    if(!isCasaEspecifica)
        if(GUI.Button(new Rect(10,10,150,50), "Rodar Dado"))
        {
            VerificarCasaAtual();
        }

    //Verificações das casas que fazem voltar
    //Mostra avisos das casas que fazem voltar
    if(isCasas[8])
    {
        isCasaEspecifica = true;

        //Mostra botão avisando que voltará 3 casas.O personagem volta as casas quando o jogador apertar o botão
        if(GUI.Button(new Rect(Screen.width/2, Screen.height/2,325,100), "Você está para uma casa que o obriga a voltar 3 casas"))
        {                                               //larg alt
            //Volta o personagem
            casaAtual -= 3;
            transform.position = casas[casaAtual].position;

            isCasas[8] = false;
            isCasaEspecifica = false;
        }
    }

    //Verificações das casas que têm boss    
    //Mostra se o jogador está na casa de um boss
    if(isCasas[9])
    {
        isCasaEspecifica = true;

        GUI.Box(new Rect(100,100,100,90), "hdahsiu hiuasdhuiash uhash h iudahh ahiuh hshd");
        
        if(GUI.Button(new Rect(100,100,100,50), "Level 1")) {
            print("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        }
        
    }

}

//                     !                             !
//12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29

//                < !    F          
//0 1 2 3 4 5 6 7 8 9 10 11         
//Roda o dado e verifica se a casa para a qual o jogador vai é uma casa especifica. Se não for ele avança. Se sim a execução do programa
//vai para outra função para o jogador voltar casas ou interagir com o boss
function VerificarCasaAtual()
{
    dado = Random.Range(1,6);
    //casaAtual = casaAtual + dado;

    //Verificação de casas dos Boss
    for(var i=0; i < dado; i++)
    {
        casaAtual++;

        if(casaAtual == 9)
        {
            isCasas[9] = true;

            return false;
        }
        if(casaAtual == 19)
        {
            isCasas[19] = true;

            return false;
        }
        if(casaAtual == 29)
        {
            isCasas[29] = true;
        
            return false;
        }
    }

    //Verificação de casas que fazem voltar
    if(casaAtual == 8)
    {
        //movimenta o personagem
        transform.position = casas[casaAtual].position;

        isCasas[8] = true;

        return false;
    }
    if(casaAtual == 14)
    {
        //movimenta o personagem
        transform.position = casas[casaAtual].position;

        isCasas[14] = true;
    
        return false;
    }

    //Movimenta o personagem
    if(casaAtual < casas.length)
        transform.position = casas[casaAtual].position;
    else
        casaAtual -= dado;

}
*/







//=======================================================================================================================
/*
function Jogar()
{
    dado = Random.Range(1,6);
    //casaAtual = casaAtual + dado;
    //transform.position = casas[casaAtual].position;

    //  \/  ESTÁ ERRADO PORQUE -> [][x][][casaQueVolta][][] se for verificar cada próxima casa o jogador sempre voltará casas
    //ESSAS VERIFICAÇÕES SÓ PODERÃO SER FEITAS COM AS CASAS EM QUE HÁ BOSS
    //REFAZER CÓDIGO ABAIXO PARA A MOVIMENTAÇÃO 
    //E PARA VERIFICAÇÃO DAS CASAS COM BOSS

    //Verifica antes de avançar se a próxima casa faz voltar
    //Isso é feito para cada casa que o jogador terá de avançar de acordo com o dado
    for(var i=1; i <= dado; i++)
    {
        casaAtual = casaAtual + i;
        
        //Volta 3 casas
        if(casaAtual == 8)
        {
            casaAtual = casaAtual - 3;
            transform.position = casas[casaAtual].position;

            //i = dado;
            return;
        }
        if(casaAtual == 13)
        {
            //Volta o tanto de casas que esta casa faz voltar
        }
        if(casaAtual == 18)
        {
            //Volta o tanto de casas que esta casa faz voltar
        }
        if(casaAtual == 23)
        {
            //Volta o tanto de casas que esta casa faz voltar
        }
        //Se a próxima casa não faz voltar
        //else
        //{
            //Se estiver na última casa
            //if(casaAtual == casas.length - 1)
                //sei la

            if(casaAtual < casas.length)
                transform.position = casas[casaAtual].position;
        //}
    }

    //if(casaAtual < casas.length)
    //{
        //transform.position = casas[casaAtual].position;

        //Se estiver na 9a casa(8) o jogador volta 3 casas
      //  if(casaAtual == 8) 
        //{
          //  casaAtual = casaAtual - 3;
            //transform.position = casas[casaAtual].position;
        //}

    //}
    

}
*/