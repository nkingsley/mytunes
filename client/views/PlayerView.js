// PlayerView.js - Defines a backbone view class for the music player.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.PlayerView = Backbone.View.extend({
  events: {
    "ended": 'removeFromQueue'
  },

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
  },

  setSong: function(song){
    var that = this;
    this.model = song;
    this.render();
    this.model.on("dequeue", function(){
      that.$el.attr('src','');
    });
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  },

  removeFromQueue: function(){
    this.model.ended();
  }

});
