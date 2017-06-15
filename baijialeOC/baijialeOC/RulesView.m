//
//  RulesView.m
//  baijialeOC
//
//  Created by 二哈 on 17/5/23.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "RulesView.h"

@interface RulesView(){
    UIView *_backView;//蒙版,点击退出这个view
}

@end

@implementation RulesView

-(instancetype)init {
    if ([super init]) {
        [self setUI];
    }
    return self;
}

-(void)setUI {
    UIWindow * window =[[UIApplication sharedApplication].delegate window];
    _backView = [[UIView alloc] initWithFrame:[UIScreen mainScreen].bounds];
    _backView.backgroundColor=[UIColor colorWithRed:0 green:0 blue:0 alpha:0.5];
    _backView.userInteractionEnabled = YES;
    [window addSubview:_backView];
    //
    [_backView addSubview:self];

    self.backgroundColor = [UIColor whiteColor];

    UILabel *title = [[UILabel alloc] init];
    title.text = @"  游戏介绍";
    title.textAlignment = NSTextAlignmentLeft;
    title.font = [UIFont systemFontOfSize:16];
    title.textColor = [UIColor blackColor];
    [self addSubview:title];
    [title mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(0);
        make.left.mas_equalTo(0);
        make.height.mas_equalTo(40);
        make.width.mas_equalTo([FJX_Helper widthForStrWithString:@"  游戏介绍" andfontSize:20]);
    }];
//
    UIView *line = [[UIView alloc] init];
    line.backgroundColor = [UIColor blackColor];
    [self addSubview:line];
    [line mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(title.mas_bottom);
        make.left.right.mas_equalTo(0);
        make.height.mas_equalTo(0.5);
    }];
//
    UIButton *button = [UIButton buttonWithType:UIButtonTypeCustom];
    [button setTitle:@"关闭" forState:UIControlStateNormal];
    button.backgroundColor = [UIColor colorWithHexString:@"FF8212"];
    button.layer.cornerRadius = 5;
    button.layer.masksToBounds = YES;
    [button setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    [button addTarget:self action:@selector(cancelBtnClick) forControlEvents:UIControlEventTouchUpInside];
    [self addSubview:button];
    [button mas_makeConstraints:^(MASConstraintMaker *make) {
        make.right.mas_equalTo(-3);
        make.top.mas_equalTo(3);
        make.height.mas_equalTo(34);
        make.width.mas_equalTo(50);
    }];
//
    UIScrollView *scroller = [[UIScrollView alloc] init];
    [self addSubview:scroller];
    [scroller mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.right.bottom.mas_equalTo(0);
        make.top.equalTo(line.mas_bottom);
    }];
    
    UILabel *content = [[UILabel alloc] init];
    content.text = [NSString stringWithFormat:@"%@\n\n%@\n\n%@\n%@\n\n%@\n%@\n\n%@\n%@",@"百家乐，英文为Baccarat，baccarat在意大利语中的意思就是“0”，源起于法国的一种纸牌游戏，流行于欧洲各地赌场。20世纪由叶汉先生将Baccarat从美国引入澳门，并为其起了一个具有东方色彩的名字－－百家乐。",@"游戏分为庄、闲、和、闲对与庄对，这里的庄、闲、和、闲对与庄对并没有具体的含义，只是代表游戏的双方，和与对子则是为了增加娱乐性而设立的一个彩头。客人根据自己的想法可任意选择庄、闲、和与对子或其他任意一门下注。",@"基本玩法",@"使用3～8副，每副52张纸牌，洗在一起，置於发牌盒中，点击开局时发牌。各家力争手中有两张牌总点数为9或者接近9，K、Q、J和10都记为0，其他牌按牌面记点。当所有牌的点数总和超过9时，则只算总数中的个位。因此，一个8和一个9的牌点大小为：7点（8 + 9 = 17）。因百家乐中只计算扑克牌的个位数值，因此可能的最大点数为9点（如一个4 和一个 5：4 + 5 = 9），最少则为0点，又称baccarat（如一个10 和一个 Q：10 + 10 = 20，只算个位是 0）。",@"重置",@"点击重置按钮,游戏恢复初始状态",@"清空",@"点击清空按钮,取消当前所有投注"];
    content.textAlignment = NSTextAlignmentLeft;
    content.numberOfLines = 0;
    content.font = [UIFont systemFontOfSize:14];
    content.textColor = [UIColor blackColor];
    [scroller addSubview:content];
    [content mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(0);
        make.left.mas_equalTo(0);
        make.width.equalTo(scroller.mas_width);
        make.height.mas_equalTo([FJX_Helper heightForLabelWithString:content.text withFontSize:14 withWidth:kMainBoundsWidth/2 withHeight:0]);
    }];
    scroller.contentSize = CGSizeMake(kMainBoundsWidth/2, [FJX_Helper heightForLabelWithString:content.text withFontSize:14 withWidth:kMainBoundsWidth/2 withHeight:0]);
}
#pragma mark -取消按钮
- (void)cancelBtnClick{
    [_backView removeFromSuperview];
    [self removeFromSuperview];
}
@end
