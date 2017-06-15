//
//  pokerView.h
//  baijialeOC
//
//  Created by 二哈 on 17/5/22.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface pokerView : UIView
@property (nonatomic ,assign)int xiandui_money;
@property (nonatomic ,assign)int zhuangduimoney;
@property (nonatomic ,assign)int xianmoney;
@property (nonatomic ,assign)int hemoney;
@property (nonatomic ,assign)int zhuangmoney;
@property (nonatomic ,copy)void(^cancelBtnClick)(int allmoney);
- (instancetype)initWithMoney1:(int)money1 Money2:(int)money2 Money3:(int)money3 Money4:(int)money4 Money5:(int)money5;
@end
