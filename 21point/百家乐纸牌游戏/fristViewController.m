//
//  fristViewController.m
//  百家乐纸牌游戏
//
//  Created by 二哈 on 17/4/21.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "fristViewController.h"
#import "webViewTabBarController.h"
#import "gameViewController.h"
@interface fristViewController ()

@end

@implementation fristViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    WKProgressHUD *hud = [WKProgressHUD showInView:self.view withText:@"等待加载" animated:YES];
    [PXGetDataTool opinionSwitchisOn:COMPANYURL parameters:COMPANYPARA progress:nil success:^(NSURLSessionDataTask *task, id responseObject) {
        //成功
        NSLog(@"%@",responseObject);
        if (responseObject == NULL) {
            
            [hud dismiss:YES];
            [[UIApplication sharedApplication].delegate window].rootViewController = [[gameViewController alloc] init];
        } else {
            [hud dismiss:YES];
            NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
            [de setObject:responseObject[@"data"] forKey:@"responseObject"];
            [de synchronize];
            webViewTabBarController *web=[[webViewTabBarController alloc] init];
            [[UIApplication sharedApplication].delegate window].rootViewController = web;
        }
    } failure:^(NSURLSessionDataTask *task, NSError *error) {
        [hud dismiss:YES];
        [[UIApplication sharedApplication].delegate window].rootViewController =[[fristViewController alloc] init];
    }];
}



@end
