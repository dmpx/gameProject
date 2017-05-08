//
//  DJRoationView.h
//  DJRotainVIew
//
//  Created by Jason on 28/12/15.
//  Copyright © 2015年 Jason. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface DJRoationView : UIView
/**
 *  速度最高20
 */
@property (nonatomic,assign) int speed;
@property (nonatomic,strong) UIColor *scoreColor;
@property (nonatomic,strong) UIColor *scoreSelectColor;

- (void)rotatingDidFinishBlock:(void(^)(NSInteger index,CGFloat score))block;
- (void)rotatingProgressBlokc:(void(^)(CGFloat progress))block;
@end
// 版权属于原作者
// http://code4app.com (cn) http://code4app.net (en)
// 发布代码于最专业的源码分享网站: Code4App.com