describe("Routes: Index",() => {
  describe("GET /", () => {
    it("returns the API status", done => {
      request.get("/")
        .expect(200)
        .end((err,res) => {
          const expected = {status: "Jtask API"};
          expect(res.body).to.deep.eql(expected);
          done(err);
        });
    });
  });
});
