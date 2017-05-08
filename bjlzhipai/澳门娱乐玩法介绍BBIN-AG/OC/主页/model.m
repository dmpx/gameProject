//
//  model.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/12.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "model.h"

@implementation model
+(model *)modelWithDic:(NSDictionary *)dic {
    return [[model alloc]initWithDic:dic ];
}

-(id)initWithDic:(NSDictionary *)dic{
    if ( self = [super init]) {
        [self setValuesForKeysWithDictionary:dic];
        
    }
    return self;
}


-(void)setValue:(id)value forUndefinedKey:(NSString *)key{
}
@end
