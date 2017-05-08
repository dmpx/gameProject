//
//  LevelModel.h
//  MinesweeperGame
//
//  Created by PC-LiuChunhui on 16/4/21.
//  Copyright © 2016年 Mr.Wendao. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface LevelModel : NSObject
@property (nonatomic, copy) NSString *title;
@property (nonatomic, assign) NSInteger row;//行
@property (nonatomic, assign) NSInteger column;//列
@property (nonatomic, assign) NSInteger mineNums;//地雷数量

+ (LevelModel *)levelModelWithTitle:(NSString *)title row:(NSInteger)row column:(NSInteger)column mineNums:(NSInteger)mineNums;
@end
