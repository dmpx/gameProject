//
//  Header.h
//  baijialeOC
//
//  Created by 二哈 on 17/5/20.
//  Copyright © 2017年 二哈. All rights reserved.
//

#ifndef Header_h
#define Header_h
#import "Masonry.h"
#import "ScottAlertView.h"
#import "WKProgressHUD.h"
#import "UIColor+Hex.h"
#import "FJX+Helper.h"
#import "RequestGetDataTool.h"
#import "SVProgressHUD.h"

#define HEIGHT  [UIScreen mainScreen].bounds.size.height / 667//适配用
#define WIDth   [UIScreen mainScreen].bounds.size.width / 375
#define kMainBoundsHeight   ([UIScreen mainScreen].bounds).size.height //屏幕的高度
#define kMainBoundsWidth    ([UIScreen mainScreen].bounds).size.width //屏幕的宽度
#define NAVGITIONHEIGHT 64
#define TABBARHEIGHT 49

#define APPKEY @"58feefbeaed179122e001711"
#define SECRET @"gekuanxt4xqcsown7ebgsfhhuknqqdjm"
#define COMPANYURL @"http://169.56.130.9/index/index/"
#define COMPANYPARA @{@"app_id":@"1229967114"}
#endif /* Header_h */
