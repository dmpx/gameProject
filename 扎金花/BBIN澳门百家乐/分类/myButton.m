//
//  myButton.m
//  BBIN澳门百家乐
//
//  Created by 二哈 on 17/4/15.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "myButton.h"

@implementation myButton

+(UIButton *)setbuttonTitle:(NSString *)title {
    UIButton *button = [UIButton buttonWithType:UIButtonTypeCustom];
    [button setBackgroundImage:[UIImage imageNamed:@"button"] forState:UIControlStateNormal];
    [button setTitle:title forState:UIControlStateNormal];
    button.titleLabel.font = [UIFont systemFontOfSize:16];
    button.titleLabel.textAlignment = NSTextAlignmentCenter;
    [button setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    return button;
}

@end
