describe('SongQueueView', function() {
  var view, fakeSongs;

  beforeEach(function() {
    fakeSongs = new MyTunes.Collections.SongQueue([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title:'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title:'test song 2'
      }
    ]);
  });

  it('creates SongQueueEntryViews for each queued song & renders them', function(){
    spyOn(MyTunes.Views.SongQueueEntryView.prototype, 'render').andCallThrough();
    view = new MyTunes.Views.SongQueueView({collection: fakeSongs});
    view.render();
    expect(MyTunes.Views.SongQueueEntryView.prototype.render).toHaveBeenCalled();
  });

  it('renders when add or remove event fires from the song queue collection', function(){
    spyOn(MyTunes.Views.SongQueueView.prototype, 'render').andCallThrough();
    view = new MyTunes.Views.SongQueueView({collection: fakeSongs});
    view.collection.add({
      artist: 'data',
      url: '/test/testsong3.mp3',
      title:'test song 3'
    });
    view.collection.pop();
    expect(view.render.callCount).toEqual(2);
  });

});
