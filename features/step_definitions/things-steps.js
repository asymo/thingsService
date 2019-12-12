const { When, Then } = require('cucumber');
const assert = require('assert');
const env = require('../../environment/env.ts');

When('I GET the root document', function(callback) {
    this.get(env.BASE_URL, callback);
});

Then('I SHOULD get a valid response', function() {
    assert.equal(this.lastResponse.statusCode, 200)
});

When('I do a GET for Things', function(callback) {
    this.get(env.BASE_URL + '/api/things', callback);
});

Then('I will get a Thing with an ID of {string}', function(id) {
    assert.equal(JSON.parse(this.lastBody).data[0].id, id);
});

Then('I will get a Thing with a value of {int}', function(value) {
    assert.equal(JSON.parse(this.lastBody).data[0].value, value);
});

When('I POST a new Thing', function(callback) {
    this.post(env.BASE_URL + '/api/things', this.thing, callback);
});

Then('the last data element will match the new Thing created', function() {
    const newThing = this.lastBody.data[this.lastBody.data.length - 1];
    assert.equal(newThing.id, this.thing.id);
    assert.equal(newThing.dateCreated, this.thing.dateCreated);
    assert.equal(newThing.name, this.thing.name);
    assert.equal(newThing.value, this.thing.value);
});

When('I GET a Thing with an ID of {string}', function(id, callback) {
    const url = env.BASE_URL + '/api/things/' + id;
    this.get(url, callback);
});

Then('only 1 Thing should be returned', function() {
    assert.equal(JSON.parse(this.lastBody).data.length, 1);
});

Then('I will get a Thing with the value of {int}', function(value) {
    assert.equal(JSON.parse(this.lastBody).data[0].value, value);
});