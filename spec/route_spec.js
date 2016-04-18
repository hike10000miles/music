var request = require('request'),
    root_url = "http://localhost:8080",
    albums;

describe("JSON Routes", function() {
  describe("/albums.json", function() {
    it("return an array of albums", function(done) {
      request(root_url + "/albums.json", function(error, response, body) {
        albums = JSON.parse(body);
        expect(albums[0].artist).toBeDefined();
        done();
      });
    });
  });

  describe("/albums/<album>.json", function() {
    it("return an array of trucks", function(done) {
      request(root_url + "/albums/" + albums[1].title +".json", function(error, response, body) {
        expect(JSON.parse(body)[0].title).toBeDefined();
        done();
      });
    });
  });
});