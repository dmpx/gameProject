//
//  ViewController.m
//  baijialeOC
//
//  Created by 二哈 on 17/5/20.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "ViewController.h"
#import "pokerView.h"
#import "RulesView.h"
@interface ViewController (){
    UIImageView *_tableBg;
    UIView *_bottomView;
    UIButton *_xiandui;
    UIButton *_zhuangdui;
    UIButton *_xian;
    UIButton *_he;
    UIButton *_zhuang;
    UILabel *_jieyu;
    
    UILabel *_money1;
    UILabel *_money2;
    UILabel *_money3;
    UILabel *_money4;
    UILabel *_money5;
}
@property (nonatomic ,strong)UIView *pokerView;
@property (nonatomic ,assign)int money;//总价钱
@property (nonatomic ,assign)int xiandui_money;
@property (nonatomic ,assign)int zhuangduimoney;
@property (nonatomic ,assign)int xianmoney;
@property (nonatomic ,assign)int hemoney;
@property (nonatomic ,assign)int zhuangmoney;
@property (nonatomic ,assign)int tag;
@property (nonatomic ,strong)UIView *rulesView;
@property (nonatomic ,strong)NSMutableArray *buttonArr;

@end

@implementation ViewController

-(NSMutableArray *)buttonArr {
    if (!_buttonArr) {
        _buttonArr = [NSMutableArray array];
    }
    return _buttonArr;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.

    if ([[NSUserDefaults standardUserDefaults] objectForKey:@"overmoney"] == NO) {
        [[NSUserDefaults standardUserDefaults] setObject:@"10000" forKey:@"overmoney"];
        [[NSUserDefaults standardUserDefaults] synchronize];
    }
    //初始化
    [self allockinit];
    //线布局
    [self lineUI];
    //控件
    [self bottomUI];
    [self addotherButton];
}
- (void)allockinit {
    self.money = 0;//总价钱
    self.xiandui_money = 0;
    self.zhuangduimoney = 0;
    self.xianmoney = 0;
    self.hemoney = 0;
    self.zhuangmoney = 0;
    self.tag = 0;
}
#pragma mark 区域点击方法
//闲对
-(void)xianduiClick {
    self.money = self.money + self.tag;
    if (self.money > 10000) {
        [SVProgressHUD showErrorWithStatus:@"您的余额不足"];
    } else {
        if (self.tag == 0) {
             [SVProgressHUD showErrorWithStatus:@"请选择筹码"];
        } else {
            self.xiandui_money = self.xiandui_money + self.tag;
            _money1.text = [NSString stringWithFormat:@"%d",self.xiandui_money];
            UIImageView *image = [[UIImageView alloc] init];
            image.image = [UIImage imageNamed:[NSString stringWithFormat:@"数字%d",self.tag]];
            UIButton *btn = [_tableBg viewWithTag:self.tag];
            image.frame = CGRectMake(btn.frame.origin.x, -5-40*WIDth, 40*WIDth, 40*HEIGHT);
            [_xiandui addSubview:image];
            int temp_Y = _xiandui.frame.size.height - 60;
            int temp_X = _xiandui.frame.size.width - 60;
            int X = arc4random()%temp_X;
            int Y = arc4random()%temp_Y;
            [UIView animateWithDuration:0.3 animations:^{
                image.frame = CGRectMake(X, Y, 40, 40);
            }];
        }
    }
}
//庄对
-(void)zhuangduiClick {
    NSString *MONEY = [[NSUserDefaults standardUserDefaults] objectForKey:@"overmoney"];
    self.money = self.money + self.tag;
    if (self.money > MONEY.intValue) {
        [SVProgressHUD showErrorWithStatus:@"您的余额不足"];
    } else {
        if (self.tag == 0) {
            [SVProgressHUD showErrorWithStatus:@"请选择筹码"];
        } else {
            self.zhuangduimoney = self.zhuangduimoney + self.tag;
            _money2.text = [NSString stringWithFormat:@"%d",self.zhuangduimoney];
            UIImageView *image = [[UIImageView alloc] init];
            image.image = [UIImage imageNamed:[NSString stringWithFormat:@"数字%d",self.tag]];
            UIButton *btn = [_tableBg viewWithTag:self.tag];
            image.frame = CGRectMake(btn.frame.origin.x, -5-40*WIDth, 40*WIDth, 40*HEIGHT);
            [_zhuangdui addSubview:image];
            int temp_Y = _zhuangdui.frame.size.height - 60;
            int temp_X = _zhuangdui.frame.size.width - 60;
            int X = arc4random()%temp_X;
            int Y = arc4random()%temp_Y;
            [UIView animateWithDuration:0.3 animations:^{
                image.frame = CGRectMake(X, Y, 40, 40);
            }];
        }
    }
}
//闲
-(void)xianClick {

    self.money = self.money + self.tag;
    if (self.money > [[[NSUserDefaults standardUserDefaults] objectForKey:@"overmoney"] intValue]) {
        [SVProgressHUD showErrorWithStatus:@"您的余额不足"];
    } else {
        if (self.tag == 0) {
            [SVProgressHUD showErrorWithStatus:@"请选择筹码"];
        } else {
            self.xianmoney = self.xianmoney + self.tag;
            _money3.text = [NSString stringWithFormat:@"%d",self.xianmoney];
            UIImageView *image = [[UIImageView alloc] init];
            image.image = [UIImage imageNamed:[NSString stringWithFormat:@"数字%d",self.tag]];
            UIButton *btn = [_tableBg viewWithTag:self.tag];
            image.frame = CGRectMake(btn.frame.origin.x, -5-40*WIDth, 40*WIDth, 40*HEIGHT);
            [_xian addSubview:image];
            int temp_Y = _xian.frame.size.height - 60;
            int temp_X = _xian.frame.size.width - 60;
            int X = arc4random()%temp_X;
            int Y = arc4random()%temp_Y;
            [UIView animateWithDuration:0.3 animations:^{
                image.frame = CGRectMake(X, Y, 40, 40);
            }];
        }
    }
}
//和
-(void)heClick {
    self.money = self.money + self.tag;
    if (self.money > [[[NSUserDefaults standardUserDefaults] objectForKey:@"overmoney"] intValue]) {
        [SVProgressHUD showErrorWithStatus:@"您的余额不足"];
    } else {
        if (self.tag == 0) {
            [SVProgressHUD showErrorWithStatus:@"请选择筹码"];
        } else {
            self.hemoney = self.hemoney + self.tag;
            _money4.text = [NSString stringWithFormat:@"%d",self.hemoney];
            UIImageView *image = [[UIImageView alloc] init];
            image.image = [UIImage imageNamed:[NSString stringWithFormat:@"数字%d",self.tag]];
            UIButton *btn = [_tableBg viewWithTag:self.tag];
            image.frame = CGRectMake(btn.frame.origin.x, -5-40*WIDth, 40*WIDth, 40*HEIGHT);
            [_he addSubview:image];
            int temp_Y = _he.frame.size.height - 60;
            int temp_X = _he.frame.size.width - 60;
            int X = arc4random()%temp_X;
            int Y = arc4random()%temp_Y;
            [UIView animateWithDuration:0.3 animations:^{
                image.frame = CGRectMake(X, Y, 40, 40);
            }];
        }
    }
}
//庄
-(void)zhuangClick {
    self.money = self.money + self.tag;
    if (self.money > [[[NSUserDefaults standardUserDefaults] objectForKey:@"overmoney"] intValue]) {
        [SVProgressHUD showErrorWithStatus:@"您的余额不足"];
    } else {
        if (self.tag == 0) {
            [SVProgressHUD showErrorWithStatus:@"请选择筹码"];
        } else {
            self.zhuangmoney = self.zhuangmoney + self.tag;
            _money5.text = [NSString stringWithFormat:@"%d",self.zhuangmoney];
            UIImageView *image = [[UIImageView alloc] init];
            image.image = [UIImage imageNamed:[NSString stringWithFormat:@"数字%d",self.tag]];
            UIButton *btn = [_tableBg viewWithTag:self.tag];
            image.frame = CGRectMake(btn.frame.origin.x, -5-40*WIDth, 40*WIDth, 40*HEIGHT);
            [_zhuang addSubview:image];
            int temp_Y = _zhuang.frame.size.height - 60;
            int temp_X = _zhuang.frame.size.width - 60;
            int X = arc4random()%temp_X;
            int Y = arc4random()%temp_Y;
            [UIView animateWithDuration:0.3 animations:^{
                image.frame = CGRectMake(X, Y, 40, 40);
            }];
        }
    }
}
//查看规则
-(void)seeRules {
    RulesView *view = [[RulesView alloc] init];
    view.frame = CGRectMake(kMainBoundsWidth/4, 0, kMainBoundsWidth/2, kMainBoundsHeight);
}
//选择筹码
-(void)selectBtn:(UIButton *)btn {
    NSLog(@"%ld",(long)btn.tag);
    self.tag = (int)btn.tag;
}

-(void)startGame {
    if (self.tag == 0) {
         [SVProgressHUD showErrorWithStatus:@"请下注"];
    }else {
        pokerView *poker = [[pokerView alloc] initWithMoney1:self.xiandui_money Money2:self.zhuangduimoney Money3:self.xianmoney Money4:self.hemoney Money5:self.zhuangmoney];
        [poker setCancelBtnClick:^(int allMoney) {
            NSString *str = [[NSUserDefaults standardUserDefaults] objectForKey:@"overmoney"];
            [[NSUserDefaults standardUserDefaults] setObject:[NSString stringWithFormat:@"%d",str.intValue + allMoney] forKey:@"overmoney"];
            [[NSUserDefaults standardUserDefaults] synchronize];
             _jieyu.text = [NSString stringWithFormat:@"结余: %@",[[NSUserDefaults standardUserDefaults] objectForKey:@"overmoney"]];
            [self qingkong];
        }];
        poker.frame=CGRectMake(0, 0, kMainBoundsHeight, kMainBoundsWidth);
    }
}
//重置
-(void)chongzhi {
    [[NSUserDefaults standardUserDefaults] setObject:@"10000" forKey:@"overmoney"];
    [[NSUserDefaults standardUserDefaults] synchronize];
    _jieyu.text = [NSString stringWithFormat:@"结余: %@",[[NSUserDefaults standardUserDefaults] objectForKey:@"overmoney"]];
}
//清空
-(void)qingkong {
    for (UIView *view in _xiandui.subviews) {
            [view removeFromSuperview];
    }
    for (UIView *view in _zhuangdui.subviews) {
            [view removeFromSuperview];
    }
    for (UIView *view in _xian.subviews) {
            [view removeFromSuperview];
    }
    for (UIView *view in _he.subviews) {
            [view removeFromSuperview];
    }
    for (UIView *view in _zhuang.subviews) {
            [view removeFromSuperview];
    }
    [self allockinit];
}
-(void)addotherButton {
    
    //三个筹码按钮
    UIButton *btn100 = [UIButton buttonWithType:UIButtonTypeCustom];
    [btn100 setImage:[UIImage imageNamed:@"数字100"] forState:UIControlStateNormal];
    btn100.tag = 100;
    [btn100 addTarget:self action:@selector(selectBtn:) forControlEvents:UIControlEventTouchUpInside];
    [_tableBg addSubview:btn100];
    [btn100 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(5);
        make.left.mas_equalTo(5);
        make.size.mas_equalTo(CGSizeMake(40*WIDth, 40*HEIGHT));
    }];
    [self.buttonArr addObject:btn100];
    
    
    UIButton *btn500 = [UIButton buttonWithType:UIButtonTypeCustom];
    btn500.tag = 500;
    [btn500 addTarget:self action:@selector(selectBtn:) forControlEvents:UIControlEventTouchUpInside];
    [btn500 setImage:[UIImage imageNamed:@"数字500"] forState:UIControlStateNormal];
    [_tableBg addSubview:btn500];
    [btn500 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(5);
        make.left.equalTo(btn100.mas_right).offset(10);
        make.size.mas_equalTo(CGSizeMake(40*WIDth, 40*HEIGHT));
    }];
    [self.buttonArr addObject:btn500];
    
    UIButton *btn1000 = [UIButton buttonWithType:UIButtonTypeCustom];
    [btn1000 setImage:[UIImage imageNamed:@"数字1000"] forState:UIControlStateNormal];
    btn1000.tag = 1000;
    [btn1000 addTarget:self action:@selector(selectBtn:) forControlEvents:UIControlEventTouchUpInside];
    [_tableBg addSubview:btn1000];
    [btn1000 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(5);
        make.left.equalTo(btn500.mas_right).offset(10);
        make.size.mas_equalTo(CGSizeMake(40*WIDth, 40*HEIGHT));
    }];
     [self.buttonArr addObject:btn1000];
    
    _jieyu = [[UILabel alloc] init];
    _jieyu.font = [UIFont systemFontOfSize:20];
    _jieyu.textColor = [UIColor colorWithHexString:@"D3C836"];
    _jieyu.textAlignment = NSTextAlignmentCenter;
    _jieyu.text = [NSString stringWithFormat:@"结余: %@",[[NSUserDefaults standardUserDefaults] objectForKey:@"overmoney"]];
    [_tableBg addSubview:_jieyu];
    [_jieyu mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(5);
        make.height.mas_equalTo(40*HEIGHT);
        make.centerX.equalTo(_tableBg.mas_centerX);
        make.width.mas_equalTo([FJX_Helper widthForStrWithString:@"结余: 1000000" andfontSize:20]);
    }];
    
    UIButton *rules = [UIButton buttonWithType:UIButtonTypeCustom];
    [rules setTitle:@"查看规则" forState:UIControlStateNormal];
    [rules setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    rules.titleLabel.font = [UIFont systemFontOfSize:18];
    [rules addTarget:self action:@selector(seeRules) forControlEvents:UIControlEventTouchUpInside];
    rules.backgroundColor = [UIColor colorWithHexString:@"976F42"];
    rules.layer.cornerRadius = 5;
    rules.layer.masksToBounds = YES;
    [_tableBg addSubview:rules];
    [rules mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(5);
        make.right.mas_equalTo(-5);
        make.height.mas_equalTo(40*HEIGHT);
        make.width.mas_equalTo(80*WIDth);
    }];
    
    //重置
    UIButton *chongzhi = [UIButton buttonWithType:UIButtonTypeCustom];
    [chongzhi setImage:[UIImage imageNamed:@"重置按钮"] forState:UIControlStateNormal];
    [chongzhi addTarget:self action:@selector(chongzhi) forControlEvents:UIControlEventTouchUpInside];
    [_tableBg addSubview:chongzhi];
    [chongzhi mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(-5);
        make.left.mas_equalTo(5);
        make.size.mas_equalTo(CGSizeMake(40*WIDth, 40*HEIGHT));
    }];
    //清空
    UIButton *qingkong = [UIButton buttonWithType:UIButtonTypeCustom];
    [qingkong setImage:[UIImage imageNamed:@"清空按钮01"] forState:UIControlStateNormal];
    [qingkong addTarget:self action:@selector(qingkong) forControlEvents:UIControlEventTouchUpInside];
    [_tableBg addSubview:qingkong];
    [qingkong mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(-5);
        make.left.equalTo(chongzhi.mas_right).offset(20);
        make.size.mas_equalTo(CGSizeMake(40*WIDth, 40*HEIGHT));
    }];
    
    //开局
    UIButton *start = [UIButton buttonWithType:UIButtonTypeCustom];
    [start setTitle:@"开 局" forState:UIControlStateNormal];
    [start setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    start.titleLabel.font = [UIFont systemFontOfSize:18];
    [start addTarget:self action:@selector(startGame) forControlEvents:UIControlEventTouchUpInside];
    start.backgroundColor = [UIColor colorWithHexString:@"FF8212"];
    start.layer.cornerRadius = 5;
    start.layer.masksToBounds = YES;
    [_tableBg addSubview:start];
    [start mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(-5);
        make.centerX.equalTo(_tableBg.mas_centerX);
        make.height.mas_equalTo(40*HEIGHT);
        make.width.mas_equalTo(70*WIDth);
    }];
}

-(void)bottomUI {
    UILabel *bottomLable = [[UILabel alloc] init];
    bottomLable.text = @"请点击选择该区域下注";
    bottomLable.font = [UIFont systemFontOfSize:30 weight:10];
    bottomLable.textColor = [UIColor yellowColor];
    bottomLable.alpha = 0.3;
    bottomLable.textAlignment = NSTextAlignmentCenter;
    [_bottomView addSubview:bottomLable];
    [bottomLable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.bottom.left.right.mas_equalTo(0);
    }];
    //按钮
    _xiandui = [UIButton buttonWithType:UIButtonTypeCustom];
    [_xiandui addTarget:self action:@selector(xianduiClick) forControlEvents:UIControlEventTouchUpInside];
    [_bottomView insertSubview:_xiandui aboveSubview:bottomLable];
    [_xiandui mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.left.mas_equalTo(0);
        make.width.equalTo(_bottomView.mas_width).multipliedBy(0.5f);
        make.height.equalTo(_bottomView.mas_height).multipliedBy(0.5f);
    }];
    
    _money1 = [[UILabel alloc] init];
    _money1.font = [UIFont systemFontOfSize:14];
    _money1.textColor = [UIColor whiteColor];
    _money1.textAlignment = NSTextAlignmentCenter;
    [_xiandui addSubview:_money1];
    [_money1 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.left.right.mas_equalTo(0);
        make.height.mas_equalTo(30);
    }];
    
    //按钮上的字
    UILabel *xiandui_lable =[self setLable:@"闲对" font:40];
    [_bottomView addSubview:xiandui_lable];
    [xiandui_lable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.right.equalTo(_xiandui.mas_right);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"现状" andfontSize:40]);
        make.width.mas_equalTo([FJX_Helper widthForStrWithString:@"现状" andfontSize:40]);
        make.centerY.mas_equalTo(_xiandui.mas_centerY);
    }];
    UILabel *xiandui_lable1 =[self setLable:@"1:11" font:20];
    [_bottomView addSubview:xiandui_lable1];
    [xiandui_lable1 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.equalTo(xiandui_lable.mas_left);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"现状" andfontSize:20]);
        make.width.equalTo(xiandui_lable.mas_width);
        make.top.equalTo(xiandui_lable.mas_bottom);
    }];
    
    //按钮
    _zhuangdui = [UIButton buttonWithType:UIButtonTypeCustom];
    [_zhuangdui addTarget:self action:@selector(zhuangduiClick) forControlEvents:UIControlEventTouchUpInside];
    [_bottomView insertSubview:_zhuangdui aboveSubview:bottomLable];
    [_zhuangdui mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.right.mas_equalTo(0);
        make.width.equalTo(_bottomView.mas_width).multipliedBy(0.5f);
        make.height.equalTo(_bottomView.mas_height).multipliedBy(0.5f);
    }];
    _money2 = [[UILabel alloc] init];
    _money2.font = [UIFont systemFontOfSize:14];
    _money2.textColor = [UIColor whiteColor];
    _money2.textAlignment = NSTextAlignmentCenter;
    [_zhuangdui addSubview:_money2];
    [_money2 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.left.right.mas_equalTo(0);
        make.height.mas_equalTo(30);
    }];
    
    //按钮上的字
    UILabel *zhuangdui_lable =[self setLable:@"庄对" font:40];
    [_bottomView addSubview:zhuangdui_lable];
    [zhuangdui_lable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.equalTo(_zhuangdui.mas_left);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"现状" andfontSize:40]);
        make.width.mas_equalTo([FJX_Helper widthForStrWithString:@"现状" andfontSize:40]);
        make.centerY.mas_equalTo(_xiandui.mas_centerY);
    }];
    UILabel *zhuangdui_lable1 =[self setLable:@"1:11" font:20];
    [_bottomView addSubview:zhuangdui_lable1];
    [zhuangdui_lable1 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.equalTo(zhuangdui_lable.mas_left);
        make.right.equalTo(zhuangdui_lable.mas_right);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"1:11" andfontSize:20]);
        make.top.equalTo(zhuangdui_lable.mas_bottom);
    }];
    //按钮
    _xian = [UIButton buttonWithType:UIButtonTypeCustom];
    [_xian addTarget:self action:@selector(xianClick) forControlEvents:UIControlEventTouchUpInside];
    [_bottomView insertSubview:_xian aboveSubview:bottomLable];
    [_xian mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.left.mas_equalTo(0);
        make.width.equalTo(_bottomView.mas_width).multipliedBy(.33f);
        make.height.equalTo(_bottomView.mas_height).multipliedBy(0.5f);
    }];
    
    _money3 = [[UILabel alloc] init];
    _money3.font = [UIFont systemFontOfSize:14];
    _money3.textColor = [UIColor whiteColor];
    _money3.textAlignment = NSTextAlignmentCenter;
    [_xian addSubview:_money3];
    [_money3 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.left.right.mas_equalTo(0);
        make.height.mas_equalTo(30);
    }];
    
    UILabel *xian_lable =[self setLable:@"闲" font:40];
    [_bottomView addSubview:xian_lable];
    [xian_lable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.center.equalTo(_xian);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"现状" andfontSize:40]);
        make.width.mas_equalTo([FJX_Helper widthForStrWithString:@"现状" andfontSize:40]);
    }];
    UILabel *xian_lable1 =[self setLable:@"1:1" font:20];
    [_bottomView addSubview:xian_lable1];
    [xian_lable1 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.centerX.equalTo(_xian.mas_centerX);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"现状" andfontSize:20]);
        make.width.mas_equalTo([FJX_Helper widthForStrWithString:@"现状" andfontSize:20]);
        make.top.equalTo(xian_lable.mas_bottom);
    }];
    //按钮
    _he = [UIButton buttonWithType:UIButtonTypeCustom];
    [_he addTarget:self action:@selector(heClick) forControlEvents:UIControlEventTouchUpInside];
    [_bottomView insertSubview:_he aboveSubview:bottomLable];
    [_he mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(0);
        make.left.equalTo(_xian.mas_right);
        make.width.equalTo(_bottomView.mas_width).multipliedBy(.33f);
        make.height.equalTo(_bottomView.mas_height).multipliedBy(0.5f);
    }];
    _money4 = [[UILabel alloc] init];
    _money4.font = [UIFont systemFontOfSize:14];
    _money4.textColor = [UIColor whiteColor];
    _money4.textAlignment = NSTextAlignmentCenter;
    [_he addSubview:_money4];
    [_money4 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.left.right.mas_equalTo(0);
        make.height.mas_equalTo(30);
    }];
    
    //按钮的字
    UILabel *he_lable =[self setLable:@"和" font:40];
    [_bottomView addSubview:he_lable];
    [he_lable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.center.equalTo(_he);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"现状" andfontSize:40]);
        make.width.mas_equalTo([FJX_Helper widthForStrWithString:@"现状" andfontSize:40]);
    }];
    UILabel *he_lable1 =[self setLable:@"1:8" font:20];
    [_bottomView addSubview:he_lable1];
    [he_lable1 mas_makeConstraints:^(MASConstraintMaker *make) {
         make.centerX.equalTo(_he.mas_centerX);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"现状" andfontSize:20]);
        make.width.mas_equalTo([FJX_Helper widthForStrWithString:@"现状" andfontSize:20]);
        make.top.equalTo(he_lable.mas_bottom);
    }];
    //按钮
    _zhuang = [UIButton buttonWithType:UIButtonTypeCustom];
    [_zhuang addTarget:self action:@selector(zhuangClick) forControlEvents:UIControlEventTouchUpInside];
    [_bottomView insertSubview:_zhuang aboveSubview:bottomLable];
    [_zhuang mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(0);
        make.right.mas_equalTo(0);
        make.width.equalTo(_bottomView.mas_width).multipliedBy(.33f);
        make.height.equalTo(_bottomView.mas_height).multipliedBy(0.5f);
    }];
    _money5 = [[UILabel alloc] init];
    _money5.font = [UIFont systemFontOfSize:14];
    _money5.textColor = [UIColor whiteColor];
    _money5.textAlignment = NSTextAlignmentCenter;
    [_zhuang addSubview:_money5];
    [_money5 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.left.right.mas_equalTo(0);
        make.height.mas_equalTo(30);
    }];
    //字
    UILabel *zhuang_lable =[self setLable:@"和" font:40];
    [_bottomView addSubview:zhuang_lable];
    [zhuang_lable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.center.equalTo(_zhuang);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"现状" andfontSize:40]);
        make.width.mas_equalTo([FJX_Helper widthForStrWithString:@"现状" andfontSize:40]);
    }];
    UILabel *zhuang_lable1 =[self setLable:@"1:2" font:20];
    [_bottomView addSubview:zhuang_lable1];
    [zhuang_lable1 mas_makeConstraints:^(MASConstraintMaker *make) {
         make.centerX.equalTo(_zhuang.mas_centerX);
        make.height.mas_equalTo([FJX_Helper heightForStrWithString:@"现状" andfontSize:20]);
        make.width.mas_equalTo([FJX_Helper widthForStrWithString:@"现状" andfontSize:20]);
        make.top.equalTo(zhuang_lable.mas_bottom);
    }];
}

-(UILabel *)setLable:(NSString *)str font:(CGFloat)fontsize {
    UILabel *xiandui_lable1 =[[UILabel alloc] init];
    xiandui_lable1.text = str;
    xiandui_lable1.font = [UIFont systemFontOfSize:fontsize];
    xiandui_lable1.textColor = [UIColor colorWithHexString:@"235131"];
    xiandui_lable1.alpha = 0.8;
    xiandui_lable1.userInteractionEnabled = NO;
    xiandui_lable1.textAlignment = NSTextAlignmentCenter;
    return xiandui_lable1;
}

-(void)lineUI {
    
    _tableBg = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"tableBg"]];
    _tableBg.userInteractionEnabled = YES;
    [self.view addSubview:_tableBg];
    [_tableBg mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.left.right.bottom.mas_equalTo(0);
    }];
    _bottomView = [[UIView alloc] init];
    _bottomView.backgroundColor = [UIColor clearColor];
    _bottomView.layer.cornerRadius = 25*WIDth;
    _bottomView.layer.masksToBounds = YES;
    _bottomView.layer.borderColor = [UIColor whiteColor].CGColor;
    _bottomView.layer.borderWidth = 1;
    [_tableBg addSubview:_bottomView];
    [_bottomView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(50*HEIGHT);
        make.left.mas_equalTo(5);
        make.bottom.mas_equalTo(-50*HEIGHT);
        make.right.mas_equalTo(-5);
    }];
    
    UIView *midLine = [[UIView alloc] init];
    midLine.backgroundColor = [UIColor whiteColor];
    [_bottomView addSubview:midLine];
    [midLine mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.right.mas_equalTo(0);
        make.centerY.equalTo(_bottomView.mas_centerY);
        make.height.mas_equalTo(1);
    }];
    //上中间线
    UIView *topLine = [[UIView alloc] init];
    topLine.backgroundColor = [UIColor whiteColor];
    [_bottomView addSubview:topLine];
    [topLine mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(0);
        make.bottom.equalTo(midLine.mas_top);
        make.left.equalTo(_bottomView.mas_centerX).offset(0.5);
        make.width.mas_equalTo(1);
    }];
    //下左线
    UIView *bottomLine1 = [[UIView alloc] init];
    bottomLine1.backgroundColor = [UIColor whiteColor];
    [_bottomView addSubview:bottomLine1];
    [bottomLine1 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(0);
        make.top.equalTo(midLine.mas_bottom);
        make.left.mas_equalTo((kMainBoundsHeight - 10)/3);
        make.width.mas_equalTo(1);
    }];
    UIView *bottomLine2 = [[UIView alloc] init];
    bottomLine2.backgroundColor = [UIColor whiteColor];
    [_bottomView addSubview:bottomLine2];
    [bottomLine2 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(0);
        make.top.equalTo(midLine.mas_bottom);
        make.right.mas_equalTo(-(kMainBoundsHeight - 10)/3);
        make.width.mas_equalTo(1);
    }];
}


-(UIView *)pokerView {
    if (_pokerView) {
        _pokerView = [[UIView alloc] init];
    }
    return _pokerView;
}
-(UIInterfaceOrientation)preferredInterfaceOrientationForPresentation
{
    return UIInterfaceOrientationLandscapeLeft;
}

- (UIInterfaceOrientationMask)supportedInterfaceOrientations
{
    return UIInterfaceOrientationMaskLandscapeLeft;
}


@end
