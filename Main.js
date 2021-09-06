var canvas = new fabric.Canvas("myCanvas");
Tenis_y = 0;
Tenis_x = 0;
hole_y = 400;
hole_x = 800;

block_image_width = 5;
block_image_height = 5;

function load_img() {
  fabric.Image.fromURL("Hole.png", function (Img) {
    hole_obj = Img;
    hole_obj.scaleToWidth(50);
    hole_obj.scaleToHeight(50);
    hole_obj.set({
      top: hole_y,
      left: hole_x,
    });
    canvas.add(hole_obj);
  });
  new_image(); 
}

function new_image() {
  fabric.Image.fromURL("Tenis.png", function (Img) {
    Tenis_obj = Img;
    Tenis_obj.scaleToWidth(50);
    Tenis_obj.scaleToHeight(50);
    Tenis_obj.set({
      top: Tenis_y,
      left: Tenis_x,
    });
    canvas.add(Tenis_obj);
  });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if (Tenis_x> hole_x  && Tenis_y > hole_y) {
    canvas.remove(Tenis_obj);
    console.log("You have Hit the Goal!!!");
    document.getElementById("hd3").innerHTML = "You have Hit the Goal!!!";
    document.getElementById("myCanvas").style.borderColor = "red";
  } else {
    if (keyPressed == "38") {
      up();
      console.log("up");
    }
    if (keyPressed == "40") {
      down();
      console.log("down");
    }
    if (keyPressed == "37") {
      left();
      console.log("left");
    }
    if (keyPressed == "39") {
      right();
      console.log("right");
    }
  }

  function up() {
    if (Tenis_y >= 5) {
      Tenis_y = Tenis_y - block_image_height;
      console.log("block image height = " + block_image_height);
      console.log(
        "When Up arrow key is pressed, X =  " + Tenis_x + " , Y = " + Tenis_y
      );
      canvas.remove(Tenis_obj);
      new_image();
    }
  }

  function down() {
    if (Tenis_y <= 450) {
      Tenis_y = Tenis_y + block_image_height;
      console.log("block image height = " + block_image_height);
      console.log(
        "When Down arrow key is pressed, X =  " + Tenis_x + " , Y = " + Tenis_y
      );
      canvas.remove(Tenis_obj);
      new_image();
}}

  function left() {
    if (Tenis_x > 5) {
      Tenis_x = Tenis_x - block_image_width;
      console.log("block image width = " + block_image_width);
      console.log(
        "When Left arrow key is pressed, X =  " + Tenis_x + " , Y = " + Tenis_y
      );
      canvas.remove(Tenis_obj);
      new_image();
    }
  }

  function right() {
    if (Tenis_x <= 1050) {
      Tenis_x = Tenis_x + block_image_width;
      console.log("block image width = " + block_image_width);
      console.log(
        "When Right arrow key is pressed, X =  " + Tenis_x + " , Y = " + Tenis_y
      );
      canvas.remove(Tenis_obj);
      new_image();
    }
  }
}
