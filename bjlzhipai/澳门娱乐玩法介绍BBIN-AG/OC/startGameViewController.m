//
//  startGameViewController.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/27.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "startGameViewController.h"

@interface startGameViewController () {
    UIButton *_napai;
    UIButton *_stop;
    UIButton *_giveup;
    UILabel *_moneyLable;
    UILabel *_betLable;
}
@property (nonatomic ,assign)int money;
@property (nonatomic ,assign)int bet;
@end

@implementation startGameViewController

-(void)viewDidLayoutSubviews {

}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    UIImageView *topbgImgView = [[UIImageView alloc] init];
    topbgImgView.image = [UIImage imageNamed:@"table"];
    topbgImgView.userInteractionEnabled = YES;
    [self.view addSubview:topbgImgView];
    [topbgImgView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(-90*HEIGHT);
        make.top.left.right.mas_equalTo(0);
    }];
    
    UIImageView *bottomImgView = [[UIImageView alloc] init];
    bottomImgView.image = [UIImage imageNamed:@"btnBg"];
    bottomImgView.userInteractionEnabled = YES;
    [self.view addSubview:bottomImgView];
    [bottomImgView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(0);
        make.left.right.mas_equalTo(0);
        make.height.mas_equalTo(90*HEIGHT);
    }];
    
    UIButton *playBtn = [[UIButton alloc] init];
    [playBtn setImage:[UIImage imageNamed:@"playBtn"] forState:UIControlStateNormal];
    [playBtn addTarget:self action:@selector(playGame) forControlEvents:UIControlEventTouchUpInside];
    [bottomImgView addSubview:playBtn];
    [playBtn mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo((90-60)*HEIGHT/2);
        make.left.mas_equalTo(20*WIDth);
        make.width.mas_equalTo(70*WIDth);
        make.height.mas_equalTo(60*HEIGHT);
    }];
    
    //拿牌
    _napai = [UIButton buttonWithType:UIButtonTypeCustom];
    _napai.backgroundColor = [UIColor colorWithHexString:@"FBE68D"];
    [_napai setTitle:@"拿 牌" forState:UIControlStateNormal];
    _napai.alpha = 1;
    [_napai setTitleColor:[UIColor colorWithHexString:@"A76F34"] forState:UIControlStateNormal];
    _napai.titleLabel.textAlignment = NSTextAlignmentCenter;
    _napai.layer.cornerRadius = 3;
    _napai.layer.masksToBounds = YES;
    _napai.titleLabel.font = [UIFont systemFontOfSize:14];
    [_napai addTarget:self action:@selector(napaiClick) forControlEvents:UIControlEventTouchUpInside];
    [bottomImgView addSubview:_napai];
    [_napai mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(20*HEIGHT);
        make.bottom.mas_equalTo(-20*HEIGHT);
        make.width.mas_equalTo(50*WIDth);
        make.left.equalTo(playBtn.mas_right).offset(20);
    }];
    
    //停牌
    _stop = [UIButton buttonWithType:UIButtonTypeCustom];
    _stop.backgroundColor = [UIColor colorWithHexString:@"FBE68D"];
    _stop.alpha = 1;
    [_stop setTitle:@"停 牌" forState:UIControlStateNormal];
    [_stop setTitleColor:[UIColor colorWithHexString:@"A76F34"] forState:UIControlStateNormal];
    _stop.titleLabel.textAlignment = NSTextAlignmentCenter;
    _stop.layer.cornerRadius = 3;
    _stop.layer.masksToBounds = YES;
    _stop.titleLabel.font = [UIFont systemFontOfSize:14];
    [_stop addTarget:self action:@selector(stopClick) forControlEvents:UIControlEventTouchUpInside];
    [bottomImgView addSubview:_stop];
    [_stop mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(20*HEIGHT);
        make.bottom.mas_equalTo(-20*HEIGHT);
        make.width.mas_equalTo(50*WIDth);
        make.left.equalTo(_napai.mas_right).offset(10);
    }];
    //投降
    //停牌
    _giveup = [UIButton buttonWithType:UIButtonTypeCustom];
    _giveup.backgroundColor = [UIColor colorWithHexString:@"FBE68D"];
    _giveup.alpha = 1;
    [_giveup setTitle:@"投 降" forState:UIControlStateNormal];
    [_giveup setTitleColor:[UIColor colorWithHexString:@"A76F34"] forState:UIControlStateNormal];
    _giveup.titleLabel.textAlignment = NSTextAlignmentCenter;
    _giveup.layer.cornerRadius = 3;
    _giveup.layer.masksToBounds = YES;
    _giveup.titleLabel.font = [UIFont systemFontOfSize:14];
    [_giveup addTarget:self action:@selector(giveupClick) forControlEvents:UIControlEventTouchUpInside];
    [bottomImgView addSubview:_giveup];
    [_giveup mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(20*HEIGHT);
        make.bottom.mas_equalTo(-20*HEIGHT);
        make.width.mas_equalTo(50*WIDth);
        make.left.equalTo(_stop.mas_right).offset(10);
    }];
    
    UIImageView *jinbi = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"bgCoin"]];
    [bottomImgView addSubview:jinbi];
    [jinbi mas_makeConstraints:^(MASConstraintMaker *make) {
       make.top.mas_equalTo(20*HEIGHT);
        make.left.equalTo(_giveup.mas_right).offset(10);
        make.width.mas_equalTo(50*HEIGHT);
        make.height.mas_equalTo(50*HEIGHT);
    }];
    
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    if ([de objectForKey:@"money"]) {
        self.money = [[de objectForKey:@"money"] intValue];
    } else {
        self.money = 10000;
    }
    _moneyLable = [[UILabel alloc] init];
    _moneyLable.font = [UIFont systemFontOfSize:20];
    _moneyLable.textAlignment = NSTextAlignmentLeft;
    _moneyLable.textColor = [UIColor colorWithHexString:@"F8D962"];
    _moneyLable.text = [NSString stringWithFormat:@"%d",self.money];
    [bottomImgView addSubview:_moneyLable];
    [_moneyLable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(20*HEIGHT);
        make.left.equalTo(jinbi.mas_right);
        make.width.mas_equalTo(50*WIDth);
        make.height.mas_equalTo(50*HEIGHT);
    }];
    //玩家
    UIImageView *mine = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"zhuangjia"]];
    mine.layer.cornerRadius = 20*WIDth;
    mine.layer.masksToBounds = YES;
    [topbgImgView addSubview:mine];
    [mine mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(0);
        make.left.mas_equalTo(kMainBoundsWidth/2);
        make.size.mas_equalTo(CGSizeMake(40*WIDth, 80*HEIGHT));
    }];
    //庄家
    UIImageView *your = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"player"]];
    your.layer.cornerRadius = 20*WIDth;
    your.layer.masksToBounds = YES;
    [topbgImgView addSubview:your];
    [your mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(0);
        make.left.mas_equalTo(kMainBoundsWidth/2);
        make.size.mas_equalTo(CGSizeMake(40*WIDth,80*HEIGHT));
    }];
    
    //筹码
    UIButton *bet100 = [UIButton buttonWithType:UIButtonTypeCustom];
    [bet100 setImage:[UIImage imageNamed:@"wager100"] forState:UIControlStateNormal];
    bet100.tag = 100;
    bet100.layer.cornerRadius = 15*WIDth;
    bet100.layer.masksToBounds = YES;
    [bet100 addTarget:self action:@selector(selectBet:) forControlEvents:UIControlEventTouchUpInside];
    [topbgImgView addSubview:bet100];
    [bet100 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(-10);
        make.left.mas_equalTo(50*WIDth);
        make.size.mas_equalTo(CGSizeMake(30*WIDth, 60*HEIGHT));
    }];
    UIButton *bet200 = [UIButton buttonWithType:UIButtonTypeCustom];
    [bet200 setImage:[UIImage imageNamed:@"wager200"] forState:UIControlStateNormal];
    bet200.tag = 200;
    bet200.layer.cornerRadius = 15*WIDth;
    bet200.layer.masksToBounds = YES;
    [bet200 addTarget:self action:@selector(selectBet:) forControlEvents:UIControlEventTouchUpInside];
    [topbgImgView addSubview:bet200];
    [bet200 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.equalTo(bet100.mas_right).offset(10);
        make.bottom.mas_equalTo(-10);
        make.size.mas_equalTo(CGSizeMake(30*WIDth, 60*HEIGHT));
    }];
    UIButton *bet500 = [UIButton buttonWithType:UIButtonTypeCustom];
    [bet500 setImage:[UIImage imageNamed:@"wager500"] forState:UIControlStateNormal];
    bet500.tag = 500;
    bet500.layer.cornerRadius = 15*WIDth;
    bet500.layer.masksToBounds = YES;
    [bet500 addTarget:self action:@selector(selectBet:) forControlEvents:UIControlEventTouchUpInside];
    [topbgImgView addSubview:bet500];
    [bet500 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.equalTo(bet200.mas_right).offset(10);
        make.bottom.mas_equalTo(-10);
        make.size.mas_equalTo(CGSizeMake(30*WIDth, 60*HEIGHT));
    }];
    self.bet = 0;
    
    _betLable = [[UILabel alloc] init];
    _betLable.font = [UIFont systemFontOfSize:18];
    _betLable.textAlignment = NSTextAlignmentCenter;
    _betLable.textColor = [UIColor whiteColor];
    _betLable.layer.borderWidth = 1;
    _betLable.layer.borderColor = [UIColor whiteColor].CGColor;
    _betLable.text = @"💵 0";
    [topbgImgView addSubview:_betLable];
    [_betLable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo((kMainBoundsHeight - 90*HEIGHT)/2);
        make.left.mas_equalTo(kMainBoundsWidth/2);
        make.width.mas_equalTo(50*WIDth);
        make.height.mas_equalTo(50*HEIGHT);
    }];
    
    //最多六张牌
}
#pragma mark -play
- (void)playGame {}
#pragma mark -拿牌
-(void)napaiClick {}
#pragma mark -ting牌
-(void)stopClick {}
#pragma mark -投降
-(void)giveupClick {
}
#pragma mark -选择筹码
- (void)selectBet:(UIButton *)btn {
    
}
////加载完成的时候调用
-(UIInterfaceOrientation)preferredInterfaceOrientationForPresentation
{
    return UIInterfaceOrientationLandscapeLeft;
}

- (UIInterfaceOrientationMask)supportedInterfaceOrientations
{
    return UIInterfaceOrientationMaskLandscapeLeft;
}
@end
