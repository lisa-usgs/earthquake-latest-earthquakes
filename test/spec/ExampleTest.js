/* jshint global chai, describe, define, it */

var expect = chai.expect;


define(function () {
  describe('Example test harness', function () {
    describe('This is a test', function () {
      it('Tests work', function () {
        expect(true).to.be.true;
      });
    });
  });
});
