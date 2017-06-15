//
//  webViewTabBarController.h
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/4.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import <UIKit/UIKit.h>
@protocol webViewProtocol <NSObject>

-(void)goforward;//前进
-(void)goback;//后退
-(void)reload;//刷新
-(void)exitApp;//退出
-(void)homePage;//首页

@end

@interface webViewTabBarController : UITabBarController
@property (nonatomic,retain)id<webViewProtocol>webDelegate;
@end
