function addBall(){
    var ball = document.createElement('div');
    ball.setAttribute('class', 'ball');
    var p1 = Math.floor(Math.random() * (document.documentElement.clientHeight - 132 ));
    var p2 = Math.floor(Math.random() * (document.documentElement.clientWidth - 132 ));
    var rdm = Math.floor(Math.random() * 899);
    ball.innerHTML = "Clique aqui!";
    ball.setAttribute('style','left:'+p2+'px; top:'+p1+'px; background-color:#'+rdm);
    ball.setAttribute('onclick','addBall();pop(this)');
    document.body.appendChild(ball);
}
function pop(ball){
    document.body.removeChild(ball);
}
function playGame(){
    addBall()
    setInterval(addBall, 2000);
}