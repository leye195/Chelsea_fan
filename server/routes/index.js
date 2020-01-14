const cheerio = require('cheerio');
const request = require('request');
const puppeteer = require('puppeteer');
module.exports=function (app,Player,Manager,Stats){
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
    Data Crawled from https://www.premierleague.com
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
    /*app.get("/season/stats/:id",(req,res)=>{
        const _id=req.params['id'];
        
        const url=`https://www.premierleague.com/clubs/4/Chelsea/stats?se=${_id}`;
        let result={};
        request(url,(error,request,body)=>{
            const $=cheerio.load(body);
            const $topStats=$("div.topStatList");
            const $statsLists=$("div.statsListBlock");
            $topStats.each((idx,ele)=>{
                const played=$(ele).find("div:nth-child(1) > span > span").text();//played
                const w=$(ele).find("div:nth-child(2) > span > span").text();//win
                const l=$(ele).find("div:nth-child(3) > span > span").text();//lose
                const g=$(ele).find("div:nth-child(4) > span > span").text();//goal
                const gc=$(ele).find("div:nth-child(3) > span > span").text();//goals conceded
                const c=$(ele).find("div:nth-child(4) > span > span").text();//clean sheet 
                result={
                    "played":played,
                    "wins":w,
                    "losses":l,
                    "goals":g,
                    "goalsConceded":gc,
                    "cleanSheets":c
                }
            });
            $statsLists.each((idx,ele)=>{
                const header=$(ele).find("div.headerStat span").text();
                if(header==="Attack"){
                    const goals=$(ele).find("div:nth-child(2) > span > span").text();
                    const goalPerMatch=$(ele).find("div:nth-child(3) > span >span").text();
                    const shots=$(ele).find("div:nth-child(4) > span > span").text();
                    const shotsOnTar=$(ele).find("div:nth-child(5) > span > span").text();
                    const shootAccur=$(ele).find("div:nth-child(6) > span > span").text();
                    const penaltiesGoal=$(ele).find("div:nth-child(7) > span > span").text();
                    const bigChances=$(ele).find("div:nth-child(8) > span > span").text();
                    const hitWoodWork=$(ele).find("div:nth-child(9) > span > span").text();
                    result={
                        ...result,
                        "attack":{
                            "goals":goals,
                            "goalPerMatch":goalPerMatch,
                            "shots":shots,
                            "shotsOnTar":shotsOnTar,
                            "shootAccurancy":shootAccur,
                            "penaltiesGoal":penaltiesGoal,
                            "bigChances":bigChances,
                            "hitWoodWork":hitWoodWork
                        }
                    }
                }else if(header==="Team Play"){
                    const passes=$(ele).find("div:nth-child(2) > span > span").text();
                    const perMatch=$(ele).find("div:nth-child(3) > span >span").text();
                    const accur=$(ele).find("div:nth-child(4) > span > span").text();
                    const crosses=$(ele).find("div:nth-child(5) > span > span").text();
                    const c_accur=$(ele).find("div:nth-child(6) > span > span").text();
                    result={
                        ...result,
                        "teamPlay":{
                            "passes":passes,
                            "passPerMatch":perMatch,
                            "passAccuracy":accur,
                            "crosses":crosses,
                            "c_accur":c_accur
                        }
                    }
                }else if(header==="Defence"){
                    const cleanSheets=$(ele).find("div:nth-child(2) > span > span").text();
                    const goalsConceded=$(ele).find("div:nth-child(3) > span > span").text();
                    const goalsConcededPer=$(ele).find("div:nth-child(4) > span > span").text();
                    const saves=$(ele).find("div:nth-child(5) > span > span").text();
                    const tackles=$(ele).find("div:nth-child(6) > span > span").text();
                    const tackleSuccess=$(ele).find("div:nth-child(7) > span > span").text();
                    const blockedShots=$(ele).find("div:nth-child(8) > span > span").text();
                    const interceptions=$(ele).find("div:nth-child(9) > span > span").text();
                    const clearances=$(ele).find("div:nth-child(10) > span > span").text();
                    const headClear=$(ele).find("div:nth-child(11) > span > span").text();
                    const arialBattles=$(ele).find("div:nth-child(12) > span > span").text();
                    const ownGoal=$(ele).find("div:nth-child(13) > span > span").text();
                    result={
                        ...result,
                        "defence":{
                            "cleanSheets":cleanSheets,
                            "goalConceded":goalsConceded,
                            "goalConcededPer":goalsConcededPer,
                            "saves":saves,
                            "tackles":tackles,
                            "tackleSuccess":tackleSuccess,
                            "blockedShots":blockedShots,
                            "interception":interceptions,
                            "clearances":clearances,
                            "headClearances":headClear,
                            "arialBattles":arialBattles,
                            "ownGoals":ownGoal
                        }
                    }

                }else if(header==="Discipline"){
                    const yellow=$(ele).find("div:nth-child(2) > span > span").text();
                    const red=$(ele).find("div:nth-child(3) > span > span").text();
                    const foul=$(ele).find("div:nth-child(4) > span > span").text();
                    const offside=$(ele).find("div:nth-child(5) > span > span").text();
                    result={
                        ...result,
                        "discipline":{
                            "yellow":yellow,
                            "red":red,
                            "fouls":foul,
                            "offsides":offside
                        }
                    }
                }
            })
            res.json({error:0,results:result});
        });
    });*/
    app.get("/season/stats/:id",(req,res)=>{
        let _id=req.params['id'];
        function delay( timeout ) {
            return new Promise(( resolve ) => {
              setTimeout( resolve, timeout );
            });
        }
        if(_id===-1)
            _id=0;
        Stats.findOne({s_id:_id},(err,data)=>{
            if(err)res.status(500).json({error:1,msg:"DB Error"});
            if(!data){
                let result={s_id:_id},stats=new Stats();
                stats.s_id=_id;
                puppeteer.launch( { headless : true} ).then(async browser => {
                    const page = await browser.newPage();
                    await page.goto( `https://www.premierleague.com/clubs/4/Chelsea/stats?se=${_id}`, { waitUntil : "networkidle2" } );
                    await delay(6000);
                    const html = await page.$eval("#mainContent > div.wrapper.col-12 > div", e => e.outerHTML );
                    const $=cheerio.load(html);
                    const $topStats=$("div.topStatList");
                    const $statsLists=$("div.statsListBlock");
                    $topStats.each((idx,ele)=>{
                        const played=$(ele).find("div:nth-child(1) > span > span").text();//played
                        const w=$(ele).find("div:nth-child(2) > span > span").text();//win
                        const l=$(ele).find("div:nth-child(3) > span > span").text();//lose
                        const g=$(ele).find("div:nth-child(4) > span > span").text();//goal
                        const gc=$(ele).find("div:nth-child(3) > span > span").text();//goals conceded
                        const c=$(ele).find("div:nth-child(4) > span > span").text();//clean sheet 
                        result={
                            "played":played,
                            "wins":w,
                            "losses":l,
                            "goals":g,
                            "goalsConceded":gc,
                            "cleanSheets":c
                        }
                        stats.played=played;
                        stats.wins=w;
                        stats.losses=l;
                        stats.goals=g;
                        stats.goalsConceded=gc;
                        stats.cleanSheets=c;
                    });
                    $statsLists.each((idx,ele)=>{
                        const header=$(ele).find("div.headerStat span").text();
                        if(header==="Attack"){
                            const goals=$(ele).find("div:nth-child(2) > span > span").text();
                            const goalPerMatch=$(ele).find("div:nth-child(3) > span >span").text();
                            const shots=$(ele).find("div:nth-child(4) > span > span").text();
                            const shotsOnTar=$(ele).find("div:nth-child(5) > span > span").text();
                            const shootAccur=$(ele).find("div:nth-child(6) > span > span").text();
                            const penaltiesGoal=$(ele).find("div:nth-child(7) > span > span").text();
                            const bigChances=$(ele).find("div:nth-child(8) > span > span").text();
                            const hitWoodWork=$(ele).find("div:nth-child(9) > span > span").text();
                            result={
                                ...result,
                                "attack":{
                                    "goals":goals,
                                    "goalPerMatch":goalPerMatch,
                                    "shots":shots,
                                    "shotsOnTar":shotsOnTar,
                                    "shootAccurancy":shootAccur,
                                    "penaltiesGoal":penaltiesGoal,
                                    "bigChances":bigChances,
                                    "hitWoodWork":hitWoodWork
                                }
                            }
                            stats.attack={
                                "goals":goals,
                                "goalPerMatch":goalPerMatch,
                                "shots":shots,
                                "shotsOnTar":shotsOnTar,
                                "shootAccurancy":shootAccur,
                                "penaltiesGoal":penaltiesGoal,
                                "bigChances":bigChances,
                                "hitWoodWork":hitWoodWork
                            }
                        }else if(header==="Team Play"){
                            const passes=$(ele).find("div:nth-child(2) > span > span").text();
                            const perMatch=$(ele).find("div:nth-child(3) > span >span").text();
                            const accur=$(ele).find("div:nth-child(4) > span > span").text();
                            const crosses=$(ele).find("div:nth-child(5) > span > span").text();
                            const c_accur=$(ele).find("div:nth-child(6) > span > span").text();
                            result={
                                ...result,
                                "teamPlay":{
                                    "passes":passes,
                                    "passPerMatch":perMatch,
                                    "passAccuracy":accur,
                                    "crosses":crosses,
                                    "c_accur":c_accur
                                }
                            }
                            stats.teamplay={
                                "passes":passes,
                                "passPerMatch":perMatch,
                                "passAccuracy":accur,
                                "crosses":crosses,
                                "c_accur":c_accur
                            }
                        }else if(header==="Defence"){
                            const cleanSheets=$(ele).find("div:nth-child(2) > span > span").text();
                            const goalsConceded=$(ele).find("div:nth-child(3) > span > span").text();
                            const goalsConcededPer=$(ele).find("div:nth-child(4) > span > span").text();
                            const saves=$(ele).find("div:nth-child(5) > span > span").text();
                            const tackles=$(ele).find("div:nth-child(6) > span > span").text();
                            const tackleSuccess=$(ele).find("div:nth-child(7) > span > span").text();
                            const blockedShots=$(ele).find("div:nth-child(8) > span > span").text();
                            const interceptions=$(ele).find("div:nth-child(9) > span > span").text();
                            const clearances=$(ele).find("div:nth-child(10) > span > span").text();
                            const headClear=$(ele).find("div:nth-child(11) > span > span").text();
                            const arialBattles=$(ele).find("div:nth-child(12) > span > span").text();
                            const ownGoal=$(ele).find("div:nth-child(13) > span > span").text();
                            result={
                                ...result,
                                "defence":{
                                    "cleanSheets":cleanSheets,
                                    "goalConceded":goalsConceded,
                                    "goalConcededPer":goalsConcededPer,
                                    "saves":saves,
                                    "tackles":tackles,
                                    "tackleSuccess":tackleSuccess,
                                    "blockedShots":blockedShots,
                                    "interception":interceptions,
                                    "clearances":clearances,
                                    "headClearances":headClear,
                                    "arialBattles":arialBattles,
                                    "ownGoals":ownGoal
                                }
                            }
                            stats.defence={
                                "cleanSheets":cleanSheets,
                                "goalConceded":goalsConceded,
                                "goalConcededPer":goalsConcededPer,
                                "saves":saves,
                                "tackles":tackles,
                                "tackleSuccess":tackleSuccess,
                                "blockedShots":blockedShots,
                                "interception":interceptions,
                                "clearances":clearances,
                                "headClearances":headClear,
                                "arialBattles":arialBattles,
                                "ownGoals":ownGoal
                            }
                        }else if(header==="Discipline"){
                            const yellow=$(ele).find("div:nth-child(2) > span > span").text();
                            const red=$(ele).find("div:nth-child(3) > span > span").text();
                            const foul=$(ele).find("div:nth-child(4) > span > span").text();
                            const offside=$(ele).find("div:nth-child(5) > span > span").text();
                            result={
                                ...result,
                                "discipline":{
                                    "yellow":yellow,
                                    "red":red,
                                    "fouls":foul,
                                    "offsides":offside
                                }
                            }
                            stats.discipline={
                                "yellow":yellow,
                                "red":red,
                                "fouls":foul,
                                "offsides":offside
                            }
                        }
                    })
                    stats.save((error)=>{
                        if(error) res.json({error:2,results:{}});
                        res.json({error:0,results:result,msg:"Save Success"});
                    })
                });
            }else{
                res.json({error:0,results:data,msg:"DB"});
            } 
        })
    });
}