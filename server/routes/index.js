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
}