//
//  ViewController.m
//  BBIN澳门百家乐
//
//  Created by 二哈 on 17/4/15.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "explainViewController.h"
#import "gameViewController.h"
#define CONTENTARR @[@"比较方法",@"首先先教大家认牌。炸金花一共有六种牌型，都是一级压一级的，同样大小的话按点数大小来比较，从A-2依次变小。",@"1.最大的牌:【豹子】。【豹子】大于其他任何牌型，同类型中3个A最大，3个2最小。下图中3个A大于3个K大于3个Q。",@"2.第二大的牌型叫【顺金】。【顺金】是花色一样的顺子，它比豹子小，但比其余的4种牌型都大。有的地方讲A23比QKA大，但常规来讲都是QKA最大，具体规则玩家可以事先商定。"@"3.第三大的牌型叫做【金花】。【金花】就是花色一样，但不是顺子的三张牌，比较时以最大的一张开始比起，如果最大的一个相同，就从第二个数字比起，以此类推。",@"4.第四大的牌型叫做【顺子】。【顺子】是花色不同，三张连续的数字，切记它和【顺金】的差别，是花色不同的三个连续的数字。顺子比对子大，比单牌大，但是比花色一样的任何一种牌型都小。",@"5.第五大的牌型叫做【对子】，对子就是有两张一样的牌，外加一张不同的牌，和豹子的区别就在于豹子是三张一样的而对子只有两张一样的。对子比单牌大，比顺子小，是倒数第二大的牌型。对子与对子之间的比较也是按照对子的大小来比较的。例如对K大于对Q，如果同是对Q，那么就比较第三张牌的大小。",@"6.第六种牌型【单牌】。凡是没有起到以上5种类型的牌都是单牌，也就是最普通的牌。比较规则是：玩家与玩家比较时先比较最大的那一张，最大的那一张一样的话就比较第二张，以此类推。"]
@interface explainViewController () {
    UIImageView *_imageView;
}

@end

@implementation explainViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    _imageView = [[UIImageView alloc] init];
    _imageView.image = [UIImage imageNamed:@"BGView"];
    _imageView.userInteractionEnabled = YES;
    [self.view addSubview:_imageView];
    [_imageView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.left.bottom.right.mas_equalTo(0);
    }];
    
    CGFloat ypoint = 20;
    //比较方法说明
    for (int i = 0; i < CONTENTARR.count; i++) {
        UILabel *lable = [[UILabel alloc] init];
        lable.font = [UIFont systemFontOfSize:12];
        lable.textColor = [UIColor whiteColor];
        lable.numberOfLines = 0;
        lable.textAlignment = (i==0?NSTextAlignmentCenter:NSTextAlignmentLeft);
        lable.text = CONTENTARR[i];
        CGFloat height = [sizeWithString getSpaceLabelHeight:CONTENTARR[i] withWidh:kMainBoundsWidth - 20 font:12];
        lable.frame = CGRectMake(10, ypoint, kMainBoundsWidth - 20, height);
        ypoint = CGRectGetMaxY(lable.frame)+5;
        [_imageView addSubview:lable];
    }
    
    //140/56
    UIButton *button = [[UIButton alloc] init];
    [button setBackgroundImage:[UIImage imageNamed:@"Rectangle"] forState:UIControlStateNormal];
    [button setTitle:@"懂了规则,开始游戏" forState:UIControlStateNormal];
    button.titleLabel.font = [UIFont systemFontOfSize:14];
    [button setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    [_imageView addSubview:button];
    [button addTarget:self action:@selector(gotoGameView) forControlEvents:UIControlEventTouchUpInside];
    [button mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(-10);
        make.left.mas_equalTo(kMainBoundsWidth/2 - 70*WIDth);
        make.size.mas_equalTo(CGSizeMake(140*WIDth, 56*HEIGHT));
    }];
}


- (void)gotoGameView {
    gameViewController *game = [[gameViewController alloc] init];
    [self presentViewController:game animated:YES completion:nil];
}

#pragma mark -强制竖屏
-(UIInterfaceOrientation)preferredInterfaceOrientationForPresentation
{
    return UIInterfaceOrientationPortrait;
}

- (UIInterfaceOrientationMask)supportedInterfaceOrientations
{
    return UIInterfaceOrientationMaskPortrait;
}
@end
