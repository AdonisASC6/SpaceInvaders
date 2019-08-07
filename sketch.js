// let circles = []
// let speed;
// function setup(){
//     createCanvas(600,600)
//     for(i = 0; i < 1;i++){
//         let circle = {
//         x : 300 + (i*50),
//         y : 100,
//         r : 50 
//         }   
//     circles.push(circle)
//     speed = 3
//     }
// }

// function draw(){
//     background(200);
//     let player = {
        
//     }

//     beginShape();
//     vertex(315, 420);
//     vertex(320, 420);
//     vertex(320, 440);
//     vertex(360, 440);
//     vertex(360, 480);
//     //vertex(320, 480);
//     vertex(380, 480);
//     vertex(380, 490);
//     vertex(390, 490);
//     vertex(390, 520);
//     vertex(210, 520);
//     vertex(210, 490);
//     vertex(220, 490);
//     vertex(220, 480);
//     vertex(240, 480);
//     vertex(240, 440);
//     vertex(280, 440);
//     vertex(280, 420);
//     endShape(CLOSE);



//     for(i = 0; i < circles.length; i++){
//         let curr = circles[i];
//         fill(0,255,0);
//         ellipse(curr.x,curr.y,curr.r);
//         curr.x += speed
//         if (curr.x < 25|| curr.x > 585){
//             speed = -speed
//         }
//     }

let circles = []
let players = []
let bullets = []
let speed;
let speed2;
let y;
let value;
function setup(){
    createCanvas(600,600)
    for(i = 0; i < 1;i++){
        let circle = {
        x : 300 + (i*25),
        y : 100,
        r : 50 
        }   
    circles.push(circle)
    }
    speed = 3
    speed2 = 5
    y = 500
    value = 
    for(i = 0; i < 1; i++){
        let character = {
            x2: 300 +(i*50),
            y2: 500,
            r3: 30,
            r4: 50 
        }
        players.push(character)
    }

}


function draw(){
    background(0);
    //player
    Rectangle(255,300,500,50);
    for(i = 0; i < circles.length; i++){
        let curr = circles[i];
        fill(255,255,255);
        ellipse(curr.x,curr.y,curr.r);
        curr.x += speed
        if (curr.x < 25|| curr.x > 585){
            speed = -speed
        }
    }
    for(i = 0; i < players.length; i++){
        let pla = players[i];
        fill(0,255,0)
        rect(pla.x2,pla.y2,pla.r3,pla.r4)
        if(keyIsDown(LEFT_ARROW)){
            pla.x2 -= 5;
        }
        if(keyIsDown(RIGHT_ARROW)){
            pla.x2 += 5;
        }
        }
}

function Rectangle(a,b,c,d){
    fill(a)
    rect(b,c,d)
}

function keyReleased(){
    if(value === ) 
}
if (keyCode === 32){
    fill(0,255,0)
    ellipse(pla.x2,y,20)
    y -= speed2
}