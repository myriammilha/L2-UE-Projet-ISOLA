
var j1;
var j2;
var taillex;
var tailley;

    j1 =""+prompt("joueur 1 : ", "votre nom ici");
    j2 =""+prompt("joueur 2 : ", "votre nom ici");
    taillex =""+prompt("taille en longueur ", "tapez ici");
    tailley =""+prompt("taille largeur ", "tapez ici");
 
//création de la class joueur avec constructeur et initialisation de tableau des joueurs
class Joueur{
    id ;
    nickname ;
    avatare = "";
    position ;
    pre_position = -1;
    history = [];

    constructor(id,nickname,avatare,position){
        this.id = id
        this.position = position
        this.nickname = nickname
        this.avatare = avatare
    }


}

var joueur = [];

joueur[0] = new Joueur(12,j1,"img/index.png",5)
joueur[1] = new Joueur(11,j2,"img/index2.png",0)
var player = joueur[0]
var turn = 0

//--------------------------------------------------------------------------------------//
var affichage = [j1," VS ",j2] ;
   var tab_j_affiche = document.getElementById("joueurss");
    var tab_j_holder =document.createElement("TABLE");
    tab_j_affiche.style.color="white"
    for(let i=0;i<3;i++){
        var tab_j_lig = document.createElement("TR");
        var tab_j_col = document.createElement("TD");
        tab_j_col.className = "td_tab_nom"
        tab_j_col.id = "a"+i
        tab_j_col.innerHTML = affichage[i];
        tab_j_lig.append(tab_j_col);
        tab_j_holder.appendChild(tab_j_lig);

    }
    tab_j_affiche.appendChild(tab_j_holder);
    




// création des classes Case et plateau qui vont encapsuler les information sur l'état général du jeux 


class Case {
    id ;
    position ;
    blocked = false ;
    occupied = false ;
    img_src = "";

    constructor(id,position){
        this.id = id ;
        this.position =position
    }

}

class Plateau {
    lignes;
    colones;
    cases = [] ;
    nbr_case ;

    constructor(lignes,colones){
        this.lignes = lignes
        this.colones = colones
        this.nbr_case = lignes*colones

        for(let i=0;i<this.nbr_case;i++){
            if(i==0 || i == lignes-1 || i == lignes*colones-1 || i == (lignes-1)*colones)
            this.cases[i] = new Case(i,0);

            else
             this.cases[i] = new Case(i,2);

        }
    }
}

var c =0
var table = document.getElementById("tab");

function draw_table(plateau){

    for (let i = 0; i < plateau.lignes; i++) {
        var tr = document.createElement("TR");
        for (let j = 0; j < plateau.colones; j++) {
            
            
            var tds = document.createElement("TD");
            tds.className ="caseBleu"
            tds.id = i*plateau.lignes + j
            tds.setAttribute("onclick","move_player("+tds.id+")")
            tr.appendChild(tds)
            
            
        }
    table.appendChild(tr);
        
    }

    for(let i =0;i<2;i++){

        if(c == 0){
            var affich = player.nickname + " doit se deplacer";
            document.getElementById("info").innerHTML=affich;
            document.getElementById("info").style.color="white";
            c++
        }

        var trt = document.getElementById(joueur[i].position)
        var im = document.createElement("IMG")
        im.id ="case"+joueur[i].position
        im.height=40
        im.src =joueur[i].avatare
        trt.appendChild(im)

    }
    
}



var board = new Plateau(taillex,tailley)

draw_table(board)
//initialisation d'un tableau board avec appel a la fonction draw table pour dessiner le plateau de jeu
//----------------------------------------------------------------------------------//

var blocked = []// tableau des cases blocker

function possible_moves(case_id){

    var moves = []
    var moves_allowed = []

    if(case_id == 0 ){
        moves = [case_id+1,case_id+board.lignes,case_id+board.lignes+1]
        
    }
    else if(case_id == board.colones*(board.lignes-1)){
        moves = [case_id+1,case_id-board.colones+1,case_id-board.lignes]
    }
    else if(case_id == board.lignes-1) {
        moves = [case_id-1,case_id+board.lignes-1,case_id+board.lignes]
    }
    else if(case_id == board.lignes*board.colones-1){
        moves = [case_id-1,case_id-board.lignes,case_id-board.cases-1]
    
    }else if(case_id%board.lignes == 0){
        moves = [case_id+1,case_id+board.lignes,case_id+board.lignes+1,
            case_id-board.lignes,case_id-board.lignes+1]

    }else if((case_id-(board.lignes-1))%board.lignes == 0){
        moves = [case_id-1,case_id-board.lignes,case_id-board.lignes-1,
            case_id+board.lignes,case_id+board.lignes-1]
    
   
    }
    else{ moves = [case_id-1,case_id+1,case_id+board.lignes,case_id+board.lignes-1,case_id+board.lignes+1,
                    case_id-board.lignes,case_id-board.lignes-1,case_id-board.lignes+1]
        }
    
    
    
    /*for(var i =0; i<moves.length;i++){
        if(blocked.indexOf(moves[i]) != -1){
         moves.splice(moves[i],1)   
        }
    }*/
    
    for(let k=0;k<moves.length;k++){
        if(moves[k]>=0 && moves[k]<=36){
        if(board.cases[moves[k]].blocked == false && board.cases[moves[k]].occupied == false){
             moves_allowed.push(moves[k])
            }
        }
            
    }
    
    return moves_allowed
}

function winner(tableau){
    var taille = tableau.length ;
    //alert(tableau);
    for (let index = 0; index < tableau.length ; index++) {
        if(tableau[index]>=0 && tableau[index]<36){
        if (board.cases[tableau[index]].blocked == true || board.cases[tableau[index]].occupied == true ){
            taille-- ;
        }
        }else taille--
        
    }
    //alert(taille)
    if(taille == 0){ alert("we have a winner");
    return 0

    }else return 1


}

function minmax(position,depth,maximizingPlayer){
    
        var tableau = possible_moves(position)
        taille = tableau.length;
        
        var eval;
    if(depth==0){  return taille; }

    if(maximizingPlayer){
        
        
        maxEval = -100000;

        for(let i=0;i<tableau.length;i++){
            eval = minmax(tableau[i],depth-1,!maximizingPlayer);
            
            if(eval >= maxEval) maxEval = eval ; 
        }
        return maxEval
    }else{
        minEval = 1000000;

        for(let i=0;i<tableau.length;i++){
            eval = minmax(tableau[i],depth-1,maximizingPlayer);
            if(eval <= minEval) minEval = eval ;    
        }return minEval
    }
}

function minMax(position, depth){
    var tav = possible_moves(position);
    var tmp =[];var tmp2=[0]
    var choix = -10000;
    index_choix = 0 ;
    for(let y=0;y<tav.length;y++){
        tmp = possible_moves(tav[y])
        if(tmp.length>choix){ choix = tmp.length; index_choix = tav[y]}
    }
    return index_choix
}
//-------------------------------------------------------------------------------------------------//


function draw_player(player,case_id){
    var tmp = document.getElementById(case_id)

    var delt_img = document.getElementById("case"+player.pre_position)
    delt_img.remove()

    var avr = document.createElement("IMG")
    avr.id ="case"+case_id
    avr.height=40
    avr.src =player.avatare
    tmp.appendChild(avr)
    turn++
}


function draw_blocked_case(player,case_id){
    var tmp = document.getElementById(case_id)
    var blck = document.createElement("IMG")
            blck.src="img/blk.png"
            blck.height = 50
            tmp.appendChild(blck)

}


// defénition de la fonction move player qui va s'occuper de bouger les joueurs dans le tableau
var possible_m = []// tableau des case possible ou on peut aller
possible_m = possible_moves(player.position)
/*
the AI implementation to play the game vs real humans

*/
 

function move_player(case_id){
    
    
    
    
    var tmp = document.getElementById(case_id)

    switch (turn) {
        case 0:
            
            /*if(possible_m.length == 0){
                alert("we have a winer !")
                return
            }*/
            if(possible_m.indexOf(case_id) == -1) return
            
            if(board.cases[case_id].blocked == false && board.cases[case_id].occupied == false){
                

                if(joueur[0].id == player.id) deuxieme = joueur[1]
                else deuxieme = joueur[0]
                var affich = player.nickname + " doit bloquer";
                document.getElementById("info").innerHTML=affich;
                if(joueur[0].id == deuxieme.id) deuxieme = joueur[1]
                else deuxieme = joueur[0]

                player.pre_position = player.position
                player.position = case_id

                // changer le statu de la case dans le tableau a occupe et libére la case precedente
                board.cases[player.pre_position].occupied = false
                board.cases[player.position].occupied = true

                draw_player(player,case_id)
/*
                //effacer l'image de la case précedente et afficher la nouvelle
                var delt_img = document.getElementById("case"+player.pre_position)
                delt_img.remove()

                var avr = document.createElement("IMG")
                avr.id ="case"+case_id
                avr.height=40
                avr.src =player.avatare
                tmp.appendChild(avr)
                turn++
                
*/
            }else;
            

            break;
    
        default:

            //blocking the clicked case 
            var cc = 0
            if(board.cases[case_id].blocked != true && board.cases[case_id].occupied != true){

                if(joueur[0].id == player.id) deuxieme = joueur[1]
            else deuxieme = joueur[0]
            var affich = deuxieme.nickname + " doit se deplacer";
            document.getElementById("info").innerHTML=affich;
            if(joueur[0].id == deuxieme.id) deuxieme = joueur[1]
            else deuxieme = joueur[0]

            if(board.cases[case_id].blocked != true) blocked.push(case_id)
            board.cases[case_id].blocked = true

            draw_blocked_case(player,case_id)
            
            //resseting the turn variable and changing the player
            turn = 0
            if(joueur[0].id == player.id){ 
              // code for self playing stupid bot
                /*player = joueur[1]
                possible_m = possible_moves(player.position)
                move_player(possible_m[7])
                move_player(Math.floor(Math.random()*20))
                
                player = joueur[0]
                */
               player = joueur[1]
               
            }
            else player = joueur[0]

            

            possible_m = possible_moves(player.position)
            //prediction = minmax(player.position,2,true);
            //prediction = minMax(player.position,0)
            //alert(prediction)
            winner(possible_m)
            
            

               

            //verifier si la partie est encore jouable !!!
        }else ;

        
            break;
    }
    









    /*if(board.cases[case_id].occupied == true){
        return 
    }
    if(player.pre_position != -1)
    board.cases[player.pre_position].occupied = false

    var tmp = document.getElementById(case_id)
    
        player.pre_position = player.position
        player.position = case_id ;


        if(player.pre_position != -1){

            var delt_img = document.getElementById("case"+player.pre_position)
            delt_img.remove()
        }

        
        if(!tmp.hasChildNodes()){
           
        
        var avr = document.createElement("IMG")
        avr.id ="case"+case_id
        avr.height=40
        avr.src =player.avatare

        tmp.appendChild(avr)
        board.cases[case_id].occupied = true
        if(player.id == joueur[0].id) player = joueur[1]
        else player = joueur[0]
    }*/
    

}








//------------------------------------ Main*--------------------------------------//





