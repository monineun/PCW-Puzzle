var _ANCHO_= 360,
    _ALTO_ = 240,
    _NCOLS_ = 6;
    _NROW_ =4;
    _HAYFOTO_ = false;
    _BLOQUEAR_ = false;
    _TIME_=1;
    _TIMEOUT_=0;
    _MYTIMER_=0;
    _PIEZADES_=0;
    _MOVES_=0;
    cont = 0;
    pieces = [];
    pieces2 = [];
    img=new Image();
    comp= false;
    emp=false;
    num2=[];
    num23=[]
    compru=0;
    compru1=0;
    fi=0;
    co=0;
    val=false;
    xx=0;
    yy=0;
    img1=new Image();
    img2=new Image();
    n=0;
    m=0;
    act=false;

function prepararCanvas(){

  let cvs=document.querySelectorAll('canvas');

  cvs.forEach(function(e){
    e.width=_ANCHO_;
    e.height =_ALTO_;
  });

  //drag&drop
  let cv01=document.querySelector('#cv01');
  let ctx = cv01.getContext('2d');
  cv01.ondragover=function(e) {
    if(emp==false){
    e.stopPropagation();
    e.preventDefault();
    destacar(); //return false;
}
  };

    cv01.ondragleave=function(e) {
    if(emp==false){
    e.stopPropagation();
    e.preventDefault();
    ctx.clearRect(0,0,_ANCHO_, _ALTO_)
    ctx.drawImage(img, 0,0,_ANCHO_,_ALTO_)
    imagen();
}
   }

  cv01.ondrop=function(e) {
    e.stopPropagation();
    e.preventDefault(); //return false;

    let fichero=e.dataTransfer.files[0],
        fr=new FileReader();
        a=fichero.name.split(".");
        b= a[a.length-1];
        if(emp==false){
        let tipo = /image.*/;
        if(fichero.type.match(tipo)){
        limpiar();
        fr.onload=function() {
          img.onload=function() {
            let ctx=cv01.getContext('2d');
            ctx.drawImage(img,0,0,cv01.width,cv01.height);
            _HAYFOTO_ = true;
            copiarCanvas();
            dibujarLineas();
            habilitarBotonJugar();
            cont++;
          };
          img.src=fr.result;
        };
        fr.readAsDataURL(fichero);
    }
        else{
        ctx.clearRect(0,0,_ANCHO_, _ALTO_)
        ctx.drawImage(img, 0,0,_ANCHO_,_ALTO_)
    }
}
}

//raton
let cv02 = document.querySelector('#cv02');
let ctx01 = cv01.getContext('2d');
let ctx02 = cv02.getContext('2d');

cv02.onmouseleave = function (e){
    if(emp==true && act==false){
    ctx02.clearRect(0,0,_ANCHO_, _ALTO_)
    num=_NROW_*_NCOLS_;
            o=0;
            l=0;
            for(let i=0; i<num; i++){
            z=num2[i]
            ctx02.putImageData(pieces2[z],o,l);
            //console.log(i)
            o=o+dimx;
            if(o==360){
                o=0;
                l=l+dimy;
            }
            }
            dibujarLineas2();
            }
}

cv02.onmousemove = function (e){
    if(emp==true){
       ctx02.clearRect(0,0,_ANCHO_, _ALTO_)
       console.log(act)
       console.log('hola')
       let x = e.offsetX,
            y = e.offsetY,
            dimx = cv01.width/_NCOLS_,
            dimy = cv01.height/_NROW_,
            [col,fila]=sacarFilaColumna(e),
            pos=(fila*6)+col;

            num=_NROW_*_NCOLS_;
            o=0;
            l=0;
            for(let i=0; i<num; i++){
            z=num2[i]
            ctx02.putImageData(pieces2[z],o,l);
            //console.log(i)
            o=o+dimx;
            if(o==360){
                o=0;
                l=l+dimy;
            }
            }
            dibujarLineas2();

            if(_NROW_==4){
            if(fila==1){
                compru=compru+6;
            }
            if(fila==2){
                compru=compru+12;
            }
            if(fila==3){
                compru=compru+18;
            }
            if(x<=60){
                n=0;
            }
            if(x>60 && x<=120){
                n=60;
            }
            if(x>120 && x<=180){
                n=120;
            }
            if(x>180 && x<=240){
                n=180;
            }
            if(x>240 && x<=300){
                n=240;
            }
            if(x>300 && x<=360){
                n=300;
            }
            if(y<=60){
                m=0;
            }
            if(y>60 && y<=120){
                m=60;
            }
            if(y>120 && y<=180){
                m=120;
            }
            if(y>180 && y<=240){
               m=180;
            }
        }
        if(_NROW_==6){
            if(fila==1){
                compru=compru+9;
            }
            if(fila==2){
                compru=compru+18;
            }
            if(fila==3){
                compru=compru+27;
            }
            if(fila==4){
                compru=compru+36;
            }
            if(fila==5){
                compru=compru+45;
            }
            if(x<=40){
                n=0;
            }
            if(x>40 && x<=80){
                n=40;
            }
            if(x>80 && x<=120){
                n=80;
            }
            if(x>120 && x<=160){
                n=120;
            }
            if(x>160 && x<=200){
                n=160;
            }
            if(x>200 && x<=240){
                n=200;
            }
            if(x>240 && x<=280){
                n=240;
            }
            if(x>280 && x<=320){
                n=280;
            }
            if(x>320 && x<=360){
                n=320;
            }
            if(y<=40){
                m=0;
            }
            if(y>40 && y<=80){
                m=40;
            }
            if(y>80 && y<=120){
                m=80;
            }
            if(y>120 && y<=160){
                m=120;
            }
            if(y>160 && y<=200){
                m=160;
            }
            if(y>200 && y<=240){
                m=200;
            }
        }
        if(_NROW_==8){
            if(fila==1){
                compru=compru+12;
            }
            if(fila==2){
                compru=compru+24;
            }
            if(fila==3){
                compru=compru+36;
            }
            if(fila==4){
                compru=compru+48;
            }
            if(fila==5){
                compru=compru+60;
            }
            if(fila==6){
                compru=compru+72;
            }
            if(fila==7){
                compru=compru+84;
            }
            if(x<=30){
                n=0;
            }
            if(x>30 && x<=60){
                n=30;
            }
            if(x>60 && x<=90){
                n=60;
            }
            if(x>90 && x<=120){
                n=90;
            }
            if(x>120 && x<=150){
                n=120;
            }
            if(x>150 && x<=180){
                n=150;
            }
            if(x>180 && x<=210){
                n=180;
            }
            if(x>210 && x<=240){
                n=210;
            }
            if(x>240 && x<=270){
                n=240;
            }
            if(x>270 && x<=300){
                n=270;
            }
            if(x>300 && x<=330){
                n=300;
            }
            if(x>330 && x<=360){
                n=330;
            }
            if(y<=30){
                m=0;
            }
            if(y>30 && y<=60){
                m=30;
            }
            if(y>60 && yy<=90){
                m=60;
            }
            if(y>90 && y<=120){
                m=90;
            }
            if(y>120 && y<=150){
                m=120;
            }
            if(y>150 && y<=180){
                m=150;
            }
            if(y>180 && y<=210){
                m=180;
            }
            if(y>210 && y<=240){
                m=210;
            }
        }
        ctx02.strokeStyle="#FFF";
        ctx02.strokeRect(n,m,dimx, dimy);
        if(val==true){
            ctx02.strokeRect(xx,yy,dimx, dimy);
        }
        ctx02.strokeStyle= document.querySelector('#color').value;
    }
}
cv02.onclick = function (e){
    if(emp==true){
        let x = e.offsetX,
            y = e.offsetY,
            dimx = cv01.width/_NCOLS_,
            dimy = cv01.height/_NROW_,
            [col,fila]=sacarFilaColumna(e),
            pos=(fila*6)+col;

        if(val==false){
            compru=col;
            fi=fila;
            co=col;
        }else{
            compru1=col;
        }

        if(val==false){

        if(_NROW_==4){
            if(fila==1){
                compru=compru+6;
            }
            if(fila==2){
                compru=compru+12;
            }
            if(fila==3){
                compru=compru+18;
            }
            if(x<=60){
                xx=0;
            }
            if(x>60 && x<=120){
                xx=60;
            }
            if(x>120 && x<=180){
                xx=120;
            }
            if(x>180 && x<=240){
                xx=180;
            }
            if(x>240 && x<=300){
                xx=240;
            }
            if(x>300 && x<=360){
                xx=300;
            }
            if(y<=60){
                yy=0;
            }
            if(y>60 && y<=120){
                yy=60;
            }
            if(y>120 && y<=180){
                yy=120;
            }
            if(y>180 && y<=240){
                yy=180;
            }
        }
        if(_NROW_==6){
            if(fila==1){
                compru=compru+9;
            }
            if(fila==2){
                compru=compru+18;
            }
            if(fila==3){
                compru=compru+27;
            }
            if(fila==4){
                compru=compru+36;
            }
            if(fila==5){
                compru=compru+45;
            }
            if(x<=40){
                xx=0;
            }
            if(x>40 && x<=80){
                xx=40;
            }
            if(x>80 && x<=120){
                xx=80;
            }
            if(x>120 && x<=160){
                xx=120;
            }
            if(x>160 && x<=200){
                xx=160;
            }
            if(x>200 && x<=240){
                xx=200;
            }
            if(x>240 && x<=280){
                xx=240;
            }
            if(x>280 && x<=320){
                xx=280;
            }
            if(x>320 && x<=360){
                xx=320;
            }
            if(y<=40){
                yy=0;
            }
            if(y>40 && y<=80){
                yy=40;
            }
            if(y>80 && y<=120){
                yy=80;
            }
            if(y>120 && y<=160){
                yy=120;
            }
            if(y>160 && y<=200){
                yy=160;
            }
            if(y>200 && y<=240){
                yy=200;
            }
        }
        if(_NROW_==8){
            if(fila==1){
                compru=compru+12;
            }
            if(fila==2){
                compru=compru+24;
            }
            if(fila==3){
                compru=compru+36;
            }
            if(fila==4){
                compru=compru+48;
            }
            if(fila==5){
                compru=compru+60;
            }
            if(fila==6){
                compru=compru+72;
            }
            if(fila==7){
                compru=compru+84;
            }
            if(x<=30){
                xx=0;
            }
            if(x>30 && x<=60){
                xx=30;
            }
            if(x>60 && x<=90){
                xx=60;
            }
            if(x>90 && x<=120){
                xx=90;
            }
            if(x>120 && x<=150){
                xx=120;
            }
            if(x>150 && x<=180){
                xx=150;
            }
            if(x>180 && x<=210){
                xx=180;
            }
            if(x>210 && x<=240){
                xx=210;
            }
            if(x>240 && x<=270){
                xx=240;
            }
            if(x>270 && x<=300){
                xx=270;
            }
            if(x>300 && x<=330){
                xx=300;
            }
            if(x>330 && x<=360){
                xx=330;
            }
            if(y<=30){
                yy=0;
            }
            if(y>30 && y<=60){
                yy=30;
            }
            if(y>60 && yy<=90){
                yy=60;
            }
            if(y>90 && y<=120){
                yy=90;
            }
            if(y>120 && y<=150){
                yy=120;
            }
            if(y>150 && y<=180){
                yy=150;
            }
            if(y>180 && y<=210){
                yy=180;
            }
            if(y>210 && y<=240){
                yy=210;
            }
        }
        }else{


        if(_NROW_==4){
            if(fila==1){
                compru1=compru1+6;
            }
            if(fila==2){
                compru1=compru1+12;
            }
            if(fila==3){
                compru1=compru1+18;
            }
            if(x<=60){
                xx=0;
            }
            if(x>60 && x<=120){
                xx=60;
            }
            if(x>120 && x<=180){
                xx=120;
            }
            if(x>180 && x<=240){
                xx=180;
            }
            if(x>240 && x<=300){
                xx=240;
            }
            if(x>300 && x<=360){
                xx=300;
            }
            if(y<=60){
                yy=0;
            }
            if(y>60 && y<=120){
                yy=60;
            }
            if(y>120 && y<=180){
                yy=120;
            }
            if(y>180 && y<=240){
                yy=180;
            }
        }
        if(_NROW_==6){
            if(fila==1){
                compru1=compru1+9;
            }
            if(fila==2){
                compru1=compru1+18;
            }
            if(fila==3){
                compru1=compru1+27;
            }
            if(fila==4){
                compru1=compru1+36;
            }
            if(fila==5){
                compru1=compru1+45;
            }
            if(x<=40){
                xx=0;
            }
            if(x>40 && x<=80){
                xx=40;
            }
            if(x>80 && x<=120){
                xx=80;
            }
            if(x>120 && x<=160){
                xx=120;
            }
            if(x>160 && x<=200){
                xx=160;
            }
            if(x>200 && x<=240){
                xx=200;
            }
            if(x>240 && x<=280){
                xx=240;
            }
            if(x>280 && x<=320){
                xx=280;
            }
            if(x>320 && x<=360){
                xx=320;
            }
            if(y<=40){
                yy=0;
            }
            if(y>40 && y<=80){
                yy=40;
            }
            if(y>80 && y<=120){
                yy=80;
            }
            if(y>120 && y<=160){
                yy=120;
            }
            if(y>160 && y<=200){
                yy=160;
            }
            if(y>200 && y<=240){
                yy=200;
            }
        }
        if(_NROW_==8){
            if(fila==1){
                compru1=compru1+12;
            }
            if(fila==2){
                compru1=compru1+24;
            }
            if(fila==3){
                compru1=compru1+36;
            }
            if(fila==4){
                compru1=compru1+48;
            }
            if(fila==5){
                compru1=compru1+60;
            }
            if(fila==6){
                compru1=compru1+72;
            }
            if(fila==7){
                compru1=compru1+84;
            }
            if(x<=30){
                xx=0;
            }
            if(x>30 && x<=60){
                xx=30;
            }
            if(x>60 && x<=90){
                xx=60;
            }
            if(x>90 && x<=120){
                xx=90;
            }
            if(x>120 && x<=150){
                xx=120;
            }
            if(x>150 && x<=180){
                xx=150;
            }
            if(x>180 && x<=210){
                xx=180;
            }
            if(x>210 && x<=240){
                xx=210;
            }
            if(x>240 && x<=270){
                xx=240;
            }
            if(x>270 && x<=300){
                xx=270;
            }
            if(x>300 && x<=330){
                xx=300;
            }
            if(x>330 && x<=360){
                xx=330;
            }
            if(y<=30){
                yy=0;
            }
            if(y>30 && y<=60){
                yy=30;
            }
            if(y>60 && yy<=90){
                yy=60;
            }
            if(y>90 && y<=120){
                yy=90;
            }
            if(y>120 && y<=150){
                yy=120;
            }
            if(y>150 && y<=180){
                yy=150;
            }
            if(y>180 && y<=210){
                yy=180;
            }
            if(y>210 && y<=240){
                yy=210;
            }
        }
        }

        if(val==false){
            so=xx;
            su=yy;
        }

        if(val==false){
            img1=ctx02.getImageData(xx,yy,dimx, dimy);
            val=true;
            pos1=compru;
            ctx02.strokeStyle="#FFF";
            ctx02.strokeRect(xx,yy,dimx, dimy);
            act=true;

        }else{
            if(compru!=compru1){
            img2=ctx02.getImageData(xx,yy,dimx,dimy);
            ctx02.clearRect(so,su,dimx, dimy)
            ctx02.clearRect(xx,yy,dimx, dimy)
            ctx02.putImageData(img1,xx,yy);
            ctx02.putImageData(img2,so,su);
            ctx02.clearRect(0,0,_ANCHO_, _ALTO_)
            pos2=compru1;
            aux=num2[pos1];
            num2[pos1]=num2[pos2]
            num2[pos2]=aux;
            num=_NROW_*_NCOLS_;
            o=0;
            l=0;
            for(let i=0; i<num; i++){
            z=num2[i]
            ctx02.putImageData(pieces2[z],o,l);
            //console.log(i)
            o=o+dimx;
            if(o==360){
                o=0;
                l=l+dimy;
            }
            }
            dibujarLineas2();
            val=false;
            _MOVES_++;
            actmoves();
            conteo();
            ctx02.strokeStyle= document.querySelector('#color').value;
            act=false;
        }else{
            ctx02.clearRect(0,0,_ANCHO_, _ALTO_)
            num=_NROW_*_NCOLS_;
            o=0;
            l=0;
            for(let i=0; i<num; i++){
            z=num2[i]
            ctx02.putImageData(pieces2[z],o,l);
            //console.log(i)
            o=o+dimx;
            if(o==360){
                o=0;
                l=l+dimy;
            }
            }
            dibujarLineas2();
            val=false;
        }

        }
    }
    }




cv02.onmouseenter = function (e){
    if(comp==true){
    let cv01 = document.querySelector('#cv01'),
        cv02 = document.querySelector('#cv02'),
        ctx01 = cv01.getContext('2d'),
        ctx02 = cv02.getContext('2d');


        dimx = cv01.width/_NCOLS_;
        dimy = cv01.height/_NROW_;
        num=_NROW_*_NCOLS_;
        x=0;
        y=0;
        limpiar2();
        for(let i=0; i<num; i++){
            z=num2[i]
            ctx02.putImageData(pieces2[z],x,y);
            //console.log(i)
            x=x+dimx;
            if(x==360){
                x=0;
                y=y+dimy;
            }
        }
       dibujarLineas2();
    }
    comp=false;
}

}

function destacar(){
    let cv=document.querySelector('#cv01'),
    ctx=cv.getContext('2d');

    ctx.strokeStyle="#FF0000";
    ctx.strokeRect(0,0,360, 240);

}

function imagen(){
    if(cont ==0){
    let cv=document.querySelector('#cv01'),
    ctx=cv.getContext('2d');

    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Haz click o arrastra una imagen aquí',cv.width/2,cv.height/2);
    }
}

function ImgSource(e){
    console.log(e)
    let fichero=e.files[0],

    fr=new FileReader();

if(fichero!=null){
    limpiar();

    fr.onload=function() {

        img.onload=function() {
            let ctx=cv01.getContext('2d');
            ctx.drawImage(img,0,0,cv01.width,cv01.height);
            _HAYFOTO_ = true;
            copiarCanvas();
            dibujarLineas();
            habilitarBotonJugar();
            cont++;
        };

        img.src=fr.result;

     };
     fr.readAsDataURL(fichero);
    }
}


function imagencan(){
    document.getElementById('boton').click();
}

function ayuda(){
    let cv01 = document.querySelector('#cv01'),
        cv02 = document.querySelector('#cv02'),
        ctx01 = cv01.getContext('2d'),
        ctx02 = cv02.getContext('2d'),
        imgData;

        dimx = cv01.width/_NCOLS_;
        dimy = cv01.height/_NROW_;
        num=_NROW_*_NCOLS_;
        x=0;
        y=0;
        comp=true;
        for(let i=0; i<num; i++){
            imgData=ctx02.getImageData(x,y,dimx, dimy);
            if(num2[i]==i){

            }else{
               ctx02.fillStyle="#FF0000";
               ctx02.fillRect(x,y,dimx, dimy);
            }
             x=x+dimx;
            if(x==360){
                x=0;
                y=y+dimy;
            }

        }
}


function conteo(){

    let conyt=0;
        num=_NROW_*_NCOLS_;

        for(let i=0; i<num; i++){
            if(num2[i]==i) conyt++;
        }


        _PIEZADES_=num-conyt;


        actdes();

        if(_PIEZADES_==0) ganar();

}


//PARTE MONI
function deshabilitarBotonesAbajo(){
    document.getElementById("btn1").disabled=true;
    document.getElementById("btn2").disabled=true;
    document.getElementById("btn3").disabled=true;
}

function habilitarBotonesAbajo(){
    document.getElementById("btn2").disabled=false;
    document.getElementById("btn3").disabled=false;
}

function deshabilitarBotonesArriba(){
    document.getElementById("color").disabled=true;
    document.getElementById("dificultad").disabled=true;
}

function habilitarBotonJugar(){
    document.getElementById("btn1").disabled=false;
}

function deshabilitarBotonJugar(){
    document.getElementById("btn1").disabled=true;
}

function habilitarSubirFoto(){
    document.getElementById("boton").disabled=false;
}

function deshabilitarSubirFoto(){
    document.getElementById("boton").disabled=true;
}

function habilitarBotonesArriba(){
    document.getElementById("color").disabled=false;
    document.getElementById("dificultad").disabled=false;
}

function cambiarColor(){
    let cv=document.querySelector('#cv02'),
        ctx=cv.getContext('2d');

    ctx.strokeStyle= document.querySelector('#color').value;
}

function seleccionarDificultad(){
    if(document.getElementById("dificultad").value=='1'){
        _NCOLS_ = 6;
        _NROW_ = 4;
    }

    if(document.getElementById("dificultad").value=='2'){
        _NCOLS_ = 9;
        _NROW_ = 6;
    }

    if(document.getElementById("dificultad").value=='3'){
        _NCOLS_ = 12;
        _NROW_ = 8;
    }

    return false;
}

function dibujarLineas(){
        let cv = document.querySelector('#cv02'),
            ctx = cv.getContext('2d'),
            dim = cv.width/_NCOLS_;

            if(_HAYFOTO_==true){
            limpiar2();
            copiarCanvas();

            ctx.beginPath();
            ctx.lineWidth = 2;

            for(let i=1; i<_NCOLS_; i++){
                //lineashorizontales
                ctx.moveTo(0, i * dim);
                ctx.lineTo(cv.width, i * dim);
                //lineasverticales
                ctx.moveTo(i*dim, 0);
                ctx.lineTo(i * dim, cv.height);
            }
            ctx.rect(0,0,cv.width, cv.height);
            ctx.stroke();
        }
}

function dibujarLineas2(){
        let cv = document.querySelector('#cv02'),
            ctx = cv.getContext('2d'),
            dim = cv.width/_NCOLS_;

            if(_HAYFOTO_==true){

            ctx.beginPath();
            ctx.lineWidth = 2;

            for(let i=1; i<_NCOLS_; i++){
                //lineashorizontales
                ctx.moveTo(0, i * dim);
                ctx.lineTo(cv.width, i * dim);
                //lineasverticales
                ctx.moveTo(i*dim, 0);
                ctx.lineTo(i * dim, cv.height);
            }
            cambiarColor();
            ctx.rect(0,0,cv.width, cv.height);
            ctx.stroke();
        }
}

function copiarCanvas(){
    let cv01 = document.querySelector('#cv01'),
        cv02 = document.querySelector('#cv02'),
        ctx01 = cv01.getContext('2d'),
        ctx02 = cv02.getContext('2d'),
        imgData;

        pieces2 = [];
        pieces = [];

        dimx = cv01.width/_NCOLS_;
        dimy = cv01.height/_NROW_;
        num=_NROW_*_NCOLS_;

        for(let i=0; i<num; i++){
            num23[i]=i;
        }

        x=0;
        y=0;

        for(let i=0; i<num; i++){
            imgData=ctx01.getImageData(x,y,dimx, dimy);
            ctx02.putImageData(imgData,x,y);
            x=x+dimx;
            pieces.push(imgData);
            if(x==360){
                x=0;
                y=y+dimy;
            }
        }
        for ( let i=0 ; i<pieces.length; i++ ) {
            pieces2[ i ] = pieces[ i ];
        }
              console.log('mide el 1: '+ pieces.length + ' y el 2 : ' + pieces2.length);

}

function limpiar(){
    let cv01 = document.querySelector('#cv01'),
    ctx=cv01.getContext('2d');

    ctx.clearRect(0, 0, 360, 240);
}

function limpiar2(){
    let cv02 = document.querySelector('#cv02'),
    ctx=cv02.getContext('2d');

    ctx.clearRect(0, 0, 360, 240);
}

function empezar(){
    deshabilitarBotonJugar();
    deshabilitarBotonesArriba();
    habilitarBotonesAbajo();
    deshabilitarSubirFoto();
    mostrarmarcador();
    iniciar();
    _BLOQUEAR_ = true;
    emp=true;
}

function iniciar(){
      num2 = num23.sort(function() {return Math.random() - 0.5});
      console.log('iniciar dim ' + num2.length)
      console.log(num2)

    let cv01 = document.querySelector('#cv01'),
        cv02 = document.querySelector('#cv02'),
        ctx01 = cv01.getContext('2d'),
        ctx02 = cv02.getContext('2d');

        dimx = cv01.width/_NCOLS_;
        dimy = cv01.height/_NROW_;
        num=_NROW_*_NCOLS_;
        x=0;
        y=0;
        limpiar2();
        for(let i=0; i<num; i++){
            z=num2[i]
            ctx02.putImageData(pieces2[z],x,y);
            //console.log(i)
            x=x+dimx;

            if(x==360){
                x=0;
                y=y+dimy;
            }
        }
       dibujarLineas2();
       conteo();
}


function mostrarmarcador(){
    let html = '<h3>Piezas desordenadas</h3><a id="number1">0</a><h3>Movimientos realizados</h3><a id="number2">0</a><h3>Tiempo</h3><a id="number3">0</a>';
    document.querySelector('#marcador').innerHTML = html;
    _MYTIMER_=setInterval(mytimer,1000);
}

function actmoves(){
    var l = document.getElementById("number2");
    l.innerHTML = _MOVES_;
}

function actdes(){
    var l = document.getElementById("number1");
    l.innerHTML = _PIEZADES_;
}


function mytimer(){
var l = document.getElementById("number3");
  l.innerHTML = _TIME_;
  _TIME_++;
}

function terminar(){
    _TIMEOUT_=_TIME_-1;
    mostrar1();
    parartimer()

}

function parartimer(){
    clearInterval(_MYTIMER_);
}

function sacarFilaColumna(e){
    let x = e.offsetX,
            y = e.offsetY,
            dim = e.target.width / _NCOLS_;
        let fila;
        let col;
    col=Math.floor(x/dim);
    fila=Math.floor(y/dim);

    return[col,fila]
}

function mostrar1(){ //terminar
    document.getElementById('myModal1').style.display = "block";
    var l = document.getElementById("info");
    l.innerHTML = '¡Has dejado ' +  _PIEZADES_ +' piezas por colocar bien después de ' + _MOVES_ + ' movimientos y has empleado ' + _TIMEOUT_ + ' segundos!';

}

function mostrar2(){ //terminar
    document.getElementById('myModal1').style.display = "block";
    var l = document.getElementById("info");
    l.innerHTML = '¡¡¡Enhorabuena!!! Has montado el puzzle en ' + _TIMEOUT_ + ' segundos y ' + _MOVES_ + ' movimientos.';

}

function ocultar1(){ //terminar
    document.getElementById('myModal1').style.display = "none";
    _ANCHO_= 360;
    _ALTO_ = 240;
    _NCOLS_ = 6;
    _NROW_ =4;
    _HAYFOTO_ = false;
    _BLOQUEAR_ = false;
    _TIME_=1;
    _TIMEOUT_=0;
    _MYTIMER_=0;
    _PIEZADES_=0;
    _MOVES_=0;
    cont = 0;
    pieces = [];
    pieces2 = [];
    img=new Image();
    comp= false;
    emp=false;
    num2=[];
    num23=[]
    compru=0;
    compru1=0;
    fi=0;
    co=0;
    val=false;
    xx=0;
    yy=0;
    img1=new Image();
    img2=new Image();
    limpiar();
    imagen();
    limpiar2();
    limpiarmarcador();
    habilitarBotonesArriba();

    habilitarSubirFoto();
    cambiarColor();

    let cv=document.querySelector('#cv02'),
        ctx=cv.getContext('2d');
        ctx.strokeStyle="#000000";

    var l = document.getElementById("subefoto");
    l.innerHTML = '<input type="file" name="file" id="boton" accept="image/*" onchange="ImgSource(this)"></input>';
    var l = document.getElementById("botonera2");
    l.innerHTML = '<label>Color: <input type="color" id="color" onchange="cambiarColor(), dibujarLineas()"></label><label>Dificultad: </label><select id="dificultad" name=dificultad onchange="seleccionarDificultad(), dibujarLineas()"><option value="1">Baja</option><option value="2">Media</option><option value="3">Alta</option></select><br><button id="btn1" onclick="empezar()"> Empezar </button><button id="btn2" onclick="terminar()"> Terminar </button><button id="btn3" onclick="ayuda()"> Ayuda </button>';
    deshabilitarBotonesAbajo();
}

function limpiarmarcador(){
    let html = '';
    document.querySelector('#marcador').innerHTML = html;
}

function ganar(){
    _TIMEOUT_=_TIME_-1;
    mostrar2();
    parartimer()
}
