class Question {
    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput("Enter your name");
      this.answer = createInput("Enter your option");
      this.button = createButton('Submit');
      this.greeting = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');

      
    }
  
    hide() {
      this.greeting.hide();
      this.button.hide();
      this.input1.hide();
      this.answer.hide();
    }
  
    display(){
      
      title.html("My Quiz Game");
      title.position(425, 0);

      this.question.html("Question: What starts with the letter 'e' but has only one letter?");
      this.question.position(150, 80);
      this.option1.html("1. Everyone");
      this.option1.position(150, 100);
      this.option2.html("2. Envelope");
      this.option2.html(150, 120);
      this.option3.html("3. Estimate");
      this.option3.html(150, 140);
      this.option4.html("4. Example");
      this.option4.html(150, 160);
      
      this.input1.position(150, 230);
      this.answer.position(250, 230)
      this.button.position(200, 250);
  
      this.button.mousePressed(() => {
        this.input1.hide();
        this.button.hide();
        this.answer.hide();
        this.title.hide();
  
        contestant.name = this.input1.value();
        contestant.answer = this.answer.value();
        
        
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
    }
  }
  