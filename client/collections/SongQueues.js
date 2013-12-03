//SongQueues.js
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueues = Backbone.Collection.extend({

  model: MyTunes.Collections.SongQueue
});