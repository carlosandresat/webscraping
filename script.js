const axios = require('axios');
const cheerio = require('cheerio');
const { cp } = require('fs');

const url = "https://news.ycombinator.com/";

const getContent = $ => 
    $('.athing').map((_, a) => {
        const $a = $(a);
        var order = $a.find('.rank').text();
        var id_score = "#score_" + $a.attr('id');
        var score = $(id_score).text();
        var commentsNo = $(id_score).parent().children("a").last().text();

        order = order.match((/(\d+)/))
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