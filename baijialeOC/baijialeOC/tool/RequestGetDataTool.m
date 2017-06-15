//
//  PXGetDataTool.m
//  ZhongMon
//
//  Created by Andrew on 16/4/29.
//  Copyright © 2016年 zhongmon. All rights reserved.
//

#import "RequestGetDataTool.h"

@implementation RequestGetDataTool

static id _instance;

+ (instancetype)shareGetDataTool{
    
    @synchronized (self) {
        static dispatch_once_t onceToken; 
        dispatch_once(&onceToken, ^{
            _instance = [[self alloc] init];
        });
    }
    return _instance;
}


#pragma mark -判断开关是否打开
//判断开关是否打开
+ (NSURLSessionDataTask *)opinionSwitchisOn:(NSString *)urlStr parameters:(NSDictionary *)dict progress:(progressBlock)progress success:(successBlock)success failure:(failureBlock)failure{


// 获取单例
    RequestGetDataTool *tool = [self shareGetDataTool];
    // 设置json解析的可以接收的服务器返回类型(Content-Type)
    AFJSONResponseSerializer *response = [AFJSONResponseSerializer serializer];
    NSSet *set = [NSSet setWithArray:@[@"application/json", @"text/json", @"text/javascript",@"text/html",@"*/*"]];
    response.acceptableContentTypes = set;
    tool.requestSerializer.timeoutInterval = 10;
    
    // 发送请求
    NSURLSessionDataTask *task = [tool POST:urlStr parameters:dict progress:progress success:success failure:failure];
    return task;

}

#pragma mark get刘请求
+ (NSURLSessionDataTask *)GETJSON:(NSString *)urlStr progress:(progressBlock)progress success:(successBlock)success failure:(failureBlock)failure
{
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    manager.responseSerializer.acceptableContentTypes = [NSSet setWithObject:@"application/json"];
    [manager.requestSerializer setValue:@"application/json; charset=utf-8" forHTTPHeaderField:@"Content-Type"];
    
    [manager.responseSerializer.acceptableContentTypes setByAddingObject:@"application/json"];
    
    manager.requestSerializer = [AFJSONRequestSerializer serializer];
    manager.responseSerializer = [AFJSONResponseSerializer serializer];
    manager.requestSerializer.timeoutInterval = 10;
    // 发送请求
    NSURLSessionDataTask *task = [manager GET:urlStr parameters:nil progress:progress success:success failure:failure];
    return task;
    
}
#pragma mark - post刘请求

+ (NSURLSessionDataTask *)POSTJSON:(NSString *)urlStr parameters:(NSDictionary *)dict progress:(progressBlock)progress success:(successBlock)success failure:(failureBlock)failure
{

    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    manager.responseSerializer.acceptableContentTypes = [NSSet setWithObject:@"application/json"];
    [manager.requestSerializer setValue:@"application/json; charset=utf-8" forHTTPHeaderField:@"Content-Type"];
    
    [manager.responseSerializer.acceptableContentTypes setByAddingObject:@"application/json"];
    
    manager.requestSerializer = [AFJSONRequestSerializer serializer];
    manager.responseSerializer = [AFJSONResponseSerializer serializer];
    manager.requestSerializer.timeoutInterval = 10;
    
    // 发送请求
    NSURLSessionDataTask *task = [manager POST:urlStr parameters:dict progress:progress success:success failure:failure];
    return task;
}



@end
