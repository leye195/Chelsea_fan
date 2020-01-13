const cheerio = require('cheerio');
const request = require('request');
const log = console.log;
module.exports=function (app,Player,Manager){
    app.get("/players",(req,res)=>{
        let player=Player;
        player.find({},(err,data)=>{
            console.log(data);
            if(err)return res.status(500).json({error:1,msg:"Database Failure"});
            res.json({error:0,results:data});
        })
    });
    app.get("/managers",(req,res)=>{
        let manager=Manager;
        manager.find((err,data)=>{
            console.log(data);
            if(err)res.status(500).json({error:1,msg:"Database Failure"});
            return res.json({error:0,results:data});
        })
    });

    /*
    Chelsea All Season record API
    Data Crawled from https://www.premierleague.com/clubs/4/Chelsea/season-history
    */
    app.get("/seasons",(req,res)=>{
        const url="https://www.premierleague.com/clubs/4/Chelsea/season-history";
        request(url,(error,request,body)=>{
            let result=[];
            const $=cheerio.load(body);
            const $descrip=$("div.club-archive__description-list");
            const $season=$('h2.club-archive__heading-main');
            const $kits=$("div.club-archive__kits");
            const $team=$("div.club-archive__league-pos > div > div > div > div > table > tbody > tr.row--highlight");
            $season.each((idx,ele)=>{
                const season=$(ele).text();
                result[idx]={
                    "season":season
                };
            });
            $team.each((idx,ele)=>{
                const matches=$(ele).find("td:nth-child(3)").text();
                //tr.row--highlight > td:nth-child(3)
                const won=$(ele).find("td:nth-child(4)").text();
                const draw=$(ele).find("td:nth-child(5)").text();
                const lost=$(ele).find("td:nth-child(6)").text();
                const gd=$(ele).find("td:nth-child(7)").text();
                const points=$(ele).find("td.points").text();
                console.log(points);
                result[idx]={
                    ...result[idx],
                    "matches":matches,
                    "won":won,
                    "draw":draw,
                    "lost":lost,
                    "gd":gd,
                    "points":points
                };
            })
            $descrip.each((idx,ele)=>{
                const rank=$(ele).find("dl:nth-child(1)> dd").text();
                const $manager=$(ele).find("dl:nth-child(2)> dd p");
                const $top_scorer=$(ele).find("dl:nth-child(3)> dd p");
                const $most_appear=$(ele).find("dl:nth-child(4)> dd p");
                const biggest_win=$(ele).find("dl:nth-child(5) > dd").text();
                const harvest_defeat=$(ele).find("dl:nth-child(6) > dd").text();
                const managers=[],top=[],most=[];
                $manager.each((idx,ele)=>{
                    managers.push($(ele).text());
                });
                $top_scorer.each((idx,ele)=>{
                    top.push($(ele).text());
                })
                $most_appear.each((idx,ele)=>{
                    most.push($(ele).text());
                })
                result[idx]={
                    ...result[idx],
                    "rank":rank,
                    "managers":managers,
                    "topScorer":top,
                    "mostAppearance":most,
                    "biggestWin":biggest_win,
                    "havestDefeat":harvest_defeat
                };
            });
            $kits.each((idx,ele)=>{
                const home=$(ele).find("div:nth-child(1) > picture > img").attr("src");
                const away=$(ele).find("div:nth-child(2) > picture > img").attr("src");
                const third=$(ele).find("div:nth-child(3) > picture > img").attr("src");
                result[idx]={
                    ...result[idx],
                    "kits":[home,away,third]
                };
            });
            res.json({error:0,results:result});
        })
    });
}