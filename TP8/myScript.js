let nombre= prompt("Ingrese nombre del alumno");
let nota1= prompt("Ingrese nota del primer trimestre");
nota1=parseInt(nota1);
let nota2= prompt("Ingrese nota del segundo trimestre");
nota2=parseInt(nota2);
let nota3= prompt("Ingrese nota del tercer trimestre");
nota3=parseInt(nota3);
let notapromedio= (nota1+nota2+nota3)/3;

alert("El alumno "+ nombre +" tiene un promedio de "+Math.round(notapromedio));
