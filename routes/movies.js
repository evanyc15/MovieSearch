"use strict";

const curl = require('curlrequest');

/*
 * NodeJS Routes for Expense
 */
module.exports = function(router){
    router.get('/movies', function(req, res){
        curl.request(
        {
            url: "https://api.themoviedb.org/3/movie/popular?api_key=b5036b43afc60bf587edea93152efd00"
        }, function(err, parts){
            if(err || !parts) res.sendStatus(204);
            else res.send(parts);
        });
    });
    router.get('/movies_query', function(req, res){
        curl.request(
        {
            url: "https://api.themoviedb.org/3/search/movie?api_key=b5036b43afc60bf587edea93152efd00&query="+req.query.query
        }, function(err, parts){
            if(err || !parts) res.sendStatus(204);
            else res.send(parts);
        });
    });

    return router;
}