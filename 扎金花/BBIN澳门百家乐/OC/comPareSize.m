//
//  comPareSize.m
//  BBIN澳门百家乐
//
//  Created by 二哈 on 17/4/17.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "comPareSize.h"

@implementation comPareSize

+(int)comPareSizeWithMineKind1:(int)mine_kind1 kind2:(int)mine_kind2 kind3:(int)mine_kind3 mine_num1:(int)mine_num1 mine_num2:(int)mine_num2 mine_num3:(int)mine_num3 com_kind1:(int)com_kind1 com_kind2:(int)com_kind2 com_kind3:(int)com_kind3 com_num1:(int)com_num1 com_num2:(int)com_num2 com_num3:(int)com_num3 {
    if ([comPareSize isSameAndshunziWithOne:mine_kind1 two:mine_kind2 three:mine_kind3 num1:mine_num1 num2:mine_num2 num3:mine_num3]) {
        if ([comPareSize isSameAndshunziWithOne:com_kind1 two:com_kind2 three:com_kind3 num1:com_num1 num2:com_num2 num3:com_num3]) {
            //玩家和电脑是同花顺
            NSArray *mineArr = [@[[NSNumber numberWithInt:mine_num1],[NSNumber numberWithInt:mine_num2],[NSNumber numberWithInt:mine_num3]] sortedArrayUsingComparator:^NSComparisonResult(id  _Nonnull obj1, id  _Nonnull obj2) {
                return [obj1 compare:obj2];
            }];
            NSArray *comArr = [@[[NSNumber numberWithInt:com_num1],[NSNumber numberWithInt:com_num2],[NSNumber numberWithInt:com_num3]] sortedArrayUsingComparator:^NSComparisonResult(id  _Nonnull obj1, id  _Nonnull obj2) {
                return [obj1 compare:obj2];
            }];
            if ([mineArr[2] intValue] - [comArr[2] intValue] > 0) {
                return 2;
            } else if ([mineArr[2] intValue] - [comArr[2] intValue] < 0){
                return 0;
            } else {
                return 1;
            }
        } else {
            //玩家是 电脑不是
            return 2;
        }
    } else {

        if ([comPareSize isSameAndshunziWithOne:com_kind1 two:com_kind2 three:com_kind3 num1:com_num1 num2:com_num2 num3:com_num3]) {
            //电脑是同花顺 玩家不是
            return 0;
        } else {
            //玩家不是 电脑不是
            //比较是不是对
            if ([comPareSize isSameWithOne:mine_kind1 two:mine_kind2 three:mine_kind3]) {
                if ([comPareSize isSameWithOne:com_kind1 two:com_kind2 three:com_kind3]) {
                    //玩家电脑都是同花
                    NSArray *mineArr = [@[[NSNumber numberWithInt:mine_num1],[NSNumber numberWithInt:mine_num2],[NSNumber numberWithInt:mine_num3]] sortedArrayUsingComparator:^NSComparisonResult(id  _Nonnull obj1, id  _Nonnull obj2) {
                        return [obj1 compare:obj2];
                    }];
                    NSArray *comArr = [@[[NSNumber numberWithInt:com_num1],[NSNumber numberWithInt:com_num2],[NSNumber numberWithInt:com_num3]] sortedArrayUsingComparator:^NSComparisonResult(id  _Nonnull obj1, id  _Nonnull obj2) {
                        return [obj1 compare:obj2];
                    }];
                    if ([mineArr[2] intValue] - [comArr[2] intValue] > 0) {
                        return 2;
                    } else if ([mineArr[2] intValue] - [comArr[2] intValue] < 0){
                        return 0;
                    } else {
                        return 1;
                    }
                } else {
                    //玩家是同花  电脑不是
                    return 2;
                }
            } else {
                if ([comPareSize isSameWithOne:com_kind1 two:com_kind2 three:com_kind3]) {
                    //玩家不是  电脑是
                    return 0;
                } else {
                    //都不是
                    if ([comPareSize isshunziWithOne:mine_num1 two:mine_num2 three:mine_num3]) {
                        if ([comPareSize isshunziWithOne:mine_num1 two:mine_num2 three:mine_num3]) {
                            //电脑和玩家都是顺子
                            NSArray *mineArr = [@[[NSNumber numberWithInt:mine_num1],[NSNumber numberWithInt:mine_num2],[NSNumber numberWithInt:mine_num3]] sortedArrayUsingComparator:^NSComparisonResult(id  _Nonnull obj1, id  _Nonnull obj2) {
                                return [obj1 compare:obj2];
                            }];
                            NSArray *comArr = [@[[NSNumber numberWithInt:com_num1],[NSNumber numberWithInt:com_num2],[NSNumber numberWithInt:com_num3]] sortedArrayUsingComparator:^NSComparisonResult(id  _Nonnull obj1, id  _Nonnull obj2) {
                                return [obj1 compare:obj2];
                            }];
                            if ([mineArr[1] intValue] - [comArr[1] intValue] > 0) {
                                return 2;
                            } else if ([mineArr[1] intValue] - [comArr[1] intValue] < 0){
                                return 0;
                            } else {
                                return 1;
                            }
                        } else {
                            //玩家是 电脑不是
                            return 2;
                        }
                    } else {
                        if ([comPareSize isshunziWithOne:mine_num1 two:mine_num2 three:mine_num3]) {
                            //玩家不是 电脑是
                            return 0;
                        } else {
                            //都不是
                            if ([comPareSize isDuiWithOne:mine_num1 two:mine_num2 three:mine_num3]) {
                                if ([comPareSize isDuiWithOne:com_num1 two:com_num2 three:com_num3]) {
                                    //玩家和电脑都是对

                                    int minesamenum = 0;//相等的数
                                    int mineNum = 0;//不相等的
                                    int comsamenum = 0;
                                    int comNum = 0;
                                    if (mine_num1 == mine_num2) {
                                        minesamenum = mine_num1;
                                        mineNum = mine_num3;
                                    } else if(mine_num1 == mine_num3) {
                                        minesamenum = mine_num1;
                                        mineNum = mine_num2;
                                    } else if (mine_num2 == mine_num3) {
                                        minesamenum = mine_num2;
                                        mineNum = mine_num1;
                                    }
                                    if (com_num1 == com_num2) {
                                        comsamenum = mine_num1;
                                        comNum = com_num3;
                                    } else if(com_num1 == com_num3) {
                                        comsamenum = com_num1;
                                        comNum = com_num2;
                                    } else if (com_num2 == com_num3) {
                                        comsamenum = com_num2;
                                        comNum = com_num1;
                                    }
                                    if (minesamenum > comsamenum) {
                                        return 2;
                                    } else if (minesamenum < comsamenum){
                                        return 0;
                                    } else {
                                        if (mineNum > comNum) {
                                            return 2;
                                        } else if (mineNum < comNum) {
                                            return 0;
                                        } else {
                                            return 1;
                                        }
                                        
                                    }
                                }else {
                                    //玩家是 电脑不是
                                    return 2;
                                }
                            } else {
                                if ([comPareSize isDuiWithOne:com_num1 two:com_num2 three:com_num3]) {
                                    //玩家不是 电脑是
                                    return 0;
                                }else {
                                    //都不是
                                    NSArray *mineArr = [@[[NSNumber numberWithInt:mine_num1],[NSNumber numberWithInt:mine_num2],[NSNumber numberWithInt:mine_num3]] sortedArrayUsingComparator:^NSComparisonResult(id  _Nonnull obj1, id  _Nonnull obj2) {
                                        return [obj1 compare:obj2];
                                    }];
                                    NSArray *comArr = [@[[NSNumber numberWithInt:com_num1],[NSNumber numberWithInt:com_num2],[NSNumber numberWithInt:com_num3]] sortedArrayUsingComparator:^NSComparisonResult(id  _Nonnull obj1, id  _Nonnull obj2) {
                                        return [obj1 compare:obj2];//升序
                                    }];
                                    NSString *mineStr = [NSString stringWithFormat:@"%@%@%@",mineArr[2],mineArr[1],mineArr[0]];
                                    NSString *comStr = [NSString stringWithFormat:@"%@%@%@",comArr[2],comArr[1],comArr[0]];
                                    if ([mineStr compare:comStr] == NSOrderedAscending) {
                                        //升序
                                        return 0;
                                    }else if ([mineStr compare:comStr] == NSOrderedDescending) {
                                        return 2;
                                    } else {
                                        return 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return 1;
}
//判断是不是同花顺
+(BOOL)isSameAndshunziWithOne:(int)kind1 two:(int)kind2 three:(int)kind3 num1:(int)num1 num2:(int)num2 num3:(int)num3{
    if ([comPareSize isSameWithOne:kind1 two:kind2 three:kind3]) {
        if ([comPareSize isshunziWithOne:num1 two:num2 three:num3]) {
            return YES;
        } else {
            return NO;
        }
    } else {
        return NO;
    }
    return NO;
}

//判断三个是不是一样的//同花或者豹子
+(BOOL)isSameWithOne:(int)one two:(int)two three:(int)three {
    if (one == two && one == three) {
        return YES;
    }
    return NO;
}
//判断是不是顺子
+(BOOL)isshunziWithOne:(int)one two:(int)two three:(int)three {
    NSArray *arr = @[[NSNumber numberWithInt:one],[NSNumber numberWithInt:two],[NSNumber numberWithInt:three]];
    //升序排序
    NSArray *resultArr = [arr sortedArrayUsingComparator:^NSComparisonResult(id  _Nonnull obj1, id  _Nonnull obj2) {
        return [obj1 compare:obj2];
    }];
    if ([resultArr[1] intValue] - [resultArr[0] intValue] == 1 && [resultArr[2] intValue] - [resultArr[1] intValue] == 1) {
        return YES;
    } else if ([resultArr[0] intValue] == 2 && [resultArr[1] intValue] == 3 && [resultArr[2] intValue] == 14) {
        return YES;
    }
    
    return NO;
}
//判断是不是对
+(BOOL)isDuiWithOne:(int)one two:(int)two three:(int)three {
    if (one == two || two == three || three == one) {
        return YES;
    }
    return NO;
}



@end
