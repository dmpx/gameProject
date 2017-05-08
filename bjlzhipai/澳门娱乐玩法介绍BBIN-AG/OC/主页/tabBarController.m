//
//  tabBarController.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/5.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "tabBarController.h"
#import "tableViewController.h"
#import "collectViewController.h"
#import "moreViewController.h"
#import "FristPageViewController.h"
#import "shoucangViewController.h"
#import "gameViewController.h"
#import "shoucangViewController.h"
@interface tabBarController ()

@end

@implementation tabBarController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.

    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    
    tableViewController *basketVC = [[tableViewController alloc] init];
    [self addChildVC:basketVC andTitle:[de objectForKey:@"name"] andimage:@"shouye" andseledimage:@"shouye1" tag:0];
    
    collectViewController *match = [[collectViewController alloc] init];
    [self addChildVC:match andTitle:@"设置" andimage:@"shoucang" andseledimage:@"shoucang1" tag:1];
    
    moreViewController *mine = [[moreViewController alloc] init];
    [self addChildVC:mine andTitle:@"财运抽签" andimage:@"more" andseledimage:@"more1" tag:2];
    
//    shoucangViewController * shoucang = [[shoucangViewController alloc] init];
//    [self addChildVC:shoucang andTitle:@"记事本" andimage:@"wode" andseledimage:@"wode1" tag:3];
    
    gameViewController *game = [[gameViewController alloc] init];
    [self addChildVC:game andTitle:@"游戏体验" andimage:@"wode" andseledimage:@"wode1" tag:4];
}

- (void)addChildVC:(UIViewController *)child andTitle:(NSString *)title andimage:(NSString *)image andseledimage:(NSString *)seledimage tag:(NSInteger)tag{
    
    //    child.title = title;
    child.navigationItem.title = title;
    child.tabBarItem.title = title;
    child.tabBarItem.tag = tag;
    child.tabBarItem.image = [[UIImage imageNamed:image] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
    child.tabBarItem.selectedImage = [[UIImage imageNamed:seledimage]imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal];
    [child.tabBarItem setTitleTextAttributes:@{NSForegroundColorAttributeName:[UIColor orangeColor]} forState:UIControlStateSelected];
    UINavigationController *nav = [[UINavigationController alloc] initWithRootViewController:child];
        nav.navigationBar.tintColor = [UIColor whiteColor];
    nav.navigationBar.barTintColor = [UIColor colorWithHexString:@"EF8218"];
    child.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithImage:[UIImage imageNamed:@"mulu"] style:UIBarButtonItemStylePlain target:self action:@selector(back)];
    [self addChildViewController:nav];
}
-(void)back {
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    [de removeObjectForKey:@"name"];
    [de removeObjectForKey:@"tag"];
    [de synchronize];
    [self.navigationController popViewControllerAnimated:YES];
}

@end
