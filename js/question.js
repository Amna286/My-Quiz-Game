class Question {
    constructor() {
      this.input = createInput("Enter your name");
      this.answer = createInput("Enter your answer");
      this.button = createButton('Submit');
      this.greeting = createElement('h3');
    }
  
    hide() {
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.answer.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("My Quiz Game");
      title.position(425, 0);

      this.question.html("Question: What starts with the letter 'e' but has only one letter?");
      this.question.position(150, 80);
      this.option1.html("1. Everyone");
      this.option1.position(150, 100);
      this.option2.html("2. Envelope");
      this.option2.html(150, 120);
      
      this.input.position(150, 230);
      this.answer.position(250, 230)
      this.button.position(200, 250);
  
      this.button.mousePressed(() => {
        this.input.hide();
        this.button.hide();
  
        player.name = this.input.value();
        
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name);
        this.greeting.position(130, 160);
      });
    }
  }
  