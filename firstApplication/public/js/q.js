var myObjects = [{
     
      question : 'What is national animal?',
	  options : ['Tiger', 'Elephant', 'Monkey', 'Dog'],
	  answer : 'Tiger'
               },
{
   
      question : 'What is national bird?',
	  options : ['Tiger', 'Crow', 'Peacock', 'Eagle'],
	  answer : 'Peacock'
        	  },
 {
    
      question : 'What is national game?',
	  options : ['Basket Ball', 'Hockey', 'Kabaddi', 'Cricket'],
	  answer : 'Hockey'
               },
{
       
      question : 'How many colours are there in national flag?',
	  options : ['3', '6', '2', '5'],
	  answer : '3'
              },
{
    
      question : 'How many overs are there in t20?',
	  options : ['10', '50', '40', '20'],
	  answer : '20'
              },
{
      question : 'X=5,Y=8 then X+Y=?',
	  options : ['5', '8', '13', '15'],
	  answer : '13'
               },
{
   
      question : 'How many states are there in India?',
	  options : ['29', '20', '26', '28'],
	  answer : '29'
        	  },
 {
    
      question : 'How many colors are there in Rainbow?',
	  options : ['6', '7', '8', '9'],
	  answer : '7'
               },
{
       
      question : 'Who is India prime minister?',
	  options : ['Narendra Modi', 'Pranab mukharji', 'KCR', 'Chandra babu'],
	  answer : 'Narendra Modi'
              },
 {
    
      question : 'How many players are there in a cricket team?',
	  options : ['10', '11', '13', '15'],
	  answer : '11'
              }];
var currentQuestion = 0;
var arr=[];
 while(arr.length<5)
    {
        var randomnum=Math.floor(Math.random()*10);
        if(arr.indexOf(randomnum)===-1)
            {
                arr.push(randomnum)
            }
    }
console.log("unique values:"+arr);
console.log("random numbers:"+randomnum);
function callQuestion()
{

    console.log('funcallQ called');
    if(currentQuestion<arr.length)
        {
            console.log("first if called");             
            document.getElementById("qtn").innerHTML =myObjects[arr[currentQuestion]].question;
            document.getElementById("1").value=myObjects[arr[currentQuestion]].options[0];
            document.getElementById("2").value=myObjects[arr[currentQuestion]].options[1];
            document.getElementById("3").value=myObjects[arr[currentQuestion]].options[2];
            document.getElementById("4").value=myObjects[arr[currentQuestion]].options[3];
        }
    else
        {
            console.log("first else called");
            
            document.getElementById("ca").innerHTML="Number of Correct Answers:"+rtans;
            document.getElementById("wa").innerHTML="Number of Wrong Answers:"+wrngans;
            document.getElementById("ts").innerHTML="Total Score:"+points;
            document.getElementById("hide").style.display="none";
            document.getElementById("navigationbar").style.display="none";
        }
}
var  points=0;
var rtans=0;
var wrngans=0;
function checkAnswer(ua)
{   
    console.log('checkanswer called');
    var clickedvalue=ua.value;
    console.log(clickedvalue);    
                 if(clickedvalue===myObjects[arr[currentQuestion]].answer)
                 {
                    rtans++;
                    console.log("crct answers:"+ rtans);
                    points+=20;
                    console.log("points:"+points);
                    console.log("in checksns fn enter into if block");
                    currentQuestion++;
                    console.log("correct");
                    callQuestion();
                }
                else
                 {
                    points+=0;
                    wrngans++;
                    console.log("points:"+points);
                    console.log("no.of wrong answers:"+ wrngans);
                    console.log("in checksns fn enter into else block");
                    currentQuestion++;
                    console.log("wrong");
                    callQuestion();
                     
                 }
   
}



