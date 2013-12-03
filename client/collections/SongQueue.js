// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({
  initialize: function(){
    this.on("add", function(){
      if (this.length === 1) {
       this.playFirst();
      }
    });
    this.on("ended", function(){
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    });
    this.on("dequeue", function(e){
      this.remove(e);
      this.playFirst();
    });
    this.on("selected", function(e){
      if (this.length){
        this.playFirst();
      }
    });
  },
  playFirst: function(){
    this.at(0).play();
    this.trigger("playFirst",this);
  }
});
