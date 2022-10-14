function draw() {
    const canvas = document.getElementById("page");
    const ctx = canvas.getContext("2d");

    ctx.font = "20px serif";
    ctx.fillText("Stayna Alexandre",50,50);
    ctx.fillText("Bar Graph",600,50)

    var fruit = [
        { "name": "Strawberry", "quantity": 15, "color": "red" },
        { "name": "Peach", "quantity": 10, "color": "orange" },
        { "name": "Banana", "quantity": 25, "color": "yellow" },
        { "name": "Pear", "quantity": 10, "color": "green" },
        { "name": "Grape", "quantity": 20, "color": "purple" },
    ];
   //canvas width 1420 and height 700    
   ctx.beginPath();
   ctx.moveTo(400,100);
   ctx.lineTo(400,600);
   ctx.lineTo(1000,600);
   ctx.lineWidith=5;
   ctx.stroke();
    //loop through json array:
    for (let i = 0; i < fruit.length; i++) {
        ctx.font = "20px serif";
        ctx.fillStyle = "black";
        ctx.textBaseline = "hanging";
        ctx.fillText(fruit[i].name, 300, (100 * i+140))

        ctx.fillStyle = fruit[i].color;
        ctx.fillRect(401, (100 * i+100), fruit[i].quantity*20, 100);
        ctx.strokeStyle = "black";
        ctx.strokeRect(401, (100 * i+100), fruit[i].quantity*20, 100)
        ctx.lineWidith = 5;
    }
    //mini lines: by 10s
    for (let i = 0; i < 7; i++) {
        ctx.beginPath();
        ctx.moveTo(400 + (100 * i), 600);
        ctx.lineTo(400 + (100 * i), 620)
        ctx.closePath();
        ctx.stroke();
    } 
    ctx.fillStyle="black"
    ctx.fillText("0",395,620)
    ctx.fillText("5",495,620)
    ctx.fillText("10",595,620)
    ctx.fillText("15",695,620)
    ctx.fillText("20",795,620)
    ctx.fillText("25",895,620)
    ctx.fillText("30",995,620) 
    /* //grid
    for(var i=0;i<1420;i++){
        ctx.strokeStyle="blue";
        ctx.beginPath();
        ctx.moveTo(i*100,0);
        ctx.lineTo(i*100,700);
        ctx.stroke();
    }
    for(var i=0;i<700;i++){
        ctx.strokeStyle="blue";
        ctx.beginPath();
        ctx.moveTo(0,100*i);
        ctx.lineTo(1420,100*i);
        ctx.stroke();
    } */
}