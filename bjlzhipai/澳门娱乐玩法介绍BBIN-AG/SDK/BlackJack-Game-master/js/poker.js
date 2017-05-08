var Poker = {
    cards: {
        num: [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13],  // 扑克牌13种牌
        color: ["a", "b", "c", "d"]  // a：方块，b：红桃，：c：梅花，d：黑桃
    },
    cardsDealed: [],  // 存储已经发了的牌
    init: function () {  // 初始化扑克牌，清空已经发了的牌
      this.cardsDealed = [];
    },
    produce: function () {  // 产生两个分别代表大小和花色的随机数，生成唯一的牌
        var numId = parseInt(Math.random() * 13);
        var colorId = parseInt(Math.random() * 4);
        return {
            num: this.cards.num[numId],
            color: this.cards.color[colorId]
        };
    },
    deal: function () {  // 发牌，并且保证发的牌不重复
        var amount = this.cardsDealed.length;
        var card = this.produce();
        if (amount > 0) {
            while (this.isRepeat(card)) {
                card =  this.produce();
            }
        }
        this.cardsDealed.push(card);
        return card;
    },
    isRepeat: function (card) {  // 判断产生的牌是否和发了的牌重复
        var amount = this.cardsDealed.length;
        for (var i = 0; i < amount; i++) {
            if (card.num == this.cardsDealed[i].num && card.color == this.cardsDealed[i].color) {
                return true;
            }
        }
        return false;
    }
};
