//
//  webViewTabBarController.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/4.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "webViewTabBarController.h"
#import "webViewController.h"
@interface webViewTabBarController ()<UITabBarControllerDelegate>


@end

@implementation webViewTabBarController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    webViewController *Company = [[webViewController alloc] init];
    self.webDelegate = Company;
    
    NSMutableArray *vcArr = [[NSMutableArray alloc] init];
    NSArray *title = @[@"首页",@"前进",@"后退",@"刷新",@"退出"];
    NSArray *imgArr = @[@"homePic",@"gotoPic1",@"backPic",@"refreshPic",@"exit"];
    
    for (int i = 0; i < title.count; i++) {
        
        UITabBarItem *tabbarItem = [[UITabBarItem alloc] initWithTitle:title[i] image:[UIImage imageNamed:imgArr[i]] tag:i];
        if (i == 0) {
            Company.tabBarItem = tabbarItem;
            [vcArr addObject:Company];
        } else {
            UIViewController *vc = [[UIViewController alloc] init];
            vc.tabBarItem = tabbarItem;
            [vcArr addObject:vc];
        }
    }
    self.delegate = self;
    [self setViewControllers:vcArr];
}
-(BOOL)tabBarController:(UITabBarController *)tabBarController shouldSelectViewController:(UIViewController *)viewController {
    NSInteger tag = [tabBarController.viewControllers indexOfObject:viewController];
    [self controlWebView:tag];
    return NO;
}

- (void)controlWebView:(NSInteger)tag {
    NSLog(@"%ldd",(long)tag);
    switch (tag) {
        case 0:
            //首页
            [self.webDelegate homePage];
            break;
        case 1:
            //前进
            [self.webDelegate goforward];
            break;
        case 2:
            //后退
            [self.webDelegate goback];
            break;
        case 3:
            //刷新
            [self.webDelegate reload];
            break;
        case 4:
            //退出
            [self.webDelegate exitApp];
            break;
        default:
            break;
    }
}

@end
