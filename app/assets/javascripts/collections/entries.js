Raffler.Collections.Entries = Backbone.Collection.extend({

  model: Raffler.Models.Entry,
  url: "api/entries",

  drawWinner: function() {
    winner = this.shuffle()[0];
    if (winner) {
      winner.win();
    }
  }

});
