$(function(){
    var MR_bool = {
        matriz : [] ,
        //todo es verdadero hasta que se demuestre lo contrario
        longitud : 1 ,
        reflexiva : 1 ,
        arreflexiva : 1 ,
        simetrica : 1 ,
        asimetrica : 1 ,
        antisimetrica : 1 ,
        transitiva : 1 ,
        formarMatriz : function(){
            var i, j;
            MR_bool.matriz = [MR_bool.longitud]; 
            
            for(i = 0;i < MR_bool.longitud;i++)
            {
                MR_bool.matriz[i] = [MR_bool.longitud]; //inicializar cada array OBLIGATORIO
                for(j = 0;j < MR_bool.longitud;j++)
                {
                    MR_bool.matriz[i][j] = $("#M" + i + j ).val();
                }
            }
        },
        comprobarReflexiva : function(){
            var cont = 0;
            for(var i = 0;i < MR_bool.longitud;i++)
            {
                if(MR_bool.matriz[i][i] == 1)
                {
                    cont++;    
                }
            }
            if(cont == MR_bool.longitud)
            {
                MR_bool.reflexiva = 1;
                $("#esReflexiva").text("Verdadero");
            }
            else
            {
                MR_bool.reflexiva = 0;
                $("#esReflexiva").text("Falso");
            }
        },
        comprobarArreflexiva : function(){
            if(MR_bool.reflexiva == 1)
            {
                MR_bool.arreflexiva = 0;
                $("#esArreflexiva").text("Falso");
            }
            else
            {
                var cont = 0;
                for(var i = 0;i < MR_bool.longitud;i++)
                {
                    if(MR_bool.matriz[i][i] == 0)
                    {
                        cont++;    
                    }
                }
                if(cont == MR_bool.longitud)
                {
                    MR_bool.arreflexiva = 1;
                    $("#esArreflexiva").text("Verdadero");
                }
                else
                {
                    MR_bool.arreflexiva = 0;
                    $("#esArreflexiva").text("Falso");
                }
            }
        },
        comprobarSimetrica : function(){
            var i, j, estado = 1;
            for(i = 0;i < MR_bool.longitud - 1;i++)
            {
                for(j = i + 1;j < MR_bool.longitud;j++)
                { 
                    if(MR_bool.matriz[i][j] != MR_bool.matriz[j][i])
                    {
                        estado = 0;
                        MR_bool.simetrica = estado;
                        $("#esSimetrica").text("Falso");
                    }
                }
            }
            if(estado == 1)
            {
                MR_bool.simetrica = estado;
                $("#esSimetrica").text("Verdadero");
            }
        },
        comprobarAntisimetrica : function(){
            var i, j, estado = 1;
            for(i = 0;i < MR_bool.longitud - 1;i++)
            {
                for(j = i + 1;j < MR_bool.longitud;j++)
                { 
                    if(MR_bool.matriz[i][j] == 1 && MR_bool.matriz[j][i] == 1)
                    {
                        estado = 0;
                        MR_bool.antisimetrica = estado;
                        $("#esAntisimetrica").text("Falso");
                    }
                }
            }
            if(estado == 1)
            {
                MR_bool.antisimetrica = estado;
                $("#esAntisimetrica").text("Verdadero");
            }
        },
        comprobarAsimetrica : function(){
            if(MR_bool.arreflexiva == 1 && MR_bool.antisimetrica == 1) {
                MR_bool.asimetrica = 1;
                $("#esAsimetrica").text("Verdadero");
            }
            else {
                MR_bool.asimetrica = 0;
                $("#esAsimetrica").text("Falso");
            }
        },
        comprobarTransitiva: function(){
        
        }
    };
    $("#calcular").on("click",function(){
        MR_bool.formarMatriz();
        MR_bool.comprobarReflexiva();
        MR_bool.comprobarArreflexiva();
        MR_bool.comprobarSimetrica();
        MR_bool.comprobarAntisimetrica();
        MR_bool.comprobarAsimetrica();
        MR_bool.comprobarTransitiva();
    });
    $("#longM").on("keyup", renderizarMatriz);
    
    function renderizarMatriz(){
        var long_M = $("#longM").val();
        if(long_M > 0 && long_M <= 6)
        {
            $("#matrizBooleana").empty(); //remueve todos los hijos MENOS al padre, q es matrizBooleana
            MR_bool.longitud = long_M; // actualiza la propiedad longitud de matrizBooleana
            for(var i = 0;i < long_M;i++)
            {
                $("#matrizBooleana").append("<tr >");
                for(var j = 0;j < long_M;j++)
                {
                    $("#matrizBooleana").append(
                        "<td><input class='componentesM' id='M" + i + j +"' type='text'></td>"
                    );
                }
                $("#matrizBooleana").append("</tr>");
            }
        }
    }
});



