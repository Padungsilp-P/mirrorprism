var RB;
var GB;
var BB;
var f;
var Picki;
var Pickj;
function setup() {
  // put setup code here
    createCanvas(1280,1024);
    ResetAll();
    f=1;
}

function draw() {
  // put drawing code here
    //background(255-(mouseX*255/1280),255-(mouseY*255/1024),255-((mouseX+mouseY)*255/2304));
    background(RB,GB,BB);
    if(f==1)
    {
        Cycle();
    }
    else if(f==2)
    {
        Triangle();
    }
    else{
        Quad();
    }
    if(mouseX>=Picki*128 && mouseX<=(Picki*128)+128 && mouseY>=Pickj*128 && mouseY<=(Pickj*128)+128)
    {
        fill("red");
        textSize(20);
        textStyle(BOLD);
        stroke("white");
        strokeWeight(2);
        text("Click",mouseX+20,mouseY+10);
        noFill();
        stroke("red");
        strokeWeight(5);
        ellipse(mouseX, mouseY, 20, 20);
    }
    
    
}

function mousePressed(){
    if(mouseX>=Picki*128 && mouseX<=(Picki*128)+128 && mouseY>=Pickj*128 && mouseY<=(Pickj*128)+128)
    {
        ResetAll();
    }
    
}

function Cycle(){
    noStroke();
    for(var i=0; i<= 9; i++)
    {
        for(var j=0; j<= 7; j++)
        {
            if(i==Picki && j==Pickj)
            {
                fill((mouseX*255/1280),(mouseY*255/1024),(mouseX+mouseY)*255/2304);
                ellipse((i*128)+64,(j*128)+64,128,128);
            }
            else
            {
                fill(255-(mouseX*255/1280),255-(mouseY*255/1024),255-((mouseX+mouseY)*255/2304));
                ellipse((i*128)+64,(j*128)+64,128,128);
            }
        }
    }
    
}
function Triangle(){
    noStroke();
    for(var i=0; i<= 9; i++)
    {
        for(var j=0; j<= 7; j++)
        {
            if(i==Picki && j==Pickj)
            {
                fill((mouseX*255/1280),(mouseY*255/1024),(mouseX+mouseY)*255/2304);
                triangle(i*128, (j*128)+128, (i*128)+64, j*128, (i*128)+128, (j*128)+128);
            }
            else
            {
                fill(255-(mouseX*255/1280),255-(mouseY*255/1024),255-((mouseX+mouseY)*255/2304));
                triangle(i*128, (j*128)+128, (i*128)+64, j*128, (i*128)+128, (j*128)+128);
                
            }
        }
    }
}
function Quad(){
    noStroke();
    for(var i=0; i<= 9; i++)
    {
        for(var j=0; j<= 7; j++)
        {
            if(i==Picki && j==Pickj)
            {
                fill((mouseX*255/1280),(mouseY*255/1024),(mouseX+mouseY)*255/2304);
                quad(i*128, (j*128)+64, (i*128)+64, j*128, (i*128)+128, (j*128)+64 , (i*128)+64, (j*128)+128);
            }
            else
            {
                fill(255-(mouseX*255/1280),255-(mouseY*255/1024),255-((mouseX+mouseY)*255/2304));
                quad(i*128, (j*128)+64, (i*128)+64, j*128, (i*128)+128, (j*128)+64 , (i*128)+64, (j*128)+128);
                
            }
        }
        
    }
}
function ResetAll(){
    RB=random(255);
    GB=random(255);
    BB=random(255);
    Picki=random(10);
    Pickj=random(8);
    Picki-=Picki%1;
    Pickj-=Pickj%1;
    f=random(3);
    f=f-(f%1)+1;
}