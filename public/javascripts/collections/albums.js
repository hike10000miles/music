var AlbumsCollection = Backbone.Collection.extend({
  model: AlbumModel,
  url: "/albums.json"
})