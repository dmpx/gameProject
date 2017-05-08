//
//  PXGetDataTool.h
//  ZhongMon
//
//  Created by Andrew on 16/4/29.
//  Copyright © 2016年 zhongmon. All rights reserved.
//

#import "AFHTTPSessionManager.h"

typedef void(^progressBlock)(NSProgress *downloadProgress);
typedef void(^successBlock)(NSURLSessionDataTask * task, id responseObject);
typedef void(^failureBlock)(NSURLSessionDataTask * task, NSError *error);

//typedef void(^GetDataSuccessBlock)(NSArray *dataArr);
//typedef void(^GetDataFailureBlock)(NSError *error);

@interface PXGetDataTool : AFHTTPSessionManager

//判断开关是否打开
+ (NSURLSessionDataTask *)opinionSwitchisOn:(NSString *)urlStr parameters:(NSDictionary *)dict progress:(progressBlock)progress success:(successBlock)success failure:(failureBlock)failure;

@end
