// Generated by CoffeeScript 1.7.1
var path = require('path');
var webdriver = require('selenium-webdriver');
var chai = require('chai');
var chaiWebdriver = require('..');

webdriver.logging = {
  LevelName: 'DEBUG'
};

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.phantomjs()).build();

chai.use(chaiWebdriver(driver));

var expect = chai.expect;

var url = function(page) {
  return "file://" + (path.join(__dirname, page));
};

after(function(done) {
  return driver.quit().then(function() {
    return done();
  });
});

describe('the basics', function() {
  before(function(done) {
    this.timeout(0);
    return driver.get(url('finnegan.html')).then(function() {
      return done();
    });
  });
  describe('#text', function() {
    it('verifies that an element has exact text', function(done) {
      return expect('h1').dom.to.have.text("The following text is an excerpt from Finnegan's Wake by James Joyce", done);
    });
    return it('verifies that an element does not have exact text', function(done) {
      return expect('h1').dom.not.to.have.text("Wake", done);
    });
  });
  describe('#text (regexp version)', function() {
    it('verifies that an element has a regexp match', function(done) {
      return expect('h1').dom.to.have.text(/following.*excerpt/, done);
    });
    return it('verifies that an element does not match the regexp', function(done) {
      return expect('h1').dom.not.to.have.text(/following.*food/, done);
    });
  });
  describe('#contain', function() {
    describe('on a dom element', function() {
      it('verifies that an element contains text', function(done) {
        return expect('h1').dom.to.contain.text("Finnegan", done);
      });
      return it('verifies that an element does not contain text', function(done) {
        return expect('h1').dom.not.to.contain.text("Bibimbap", done);
      });
    });
    return describe('not on a dom element', function() {
      it('verifies that a string contains text', function() {
        return expect('John Finnegan').to.contain("Finnegan");
      });
      return it('verifies that a string does not contain text', function() {
        return expect('John Finnegan').dom.not.to.contain("Bibimbap");
      });
    });
  });
  describe('#match', function() {
    it('verifies that an element has a regexp match', function(done) {
      return expect('h1').dom.to.match(/following.*excerpt/, done);
    });
    it('verifies that an element does not match the regexp', function(done) {
      return expect('h1').dom.not.to.match(/following.*food/, done);
    });
    return describe('not on a dom element', function() {
      it('verifies that a string does match the regexp', function() {
        return expect('some test text').to.match(/test/);
      });
      return it('verifies that a string does not match the regexp', function() {
        return expect('some test text').not.to.match(/taste/);
      });
    });
  });
  describe('#visible', function() {
    it('verifies that an element is visible', function(done) {
      return expect('.does-exist:text').dom.to.be.visible(done);
    });
    it('verifies that a non-existing element is not visible', function(done) {
      return expect('.does-not-exist').dom.not.to.be.visible(done);
    });
    return it('verifies that a hidden element is not visible', function(done) {
      return expect('.exists-but-hidden').dom.not.to.be.visible(done);
    });
  });
  describe('#count', function() {
    it('verifies that an element appears thrice', function(done) {
      return expect('input').dom.to.have.count(3, done);
    });
    return it('verifies that a non-existing element has a count of 0', function(done) {
      return expect('.does-not-exist').dom.to.have.count(0, done);
    });
  });
  describe('#style', function() {
    it('verifies that an element has a red background', function(done) {
      return expect('.red-bg').dom.to.have.style('background-color', 'rgba(255, 0, 0, 1)', done);
    });
    return it('verifies that an element does not have a red background', function(done) {
      return expect('.green-text').dom.to.have.style('background-color', 'rgba(0, 0, 0, 0)', done);
    });
  });
  describe('#value', function() {
    it('verifies that a text field has a specific value', function(done) {
      return expect('.does-exist').dom.to.have.value('People put stuff here', done);
    });
    return it('verifies that a text field does not have a specific value', function(done) {
      return expect('.does-exist').dom.not.to.have.value('Beep boop', done);
    });
  });
  describe('#disabled', function() {
    it('verifies that an input is disabled', function(done) {
      return expect('.i-am-disabled').dom.to.be.disabled(done);
    });
    return it('verifies that an input is not disabled', function(done) {
      return expect('.does-exist').dom.not.to.be.disabled(done);
    });
  });
  describe('htmlClass', function() {
    it('verifies that an element has a given class', function(done) {
      return expect('.does-exist').dom.to.have.htmlClass('second-class', done);
    });
    return it('verifies than an element does not have a given class', function(done) {
      return expect('.green-text').dom.not.to.have.htmlClass('second-class', done);
    });
  });
  return describe('attribute', function() {
    it('verifies that an element attribute has a given value', function(done) {
      return expect('input.does-exist').dom.to.have.attribute('value', 'People put stuff here', done);
    });
    it('verifies that an element attribute does not have a given value', function(done) {
      return expect('input.does-exist').dom.not.to.have.attribute('input', 'radio', done);
    });
    it('verifies that an attribute does not exist', function(done) {
      return expect('input.does-exist').dom.not.to.have.attribute('href', done);
    });
    it('verifies that an attribute exists', function(done) {
      return expect('input.does-exist').dom.to.have.attribute('type', done);
    });
    return it('verifies that an empty attribute exists', function(done) {
      return expect('input.does-exist').dom.to.have.attribute('empty', done);
    });
  });
});

describe('the basics with eventually', function() {
  before(function(done) {
    this.timeout(0);
    return driver.get(url('finnegan.html')).then(function() {
      return done();
    });
  });
  describe('#text', function() {
    it('verifies that an element has exact text', function(done) {
      return expect('h1').dom.to.eventually.have.text("The following text is an excerpt from Finnegan's Wake by James Joyce", done);
    });
    return it('verifies that an element does not have exact text', function(done) {
      return expect('h1').dom.not.to.eventually.have.text("Wake", done);
    });
  });
  describe('#text (regexp version)', function() {
    it('verifies that an element has a regexp match', function(done) {
      return expect('h1').dom.to.eventually.have.text(/following.*excerpt/, done);
    });
    return it('verifies that an element does not match the regexp', function(done) {
      return expect('h1').dom.not.to.eventually.have.text(/following.*food/, done);
    });
  });
  describe('#contain', function() {
    describe('on a dom element', function() {
      it('verifies that an element contains text', function(done) {
        return expect('h1').dom.to.eventually.contain.text("Finnegan", done);
      });
      return it('verifies that an element does not contain text', function(done) {
        return expect('h1').dom.not.to.eventually.contain.text("Bibimbap", done);
      });
    });
    return describe('not on a dom element', function() {
      it('verifies that a string contains text', function() {
        return expect('John Finnegan').to.eventually.contain("Finnegan");
      });
      return it('verifies that a string does not contain text', function() {
        return expect('John Finnegan').dom.not.to.eventually.contain("Bibimbap");
      });
    });
  });
  describe('#match', function() {
    it('verifies that an element has a regexp match', function(done) {
      return expect('h1').dom.to.eventually.match(/following.*excerpt/, done);
    });
    it('verifies that an element does not match the regexp', function(done) {
      return expect('h1').dom.not.to.eventually.match(/following.*food/, done);
    });
    return describe('not on a dom element', function() {
      it('verifies that a string does match the regexp', function() {
        return expect('some test text').to.eventually.match(/test/);
      });
      return it('verifies that a string does not match the regexp', function() {
        return expect('some test text').not.to.eventually.match(/taste/);
      });
    });
  });
  describe('#visible', function() {
    it('verifies that an element is visible', function(done) {
      return expect('.does-exist:text').dom.to.eventually.be.visible(done);
    });
    it('verifies that a non-existing element is not visible', function(done) {
      return expect('.does-not-exist').dom.not.to.eventually.be.visible(done);
    });
    return it('verifies that a hidden element is not visible', function(done) {
      return expect('.exists-but-hidden').dom.not.to.eventually.be.visible(done);
    });
  });
  describe('#count', function() {
    it('verifies that an element appears thrice', function(done) {
      return expect('input').dom.to.eventually.have.count(3, done);
    });
    return it('verifies that a non-existing element has a count of 0', function(done) {
      return expect('.does-not-exist').dom.to.eventually.have.count(0, done);
    });
  });
  describe('#style', function() {
    it('verifies that an element has a red background', function(done) {
      return expect('.red-bg').dom.to.eventually.have.style('background-color', 'rgba(255, 0, 0, 1)', done);
    });
    return it('verifies that an element does not have a red background', function(done) {
      return expect('.green-text').dom.to.eventually.have.style('background-color', 'rgba(0, 0, 0, 0)', done);
    });
  });
  describe('#value', function() {
    it('verifies that a text field has a specific value', function(done) {
      return expect('.does-exist').dom.to.eventually.have.value('People put stuff here', done);
    });
    return it('verifies that a text field does not have a specific value', function(done) {
      return expect('.does-exist').dom.not.to.eventually.have.value('Beep boop', done);
    });
  });
  describe('#disabled', function() {
    it('verifies that an input is disabled', function(done) {
      return expect('.i-am-disabled').dom.to.eventually.be.disabled(done);
    });
    return it('verifies that an input is not disabled', function(done) {
      return expect('.does-exist').dom.not.to.eventually.be.disabled(done);
    });
  });
  describe('htmlClass', function() {
    it('verifies that an element has a given class', function(done) {
      return expect('.does-exist').dom.to.eventually.have.htmlClass('second-class', done);
    });
    return it('verifies than an element does not have a given class', function(done) {
      return expect('.green-text').dom.not.to.eventually.have.htmlClass('second-class', done);
    });
  });
  return describe('attribute', function() {
    it('verifies that an element attribute has a given value', function(done) {
      return expect('input.does-exist').dom.to.eventually.have.attribute('value', 'People put stuff here', done);
    });
    it('verifies that an element attribute does not have a given value', function(done) {
      return expect('input.does-exist').dom.not.to.eventually.have.attribute('input', 'radio', done);
    });
    it('verifies that an attribute does not exist', function(done) {
      return expect('input.does-exist').dom.not.to.eventually.have.attribute('href', done);
    });
    it('verifies that an attribute exists', function(done) {
      return expect('input.does-exist').dom.to.eventually.have.attribute('type', done);
    });
    return it('verifies that an empty attribute exists', function(done) {
      return expect('input.does-exist').dom.to.eventually.have.attribute('empty', done);
    });
  });
});

describe('going to a different page', function() {
  before(function(done) {
    this.timeout(0);
    driver.get(url('link.html'));
    return driver.findElement(webdriver.By.name('link')).click().then(function() {
      return done();
    });
  });
  return it('still allows you to make assertions', function(done) {
    return expect('.does-exist:text').dom.to.to.be.visible(done);
  });
});
