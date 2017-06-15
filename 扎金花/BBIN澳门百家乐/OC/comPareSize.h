//
//  comPareSize.h
//  BBIN澳门百家乐
//
//  Created by 二哈 on 17/4/17.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface comPareSize : NSObject
+(BOOL)isSameAndshunziWithOne:(int)kind1 two:(int)kind2 three:(int)kind3 num1:(int)num1 num2:(int)num2 num3:(int)num3;

//判断三个是不是一样的//同花或者豹子
+(BOOL)isSameWithOne:(int)one two:(int)two three:(int)three;
//判断是不是顺子
+(BOOL)isshunziWithOne:(int)one two:(int)two three:(int)three;
//判断是不是对
+(BOOL)isDuiWithOne:(int)one two:(int)two three:(int)three;
+(int)comPareSizeWithMineKind1:(int)mine_kind1 kind2:(int)mine_kind2 kind3:(int)mine_kind3 mine_num1:(int)mine_num1 mine_num2:(int)mine_num2 mine_num3:(int)mine_num3 com_kind1:(int)com_kind1 com_kind2:(int)com_kind2 com_kind3:(int)com_kind3 com_num1:(int)com_num1 com_num2:(int)com_num2 com_num3:(int)com_num3;
@end
