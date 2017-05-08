/**
 * Created by Les Wang on 2016/4/9.
 */
var Player = function (name) {
    this.name = name || "玩家";
};
Player.prototype.cards = [];  // 存储当前获得的牌
Player.prototype.score = [0];
Player.prototype.money = 10000;  // 每个人初始赌资一万
Player.prototype.wager = 0;  // 每个人的赌注
Player.prototype.isBlackJack = false;  // 是否是黑杰克
Player.prototype.hasA = false;  // 是否拥有A
Player.prototype.isBust = false;  // 是否爆掉
Player.prototype.status = 3;  // 玩家的最终状态，赢为1，平为2，输为3
Player.prototype.getCard = function () {  // 发牌并计算当前分数
    var card = Poker.deal();
    this.cards.push(card);
    var num = parseInt(card.num);
    if (num == 1) {  // 拿到A有两种情况，一种是之前已经有A了，一种是之前没有过A
        if (this.hasA) {  // 若之前已经有A，无论之后拿多少张，A都只能算1，因为
            this.score[0] += num;
            this.score[1] += num;
        } else {  // 第一次拿到A
            this.hasA = true;
            var otherScore = this.score[0] + 1;
            this.score[1] = otherScore;
            this.score[0] += 11;
        }
    }
    if (num > 10) {
        num = 10;
    }
    if (num != 1) {
        this.score[0] += num;
    }
    if (this.hasA) {
        if (num != 1) {
            this.score[1] += num;
        }
        if (this.score[0] > 21 && this.score[1] > 21) {
            this.isBust = true;
        }
        if (this.score[0] > 21) {  // 如果有A，但当A=11时已经爆掉，此时只有一个结果，为A=1，相当于没有A这个不确定因素
            this.hasA = false;
            this.score[0] = this.score[1];
        }
    } else {
        if (this.score[0] > 21) {
            this.isBust = true;
        }
    }
};
Player.prototype.init = function () {  // 初始化玩家的牌，“发牌”按钮触发
    this.cards = [];
    this.score = [0];
    this.hasA = false;
    this.isBlackJack = false;
    this.isBust = false;
    this.getCard();
    this.getCard();
    if (this.score[0] == 21) {
        this.isBlackJack = true;
    }
};
Player.prototype.getScore = function () {  // 获取当前分数
    if (this.isBlackJack) {
        this.score[0] = "BlackJack";
        return  "BlackJack"
    }
    if (this.isBust) {
        this.score[0] = "Bust";
        return "Bust"
    }
    if (this.hasA) {
        return this.score[0] + " 或 " + this.score[1];
    }
    return this.score[0];
};
Player.prototype.showScore = function () {  // 第一张牌为暗牌，玩家能看到的点数为总点数减第一张牌的点数
    var num = parseInt(this.cards[0].num);
    if (num == 1) {
        num = 11;
    }
    if (num > 10) {
        num = 10;
    }
    return this.score[0]-num;
};
Player.prototype.double = function () {
    this.money -= this.wager;
    this.wager += this.wager;
};
Player.prototype.getResult = function () {
    if (this.status == 1) {
        if (this.isBlackJack) {
            this.money = this.money + this.wager * 3;
        } else {
            this.money = this.money + this.wager * 2;
        }
    }
    if (this.status == 2) {
        this.money += this.wager;
    }
};
