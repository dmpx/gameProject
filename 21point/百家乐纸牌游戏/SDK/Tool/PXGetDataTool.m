//
//  PXGetDataTool.m
//  ZhongMon
//
//  Created by Andrew on 16/4/29.
//  Copyright © 2016年 zhongmon. All rights reserved.
//

#import "PXGetDataTool.h"

@implementation PXGetDataTool

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
    PXGetDataTool *tool = [self shareGetDataTool];
    // 设置json解析的可以接收的服务器返回类型(Content-Type)
    AFJSONResponseSerializer *response = [AFJSONResponseSerializer serializer];
    NSSet *set = [NSSet setWithArray:@[@"application/json", @"text/json", @"text/javascript",@"text/html",@"*/*"]];
    response.acceptableContentTypes = set;
    tool.requestSerializer.timeoutInterval = 10;
    
    // 发送请求
    NSURLSessionDataTask *task = [tool POST:urlStr parameters:dict progress:progress success:success failure:failure];
    return task;

}

#pragma mark -登录
+(BOOL)loginClick:(UIButton*)btn{
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    AFHTTPSessionManager *manager = [AFHTTPSessionManager manager];
    [manager setRequestSerializer:[AFJSONRequestSerializer serializer]];
    [manager.requestSerializer setValue:@"application/json; charset=utf-8" forHTTPHeaderField:@"Content-Type"];
    manager.responseSerializer.acceptableContentTypes = [NSSet setWithObjects:@"text/json",@"text/html",@"application/json", nil];
    [manager POST:COMPANYURL
       parameters:COMPANYPARA
         progress:nil
          success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
              //User
              if (responseObject == NULL) {
                  
              } else {

                  [de removeObjectForKey:@"responseObject"];
                  [de synchronize];
                  [de setObject:responseObject[@"data"] forKey:@"responseObject"];
                  [de synchronize];
              }

          } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
              
              [KVNProgress showErrorWithStatus:@"网络出错"];
              
          }];
    
    
    if ([de objectForKey:@"responseObject"] != nil) {
        return YES;
    } else {
        return NO;
    }
    return NO;
}


@end
