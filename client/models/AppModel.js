// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' callback function will always be bound to that context we pass in.
    In the current example, we're binding the value of the keyword this to the App. That is helpful because otherwise
    the 'this' we use inside the function body (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);
    
    params.library.on('enqueue', function(song){
      this.set('songQueue', song)
      console.log('I\'m insided the function')
      console.log(params)
    }, this) // we wrote this
  }

});
