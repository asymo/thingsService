const request = require('request');
const { setWorldConstructor } = require('cucumber');

function CustomWorld() {
    const self = this;
    self.lastResponse = null;

    self.thing = {
        id: '3g78c6b6-1818-11ea-8d71-362b9e753951',
        dateCreated: '2019-12-12T11:03:28.200Z',
        name: 'Thing 123',
        value: 96847
    };

    self.get = function(path, callback) {
        self.lastResponse = null;
        self.lastBody = null;
        request(path, (error, response, body) => {
            if(error) {
                callback(new Error(`Error on the GET request to ${path}: ${error.message}`));
            } else {
                self.lastResponse = response;
                self.lastBody = body;
                callback();
            }
        });
    }

    self.post = function(path, data, callback) {
        self.lastResponse = null;
        self.lastBody = null;
        request.post({ url: path, json: data }, (error, response, body) => {
            if(error) {
                callback(new Error(`Error on the POST request to ${path}: ${error.message}`));
            } else {
                self.lastResponse = response;
                self.lastBody = body;
                callback();
            }
        });
    }
}

setWorldConstructor(CustomWorld);
