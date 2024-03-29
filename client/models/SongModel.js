// Song.js - Defines a backbone model class for songs.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Models = window.MyTunes.Models || {};

MyTunes.Models.SongModel = Backbone.Model.extend({

  playcount: 0,

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.playcount++;
    this.trigger('play', this);
  },
  ended: function(){
    this.trigger('ended', this);
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  },
  enqueue: function(){
    this.trigger('enqueue',this);
  }

});
