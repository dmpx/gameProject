//
//  UIButton+Carr.m
//  CLottery6
//
//  Created by Carr on 17/2/27.
//  Copyright © 2017年 WestLand. All rights reserved.
//

#import "UIButton+Carr.h"

@implementation UIButton (Carr)
+(UIButton *)tableBarBtn
{
    
    UIButton *Btn=[UIButton buttonWithType:UIButtonTypeCustom];
    [Btn.titleLabel setFont:[UIFont boldSystemFontOfSize:13]];
    Btn.contentHorizontalAlignment=UIControlContentHorizontalAlignmentCenter;
    Btn.titleLabel.backgroundColor = Btn.backgroundColor;
    Btn.imageView.backgroundColor = Btn.backgroundColor;
    CGSize titleSize = Btn.titleLabel.bounds.size;
    CGSize imageSize = Btn.imageView.bounds.size;
    CGFloat interval = 1.0;
    [Btn setImageEdgeInsets:UIEdgeInsetsMake(-20,15, titleSize.height + interval, -(titleSize.width + interval+10))];
    [Btn setTitleEdgeInsets:UIEdgeInsetsMake(imageSize.height + interval+30, -30, 0,  -(titleSize.width + interval))];
    Btn.titleLabel.textAlignment=NSTextAlignmentCenter;
    [Btn.titleLabel mas_makeConstraints:^(MASConstraintMaker *make) {
        make.centerX.equalTo(Btn.mas_centerX).offset(0);
        make.width.equalTo(@50);
        make.bottom.equalTo(Btn.mas_bottom).offset(0);
        make.height.equalTo(@20);
    }];
    [Btn.imageView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.height.equalTo(@0);
        make.centerX.equalTo(Btn.mas_centerX).offset(0);
        make.top.equalTo(Btn.mas_top).offset(0);
        make.width.equalTo(@20);
    }];
    [Btn setTitleColor:[UIColor colorWithHexString:@"24365f"] forState:UIControlStateNormal];
    return Btn;
}
@end
