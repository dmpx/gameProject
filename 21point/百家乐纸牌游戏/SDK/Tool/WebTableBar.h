//
//  WebTableBar.h
//  CLottery6
//
//  Created by Carr on 17/2/27.
//  Copyright © 2017年 WestLand. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface WebTableBar : UIView
@property (nonatomic ,copy)void (^advance)();
@property (nonatomic ,copy)void (^refresh)();
@property (nonatomic ,copy)void (^retreat)();
@property (nonatomic ,copy)void (^dropout)();
@property (nonatomic ,copy)void (^goHome)();
@end
