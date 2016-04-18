var App = {
  albumsLoaded: function() { },
  fetchAlbums: function() {
    this.albums = new AlbumsCollection();
    this.albums.fetch({
      success: this.albumsLoaded.bind(this)
    });
  },
  init: function() {
    this.fetchAlbums();
  }
}