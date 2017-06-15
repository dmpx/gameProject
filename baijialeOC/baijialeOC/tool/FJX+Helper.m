//
//  FJX+Helper.m
//  Love500m
//
//  Created by 二哈 on 17/5/5.
//  Copyright © 2017年 LTZS. All rights reserved.
//

#import "FJX+Helper.h"

@implementation FJX_Helper

+(CGFloat)heightForStrWithString:(NSString *)str andfontSize:(CGFloat)fontSize {
    UILabel *lable = [[UILabel alloc] initWithFrame:CGRectMake(0, 0, 0, 0)];
    lable.text = str;
    lable.numberOfLines = 1;
    lable.font = [UIFont systemFontOfSize:fontSize];
    [lable sizeToFit];
    return lable.bounds.size.height;
}

+(CGFloat)widthForStrWithString:(NSString *)str andfontSize:(CGFloat)fontSize {
    UILabel *lable = [[UILabel alloc] initWithFrame:CGRectMake(0, 0, 0, 0)];
    lable.text = str;
    lable.numberOfLines = 1;
    lable.font = [UIFont systemFontOfSize:fontSize];
    [lable sizeToFit];
    return lable.bounds.size.width;
}

+(CGFloat)heightForLabelWithString:(NSString *)labelString withFontSize:(CGFloat)fontSize withWidth:(CGFloat)width withHeight:(CGFloat)height {
    NSMutableParagraphStyle *paragphStyle=[[NSMutableParagraphStyle alloc]init];
    
    paragphStyle.lineSpacing=0;//设置行距为0
    paragphStyle.firstLineHeadIndent=0.0;
    paragphStyle.hyphenationFactor=0.0;
    paragphStyle.paragraphSpacingBefore=0.0;
    
    NSDictionary *dic=@{
                        NSFontAttributeName:[UIFont systemFontOfSize:fontSize], NSParagraphStyleAttributeName:paragphStyle, NSKernAttributeName:@1.0f
                        
                        };
    CGSize size=[labelString boundingRectWithSize:CGSizeMake(width,0) options:NSStringDrawingUsesLineFragmentOrigin attributes:dic context:nil].size;
    
    return size.height;
}

+(NSMutableAttributedString *)setStrColorWithStr:(NSString *)string Corlor:(UIColor*)color font:(UIFont*)fontsize range:(NSRange)range {
    NSMutableAttributedString *AttributedStr = [[NSMutableAttributedString alloc]initWithString:string];
    [AttributedStr addAttribute:NSForegroundColorAttributeName value:color range:range];
    [AttributedStr addAttribute:NSFontAttributeName value:fontsize range:range];
    return AttributedStr;
    
}

#pragma maek -date
+ (NSString *)formatDateWithDate:(NSDate *)date format:(NSString *)format {
    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
    
    //常用格式 @"yyyy-MM-dd HH:mm:ss"
    [dateFormatter setDateFormat:format];
    NSString *result = [dateFormatter stringFromDate:date];
    
    return result;
}
+ (NSString *)formatDateWithString:(NSString *)dateString format:(NSString *)format {
    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
    dateFormatter.dateFormat = @"yyyy-MM-dd HH:mm:ss";
    NSDate *d = [dateFormatter dateFromString:dateString];
    
    return [FJX_Helper formatDateWithDate:d format:format];
}

+ (NSDate *)dateValueWithString:(NSString *)dateStr ByFormatter:(NSString *)formatter {
    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];
    dateFormatter.dateFormat = formatter;
    return [dateFormatter dateFromString:dateStr];
}

+ (NSString *)weekdayStringValue:(NSDate*)date {
    NSCalendar *calendar = [NSCalendar currentCalendar];
    NSInteger unitFlags = NSWeekCalendarUnit|NSWeekdayCalendarUnit;
    NSDateComponents *comps = [calendar components:unitFlags fromDate:date];
    int weekday=(int)[comps weekday];
    switch (weekday)
    {
        case 1:
            return @"星期天";
            break;
        case 2:
            return @"星期一";
            break;
        case 3:
            return @"星期二";
            break;
        case 4:
            return @"星期三";
            break;
        case 5:
            return @"星期四";
            break;
        case 6:
            return @"星期五";
            break;
        case 7:
            return @"星期六";
            break;
            
        default:
            break;
    }
    return nil;
}


@end
