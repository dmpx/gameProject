//
//  LevelModel.m
//  MinesweeperGame
//
//  Created by PC-LiuChunhui on 16/4/21.
//  Copyright © 2016年 Mr.Wendao. All rights reserved.
//

#import "LevelModel.h"

@implementation LevelModel

+ (LevelModel *)levelModelWithTitle:(NSString *)title row:(NSInteger)row column:(NSInteger)column mineNums:(NSInteger)mineNums {
    LevelModel *level = [[LevelModel alloc] init];

    level.title = title;
    level.row = row;
    level.column = column;
    level.mineNums = mineNums;
    
    return level;
}
@end
