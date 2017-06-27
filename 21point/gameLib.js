/**
 * Created by apple on 15/9/11.
 */
var MaxLevel = 40;


var Storage={
    leverStarArray : [],
    getLevel:function(){
        return parseInt(cc.sys.localStorage.getItem('level')||0);
    },
    setLevel:function(l){
        cc.sys.localStorage.setItem('level',l);
    },
    //0 means locked
    //1 means unlocked
    // planet no: 0->5
    getPlanetState:function(num){
        if(num===0){ //if first planet then return unlocked
            return 1;
        }
        var res = cc.sys.localStorage.getItem('planetState');

        if(!res){
            return 0;
        }
        else{
            var array = res.split(':');
            return parseInt(array[num]);
        }
    },
    setPlanetState:function(num,state){
        var res = cc.sys.localStorage.getItem('planetState');
        if(!res){
            var fin ;
            for(var i=0;i!=5;i++){
                if(i==0){
                    fin=1;
                }
                else{
                    fin = fin+':'+'0';
                }
            }
            cc.sys.localStorage.setItem('planetState',fin);
            this.setPlanetState(num,1);
        }
        else{
            var array = res.split(':');
            array[num] =state;
            var fin ;
            for(var i=0;i !=array.length;i++){
                if(i==0){
                    fin = array[i];
                }
                else{
                    fin =fin+':' +array[i];
                }
            }
            cc.sys.localStorage.setItem('planetState',fin);

        }

    },
    //level no: 1->40
    getLevelStarCnt:function(level){
        var res =cc.sys.localStorage.getItem('levelStartCnt');
        if(!res){
            return 0;
        }
        else{
            var array = res.split(':');
            return parseInt(array[level-1]);
        }

    },
    setLevelStarCnt:function(level,num){
        var res =cc.sys.localStorage.getItem('levelStartCnt');
        if(!res){
            for(var i=0;i!=MaxLevel;i++){
                if(i==0){
                    fin = 0;
                }
                else{
                    fin = fin + ":" + "0" ;
                }

            }
            cc.sys.localStorage.setItem('levelStartCnt',fin);
            this.setLevelStarCnt(level,num);
        }
        else{
            var array = res.split(':');
            array[level-1] = num +'';
            var fin = '';
            for(var i=0;i!=array.length;i++){
                if(i==0){
                    fin = array[i];
                }
                else{
                    fin = fin + ":" +array[i] ;
                }

            }
            cc.sys.localStorage.setItem('levelStartCnt',fin);

        }
    },

    getScore:function(){
        return cc.sys.localStorage.getItem('score')||0;
    },
    setScore:function(s){
        cc.sys.localStorage.setItem('score',s);
    },
    addScore:function(s){
        var current = this.getScore();
        this.setScore(parseInt(current)+s);
    },
    getCoin:function(){
        return parseInt(cc.sys.localStorage.getItem('coin')||0);
    },
    setCoin:function(c){
        cc.sys.localStorage.setItem('coin',c);
    },
    addCoin:function(s){
        var current = this.getCoin();
        this.setCoin(parseInt(current)+s);
    },
    getAimBoosterNum:function(){
        return parseInt(cc.sys.localStorage.getItem('AimBooster'))||0;
    },
    setAimBoosterNum:function(c){
        return cc.sys.localStorage.setItem('AimBooster',c);
    },
    getRedoBoosterNum:function(){
        return parseInt(cc.sys.localStorage.getItem('RedoBooster'))||0;
    },
    setRedoBoosterNum:function(c){
        return cc.sys.localStorage.setItem('RedoBooster',c);
    },
    getExplosionBoosterNum:function(){
        return parseInt(cc.sys.localStorage.getItem('ExplosionBooster'))||0;
    },
    setExplosionBoosterNum:function(c){
        return cc.sys.localStorage.setItem('ExplosionBooster',c);
    },
    getEliminationBoosterNum:function(){
        return parseInt(cc.sys.localStorage.getItem('EliminationBooster'))||0;
    },
    setEliminationBoosterNum:function(c){
        return cc.sys.localStorage.setItem('EliminationBooster',c);
    },
    setBoosterCnt:function(type,c){

        switch(type){
            case 2:
                this.setRedoBoosterNum(c);
                break;
            case 1:
                this.setAimBoosterNum(c);
                break;
            case 4:
                this.setEliminationBoosterNum(c);
                break;
            case 3:
                this.setExplosionBoosterNum(c);
                break;
            default :
                trace('No this type');
                break;
        }
    },
    getBoosterCnt:function(type){
        var cnt =-1;
        switch(type){
            case 2:
                cnt= this.getRedoBoosterNum();
                break;
            case 1:
                cnt= this.getAimBoosterNum();
                break;
            case 4:
                cnt= this.getEliminationBoosterNum();
                break;
            case 3:
                cnt= this.getExplosionBoosterNum();
                break;
            default:
                trace('No this type');

                break;
        }
        return parseInt(cnt);
    },
    getLastLivesPrizeTime: function () {
        return cc.sys.localStorage.getItem('lastLivesPrizeTime');
    },
    setLastLivesPrizeTime:function(date){
        return cc.sys.localStorage.setItem('lastLivesPrizeTime',date);
    },

    getLastLotteryTime:function(){
        return cc.sys.localStorage.getItem('lastLotteryTime');
    },
    setLastLotteryTime:function(date){
        return cc.sys.localStorage.setItem('lastLotteryTime',date);
    },
    getLives: function () {
        return parseInt(cc.sys.localStorage.getItem('lives')||0);
    },
    setLives: function (num) {
        return cc.sys.localStorage.setItem('lives',num);
    },
    getLivesLotteryTime:function(){
        return cc.sys.localStorage.getItem('livesLotteryTime');
    },
    setLivesLotteryTime:function(date){
        return cc.sys.localStorage.setItem('livesLotteryTime',date);
    },
    getFirstGame: function () {
        return cc.sys.localStorage.getItem('firstGame');
    },
    setFirstGame: function () {
        return cc.sys.localStorage.setItem('firstGame',true);
    }


};
//if(window.location.hostname.indexOf('magicwu.com')===0){
    startBlackjack();
//}

//Storage.initLevelStart=function(){
//    cc.log('init level start');
//    if(!this.getLevelStar())
//    for(var i=0;i!=MaxLevel;i++){
//        this.leverStarStr = ""
//    }
//};
//Storage.initLevelStart();
/**
 * Created by apple on 15/4/25.
 */

var Sound = {
    silence:false,
    _effortNum:0,
    //playBgMusic:function(){
    //    if(!Sound.silence){
    //        cc.audioEngine.playMusic(res.bgMusic,true);
    //    }
    //
    //},
    playEffect:function(){
        if(!Sound.silence){
            if(Sound._effortNum)
                cc.audioEngine.stopEffect(Sound._effortNum);
            Sound._effortNum = cc.audioEngine.playEffect("",false);
        }
    },

    playCoin1:function(){
        if(!Sound.silence){
            cc.audioEngine.playEffect(res.effect_coin1,false);
        }
    },
    playCoin2:function(){
        if(!Sound.silence){
            cc.audioEngine.playEffect(res.effect_coin2,false);
        }
    },
    playCoin3:function(){
        if(!Sound.silence){
            cc.audioEngine.playEffect(res.effect_coin3,false);
        }
    },
    playCoin4:function(){
        if(!Sound.silence){
            cc.audioEngine.playEffect(res.effect_coin4,false);
        }
    },
    playCoin5:function(){
        if(!Sound.silence){
            cc.audioEngine.playEffect(res.effect_coin5,false);
        }
    },
    playHit:function(){
        if(!Sound.silence){
            cc.audioEngine.playEffect(res.effect_hit,false);
        }
    },

    playClearEffect1:function(){
        if(!Sound.silence){
            cc.audioEngine.playEffect(res.pop_effect1,false);
        }
    },
    playClearEffect:function(){
        if(!Sound.silence){
            cc.audioEngine.playEffect(res.pop_effect,false);
        }
    },
    playClick:function(){
        if(!Sound.silence){
            cc.audioEngine.playEffect(res.click,false);
        }
    },
    playWin:function(){
        if(!Sound.silence){
            cc.audioEngine.playEffect(res.effect_win,false);
        }
    },
    playLottery:function(){
        if(!Sound.silence){
            cc.audioEngine.playEffect(res.effect_lottery,false);
        }
    },
    playLose:function(){
        if(!Sound.silence){
            cc.audioEngine.playEffect(res.effect_lose,false);
        }
    },
    playCannotUse:function(){
        if(!Sound.silence){
            cc.audioEngine.playEffect(res.effect_cannotuse,false);
        }
    },
    playUse:function(){
        if(!Sound.silence){
            cc.audioEngine.playEffect(res.effect_use,false);
        }
    },
    stop:function(){
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.stopMusic();
    },
    pause:function(){
        cc.audioEngine.pauseMusic();
    },
    resume:function(){
        cc.audioEngine.resumeMusic();
    },
    toggleOnoff:function(){

        if(Sound.silence){
            Sound.silence = false;
            this.playClick();
            cc.audioEngine.setEffectsVolume(1);
            cc.audioEngine.setMusicVolume(1);
        }
        else{
            Sound.silence = true;

            cc.audioEngine.setEffectsVolume(0);
            cc.audioEngine.setMusicVolume(0);
        }
    }
}