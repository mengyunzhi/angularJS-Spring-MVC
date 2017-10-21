'use strict';

describe('Service: edit', function () {

  // load the service's module
  beforeEach(module('webappApp'));

  // instantiate service
  var edit;
  beforeEach(inject(function (_edit_) {
    edit = _edit_;
  }));

  it('should do something', function () {
    expect(!!edit).toBe(true);
  });

});
