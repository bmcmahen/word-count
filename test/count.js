/**
 * Module Dependencies
 */

var wc = require('word-count');
var assert = require('assert');

/**
 * Tests
 */

describe('word count', function() {

  it('should work with no words', function() {
    assert(0 == wc(''));
    assert(0 == wc('     '));
  })

  it('should trim strings', function() {
    assert(1 == wc('    hi  '));
  })

  it('should count words', function() {
    var str = 'this is a string.';
    assert(4 == wc(str));
  });

  it('should include special characters', function() {
    var str = 'turner & hooch'
    assert(3 == wc(str));
  })

  it('should work with a "from" offset', function() {
    var str = 'lions, tigers, bears, oh my!';
    assert(3 == wc(str, 17));
  })

  it('should work with a "to" offset', function() {
    var str = 'lions, tigers, bears, oh my!';
    assert(3 == wc(str, false, 17));
  })

  it('should work with both offsets', function() {
    var str = 'lions, tigers, bears, oh my!';
    assert(2 == wc(str, 6, 21));
  })

  it('should worth with a 0 in "to" offset', function() {
    var str = 'lions, tigers, bears, oh my!';
    assert(0 == wc(str, 6, 0));
  })
})
