Provides [selenium-webdriver](https://npmjs.org/package/selenium-webdriver) sugar for the [Chai](http://chaijs.com/) assertion library. Allows you to create expressive integration tests:

```javascript
expect($('.frequency-field')).to.contain.text('One time')
expect($('.toggle-pane')).to.eventually.not.be.visible()
```

## What sorts of assertions can we make?

All assertions start with a Selenium `WebElement` promise (a la [`webdriver-sizzle`](http://b3nj4m.github.io/webdriver-sizzle/)), for example:

```javascript
expect($('.list'))
expect($('div > h1'))
expect($('a[href=http://google.com]'))
```

Then, we can add our assertion to the chain:

### Text
Test the text value of the dom against supplied string. Exact matches only.
```javascript
expect(selection).to.have.text('string')
```

### Text (contain)
Test the text value of the dom against supplied string. Partial matches allowed.
```javascript
expect(selection).to.contain.text('string')
```

### Match
Test the text value of the dom against the regular expression. (note the `text` property is used as a flag)
```javascript
expect(selection).to.text.match(/regex/)
```

### Text (regex)
Test the text value of the dom against the regular expression. (Same as `match` above).
```javascript
expect(selection).to.have.text(/regex/)
```

### Displayed
Check whether or not the element is displayed (can be scrolled off-screen)
```javascript
expect(selection).to.be.displayed()
```

### Present
Check whether or not the element is in the document. Absence will not throw an `Error` as it does with `displayed`.
```javascript
expect(selection).to.be.present
```
Cannot be invoked, only used as a property.

### Visible
Check whether or not the element is visible on-screen
```javascript
expect(selection).to.be.visible()
```

### Disabled
Check whether or not the form element is disabled
```javascript
expect(selection).to.be.disabled()
```

### Count
Test how many elements exist in the dom with the supplied selection
```javascript
expect(selection).to.have.count(number)
```

### Style
Test the CSS style of the element (exact string match).
```javascript
expect(selection).to.have.style('property', 'value')
```

### Value
Test the value of a form field against supplied string.
```javascript
expect(selection).to.have.value('string')
```

### HTML Class
Tests that the element has `warning` as one of its class attributes.
```javascript
expect(selection).to.have.class('warning')
```

### Attribute
Test an element's attribute value. Exact matches only. By omitting `value` test simply checks for existance of attribute.
```javascript
expect(selection).to.have.attribute('attribute', 'value')
```

### Not
You can also always add a `not` in there to negate the assertion:

```javascript
expect(selection).not.to.have.style('property', 'value')
```


### Larger and smaller

Several of the assertion methods support the `larger` and `smaller` properties, which allow numeric comparisons. e.g. for `value()`:

Test for a numeric value larger (>=) than 0.
```javascript
expect('input[type=number]').to.have.larger.value(0)
```

Test for a numeric value smaller (<=) than 0.
```javascript
expect('input[type=number]').to.have.smaller.value(0)
```

Test for a numeric value not larger (<) than 0.
```javascript
expect('input[type=number]').not.to.have.larger.value(0)
```

Test for a numeric value not smaller (>) than 0.
```javascript
expect('input[type=number]').not.to.have.smaller.value(0)
```

Other methods which support `larger` and `smaller`:

Test for text with length larger (>=) than 0.
```javascript
expect(selection).to.have.larger.text(0)
```

Test for number of elements in `selection` larger (>=) than 0.
```javascript
expect(selection).to.have.larger.count(0)
```

Test for css attribute value larger (>=) than 0 (ignores units).
```javascript
expect(selection).to.have.larger.style('width', 0)
```

Test for attribute value larger (>=) than 0.
```javascript
expect(selection).to.have.larger.attribute('offsetWidth', 0)
```


### Everything returns a promise

All of these assertions return a `Q` promise, so you can just return the promise if you're using mocha.


## Setup

Setup is pretty easy. Just:

```javascript

// Start with a webdriver instance:
var sw = require('selenium-webdriver');
var driver = new sw.Builder()
  .withCapabilities(sw.Capabilities.chrome())
  .build()

var $ = require('webdriver-sizzle')(driver);

// And then...
var chai = require('chai');
var chaiWebdriver = require('chai-webelement');
chai.use(chaiWebdriver);

// And you're good to go!
chai.describe('kitty test', function() {
  chai.before(function(done) {
    driver.get('http://github.com').then(done);
  });
  it('should not find a kitty', function() {
    return chai.expect($('#site-container h1.heading')).to.not.contain.text("I'm a kitty!");
  });
});
```

## Contributing

so easy.

```bash
$EDITOR index.js      # edit index.js
npm test              # run the specs
```

## License

MIT.
