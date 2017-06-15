//
//  AppDelegate.h
//  baijialeOC
//
//  Created by 二哈 on 17/5/20.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <CoreData/CoreData.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

@property (readonly, strong) NSPersistentContainer *persistentContainer;

- (void)saveContext;


@end

