//
//  gameViewController.m
//  BBIN澳门百家乐
//
//  Created by 二哈 on 17/4/15.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "gameViewController.h"
#import "myButton.h"
#import "UIImage+ScottExtension.h"
#import "comPareSize.h"
#import "ScottAlertController.h"

#define FICHIARR @[@"5",@"10",@"25",@"100"]
@interface gameViewController (){
    UILabel *_conmputerc;
    UIView *_line;//两幅扑克牌之间的线  来做适配用
    UIView *_mineLine;//玩家后面的线
    UIView *_ficheLine;//筹码上边的先,适配用的
    //金币
    UILabel *_computer_money;
    UILabel *_mine_money;
    
    UIButton *_fapai;
    UIButton *_giveUp;
    UIButton *_kaipai;
    UIButton *_reopen;
    
    UILabel *_duzhu;
    
    UILabel *_allFiche;//赌注
    UIImageView *_duzhu_di;
    UIImageView *_duzhu_zhuijia;
}

@property (nonatomic ,strong)NSMutableArray *computer_puke;
@property (nonatomic ,strong)NSMutableArray *mine_puke;
@property (nonatomic ,assign)BOOL isXiadi;
@property (nonatomic ,assign)BOOL isXiazhu;
//判断自己赢还是输
@property (nonatomic ,assign)int isWin;//0平 -1输 1赢
@property (nonatomic ,assign)int iszhadan;
@property (nonatomic ,strong)NSString *panduan;

@property (nonatomic ,assign)int money_di;
@property (nonatomic ,assign)int money_zhu;
//自己的牌
@property (nonatomic ,assign)int mine1_kind;
@property (nonatomic ,assign)int mine2_kind;
@property (nonatomic ,assign)int mine3_kind;
@property (nonatomic ,assign)int mine1_number;
@property (nonatomic ,assign)int mine2_number;
@property (nonatomic ,assign)int mine3_number;

//电脑的牌
@property (nonatomic ,assign)int computer1_kind;
@property (nonatomic ,assign)int computer2_kind;
@property (nonatomic ,assign)int computer3_kind;
@property (nonatomic ,assign)int computer1_number;
@property (nonatomic ,assign)int computer2_number;
@property (nonatomic ,assign)int computer3_number;
@end

@implementation gameViewController

-(NSMutableArray *)computer_puke {
    if (!_computer_puke) {
        _computer_puke = [NSMutableArray array];
    }
    return _computer_puke;
}

-(NSMutableArray *)mine_puke {
    if (!_mine_puke) {
        _mine_puke = [NSMutableArray array];
    }
    return _mine_puke;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    UIImageView *BGImg = [[UIImageView alloc] init];
    BGImg.image = [UIImage imageNamed:@"Felt"];
    BGImg.userInteractionEnabled = YES;
    [self.view addSubview:BGImg];
    [BGImg mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.left.bottom.right.mas_equalTo(0);
    }];
    
    //电脑 自己
    _conmputerc = [[UILabel alloc] init];
    _conmputerc.font = [UIFont systemFontOfSize:16];
    _conmputerc.textColor = [UIColor whiteColor];
    _conmputerc.numberOfLines = 0;
    _conmputerc.textAlignment = NSTextAlignmentCenter;
    _conmputerc.text = @"电脑";
    [self.view addSubview:_conmputerc];
    [_conmputerc mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(30);
        make.left.mas_equalTo(0);
        make.right.mas_equalTo(-kMainBoundsWidth/2);
        make.height.mas_equalTo([sizeWithString heightWithString:@"电脑" andfontSize:16]);
    }];
    
    //电脑金币
    _computer_money = [[UILabel alloc] init];
    _computer_money.font = [UIFont systemFontOfSize:16];
    _computer_money.textColor = [UIColor redColor];
    _computer_money.numberOfLines = 0;
    _computer_money.textAlignment = NSTextAlignmentCenter;
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    if ([de objectForKey:@"computer_money"]) {
        _computer_money.text = [NSString stringWithFormat:@"¥ :%@",[de objectForKey:@"computer_money"]];
    } else {
        [de setObject:@"1000" forKey:@"computer_money"];
         [de synchronize];
        _computer_money.text =[NSString stringWithFormat:@"¥ :%@",[de objectForKey:@"computer_money"]];
    }
   
    [self.view addSubview:_computer_money];
    [_computer_money mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(30);
        make.right.mas_equalTo(0);
        make.left.mas_equalTo(kMainBoundsWidth/2);
        make.height.mas_equalTo([sizeWithString heightWithString:@"电脑" andfontSize:16]);
    }];
    
    //添加电脑这面的扑克
    [self addcomputer_ouke];
    //添加自己的puke
    [self addmine_puke];
    
    UILabel *mine = [[UILabel alloc] init];
    mine.font = [UIFont systemFontOfSize:16];
    mine.textColor = [UIColor blackColor];
    mine.numberOfLines = 0;
    mine.textAlignment = NSTextAlignmentCenter;
    mine.text = @"玩家";
    [self.view addSubview:mine];
    [mine mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(_line.mas_bottom).offset(150*HEIGHT + 10 + 10);
        make.left.mas_equalTo(0);
        make.right.mas_equalTo(-kMainBoundsWidth/2);
        make.height.mas_equalTo([sizeWithString heightWithString:@"电脑" andfontSize:16]);
    }];
    _line.hidden = YES;
    
    //自己的钱
    _mine_money = [[UILabel alloc] init];
    _mine_money.font = [UIFont systemFontOfSize:16];
    _mine_money.textColor = [UIColor redColor];
    _mine_money.numberOfLines = 0;
    _mine_money.textAlignment = NSTextAlignmentCenter;
    if ([de objectForKey:@"mine_money"]) {
        _mine_money.text = [NSString stringWithFormat:@"¥ :%@",[de objectForKey:@"mine_money"]];
    } else {
        [de setObject:@"1000" forKey:@"mine_money"];
        [de synchronize];
        _mine_money.text =[NSString stringWithFormat:@"¥ :%@",[de objectForKey:@"mine_money"]];
    }
    [self.view addSubview:_mine_money];
    [_mine_money mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(_line.mas_bottom).offset(150*HEIGHT + 10 + 10);
        make.right.mas_equalTo(0);
        make.left.mas_equalTo(kMainBoundsWidth/2);
        make.height.mas_equalTo([sizeWithString heightWithString:@"电脑" andfontSize:16]);
    }];
    
    _mineLine = [[UIView alloc] init];
    _mineLine.backgroundColor = [UIColor grayColor];
    [self.view addSubview:_mineLine];
    [_mineLine mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.right.mas_equalTo(0);
        make.height.mas_equalTo(0.5);
        make.top.equalTo(mine.mas_bottom).offset(10);
    }];
    _mineLine.hidden = YES;
    
    //添加按钮
    [self addButton];
    //添加筹码
    [self addfichi];
    
    //添加赌注盘,放筹码的View
    [self addAllFiche];
    
    [self initState];

}

#pragma mark -初始化(重新开始游戏)
-(void)initState {
    self.iszhadan = 0;
    self.isXiadi = NO;
    self.isXiazhu = NO;
    self.panduan = @"xiadi";
    self.money_di = 0;
    self.money_zhu = 0;
    self.isWin = 0;
    _kaipai.enabled = NO;
    _giveUp.hidden = NO;
    _giveUp.enabled = NO;
    _reopen.hidden = YES;
    _fapai.enabled = YES;
    _duzhu_di.image = [UIImage imageNamed:@""];
    _duzhu_zhuijia.image = [UIImage imageNamed:@""];
    
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    int minemoney = [[de objectForKey:@"mine_money"] intValue];
    int commoney = [[de objectForKey:@"computer_money"] intValue];
    if (minemoney == 0 || commoney == 0) {
        ScottAlertView *alertView = [ScottAlertView alertViewWithTitle:@"有一方已经输掉左右筹码" message:@"重置筹码数量"];
        
        [alertView addAction:[ScottAlertAction actionWithTitle:@"确定" style:ScottAlertActionStyleDestructive handler:^(ScottAlertAction *action) {
            [de setObject:@"1000" forKey:@"mine_money"];
            [de setObject:@"1000" forKey:@"computer_money"];
            [de synchronize];
            _mine_money.text = [NSString stringWithFormat:@"¥ :%@",[de objectForKey:@"mine_money"]];
            _computer_money.text = [NSString stringWithFormat:@"¥ :%@",[de objectForKey:@"computer_money"]];
        }]];
        
        ScottAlertViewController *alertController = [ScottAlertViewController alertControllerWithAlertView:alertView preferredStyle:ScottAlertControllerStyleAlert transitionAnimationStyle:ScottAlertTransitionStyleDropDown];
        alertController.tapBackgroundDismissEnable = YES;
        [self presentViewController:alertController animated:YES completion:nil];
    }
}
#pragma mark -添加电脑的牌
- (void)addcomputer_ouke {
   //110 150
    CGFloat distance = (kMainBoundsWidth - 110*WIDth*3)/4;
    for (int i = 0; i < 3; i++) {
        UIImageView *puke = [[UIImageView alloc] init];
        puke.image = [UIImage imageNamed:@"blank"];
        [self.computer_puke addObject:puke];
        [self.view addSubview:puke];
        [puke mas_makeConstraints:^(MASConstraintMaker *make) {
            make.top.equalTo(_conmputerc.mas_bottom).offset(10);
            make.left.mas_equalTo(distance + (110*WIDth+distance)*i);
            make.height.mas_equalTo(150*HEIGHT);
            make.width.mas_equalTo(110*WIDth);
        }];
    }
    
    _line = [[UIView alloc] init];
    _line.backgroundColor = [UIColor grayColor];
    [self.view addSubview:_line];
    [_line mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.right.mas_equalTo(0);
        make.height.mas_equalTo(0.5);
        make.top.equalTo(_conmputerc.mas_bottom).offset(10 + 150*HEIGHT + 10);
    }];
}
#pragma mark 添加自己的牌
-(void)addmine_puke {
    CGFloat distance = (kMainBoundsWidth - 110*WIDth*3)/4;
    for (int i = 0; i < 3; i++) {
        UIImageView *puke = [[UIImageView alloc] init];
        puke.image = [UIImage imageNamed:@"blank"];
        [self.mine_puke addObject:puke];
        [self.view addSubview:puke];
        [puke mas_makeConstraints:^(MASConstraintMaker *make) {
            make.top.equalTo(_line.mas_bottom).offset(10);
            make.left.mas_equalTo(distance + (110*WIDth+distance)*i);
            make.height.mas_equalTo(150*HEIGHT);
            make.width.mas_equalTo(110*WIDth);
        }];
    }
}
#pragma mark -添加最下面的按钮
-(void)addButton {
    _fapai = [myButton setbuttonTitle:@"发牌"];
    [_fapai addTarget:self action:@selector(fapaiClick) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:_fapai];
    [_fapai mas_makeConstraints:^(MASConstraintMaker *make) {
        make.right.mas_equalTo(-20);
        make.bottom.mas_equalTo(-10);
       make.size.mas_equalTo(CGSizeMake(102*WIDth, 99/2*HEIGHT));
    }];
    
    _giveUp = [myButton setbuttonTitle:@"认输"];
    [_giveUp addTarget:self action:@selector(giveUpClick) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:_giveUp];
    [_giveUp mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.mas_equalTo(20);
        make.bottom.mas_equalTo(-10);
        make.size.mas_equalTo(CGSizeMake(102*WIDth, 99/2*HEIGHT));
    }];
    
    _reopen = [myButton setbuttonTitle:@"重新开局"];
    [_reopen addTarget:self action:@selector(reopenClick) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:_reopen];
    [_reopen mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.mas_equalTo(20);
        make.bottom.mas_equalTo(-10);
        make.size.mas_equalTo(CGSizeMake(102*WIDth, 99/2*HEIGHT));
    }];
    
    _kaipai = [myButton setbuttonTitle:@"开牌"];
    [_kaipai addTarget:self action:@selector(kaipaiClick) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:_kaipai];
    [_kaipai mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.mas_equalTo(kMainBoundsWidth/2 - 51*WIDth);
        make.bottom.mas_equalTo(-10);
        make.size.mas_equalTo(CGSizeMake(102*WIDth, 99/2*HEIGHT));
    }];
}

#pragma mark -添加筹码
- (void)addfichi {
//    45/42
    CGFloat distance = (kMainBoundsWidth - 45*WIDth*4)/5;
    for (int i = 0; i < 4; i++) {
        UIButton *button = [UIButton buttonWithType:UIButtonTypeCustom];
        [button setBackgroundImage:[UIImage imageNamed:[NSString stringWithFormat:@"fiche%d",i]] forState:UIControlStateNormal];
        button.tag = i+10;
        [button addTarget:self action:@selector(selefiche:) forControlEvents:UIControlEventTouchUpInside];
        [self.view addSubview:button];
        [button mas_makeConstraints:^(MASConstraintMaker *make) {
            make.bottom.equalTo(_kaipai.mas_top).offset(-10);
            make.left.mas_equalTo(distance + (45*WIDth+distance)*i);
            make.height.mas_equalTo(42*HEIGHT);
            make.width.mas_equalTo(45*WIDth);
        }];
    }

    _ficheLine = [[UIView alloc] init];
    _ficheLine.backgroundColor = [UIColor grayColor];
    [self.view addSubview:_ficheLine];
    [_ficheLine mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.right.mas_equalTo(0);
        make.height.mas_equalTo(0.5);
        make.bottom.mas_equalTo(-(10 + 42*HEIGHT + 10 + 99/2*HEIGHT) - 10);
    }];
    _ficheLine.hidden = YES;
}

- (void)addAllFiche {
    _allFiche = [[UILabel alloc] init];
    _allFiche.backgroundColor = [UIColor orangeColor];
    _allFiche.alpha = 0.8;
    _allFiche.layer.cornerRadius = 30;
    _allFiche.layer.masksToBounds = YES;
    _allFiche.text = @"赌       注";
    _allFiche.textColor = [UIColor grayColor];
    _allFiche.textAlignment = NSTextAlignmentCenter;
    _allFiche.font = [UIFont systemFontOfSize:24];
    [self.view addSubview:_allFiche];
    [_allFiche mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(_mineLine.mas_bottom).offset(0);
        make.bottom.equalTo(_ficheLine.mas_top).offset(0);
        make.left.mas_equalTo(30);
        make.right.mas_equalTo(-30);
    }];
    
    _duzhu_di = [[UIImageView alloc] init];
    [_allFiche addSubview:_duzhu_di];
    [_duzhu_di mas_makeConstraints:^(MASConstraintMaker *make) {
        make.height.mas_equalTo(42*HEIGHT);
        make.width.mas_equalTo(45*WIDth);
        make.top.mas_equalTo(30);
        make.left.mas_equalTo(30);
    }];
    
    _duzhu_zhuijia = [[UIImageView alloc] init];
    [_allFiche addSubview:_duzhu_zhuijia];
    [_duzhu_zhuijia mas_makeConstraints:^(MASConstraintMaker *make) {
        make.height.mas_equalTo(42*HEIGHT);
        make.width.mas_equalTo(45*WIDth);
        make.top.mas_equalTo(30);
        make.right.mas_equalTo(-30);
    }];
}

#pragma mark 开牌/发牌/认输方法
-(void)fapaiClick {
    
    if (self.isXiadi == YES) {
        self.panduan = @"xiazhu";
        _fapai.enabled = NO;
        _reopen.hidden = YES;
        _kaipai.enabled = YES;
        _giveUp.hidden = NO;
        _giveUp.enabled = YES;
        
        //显示自己的三张牌
        self.mine1_kind = arc4random() % 4 +1;
        self.mine2_kind = arc4random() % 4 +1;
        self.mine3_kind = arc4random() % 4 +1;
        
        self.mine1_number = arc4random() % 13 +2;
        self.mine2_number = arc4random() % 13 +2;
        self.mine3_number = arc4random() % 13 +2;
        
        UIImageView *mine1 = self.mine_puke[0];
        UIImageView *mine2 = self.mine_puke[1];
        UIImageView *mine3 = self.mine_puke[2];
        mine1.image = [UIImage imageNamed:[NSString stringWithFormat:@"%d_%d",self.mine1_kind,self.mine1_number]];
        mine2.image = [UIImage imageNamed:[NSString stringWithFormat:@"%d_%d",self.mine2_kind,self.mine2_number]];
        mine3.image = [UIImage imageNamed:[NSString stringWithFormat:@"%d_%d",self.mine3_kind,self.mine3_number]];
    } else {
        [KVNProgress showErrorWithStatus:@"请下底,下底之后才能发牌"];
    }
}
#pragma mark -认输
-(void)giveUpClick {
    

    ScottAlertView *alertView = [ScottAlertView alertViewWithTitle:@"确认放弃这一局" message:@"您将失去目前的赌注"];
    
    [alertView addAction:[ScottAlertAction actionWithTitle:@"取消" style:ScottAlertActionStyleCancel handler:^(ScottAlertAction *action) {
        
    }]];
    
    [alertView addAction:[ScottAlertAction actionWithTitle:@"确定" style:ScottAlertActionStyleDestructive handler:^(ScottAlertAction *action) {
        
        for (UIImageView *imageView in self.mine_puke) {
            imageView.image = [UIImage imageNamed:@"blank"];
        }
        for (UIImageView *imageView in self.computer_puke) {
            imageView.image = [UIImage imageNamed:@"blank"];
        }
        self.isWin = -1;
        NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
        int demine_money = [[de objectForKey:@"mine_money"] intValue];
        int decom_money = [[de objectForKey:@"computer_money"] intValue];
        [de setObject:[NSString stringWithFormat:@"%d",demine_money + self.money_di*self.isWin + self.money_zhu*self.isWin+100*self.iszhadan] forKey:@"mine_money"];
        [de setObject:[NSString stringWithFormat:@"%d",decom_money - self.money_di*self.isWin - self.money_zhu*self.isWin-100*self.iszhadan] forKey:@"computer_money"];
        [de synchronize];
        _mine_money.text = [NSString stringWithFormat:@"¥ :%d",demine_money + self.money_di*self.isWin + self.money_zhu*self.isWin+100*self.iszhadan];
        _computer_money.text = [NSString stringWithFormat:@"¥ :%d",decom_money - self.money_di*self.isWin - self.money_zhu*self.isWin-100*self.iszhadan];
        [self initState];
    }]];
    
    ScottAlertViewController *alertController = [ScottAlertViewController alertControllerWithAlertView:alertView preferredStyle:ScottAlertControllerStyleAlert transitionAnimationStyle:ScottAlertTransitionStyleDropDown];
    alertController.tapBackgroundDismissEnable = YES;
    [self presentViewController:alertController animated:YES completion:nil];
}
#pragma mark -开牌
-(void)kaipaiClick {
    if (self.isXiadi == YES && self.isXiazhu == YES) {
        _fapai.enabled = NO;
        _giveUp.hidden = YES;
        _reopen.hidden = NO;
        _kaipai.enabled = NO;
         //显示电脑的三张牌 并比较大小
        self.computer1_kind = arc4random() % 4 +1;
        self.computer2_kind = arc4random() % 4 +1;
        self.computer3_kind = arc4random() % 4 +1;
        
        self.computer1_number = arc4random() % 13 +2;
        self.computer2_number = arc4random() % 13 +2;
        self.computer3_number = arc4random() % 13 +2;
        
        UIImageView *com1 = self.computer_puke[0];
        UIImageView *com2 = self.computer_puke[1];
        UIImageView *com3 = self.computer_puke[2];
        com1.image = [UIImage imageNamed:[NSString stringWithFormat:@"%d_%d",self.computer1_kind,self.computer1_number]];
        com2.image = [UIImage imageNamed:[NSString stringWithFormat:@"%d_%d",self.computer2_kind,self.computer2_number]];
        com3.image = [UIImage imageNamed:[NSString stringWithFormat:@"%d_%d",self.computer3_kind,self.computer3_number]];
        
        //比较大小
        [self compare];
        
        NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
        int demine_money = [[de objectForKey:@"mine_money"] intValue];
        int decom_money = [[de objectForKey:@"computer_money"] intValue];
        [de setObject:[NSString stringWithFormat:@"%d",demine_money + self.money_di*self.isWin + self.money_zhu*self.isWin + 100*self.iszhadan] forKey:@"mine_money"];
        [de setObject:[NSString stringWithFormat:@"%d",decom_money - self.money_di*self.isWin - self.money_zhu*self.isWin-100*self.iszhadan] forKey:@"computer_money"];
        [de synchronize];
        _mine_money.text = [NSString stringWithFormat:@"¥ :%d",demine_money + self.money_di*self.isWin + self.money_zhu*self.isWin+100*self.iszhadan];
        _computer_money.text = [NSString stringWithFormat:@"¥ :%d",decom_money - self.money_di*self.isWin - self.money_zhu*self.isWin-100*self.iszhadan];
       
    } else {
        [KVNProgress showErrorWithStatus:@"请下注,下注之后才能看对家牌"];
    }
}
#pragma mark -重新开始
- (void)reopenClick {
    [self initState];
    
    for (UIImageView *imageView in self.mine_puke) {
        imageView.image = [UIImage imageNamed:@"blank"];
    }
    for (UIImageView *imageView in self.computer_puke) {
        imageView.image = [UIImage imageNamed:@"blank"];
    }
    
}
#pragma mark -选择筹码
- (void)selefiche:(UIButton *)btn {
    if ([self.panduan isEqualToString:@"xiadi"]) {
        //选择下底的筹码
        _duzhu_di.image = [UIImage imageNamed:[NSString stringWithFormat:@"fiche%ld",btn.tag-10]];
        self.money_di = [FICHIARR[btn.tag - 10] intValue];
        self.isXiadi = YES;
    } else if([self.panduan isEqualToString:@"xiazhu"]){
        //选择下注的筹码
        _duzhu_zhuijia.image = [UIImage imageNamed:[NSString stringWithFormat:@"fiche%ld",btn.tag-10]];
        self.money_zhu = [FICHIARR[btn.tag - 10] intValue];
        self.isXiazhu = YES;
    }
}

#pragma mark -比较大小
-(void)compare {

    
    if ([comPareSize isSameWithOne:self.mine1_number two:self.mine2_number three:self.mine3_number] == YES) {
        if ([comPareSize isSameWithOne:self.computer1_number two:self.computer2_number three:self.computer3_number]) {
            //玩家和电脑都是豹子
            if (self.mine1_number - self.computer1_number > 0) {
                //玩家豹子大
                self.isWin = 1;
                [self presentAlertViewTitle:@"💐恭喜您💐" message:@"您获得了胜利并且恭喜您抓到了炸弹💣,但是对手也抓到了豹子所有没有奖励,只有赢得的筹码"];
            } else if(self.mine1_number - self.computer1_number < 0){
                //电脑豹子大
                self.isWin = -1;
                [self presentAlertViewTitle:@"❗️真遗憾❗️" message:@"您输了这局但是由于您和对手都抓到了炸弹💣所以只会扣除输掉的筹码"];
            } else {
                //都是豹子一样大
                self.isWin = 0;
                [self presentAlertViewTitle:@"平局" message:@""];
            }
        }else {
            //玩家是豹子
            self.isWin = 1;
            self.iszhadan = 1;
            [self presentAlertViewTitle:@"💐恭喜您💐" message:@"您获得了胜利并且恭喜您抓到了炸弹💣,电脑多扣除100筹码赠送给您"];
        }
    }else {
        if ([comPareSize isSameWithOne:self.computer1_number two:self.computer2_number three:self.computer3_number]) {
            //电脑是豹子
            self.isWin = -1;
            self.iszhadan = -1;
            [self presentAlertViewTitle:@"❗️真遗憾❗️" message:@"您输了这局更遗憾的是您的对手抓到了炸弹💣,您会多扣除100筹码赠送给对手"];
        }else {
            //都不是豹子
            switch ([comPareSize comPareSizeWithMineKind1:self.mine1_kind kind2:self.mine2_kind kind3:self.mine3_kind mine_num1:self.mine1_number mine_num2:self.mine2_number mine_num3:self.mine3_number com_kind1:self.computer1_kind com_kind2:self.computer2_kind com_kind3:self.computer3_kind com_num1:self.computer1_number com_num2:self.computer2_number com_num3:self.computer3_number]) {
                case 0:{
                    self.isWin = -1;
                    [self presentAlertViewTitle:@"❗️真遗憾❗️" message:@"您输了!会扣除您相应的筹码数量"];
                }break;
                case 1:{
                    self.isWin = 0;
                    [self presentAlertViewTitle:@"平局" message:@""];
                }break;
                case 2:{
                    self.isWin = 1;
                    [self presentAlertViewTitle:@"💐恭喜您💐" message:@"您获得了胜利!获得相应的筹码数量"];
                }break;
                default:
                    break;
            }
        }
    }
    
}

-(void)presentAlertViewTitle:(NSString *)title message:(NSString *)message {
    
            UIImage *img = [UIImage scott_screenShot];
            img = [UIImage scott_blurImage:img blur:0.4];
            
            ScottAlertView *alertView = [ScottAlertView alertViewWithTitle:title message:message];
            
            
            [alertView addAction:[ScottAlertAction actionWithTitle:@"确定" style:ScottAlertActionStyleDestructive handler:^(ScottAlertAction *action) {
                
            }]];
            
            ScottAlertViewController *alertController = [ScottAlertViewController alertControllerWithAlertView:alertView preferredStyle:ScottAlertControllerStyleAlert transitionAnimationStyle:ScottAlertTransitionStyleFade];
            
            UIImageView *imgView = [[UIImageView alloc] initWithImage:img];
            imgView.userInteractionEnabled = YES;
            alertController.backgroundView = imgView;
            
            alertController.tapBackgroundDismissEnable = YES;
        dispatch_time_t delayTime = dispatch_time(DISPATCH_TIME_NOW, (int64_t)(1.0/*延迟执行时间*/ * NSEC_PER_SEC));
    
        dispatch_after(delayTime, dispatch_get_main_queue(), ^{
            [self presentViewController:alertController animated:YES completion:nil];
        });
}

#pragma mark -强制竖屏
-(UIInterfaceOrientation)preferredInterfaceOrientationForPresentation
{
    return UIInterfaceOrientationPortrait;
}

- (UIInterfaceOrientationMask)supportedInterfaceOrientations
{
    return UIInterfaceOrientationMaskPortrait;
}

@end
