//
//  mainViewController.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/4.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "mainViewController.h"
#import "gameViewController.h"
#import "webViewTabBarController.h"
#import "AppDelegate.h"
@interface mainViewController ()

@end

@implementation mainViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    NSLog(@"%@",COMPANYPARA);
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
       [[UIApplication sharedApplication].delegate window].rootViewController = [[mainViewController alloc] init];
    }];
    
}


@end
