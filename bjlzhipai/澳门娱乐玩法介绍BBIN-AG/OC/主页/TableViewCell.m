//
//  TableViewCell.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/5.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "TableViewCell.h"

@implementation TableViewCell

-(instancetype)initWithStyle:(UITableViewCellStyle)style reuseIdentifier:(NSString *)reuseIdentifier {
    if (self = [super initWithStyle:style reuseIdentifier:reuseIdentifier]) {
        [self creatUI];
    }
    return self;
}


#pragma mark -构建视图层
- (void)creatUI{
    self.title = [[UILabel alloc] init];
    self.title.font = [UIFont systemFontOfSize:14];
    self.title.textColor = [UIColor colorWithHexString:@"333333"];
    self.title.textAlignment = NSTextAlignmentLeft;
    self.title.backgroundColor = [UIColor clearColor];
    [self addSubview:self.title];
    [self.title mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(10*HEIGHT);
        make.left.mas_equalTo(10);
        make.right.mas_equalTo(-10-10*WIDth);
        make.height.mas_equalTo(20*HEIGHT);
    }];

    self.shoucang = [[UILabel alloc] init];
    self.shoucang.font = [UIFont systemFontOfSize:12];
    self.shoucang.textColor = [UIColor colorWithHexString:@"999999"];
    self.shoucang.textAlignment = NSTextAlignmentLeft;
    self.shoucang.backgroundColor = [UIColor clearColor];
    [self addSubview:self.shoucang];
    [self.shoucang mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(self.title.mas_bottom).offset(10*HEIGHT);
        make.left.mas_equalTo(10);
        make.width.mas_equalTo([sizeWithString widthWithString:@"收藏: 0000" andfontSize:14]);
        make.height.mas_equalTo(10*HEIGHT);
    }];

    self.renqi = [[UILabel alloc] init];
    self.renqi.font = [UIFont systemFontOfSize:12];
    self.renqi.textColor = [UIColor colorWithHexString:@"999999"];
    self.renqi.textAlignment = NSTextAlignmentLeft;
    self.renqi.backgroundColor = [UIColor clearColor];
    [self addSubview:self.renqi];
    [self.renqi mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(self.title.mas_bottom).offset(10*HEIGHT);
        make.left.equalTo(self.shoucang.mas_right).offset(20*WIDth);
        make.width.mas_equalTo([sizeWithString widthWithString:@"人气: 0000" andfontSize:12]);
        make.height.mas_equalTo(10*HEIGHT);
    }];
    
    self.inter = [[UIImageView alloc] init];
    self.inter.image = [UIImage imageNamed:@"inter"];
    [self addSubview:self.inter];
    [self.inter mas_makeConstraints:^(MASConstraintMaker *make) {
        make.height.mas_equalTo(15*HEIGHT);
        make.width.mas_equalTo(8.5*WIDth);
        make.right.mas_equalTo(-10);
        make.top.mas_equalTo(30*HEIGHT - 15*HEIGHT/2);
    }];
    //最底下的线
    UIView *bottomLine = [[UIView alloc] init];
    bottomLine.backgroundColor = [UIColor colorWithHexString:@"EDEDED"];
    [self addSubview:bottomLine];
    [bottomLine mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(0);
        make.right.left.mas_equalTo(0);
        make.height.mas_equalTo(0.5);
    }];
    
}
-(void)updateWithModel:(NSString *)title{
    self.title.text = title;
    self.shoucang.text = @"收藏: 0";
    self.renqi.text = @"人气: 0";
    
}
@end
