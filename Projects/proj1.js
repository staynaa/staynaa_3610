//canvas is 600x600
function draw() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        //background
        ctx.fillStyle = "#512F0C";
        ctx.fillRect(0, 450, 600, 200); //ground
        ctx.fillStyle="#02053D";
        ctx.fillRect(0,0,600,450); //sky

        //for loop to make stars
        for(let i=0;i<500;i+=100){
            for(let j=0;j<600;j+=100){
                ctx.beginPath();
                ctx.moveTo(50+j,50+i) //200
                ctx.lineTo(30+j,30+i) //180
                ctx.lineTo(50+j,30+i) //180
                ctx.lineTo(30+j,50+i) //200
                ctx.lineTo(40+j,20+i) //170
                ctx.closePath();
                ctx.fillStyle="yellow"
                ctx.fill();
                ctx.strokeStyle="white"
                ctx.stroke();
            }
        }
         //tent
         ctx.fillStyle="white";
         ctx.beginPath();
         ctx.moveTo(300,300);
         ctx.lineTo(150,500);
         ctx.lineTo(450,500);
         ctx.fillStyle="#632034"
         ctx.fill();
         ctx.strokeStyle="black"
         ctx.stroke();
         
         ctx.beginPath(); //tent drape on left
         ctx.moveTo(300,300);
         ctx.quadraticCurveTo(310,400,150,500) //start curving til... 
         ctx.fillStyle="#C13E67"
         ctx.fill();

         ctx.stroke();
         ctx.beginPath(); //tent drape on right
         ctx.moveTo(300,300);
         ctx.quadraticCurveTo(295,510,450,500);
         ctx.fillStyle="#C13E67"
         ctx.fill();
         ctx.stroke();
        //moon
        ctx.beginPath();
        ctx.arc(100,100,50,0,2*Math.PI) //center (100,100) with radius of 50
        ctx.fillStyle="#d8dde6"
        ctx.fill();
        ctx.strokeStyle="#8e9299"
        ctx.stroke();
         
        //sign
        ctx.fillStyle="#a88c4a"
        ctx.fillRect(60,400,20,100)
        ctx.fillRect(10,350,120,50)
        
        ctx.font="18px serif"
        ctx.fillStyle="black"
        ctx.textAlign="center"
        ctx.fillText("Camp Brooklyn",70,380)
        


         //grid
        /* for(let i=0;i<600;i+=10){
            ctx.moveTo(i,0)
            ctx.lineTo(i,600)
            ctx.strokeStyle="green"
            ctx.stroke();
         }
         for(let i=0;i<600;i+=10){
            ctx.moveTo(0,i)
            ctx.lineTo(600,i)
            ctx.strokeStyle="orange"
            ctx.stroke();
         }*/
    }

}