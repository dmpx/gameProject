//
//  sizeWithString.h
//  Love500m
//
//  Created by 樊建鑫 on 16/11/15.
//  Copyright © 2016年 LTZS. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
@interface sizeWithString : NSObject

+(CGFloat)heightWithString:(NSString *)str andfontSize :(CGFloat)fontSize;
+(CGFloat)widthWithString:(NSString *)str andfontSize :(CGFloat)fontSize;

//根据字符串获得字符串的高度(固定宽)
+(CGFloat)getSpaceLabelHeight:(NSString *)str withWidh:(CGFloat)width font:(NSInteger)font;
@end
