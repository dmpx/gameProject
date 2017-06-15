//
//  pokerView.m
//  baijialeOC
//
//  Created by 二哈 on 17/5/22.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "pokerView.h"

@interface pokerView (){
    UIView *_backView;//蒙版,点击退出这个view

    UIImageView *_poker1;
    UIImageView *_poker2;
    UIImageView *_poker3;
    UIImageView *_poker4;
    
    
}
@property (nonatomic ,assign)int zhaung;//庄的点数
@property (nonatomic ,assign)int xian;//闲的点数
@property (nonatomic ,assign)BOOL zhuangdui_bool;//庄是对
@property (nonatomic ,assign)BOOL xiandui_bool;//闲是对
@end

@implementation pokerView

- (instancetype)initWithMoney1:(int)money1 Money2:(int)money2 Money3:(int)money3 Money4:(int)money4 Money5:(int)money5 {
    if (self=[super init]) {
        //清空初始化
        self.xiandui_money = 0;
        self.zhuangduimoney = 0;
        self.xianmoney = 0;
        self.hemoney = 0;
        self.zhuangmoney = 0;
        //赋值
        self.xiandui_money = money1;
        self.zhuangduimoney = money2;
        self.xianmoney = money3;
        self.hemoney = money4;
        self.zhuangmoney = money5;
        self.zhuangdui_bool = NO;
        self.xiandui_bool = NO;
        self.zhaung = 0;
        self.xian = 0;
        [self setUI];
    }
    return self;
}

-(void)setUI {
    
    
    UIWindow * window =[[UIApplication sharedApplication].delegate window];
    _backView = [[UIView alloc] initWithFrame:[UIScreen mainScreen].bounds];
    [window addSubview:_backView];
    
    [_backView addSubview:self];
    _backView.backgroundColor=[UIColor colorWithRed:0 green:0 blue:0 alpha:0.5];

    UITapGestureRecognizer * tapbackView = [[UITapGestureRecognizer alloc]initWithTarget:self action:@selector(cancelBtnClick:)];
    tapbackView.numberOfTapsRequired = 1;
    [_backView addGestureRecognizer:tapbackView];
    
    NSArray *arr = @[@"a",@"b",@"c",@"d"];
    int arc1 = arc4random()%4;
    NSString *world1 = arr[arc1];
    int num1 = arc4random()%13+1;
    _poker1 = [[UIImageView alloc] init];
    _poker1.image = [UIImage imageNamed:[NSString stringWithFormat:@"%@%d",world1,num1]];
    [self addSubview:_poker1];
    [_poker1 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(50*HEIGHT);
        make.left.mas_equalTo(kMainBoundsHeight/3);
        make.size.mas_equalTo(CGSizeMake(55*WIDth, 76*WIDth));
    }];

    int arc2 = arc4random()%4;
    NSString *world2 = arr[arc2];
    int num2 = arc4random()%13+1;
    _poker2 = [[UIImageView alloc] init];
    _poker2.image = [UIImage imageNamed:[NSString stringWithFormat:@"%@%d",world2,num2]];
    [self insertSubview:_poker2 aboveSubview:_poker1];
    [_poker2 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(50*HEIGHT);
        make.left.equalTo(_poker1.mas_right).offset(-35*WIDth);
        make.size.mas_equalTo(CGSizeMake(55*WIDth, 76*WIDth));
    }];
    
    int arc3 = arc4random()%4;
    NSString *world3 = arr[arc3];
    int num3 = arc4random()%13+1;
    _poker3 = [[UIImageView alloc] init];
    _poker3.image = [UIImage imageNamed:[NSString stringWithFormat:@"%@%d",world3,num3]];
    [self addSubview:_poker3];
    [_poker3 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(50*HEIGHT);
        make.right.mas_equalTo(kMainBoundsHeight/3);
        make.size.mas_equalTo(CGSizeMake(55*WIDth, 76*WIDth));
    }];
    
    UILabel *point1 = [[UILabel alloc] init];
    point1.font = [UIFont systemFontOfSize:20];
    point1.textColor = [UIColor colorWithHexString:@"ff8212"];
    point1.textAlignment = NSTextAlignmentCenter;
    [self addSubview:point1];
    [point1 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.right.equalTo(_poker1.mas_left);
        make.left.mas_equalTo(0);
        make.top.equalTo(_poker1.mas_top);
        make.height.equalTo(_poker1.mas_height);
    }];

    int arc4 = arc4random()%4;
    NSString *world4 = arr[arc4];
    int num4 = arc4random()%13+1;
    _poker4 = [[UIImageView alloc] init];
    _poker4.image = [UIImage imageNamed:[NSString stringWithFormat:@"%@%d",world4,num4]];
    [self insertSubview:_poker4 aboveSubview:_poker3];
    [_poker4 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(50*HEIGHT);
        make.left.equalTo(_poker3.mas_left).offset(25*WIDth);
        make.size.mas_equalTo(CGSizeMake(55*WIDth, 76*WIDth));
    }];
    
    UILabel *point2 = [[UILabel alloc] init];
    point2.font = [UIFont systemFontOfSize:20];
    point2.textColor = [UIColor colorWithHexString:@"ff8212"];
    point2.textAlignment = NSTextAlignmentCenter;
    [self addSubview:point2];
    [point2 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.width.equalTo(point1.mas_width);
        make.left.equalTo(_poker4.mas_right);
        make.top.equalTo(_poker1.mas_top);
        make.height.equalTo(_poker1.mas_height);
    }];
    
    if (num1 == num2) {
        self.xiandui_bool = YES;
    } else {
        self.xiandui_bool = NO;
    }
    if (num1 > 9) {
        num1 = 0;
    }
    if (num2 > 9) {
        num2 = 0;
    }
    
    self.xian = num1 + num2;
    if (self.xian>9) {
        self.xian = self.xian - 10;
    }
    point1.text = [NSString stringWithFormat:@"%d 点",self.xian];
    
    if (num3 == num4) {
        self.zhuangdui_bool = YES;
    } else {
        self.zhuangdui_bool = NO;
    }
    if (num3 > 9) {
        num3 = 0;
    }
    if (num4 > 9) {
        num4 = 0;
    }
    
    self.zhaung = num3 + num4;
    if (self.zhaung>9) {
        self.zhaung = self.zhaung - 10;
    }
    point2.text = [NSString stringWithFormat:@"%d 点",self.zhaung];
    
    [self addBottomView];
    
}

-(void)addBottomView {
    //下部分
    UILabel *result = [[UILabel alloc] init];
    result.text = @"本次结果";
    result.font = [UIFont systemFontOfSize:20];
    result.textColor = [UIColor colorWithHexString:@"ff8212"];
    result.textAlignment = NSTextAlignmentCenter;
    [_backView addSubview:result];
    [result mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(_poker1.mas_bottom).offset(20);
        make.left.mas_equalTo(10);
        make.right.mas_equalTo(-10);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"结果" andfontSize:20]);
    }];
    //闲对
    UILabel *xianduiLable = [[UILabel alloc] init];
    if (self.xiandui_bool == YES) {
        self.xiandui_money = self.xiandui_money*11;
    } else {
        self.xiandui_money = self.xiandui_money*(-1);
    }
    xianduiLable.text = [NSString stringWithFormat:@"闲对: %d",self.xiandui_money];
    xianduiLable.font = [UIFont systemFontOfSize:20];
    xianduiLable.textColor = [UIColor colorWithHexString:@"ff8212"];
    xianduiLable.textAlignment = NSTextAlignmentCenter;
    [_backView addSubview:xianduiLable];
    [xianduiLable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(result.mas_bottom).offset(20);
        make.left.mas_equalTo(0);
        make.width.mas_equalTo(kMainBoundsWidth/2);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"结果" andfontSize:20]);
    }];
    
    //庄对
    if (self.zhuangdui_bool == YES) {
        self.zhuangduimoney = self.zhuangduimoney*11;
    } else {
        self.zhuangduimoney = (-1)*self.zhuangduimoney;
    }
    UILabel *zhuangduiLable = [[UILabel alloc] init];
    zhuangduiLable.text = [NSString stringWithFormat:@"庄对: %d",self.zhuangduimoney];
    zhuangduiLable.font = [UIFont systemFontOfSize:20];
    zhuangduiLable.textColor = [UIColor colorWithHexString:@"ff8212"];
    zhuangduiLable.textAlignment = NSTextAlignmentCenter;
    [_backView addSubview:zhuangduiLable];
    [zhuangduiLable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(result.mas_bottom).offset(20);
        make.right.mas_equalTo(0);
        make.width.mas_equalTo(kMainBoundsWidth/2);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"结果" andfontSize:20]);
    }];
    NSLog(@"%d ------%d",self.xian,self.zhaung);
    if (self.xian >self.zhaung){
        self.xianmoney = self.xianmoney;
    }else {
        self.xianmoney = -self.xianmoney;
    }

    if (self.xian == self.zhaung){
        //平
        self.hemoney = self.hemoney*8;
    } else {
        self.hemoney = -self.hemoney;
    }
    
    if (self.xian < self.zhaung){
        //平
        self.zhuangmoney = self.zhuangmoney*2;
    } else {
        self.zhuangmoney = -self.zhuangmoney;
    }
    //闲
    UILabel *xianLable = [[UILabel alloc] init];
    xianLable.text = [NSString stringWithFormat:@"闲: %d",self.xianmoney];
    xianLable.font = [UIFont systemFontOfSize:20];
    xianLable.textColor = [UIColor colorWithHexString:@"ff8212"];
    xianLable.textAlignment = NSTextAlignmentCenter;
    [_backView addSubview:xianLable];
    [xianLable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(xianduiLable.mas_bottom).offset(20);
        make.left.mas_equalTo(0);
        make.width.mas_equalTo(kMainBoundsWidth/3);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"结果" andfontSize:20]);
    }];
    
    //he
    UILabel *heLable = [[UILabel alloc] init];
    heLable.text = [NSString stringWithFormat:@"和: %d",self.hemoney];
    heLable.font = [UIFont systemFontOfSize:20];
    heLable.textColor = [UIColor colorWithHexString:@"ff8212"];
    heLable.textAlignment = NSTextAlignmentCenter;
    [_backView addSubview:heLable];
    [heLable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(xianduiLable.mas_bottom).offset(20);
        make.left.mas_equalTo(kMainBoundsWidth/3);
        make.width.mas_equalTo(kMainBoundsWidth/3);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"结果" andfontSize:20]);
    }];
    //庄
    //he
    UILabel *zhuangLable = [[UILabel alloc] init];
    zhuangLable.text = [NSString stringWithFormat:@"和: %d",self.zhuangmoney];
    zhuangLable.font = [UIFont systemFontOfSize:20];
    zhuangLable.textColor = [UIColor colorWithHexString:@"ff8212"];
    zhuangLable.textAlignment = NSTextAlignmentCenter;
    [_backView addSubview:zhuangLable];
    [zhuangLable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(xianduiLable.mas_bottom).offset(20);
        make.right.mas_equalTo(0);
        make.width.mas_equalTo(kMainBoundsWidth/3);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"结果" andfontSize:20]);
    }];
    
    //输赢
    UILabel *allLable = [[UILabel alloc] init];
    if (self.xiandui_money + self.zhuangduimoney + self.xianmoney + self.hemoney + self.zhuangmoney > 0) {
        allLable.text = [NSString stringWithFormat:@"赢: %d",self.xiandui_money + self.zhuangduimoney + self.xianmoney + self.hemoney + self.zhuangmoney];
    } else {
        allLable.text = [NSString stringWithFormat:@"输: %d",self.xiandui_money + self.zhuangduimoney + self.xianmoney + self.hemoney + self.zhuangmoney];
    }
    
    allLable.font = [UIFont systemFontOfSize:20];
    allLable.textColor = [UIColor colorWithHexString:@"ff8212"];
    allLable.textAlignment = NSTextAlignmentCenter;
    [_backView addSubview:allLable];
    [allLable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(-15);
        make.width.mas_equalTo([FJX_Helper widthForStrWithString:@"输: 10000000" andfontSize:20]);
        make.left.mas_equalTo(80*WIDth + 30);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"结果" andfontSize:20]);
    }];
    //退出界面
    UILabel *exit = [[UILabel alloc] init];
    exit.text = @"点击屏幕重新开始游戏";
    exit.font = [UIFont systemFontOfSize:14];
    exit.textColor = [UIColor colorWithHexString:@"7ED321"];
    exit.textAlignment = NSTextAlignmentCenter;
    [_backView addSubview:exit];
    [exit mas_makeConstraints:^(MASConstraintMaker *make) {
        make.right.mas_equalTo(-5);
        make.bottom.mas_equalTo(-5);
        make.width.mas_equalTo([FJX_Helper widthForStrWithString:@"点击屏幕重新开始游戏" andfontSize:14]);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"结果" andfontSize:14]);
    }];

}

#pragma mark -取消按钮
- (void)cancelBtnClick :(UITapGestureRecognizer *)tag{
    [_backView removeFromSuperview];
    [self removeFromSuperview];
    self.cancelBtnClick(self.xiandui_money + self.zhuangduimoney + self.xianmoney + self.hemoney + self.zhuangmoney);
}

@end
