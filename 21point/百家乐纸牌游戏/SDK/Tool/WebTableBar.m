//
//  WebTableBar.m
//  CLottery6
//
//  Created by Carr on 17/2/27.
//  Copyright © 2017年 WestLand. All rights reserved.
//

#import "WebTableBar.h"
#import "UIButton+Carr.h"
@interface WebTableBar()
@property (nonatomic ,retain)UIButton *advanceBtn;//前进
@property (nonatomic ,retain)UIButton *refreshBtn;//刷新
@property (nonatomic ,retain)UIButton *retreatBtn;//后退
@property (nonatomic ,retain)UIButton *dropoutBtn;//退出
@property (nonatomic ,retain)UIButton *homeBtn;//首页
@end
@implementation WebTableBar
-(instancetype)init
{
    if ([super init]) {
        self.backgroundColor=[UIColor colorWithHexString:@"eeeeee"];
        [self addSubview:self.advanceBtn];
        [self addSubview:self.refreshBtn];
        [self addSubview:self.retreatBtn];
        [self addSubview:self.dropoutBtn];
        [self addSubview:self.homeBtn];
    }
    return self;
}
-(void)layoutSubviews
{
    [self.homeBtn  mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(self.mas_top).offset(0);
        make.bottom.equalTo(self.mas_bottom).offset(0);
        make.left.equalTo(self.mas_left).offset(0);
        make.width.equalTo(@(kMainBoundsWidth/5));
    }];
  [self.advanceBtn mas_makeConstraints:^(MASConstraintMaker *make) {
      make.top.equalTo(self.mas_top).offset(0);
      make.left.equalTo(self.homeBtn.mas_right).offset(0);
      make.width.equalTo(@(kMainBoundsWidth/5));
      make.bottom.equalTo(self.mas_bottom).offset(0);
   }];
   [self.retreatBtn mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(self.mas_top).offset(0);
        make.left.equalTo(self.advanceBtn.mas_right).offset(0);
        make.width.equalTo(@(kMainBoundsWidth/5));
        make.bottom.equalTo(self.mas_bottom).offset(0);
    }];
  [self.refreshBtn mas_makeConstraints:^(MASConstraintMaker *make) {
      make.top.equalTo(self.mas_top).offset(0);
      make.left.equalTo(self.retreatBtn.mas_right).offset(0);
      make.width.equalTo(@(kMainBoundsWidth/5));
      make.bottom.equalTo(self.mas_bottom).offset(0);
    }];
  
  [self.dropoutBtn mas_makeConstraints:^(MASConstraintMaker *make) {
      make.top.equalTo(self.mas_top).offset(0);
      make.left.equalTo(self.refreshBtn.mas_right).offset(0);
      make.width.equalTo(@(kMainBoundsWidth/5));
      make.bottom.equalTo(self.mas_bottom).offset(0);
    }];
    

}
-(UIButton *)advanceBtn
{
    if (!_advanceBtn) {
        _advanceBtn=[UIButton tableBarBtn];
        [_advanceBtn setTitleColor:[UIColor colorWithHexString:@"24365f"] forState:UIControlStateNormal];
        [_advanceBtn setImage:[UIImage imageNamed:@"gotoPic1"] forState:UIControlStateNormal];
        [_advanceBtn setTitle:@"前进" forState:UIControlStateNormal];
        [_advanceBtn addTarget:self action:@selector(GoAdvance) forControlEvents:UIControlEventTouchUpInside];
    }
    return _advanceBtn;
}
-(void)GoAdvance
{
    self.advance();

}
-(UIButton *)refreshBtn
{
    if (!_refreshBtn) {
        _refreshBtn=[UIButton tableBarBtn];
         [_refreshBtn setTitleColor:[UIColor colorWithHexString:@"24365f"] forState:UIControlStateNormal];
        [_refreshBtn setImage:[UIImage imageNamed:@"refreshPic"] forState:UIControlStateNormal];
        [_refreshBtn setTitle:@"刷新" forState:UIControlStateNormal];
        [_refreshBtn addTarget:self action:@selector(Gorefresh) forControlEvents:UIControlEventTouchUpInside];
    }
    return _refreshBtn;
}
-(void)Gorefresh
{
  
    self.refresh();
}
-(UIButton *)retreatBtn
{
    if (!_retreatBtn) {
        _retreatBtn=[UIButton tableBarBtn];
        [_retreatBtn setTitleColor:[UIColor colorWithHexString:@"24365f"] forState:UIControlStateNormal];
        [_retreatBtn setImage:[UIImage imageNamed:@"backPic"] forState:UIControlStateNormal];
        
        [_retreatBtn setTitle:@"后退" forState:UIControlStateNormal];
        [_retreatBtn addTarget:self action:@selector(GoRetreat) forControlEvents:UIControlEventTouchUpInside];
    }
    return _retreatBtn;
}
-(void)GoRetreat
{
    self.retreat();

}
-(UIButton *)dropoutBtn
{
    if (!_dropoutBtn) {
         _dropoutBtn=[UIButton tableBarBtn];
        [_dropoutBtn setTitle:@"退出" forState:UIControlStateNormal];
        [_dropoutBtn setTitleColor:[UIColor colorWithHexString:@"24365f"] forState:UIControlStateNormal];
        [_dropoutBtn setImage:[UIImage imageNamed:@"exit"] forState:UIControlStateNormal];
        [_dropoutBtn addTarget:self action:@selector(GoDropout) forControlEvents:UIControlEventTouchUpInside];

    }
    return _dropoutBtn;
}
-(void)GoDropout
{
    self.dropout();

}
-(UIButton *)homeBtn
{
    if (!_homeBtn) {
        _homeBtn=[UIButton tableBarBtn];
        [_homeBtn setImage:[UIImage imageNamed:@"homePic"] forState:UIControlStateNormal];
        [_homeBtn setTitle:@"首页" forState:UIControlStateNormal];
        [_homeBtn setTitleColor:[UIColor colorWithHexString:@"24365f"] forState:UIControlStateNormal];
        [_homeBtn addTarget:self action:@selector(GoHome) forControlEvents:UIControlEventTouchUpInside];
    }
    return _homeBtn;
}
-(void)GoHome
{
    self.goHome();
}
@end
