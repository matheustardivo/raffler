Raffler.Views.EntriesShow = Backbone.View.extend({

  template: JST['entries/show'],

  events: {
    "click #back": "backToIndex"
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  backToIndex: function() {
    Backbone.history.navigate("/", true);
  }

});
