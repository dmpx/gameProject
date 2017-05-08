//
//  TableViewCell.h
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/5.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface TableViewCell : UITableViewCell
@property (nonatomic ,strong)UILabel *title;
@property (nonatomic ,strong)UILabel *shoucang;
@property (nonatomic ,strong)UILabel *renqi;
@property (nonatomic ,strong)UIImageView *inter;

-(void)updateWithModel:(NSString *)title;
@end
