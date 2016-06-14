var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
    it('respond with learning automated testing', function(done) {
        request(app).get('/').expect('learning automated testing', done);
    });
});