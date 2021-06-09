function mayorEdad(edades) {
    let aux=0;
    for (let i = 0; i < edades.length; i++) {
        if(aux<edades[i]){
            aux=edades[i];
        }
        
    }
    return aux;
    
}

let edades=[];
for(let i=0;i<3;i++){
    edades[i]=prompt("Ingrese la edad de la persona");
    edades[i]=parseInt(edades[i]);
}
alert("La persona con mas edad cuenta con "+mayorEdad(edades)+" años");