//
//  sizeWithString.m
//  Love500m
//
//  Created by 樊建鑫 on 16/11/15.
//  Copyright © 2016年 LTZS. All rights reserved.
//

#import "sizeWithString.h"

@implementation sizeWithString

+(CGFloat)heightWithString:(NSString *)str andfontSize :(CGFloat)fontSize {
    UILabel *lable = [[UILabel alloc] initWithFrame:CGRectMake(0, 0, 0, 0)];
    lable.text = str;
    lable.numberOfLines = 1;
    lable.font = [UIFont systemFontOfSize:fontSize];
    [lable sizeToFit];
    return lable.bounds.size.height;
}

+(CGFloat)widthWithString:(NSString *)str andfontSize :(CGFloat)fontSize {

    UILabel *lable = [[UILabel alloc] initWithFrame:CGRectMake(0, 0, 0, 0)];
    lable.text = str;
    lable.numberOfLines = 1;
    lable.font = [UIFont systemFontOfSize:fontSize];
    [lable sizeToFit];
    return lable.bounds.size.width;
}

+(CGFloat)getSpaceLabelHeight:(NSString *)str withWidh:(CGFloat)width font:(NSInteger)font
{
    
    NSMutableParagraphStyle *paragphStyle=[[NSMutableParagraphStyle alloc]init];
    
    paragphStyle.lineSpacing=0;//设置行距为0
    paragphStyle.firstLineHeadIndent=0.0;
    paragphStyle.hyphenationFactor=0.0;
    paragphStyle.paragraphSpacingBefore=0.0;
    
    NSDictionary *dic=@{
                        NSFontAttributeName:[UIFont systemFontOfSize:font], NSParagraphStyleAttributeName:paragphStyle, NSKernAttributeName:@1.0f

                        };
    CGSize size=[str boundingRectWithSize:CGSizeMake(width,0) options:NSStringDrawingUsesLineFragmentOrigin attributes:dic context:nil].size;
    
    return size.height;
    
}

@end
