// AppView.js - Defines a backbone view class for the whole music app.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.AppView = Backbone.View.extend({
  events:{
    "click .addPlayList" : "addPlayList",
    "change .pickPlayList" : "changePlayList"
  },
  initialize: function(params){
    this.playerView = new MyTunes.Views.PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new MyTunes.Views.LibraryView({collection: this.model.get('library')});
    this.queueView = new MyTunes.Views.SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    var selectPl = "<select class = 'pickPlayList'><option name = '" + this.model.playList + "'>" + this.model.playList + "</option>";
    for (var key in this.model.playLists){
      if (key === this.model.playList) continue;
      selectPl = selectPl.concat('<option name = "' + key + '">' + key + '</option>');
    }
    selectPl = selectPl.concat("</select>");
    return this.$el.html([
      selectPl,
      "<button class = 'addPlayList'>Add Playlist</button>",
      this.playerView.$el,
      this.libraryView.$el,
      this.queueView.$el
    ]);
  },
  addPlayList: function(){
    var name = prompt("Name Your PlayList");
    this.model.addPlayList(name);
    this.reRender();
  },
  changePlayList: function(e){
    this.model.changePlayList(e.target.value);
    this.reRender();
    this.model.get('songQueue').trigger("selected", this);
  },
  reRender: function(){
    this.queueView = new MyTunes.Views.SongQueueView({collection: this.model.get('songQueue')});
    this.playerView = new MyTunes.Views.PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new MyTunes.Views.LibraryView({collection: this.model.get('library')});
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
    this.render();
  }

});
