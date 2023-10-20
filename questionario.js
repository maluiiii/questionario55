var answers = {};

var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById('question-6');
var question_seven = document.getElementById('question-7');
var question_eight = document.getElementById('question-8');
var question_ninee = document.getElementById('question-9');
var question_ten = document.getElementById('question-10');
var question_eleven = document.getElementById('question-11');
var question_twelve = document.getElementById('question-12');
var question_thirteen = document.getElementById('question-13');
var question_fourteen = document.getElementById('question-14');
var question_fifteen = document.getElementById('question-15');
var question_sisteen = document.getElementById('question-16');
var question_seventeen = document.getElementById('question-17');
var question_eighteen = document.getElementById('question-18');
var question_nineteen = document.getElementById('question-19');
var question_twenty = document.getElementById('question-20');
var question_twenty_one = document.getElementById('question-21');
var question_twenty_two = document.getElementById('question-22');
var question_twenty_three = document.getElementById('question-23');
var question_twenty_four = document.getElementById('question-24');
var question_twenty_five = document.getElementById('question-25');
var question_twenty_six = document.getElementById('question-26');
var question_twenty_seven = document.getElementById('question-27');
var question_twenty_eigth = document.getElementById('question-28');
var condicao = 0;


growProgressBar('0%');

function storeAnswer(question_number, event){

    if(event.target.type === 'radio'){
        answers['question'+question_number] = parseInt(event.target.value);
        condicao = event.target.value;
        console.log(condicao);
    }
   
}

question_one.addEventListener('click', function(event){
    storeAnswer(1, event);
})


question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})
question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
})
question_four.addEventListener('click', function(event){
    storeAnswer(4, event)
})
question_five.addEventListener('click', function(event){
    storeAnswer(5, event)
})
question_six.addEventListener('click', function(event){
    storeAnswer(6, event)
})
question_seven.addEventListener('click', function(event){
    storeAnswer(7, event)
})
question_eight.addEventListener('click', function(event){
    storeAnswer(8, event)
})
question_ninee.addEventListener('click', function(event){
    storeAnswer(9, event)
})
question_ten.addEventListener('click', function(event){
    storeAnswer(10, event)
})
question_eleven.addEventListener('click', function(event){
    storeAnswer(11, event)
})
question_twelve.addEventListener('click', function(event){
    storeAnswer(12, event)
})
question_thirteen.addEventListener('click', function(event){
    storeAnswer(13, event)
})
question_fourteen.addEventListener('click', function(event){
    storeAnswer(14, event)
})
question_fifteen.addEventListener('click', function(event){
    storeAnswer(15, event)
})
question_sisteen.addEventListener('click', function(event){
    storeAnswer(16, event)
})
question_seventeen.addEventListener('click', function(event){
    storeAnswer(17, event)
})
question_eighteen.addEventListener('click', function(event){
    storeAnswer(18, event)
})
question_nineteen.addEventListener('click', function(event){
    storeAnswer(19, event)
})
question_twenty.addEventListener('click', function(event){
    storeAnswer(20, event)
})
question_twenty_one.addEventListener('click', function(event){
    storeAnswer(21, event)
})
question_twenty_two.addEventListener('click', function(event){
    storeAnswer(22, event)
})
question_twenty_three.addEventListener('click', function(event){
    storeAnswer(23, event)
})
question_twenty_three.addEventListener('click', function(event){
    storeAnswer(24, event)
})
question_twenty_three.addEventListener('click', function(event){
    storeAnswer(25, event)
})
question_twenty_three.addEventListener('click', function(event){
    storeAnswer(26, event)
})
question_twenty_three.addEventListener('click', function(event){
    storeAnswer(27, event)
    
})
question_twenty_three.addEventListener('click', function(event){
    storeAnswer(28, event)
})

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');
var submit9 = document.getElementById('submit9');
var submit10 = document.getElementById('submit10');
var submit11 = document.getElementById('submit11');
var submit12 = document.getElementById('submit12');
var submit13 = document.getElementById('submit13');
var submit14 = document.getElementById('submit14');
var submit15 = document.getElementById('submit15');
var submit16 = document.getElementById('submit16');
var submit17 = document.getElementById('submit17');
var submit18 = document.getElementById('submit18');
var submit19 = document.getElementById('submit19');
var submit20 = document.getElementById('submit20');
var submit21 = document.getElementById('submit21');
var submit22 = document.getElementById('submit22');
var submit23 = document.getElementById('submit23');
var submit24 = document.getElementById('submit24');
var submit25 = document.getElementById('submit25');
var submit26 = document.getElementById('submit26');
var submit27 = document.getElementById('submit27');
var submit28 = document.getElementById('submit28');

var situacao = true;


function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);
//condição para identificar o identicação do doador
//pergunta 1
    if (condicao == 1 & current_question_number == 1) {
        var el = document.getElementById('question-'+2);
        //é mulher
    }
    if (condicao == 2 & current_question_number == 1) {
        var el = document.getElementById('question-'+3);
        //é mulher
    }
    if (condicao == 3 & current_question_number == 1) {
        var el = document.getElementById('question-'+2);
        //é mulher
    }
   
//pergunta 2
    if (condicao == 1 & current_question_number == 2) {
        var el = document.getElementById('question-'+4);
    }
    if (condicao == 2 & current_question_number == 2) {
        var el = document.getElementById('question-'+3);
    }


//4

    if (condicao == 1 & current_question_number == 4) {
        var el = document.getElementById('question-'+5);
        situacao = false;
        const texto_questao = document.createElement("p"); 
        texto_questao.innerHTML = "• Você não pode estar grávida.";
       document.getElementById("question-28").appendChild(texto_questao);
    }
    if (condicao == 2 & current_question_number == 4) {
        var el = document.getElementById('question-'+6);
       
      
    }


 //5
if (condicao == 1 & current_question_number == 5) {
    var el = document.getElementById('question-'+6);
    
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML = " • Não pode estar amamentando.";
    document.getElementById("question-28").appendChild(texto_questao);
}
if (condicao == 2 & current_question_number == 5) {
    var el = document.getElementById('question-'+6);
    
}
//6
if (condicao == 1 & current_question_number == 6) {
    var el = document.getElementById('question-'+3);
    situacao = false;
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML =" • Não se pode doar tendo realizado um aborto dentro do período de seis meses.";
    document.getElementById("question-28").appendChild(texto_questao);
    
}
if (condicao == 2 & current_question_number == 6) {
    var el = document.getElementById('question-'+3);
   
}
//3
if (condicao == 1 & current_question_number == +3) {
    var el = document.getElementById('question-'+15);
}
if (condicao == 2 & current_question_number == 3) {
    var el = document.getElementById('question-'+7);
}

//15
if (condicao == 1 & current_question_number ==15) {
        var el = document.getElementById('question-'+16);
}

if (condicao == 2 & current_question_number == 15) {
        var el = document.getElementById('question-'+16);
}
//16
if (condicao == 1 & current_question_number ==16) {
    var el = document.getElementById('question-'+7);
}

if (condicao == 2 & current_question_number == 16) {
    var el = document.getElementById('question-'+7);
}

//7
if (condicao == 1 & current_question_number ==7) {
    var el = document.getElementById('question-'+8);
}

if (condicao == 2 & current_question_number == 7) {
    var el = document.getElementById('question-'+9);
}  
//8
if (condicao == 1 & current_question_number ==8) {
    var el = document.getElementById('question-'+9);
    situacao = false;
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML = "• É necessário obter um período de 12 horas da última ingestão de bebida alcóolica. ";
    document.getElementById("question-28").appendChild(texto_questao);
   
}

if (condicao == 2 & current_question_number == 8) {
    var el = document.getElementById('question-'+9);
}  
   //9
if (condicao == 1 & current_question_number ==9) {
    var el = document.getElementById('question-'+10);
    situacao = false;
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML ="• Deve-se esperar 7 dias após o desaparecimento dos sintomas do resfriado.";
    document.getElementById("question-28").appendChild(texto_questao);
   
   
}

if (condicao == 2 & current_question_number == 9) {
    var el = document.getElementById('question-'+10);
}  
 //10
 if (condicao == 1 & current_question_number ==10) {
    var el = document.getElementById('question-'+11);
    situacao = false;
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML ="• Deve-se esperar 15 dias após o desaparecimento dos sintomas da febre.";
    document.getElementById("question-28").appendChild(texto_questao);
   }

if (condicao == 2 & current_question_number == 10) {
    var el = document.getElementById('question-'+11);
} 
   //11
 if (condicao == 1 & current_question_number ==11) {
    var el = document.getElementById('question-'+12);
}

if (condicao == 2 & current_question_number == 11) {
    var el = document.getElementById('question-'+13);
}
      //12
 if (condicao == 1 & current_question_number ==12) {
    var el = document.getElementById('question-'+13);
    situacao = false;
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML = "• Não se pode ingerir proscar, rouacutine, tigason, avodart, insulina ou hormônio de crescimento em um período inferior a 12 meses ";
    document.getElementById("question-28").appendChild(texto_questao);
    
}

if (condicao == 2 & current_question_number == 12) {
    var el = document.getElementById('question-'+13);
} 
  //13
  if (condicao == 1 & current_question_number ==13) {
    var el = document.getElementById('question-'+14);
    situacao = false;
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML = "• A vacina deve ter sido realizada no mínimo a uma semana atrás. ";
    document.getElementById("question-28").appendChild(texto_questao);
  
}

if (condicao == 2 & current_question_number == 13) {
    var el = document.getElementById('question-'+14);
} 
 //14
 if (condicao == 1 & current_question_number ==14) {
    var el = document.getElementById('question-'+17);
    situacao = false;
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML = "• Não pode fazer uso de colírios nem pomadas com frequência.";
    document.getElementById("question-28").appendChild(texto_questao);
   
}

if (condicao == 2 & current_question_number == 14) {
    var el = document.getElementById('question-'+17);
} 
//17
if (condicao == 1 & current_question_number ==17){
    var el = document.getElementById('question-'+18);
    situacao = false;
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML = "• A tatuagem não deve ter sido feita em um período inferior a 12 meses.";
    document.getElementById("question-28").appendChild(texto_questao);
    
}

if (condicao == 2 & current_question_number == 17) {
    var el = document.getElementById('question-'+18);
} 
//18
if (condicao == 1 & current_question_number ==18){
    var el = document.getElementById('question-'+19);
    situacao = false;
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML = "• O piercing não deve ter sido feito em um período inferior a 12 meses.";
    document.getElementById("question-28").appendChild(texto_questao);
   
}

if (condicao == 2 & current_question_number == 18) {
    var el = document.getElementById('question-'+19);
    
} 
//19
if (condicao == 1 & current_question_number ==19){
    var el = document.getElementById('question-'+20);
}

if (condicao == 2 & current_question_number == 19) {
    var el = document.getElementById('question-'+20);
} 
//20
if (condicao == 1 & current_question_number ==20){
    var el = document.getElementById('question-'+21);
    situacao = false;
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML ="• Não se pode ter recebido um transplante nos últimos 12 meses.";
    document.getElementById("question-28").appendChild(texto_questao);
   
}

if (condicao == 2 & current_question_number == 20) {
    var el = document.getElementById('question-'+21);
} 
//21
if (condicao == 1 & current_question_number ==21){
    var el = document.getElementById('question-'+22);
    situacao = false;
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML ="• Doenças, como  doença de chagas, malária, HIV, diabetes ou câncer impedem definitivamente a doação. ";
    document.getElementById("question-28").appendChild(texto_questao);
    
}

if (condicao == 2 & current_question_number == 21) {
    var el = document.getElementById('question-'+22);
} 


//22
if (condicao == 1 & current_question_number ==22){
    var el = document.getElementById('question-'+24);
}

if (condicao == 2 & current_question_number == 19) {
    var el = document.getElementById('question-'+23);
} 
//23
if (condicao == 1 & current_question_number ==23){
    var el = document.getElementById('question-'+25);
    situacao = false;
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML ="• É preciso ter no mínimo 2 parceiros sexuais nos últimos seis meses.";
    document.getElementById("question-28").appendChild(texto_questao);
    
}

if (condicao == 2 & current_question_number == 23) {
    var el = document.getElementById('question-'+26);
} 
//24
if (condicao == 1 & current_question_number ==24){
    var el = document.getElementById('question-'+25);
    situacao = false;
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML =" • É necessário manter relação sexual com um parceiro fixo. ";
    document.getElementById("question-28").appendChild(texto_questao);
    
}

if (condicao == 2 & current_question_number == 24) {
    var el = document.getElementById('question-'+26);
} 
//25
if (condicao == 1 & current_question_number ==25){
    var el = document.getElementById('question-'+26);
    situacao = false;
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML =" • É necessário manter relação sexual com proteção, além de ser essencial a permanência de parceiro fixo para a efetivação da doação. ";
    document.getElementById("question-28").appendChild(texto_questao);
}

if (condicao == 2 & current_question_number == 25) {
    var el = document.getElementById('question-'+26);
} 
//26
if (condicao == 1 & current_question_number ==26){
    var el = document.getElementById('question-'+27);
    
}

if (condicao == 2 & current_question_number == 26) {
    var el = document.getElementById('question-'+28);
    
}

//27
if (condicao == 1 & current_question_number ==27){
    var el = document.getElementById('question-'+28);
    situacao = false;
    const texto_questao = document.createElement("p"); 
    texto_questao.innerHTML = " • É necessário não ter viajado para o exterior no período de 1 mês.";
    document.getElementById("question-28").appendChild(texto_questao);
   
}
if (condicao == 2 & current_question_number == 27) {
    var el = document.getElementById('question-'+28);
    
}



    el.style.display = "block";
    el2.style.display = "none";
console.log(situacao);
}

submit1.addEventListener('click', function(){
    nextQuestion(2);
    growProgressBar('4%');
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
    growProgressBar('8%');
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
    growProgressBar('12%');
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
    growProgressBar('16%');
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
    growProgressBar('20%');
})
submit6.addEventListener('click', function(){
    nextQuestion(7);
    growProgressBar('24%');
})
submit7.addEventListener('click', function(){
    nextQuestion(8);
    growProgressBar('28%');
})
submit8.addEventListener('click', function(){
    nextQuestion(9);
    growProgressBar('32%');
})
submit9.addEventListener('click', function(){
    nextQuestion(10);
    growProgressBar('36%');
})
submit10.addEventListener('click', function(){
    nextQuestion(11);
    growProgressBar('40%');
})
submit11.addEventListener('click', function(){
    nextQuestion(12);
    growProgressBar('44%');
})
submit12.addEventListener('click', function(){
    nextQuestion(13);
    growProgressBar('48%');
})
submit13.addEventListener('click', function(){
    nextQuestion(14);
    growProgressBar('52%');
})
submit14.addEventListener('click', function(){
    nextQuestion(15);
    growProgressBar('56%');
})
submit15.addEventListener('click', function(){
    nextQuestion(16);
    growProgressBar('60%');
})
submit16.addEventListener('click', function(){
    nextQuestion(17);
    growProgressBar('64%');
})
submit17.addEventListener('click', function(){
    nextQuestion(18);
    growProgressBar('68%');
})
submit18.addEventListener('click', function(){
    nextQuestion(19);
    growProgressBar('72%');
})
submit19.addEventListener('click', function(){
    nextQuestion(20);
    growProgressBar('76%');
})
submit20.addEventListener('click', function(){
    nextQuestion(21);
    growProgressBar('80%');
})
submit21.addEventListener('click', function(){
    nextQuestion(22);
    growProgressBar('84%');
})
submit22.addEventListener('click', function(){
    nextQuestion(23);
    growProgressBar('86%');
})
submit23.addEventListener('click', function(){
    nextQuestion(24);
    growProgressBar('88%');
}) 
submit24.addEventListener('click', function(){
    nextQuestion(25);
    growProgressBar('92%');
})
submit25.addEventListener('click', function(){
    nextQuestion(26);
    growProgressBar('96%');
})
submit26.addEventListener('click', function(){
    nextQuestion(27);
    growProgressBar('100%');
})
submit27.addEventListener('click', function(){
    nextQuestion(28);
    growProgressBar('100%');
    console.log(situacao);
})

function teste() {
    var texto_verifica = document.getElementById("printscoreinfo");

    if (situacao === true) {
        texto_verifica.textContent = "Aprovado!";
    } else {
        texto_verifica.textContent = "Reprovado!, segue abaixo as respostas incompativeis com nosso sistema de doação de sangue:";
    }
}

setInterval(teste, 1000);

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}