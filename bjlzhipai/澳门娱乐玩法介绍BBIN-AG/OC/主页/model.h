//
//  model.h
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/12.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface model : NSObject
@property (nonatomic ,strong)NSString *content;
@property (nonatomic ,strong)NSString *title;

+(model *)modelWithDic:(NSMutableDictionary*)dic;
@end
