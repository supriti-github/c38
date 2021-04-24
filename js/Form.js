class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2'); // add this.title
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    // var title = createElement('h2')
    this.title.html("Car Racing Game"); // add this.title
    this.title.position(displayWidth/2-80, 0); // this.title

    this.input.position(displayWidth/2 -40, displayHeight/2 -80); // this.
    this.button.position(displayWidth/2 +30, displayHeight/2); // this.

    this.button.mousePressed(()=>{  // function(){ is written as ()=>{
      this.input.hide(); // this.
      this.button.hide(); // this.
      player.name = this.input.value(); //
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-70, displayHeight/4);
    });

  }
}
