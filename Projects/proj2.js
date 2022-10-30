function draw(font) {
    const name = document.getElementById("fname").value
    const bgc = document.getElementById("Bcolor").value;
    const textColor = document.getElementById("Tcolor").value;
    const fontCh = font;
    const fontSize = document.getElementById("Tsize").value;
    const reset = document.getElementById("reset");
  
    const fontinfo = fontSize + "px " + fontCh; //font size and style
    //console.log(fontinfo) 
  
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      reset.onclick = function () { //reset canvas to blank
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
  
  
      ctx.fillStyle = bgc;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.moveTo(350, 200);
      ctx.lineTo(350, 300);
      //ctx.stroke();
      ctx.textAlign = 'center'
      ctx.fillStyle = textColor
      ctx.font = fontinfo
      ctx.fillText(name, 350, 250)
    }
  }