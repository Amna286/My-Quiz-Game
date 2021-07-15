class Contestant {
    constructor() {
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount() {
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value", (data) =>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count) {
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update() {
      //this.index = playerCount;
      var contestantIndex = "contestants/contestant" + this.index;
      console.log(this.index);
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance,
      });
    }
  
    static getContestantInfo() {
      var contestantInfoRef = database.ref('contestants');
      contestantInfoRef.on("value", (data)=> {
        allContestants = data.val();
      })
    }
  }