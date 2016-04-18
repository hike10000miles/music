describe("Albums collection", function () {
  it("fetches a collection of three albums", function(done) {
    
    var albumsLoaded = App.albumsLoaded;

    App.albumsLoaded = function() {
      albumsLoaded.apply(App, arguments);
      expect(App.albums.model.length).toBe(3);
      expect(typeof App.albums.model[0].attributes.title).toBe("string");
      done();
    };
    App.init();
  });

});
