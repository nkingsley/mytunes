describe('AppView', function() {
  var appView, app;

  beforeEach(function () {
    app = new MyTunes.Models.AppModel({library:
      new MyTunes.Collections.Songs([
       {
          artist: 'Fakey McFakerson',
          title: 'Never Gonna Mock You Up',
          url: 'example/url'
        },
        {
          artist: 'BittyBacon',
          title: 'Sizzle Sundays',
          url: 'fake/url'
        }
      ])
    });
    appView = new MyTunes.Views.AppView({model: app});
  });

  it('should generate a PlayerView when created', function(){
    expect(appView.playerView).toEqual(jasmine.any(MyTunes.Views.PlayerView));
  });
  describe('when the currently playing song changes', function() {
    it('updates current song in playerView', function(){
      var song = app.get('library').at(0);
      expect(appView.playerView.model).not.toEqual(song);
      song.play();
      expect(appView.playerView.model).toEqual(song);
    });
  });
  describe('when a song is played', function() {
    it('increments the playcount', function(){
      var song = app.get('library').at(0);
      song.play();
      expect(song.playcount).toEqual(1);
    });
  });

});
