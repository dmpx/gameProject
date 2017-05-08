//
//  AppDelegate.h
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/3.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <CoreData/CoreData.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (readonly, strong) NSPersistentContainer *persistentContainer;

- (void)saveContext;
-(void)noNetWork;

@end

