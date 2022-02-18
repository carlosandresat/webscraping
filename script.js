const axios = require('axios');
const cheerio = require('cheerio');
const { cp } = require('fs');
const { Module } = require('module');
const { arrayBuffer } = require('stream/consumers');
const { workerData } = require('worker_threads');

const url = "https://news.ycombinator.com/";

const getContent = $ => 
    $('.athing').map((_, a) => {
        const $a = $(a);
        var order = $a.find('.rank').text();
        var id_score = "#score_" + $a.attr('id');
        var score = $(id_score).text();
        var commentsNo = $(id_score).parent().children("a").last().text();

        order = order.match((/(\d+)/));
        commentsNo = commentsNo.match((/(\d+)/));
        score = score.match((/(\d+)/));

        if (commentsNo != null && score != null){
            return{
                title: $a.find('.titlelink').text(),
                order: parseInt(order[0]),
                comments: parseInt(commentsNo[0]),
                score: parseInt(score[0]),
            };
        }
        else if (commentsNo == null && score != null){
            return{
                title: $a.find('.titlelink').text(),
                order: parseInt(order[0]),
                comments: 0,
                score: parseInt(score[0]),
            };
        }
        else if (commentsNo != null && score == null){
            return{
                title: $a.find('.titlelink').text(),
                order: parseInt(order[0]),
                comments: parseInt(commentsNo[0]),
                score: 0,
            };
        }
        else{
            return{
                title: $a.find('.titlelink').text(),
                order: parseInt(order[0]),
                comments: 0,
                score: 0,
            };
        }
    }).toArray();

const countWords = (title) => title.split(' ').length;

const filter1 = (data) => {
    const filtered1 = data.filter((data) => countWords(data.title) > 5);
    const filtered2 = filtered1.sort((a,b) => (a.comments > b.comments) ? -1 : ((b.comments > a.comments) ? 1 : 0));

    return filtered2;
};

const filter2 = (data) => {
    const filtered1 = data.filter((data) => countWords(data.title) < 5);
    const filtered2 = filtered1.sort((a,b) => (a.score > b.score) ? -1 : ((b.comments > a.comments) ? 1 : 0));

    return filtered2;
};


const init = async () => {
    try {
        const {data} = await axios.get(url);

        const $ = cheerio.load(data);
        const content = getContent($);

        console.log(content);
        console.log("-----------------");
        console.log("Filter 1:");
        console.log(filter1(content));
        console.log("-----------------");
        console.log("Filter 2:");
        console.log(filter2(content));

    } catch (e){
        console.error(e);
    }
};

init();

module.exports = {filter1, filter2, countWords};