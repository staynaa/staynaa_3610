function draw() {
  let img = new Image();
  img.src = "pixelForest.jpeg"; //697 × 492
  img.onload = function () { animate(); }
  let sprite1 = new Image();
  let sprite2 = new Image();
  sprite1.src = "Kisuke.png"
  sprite2.src = "Byakuya.png"
  sprite1.onload = function () { animate(); }
  sprite2.onload = function () { animate(); }

  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  const width = 76;
  const height = 109;
  const scaledW = width * 2;
  const scaledH = height * 2;
  //image 0,0 and 60 right and 120 down, put it at 20,300 resize to 120x240
  var grd; //gradient

  function drawSprites(num) {
    ctx.drawImage(img, 0, 0, 697, 492, 0, 0, 697, 492) //background

    if (num < 15) { //kisuke
      grd = ctx.createLinearGradient(0, 0, 0, 170);
      grd.addColorStop(0, "#7a1100");
      grd.addColorStop(1, "#ff5c42");
      ctx.fillStyle = grd
      ctx.fillRect(477, 0, 297, canvas.height); //card
      ctx.drawImage(sprite1, 329, 1255, 110, 173, 477, 150, 110 * 2, 173 * 2)
      
      ctx.font="italic bold 33pt Tahoma"
      ctx.fillStyle="black"
      ctx.strokeStyle="white"
      ctx.fillText("KISUKE",499,100)
      ctx.strokeText("KISUKE",499,100)
    }
    else if (num >= 15 && num<30) { //byakuya
      grd = ctx.createLinearGradient(0, 0, 0, 170);
      grd.addColorStop(0, "#630039");
      grd.addColorStop(1, "#ffc3e6");
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, 220, canvas.height); //card
      ctx.drawImage(sprite2, 662, 815, 110, 173, 0, 150, 110 * 2, 173 * 2)
    
      ctx.font="italic bold 33pt Tahoma"
      ctx.fillStyle="black"
      ctx.strokeStyle = 'white';
      ctx.fillText("BYAKUYA",1,100)
      ctx.strokeText("BYAKUYA",1,100)
    }
    //kisuke's sprites
    if (num == 0) ctx.drawImage(sprite1, 0, 0, width, height, 20, 200, scaledW, scaledH) // 0,  0,    76,   109,  20,   200,  76*2,   109*2
    if (num == 1) ctx.drawImage(sprite1, 0, 118, 200, 120, -90, 185, 200 * 2, 120 * 2) //1  0,  118,  200,  120,  -90   185   200*2   120*2
    if (num == 2) ctx.drawImage(sprite1, 200, 118, 200, 120, -45, 185, 200 * 2, 120 * 2) //2
    if (num == 3) ctx.drawImage(sprite1, 200 * 2, 118, 200, 120, -57, 185, 200 * 2, 120 * 2) //3
    if (num == 4) ctx.drawImage(sprite1, 200 * 3, 118, 200, 120, -57, 185, 200 * 2, 120 * 2) //4
    if (num == 5) ctx.drawImage(sprite1, 200 * 4, 118, 200, 120, -57, 185, 200 * 2, 120 * 2) //5
    if (num == 6) ctx.drawImage(sprite1, 200 * 5, 118, 230, 120, -57, 185, 230 * 2, 120 * 2) //6
    if (num == 7) ctx.drawImage(sprite1, 200 * 6, 118, 200, 120, -138, 185, 200 * 2, 120 * 2) //7
    if (num == 8) ctx.drawImage(sprite1, 280, 240, 200, 120, -80, 165, 200 * 2, 120 * 2) //8
    if (num == 9) ctx.drawImage(sprite1, 280 + 200, 240, 150, 120, 30, 175, 150 * 2, 120 * 2) //9
    if (num == 10) ctx.drawImage(sprite1, 280 * 2, 240, 200, 120, -90, 175, 200 * 2, 120 * 2) //10
    if (num == 11) ctx.drawImage(sprite1, (280 * 2) + 200, 250, 200, 150, 50, 155, 200 * 2, 150 * 2) //11
    if (num == 12) ctx.drawImage(sprite1, 960, 250, 150, 150, 85, 155, 150 * 2, 150 * 2) //12
    if (num == 13) ctx.drawImage(sprite1, 960 + 150, 250, 150, 150, 75, 155, 150 * 2, 150 * 2) //13
    if (num == 14) ctx.drawImage(sprite1, 960 + 300, 250, 150, 150, 65, 155, 150 * 2, 150 * 2) //14
    //byakuya
    if (num == 15) ctx.drawImage(sprite2, 76, 650, 69, 99, 500, 200, 69 * 2, 99 * 2);
    if (num == 16) ctx.drawImage(sprite2, 157, 650, 69, 99, 500, 200, 69 * 2, 99 * 2);
    if (num == 17) ctx.drawImage(sprite2, 233, 650, 69, 99, 497, 200, 69 * 2, 99 * 2);
    if (num == 18) ctx.drawImage(sprite2, 316, 609, 86, 140, 494, 118, 86 * 2, 140 * 2);
    if (num == 19) ctx.drawImage(sprite2, 406, 609, 86, 140, 497, 118, 86 * 2, 140 * 2);
    if (num == 20) ctx.drawImage(sprite2, 495, 609, 86, 140, 497, 118, 86 * 2, 140 * 2);
    if (num == 21) ctx.drawImage(sprite2, 576, 609, 86, 140, 494, 118, 86 * 2, 140 * 2);
    //other section BYAKUYA
    if (num == 22) ctx.drawImage(sprite2, 0, 1107, 71, 136, 497, 128, 71 * 2, 136 * 2);
    if (num == 23) ctx.drawImage(sprite2, 84, 1107, 71, 136, 497, 128, 71 * 2, 136 * 2);
    if (num == 24) ctx.drawImage(sprite2, 166, 1107, 71, 136, 497, 128, 71 * 2, 136 * 2);
    if (num == 25) ctx.drawImage(sprite2, 253, 1107, 71, 136, 497, 128, 71 * 2, 136 * 2);
    if (num == 26) ctx.drawImage(sprite2, 335, 1107, 71, 136, 497, 128, 71 * 2, 136 * 2);
    if (num == 27) ctx.drawImage(sprite2, 441, 1107, 71, 136, 497, 128, 71 * 2, 136 * 2);
    if (num == 28) ctx.drawImage(sprite2, 555, 1107, 71, 136, 495, 128, 71 * 2, 136 * 2);
    if (num == 29) ctx.drawImage(sprite2, 665, 1107, 71, 136, 497, 128, 71 * 2, 136 * 2);

    if (num >= 30 && num<=40) {
      ctx.globalAlpha = 0.8
      ctx.fillStyle="black"
      ctx.fillRect(0,0,697,492);
      ctx.globalAlpha = 0.2
      ctx.drawImage(sprite2,812,621,207,126,325,0,207*1.8,126*1.8); //behind
      ctx.globalAlpha = 1;
      ctx.drawImage(sprite1,48,1280,207,126,0,0,207*1.8,126*1.8); //infront
      ctx.fillStyle="black"
      ctx.fillRect(0,126*1.8,canvas.width,(492-(126*1.8)))

      ctx.font="30px Courier New"
      ctx.fillStyle="gray"
      ctx.fillText("KISUKE",0,260)
      ctx.font="20px Courier New"
      ctx.fillStyle="white"
      ctx.fillText("Well, This is one interesting match up...",0,290)
    }
    if (num >= 41 && num<=51) {
      ctx.globalAlpha = 0.8
      ctx.fillStyle="black"
      ctx.fillRect(0,0,697,492);
      ctx.globalAlpha = 0.2
      ctx.drawImage(sprite1,48,1280,207,126,0,0,207*1.8,126*1.8); //behind
      ctx.globalAlpha = 1;
      ctx.drawImage(sprite2,812,621,207,126,325,0,207*1.8,126*1.8); //infront
      ctx.fillStyle="black"
      ctx.fillRect(0,126*1.8,canvas.width,(492-(126*1.8)))

      ctx.font="30px Courier New"
      ctx.fillStyle="gray"
      ctx.fillText("BYAKUYA",570,260)
      ctx.font="20px Courier New"
      ctx.fillStyle="white"
      ctx.fillText("Perhaps...",575,290)
    }
  }

  let num = 0;
  let frameC = 0;

  function step() {
    frameC++;
    if (frameC < 31) {
      window.requestAnimationFrame(step);
      return;
    }
    frameC = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSprites(num)
    num++
    if (num > 51) {
      num = 0
    }
    window.requestAnimationFrame(step);
  }
  function animate() {
    window.requestAnimationFrame(step);
    ctx.drawImage(img, 0, 0, 697, 492, 0, 0, 697, 492) //back


  }
}
//200x108
//73,608