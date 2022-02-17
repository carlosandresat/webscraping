const axios = require('axios');
const cheerio = require('cheerio');

const url = "https://news.ycombinator.com/";

const getContent = $ => 
    $('.athing').map((_, a) => {
        const $a = $(a);
        var id_score = "#score_" + $a.attr('id');
        const score = $(id_score).text();
        const commentsNo = $(id_score).parent().children("a").last().text();

        return{
            title: $a.find('.titlelink').text(),
            order: $a.find('.rank').text(),
            comments: commentsNo,
            score: score,
        };
    }).toArray();

const init = async () => {
    try {
        const {data} = await axios.get(url);

        const $ = cheerio.load(data);
        const content = getContent($);

        console.log(content);

    } catch (e){
        console.error(e);
    }
};

init();