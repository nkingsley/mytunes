// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  initialize: function(){
    var that = this;
    this.model.on("play", function(){
      that.render();
    });
  },

  template: _.template('<td>(<%= attr.artist %>)</td><td><%= attr.title %></td><td><%= playcount %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template({attr: this.model.attributes, playcount: this.model.playcount}));
  }

});
