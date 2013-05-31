Raffler.Views.EntriesIndex = Backbone.View.extend({

  template: JST['entries/index'],

  events: {
    "submit #new_entry": "createEntry",
    "click #draw": "drawWinner"
  },

  initialize: function() {
    this.collection.on("reset", this.render, this);
    this.collection.on("add", this.appendEntry, this);
  },

  render: function() {
    this.$el.html(this.template());
    this.collection.each(this.appendEntry, this);
    return this;
  },

  appendEntry: function(entry) {
    view = new Raffler.Views.Entry({ model: entry });
    this.$("#entries").append(view.render().el);
  },

  createEntry: function(e) {
    e.preventDefault();
    attributes = { "name": this.$("#new_entry_name").val() };

    var self = this;
    this.collection.create(
      attributes, {
        wait: true,

        success: function() {
          self.$("#new_entry")[0].reset();
        },

        error: this.handleError
      }
    );
  },

  drawWinner: function(e) {
    e.preventDefault();
    this.collection.drawWinner();
  },

  handleError: function(entry, response) {
    if (response.status === 422) {
      errors = $.parseJSON(response.responseText).errors;
      _.each(errors, function(value, key) {
        alert(key + " " + value);
      });
    }
  }
});
