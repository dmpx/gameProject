//
//  FJX+Helper.h
//  Love500m
//
//  Created by 二哈 on 17/5/5.
//  Copyright © 2017年 LTZS. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface FJX_Helper : NSObject
#pragma mark -字符串

/**
 *@brief 根据字符串的字体大小获取字符串的高度
 *@param str 字符串
 *@param fontSize str的字体大小，以systemFont为标准
 */
+(CGFloat)heightForStrWithString:(NSString *)str andfontSize :(CGFloat)fontSize;
/**
 *@brief 根据字符串的字体大小获取字符串的宽度
 *@param str 字符串
 *@param fontSize str的字体大小，以systemFont为标准
 */
+(CGFloat)widthForStrWithString:(NSString *)str andfontSize :(CGFloat)fontSize;

/**
 *@brief 根据字符串获取label的高度
 *@param labelString label的text
 *@param fontSize label的字体大小，以systemFont为标准
 *@param width 最大宽度
 *@param height 最大高度
 */
+ (CGFloat)heightForLabelWithString:(NSString *)labelString withFontSize:(CGFloat)fontSize withWidth:(CGFloat)width withHeight:(CGFloat)height;


/**
 *@brief 一段字符串显示不同的颜色和字体大小
 *@param string string
 *@font fontsize 字体大小
 *@param color 颜色
 *@param range 范围
 */
+(NSMutableAttributedString *)setStrColorWithStr:(NSString *)string Corlor:(UIColor*)color font:(UIFont*)fontsize range:(NSRange)range;
#pragma mark -date时间

/**
 *@brief 获取当前时间戳，并转化为字符串
 **/
//+(NSString *)getTimeStamp;
/**
 *@brief 将时间格式字符串按照format格式转化为需要的时间格式字符串
 */
+ (NSString *)formatDateWithString:(NSString *)dateString format:(NSString *)format;
/**
 *@brief 将date按照format格式转化为字符串
 */
+ (NSString *)formatDateWithDate:(NSDate *)date format:(NSString *)format;
/**
 *@brief 将时间格式字符串转化为date
 */
+ (NSDate *)dateValueWithString:(NSString *)dateStr ByFormatter:(NSString *)formatter;
/**
 *@brief 给出date，返回这个时间点是星期几
 */
+ (NSString *)weekdayStringValue:(NSDate*)date;
@end
