
window.addEventListener("load",inicio,false);

function inicio(){

    document.getElementById("envia").addEventListener("click",dibujar,false);

}

function dibujar(){

    var x = Number.parseInt(document.getElementById("x").value);
    var y = Number.parseInt(document.getElementById("y").value);
    var color = document.getElementById("color").value;
    var ancho = Number.parseInt(document.getElementById("ancho").value);
    var alto = Number.parseInt(document.getElementById("alto").value);
    var num = Number.parseInt(document.getElementById("num").value);

    if(document.getElementById("cuadrado").checked == true){

        switch (num) {
            case 1:

                dibujaCuadrado(x,y,color,100,100);

                break;

            case 2:

                dibujaCuadrado(x,y,color,100,100);
                dibujaCuadrado(x-20,y-20,color,140,140);
    
            break;

            case 3:

                dibujaCuadrado(x,y,color,100,100);
                dibujaCuadrado(x-20,y-20,color,140,140);
                dibujaCuadrado(x-30,y-30,color,160,160);
        
            break;

            case 4:

                dibujaCuadrado(x,y,color,100,100);
                dibujaCuadrado(x-20,y-20,color,140,140);
                dibujaCuadrado(x-30,y-30,color,160,160);
                dibujaCuadrado(x-40,y-40,color,180,180);
            
            break;
        
            default:
            break;
        }

    }else if(document.getElementById("triangulo").checked == true){

        switch (num) {
            case 1:

                dibujaTriangulo(x,y,color);

                break;

            case 2:

                dibujaTriangulo(x-20,y-20,color);
                dibujaTriangulo(x-30,y-30,color);
    
            break;

            case 3:

                dibujaTriangulo(x,y,color);
                dibujaTriangulo(x-20,y-20,color);
                dibujaTriangulo(x-30,y-30,color);
        
            break;

            case 4:

                dibujaTriangulo(x,y,color);
                dibujaTriangulo(x-20,y-20,color);
                dibujaTriangulo(x-30,y-30,color);
                dibujaTriangulo(x-40,y-40,color);
            
            break;
        
            default:
            break;
        }

    }else if(document.getElementById("circulo").checked == true){

        switch (num) {
            case 1:

                dibujaCirculo(x,y,color,50);

                break;

            case 2:

                dibujaCirculo(x,y,color,50);
                dibujaCirculo(x,y,color,70);
    
            break;

            case 3:

                dibujaCirculo(x,y,color,50);
                dibujaCirculo(x,y,color,70);
                dibujaCirculo(x,y,color,90);
        
            break;

            case 4:

                dibujaCirculo(x,y,color,50);
                dibujaCirculo(x,y,color,70);
                dibujaCirculo(x,y,color,90);
                dibujaCirculo(x,y,color,110);
            
            break;
        
            default:
            break;
        }

        dibujaCirculo(x,y,color);

    }else if(document.getElementById("borrar").checked == true){

        borrador(x,y,ancho,alto);

    }

}


function dibujaCuadrado(x,y,color,anchCua,altCua){
    
    var elemento = document.getElementById("lienzo");
    lienzo = elemento.getContext("2d");

    lienzo.strokeStyle = color;
    lienzo.strokeRect(x, y, anchCua, altCua);

}

function dibujaTriangulo(x,y,color){
    
    var elemento = document.getElementById("lienzo");
    lienzo = elemento.getContext("2d");

    lienzo.strokeStyle = color;
    lienzo.beginPath();
    lienzo.moveTo(x, y);
    lienzo.lineTo(x, y+20);
    lienzo.lineTo(x-20, y+20);
    lienzo.closePath();
    lienzo.stroke();

}

function dibujaCirculo(x,y,color,radio){
    var elemento = document.getElementById("lienzo");
    lienzo = elemento.getContext("2d");

    lienzo.strokeStyle = color;
    lienzo.beginPath();
    lienzo.arc(x, y, radio, 0, Math.PI * 2, false);
    lienzo.stroke();

}

function borrador(x,y,ancho,alto){

    lienzo.clearRect(x,y,ancho,alto);

}