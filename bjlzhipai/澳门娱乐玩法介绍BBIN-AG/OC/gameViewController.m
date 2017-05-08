//
//  gameViewController.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/27.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "gameViewController.h"
#import "startGameViewController.h"
@interface gameViewController (){
    
    UIView *_ruleBGview;
}

@end

@implementation gameViewController

-(void)viewDidLayoutSubviews {
    UIImageView *bgimgView = [[UIImageView alloc] init];
    bgimgView.image = [UIImage imageNamed:@"startBg"];
    bgimgView.userInteractionEnabled = YES;
    [self.view addSubview:bgimgView];
    [bgimgView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.left.right.bottom.mas_equalTo(0);
    }];
    
    UIButton *startGame = [[UIButton alloc] init];
    [startGame addTarget:self action:@selector(startGameClick) forControlEvents:UIControlEventTouchUpInside];
    [bgimgView addSubview:startGame];
    [startGame mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.left.right.mas_equalTo(0);
        make.height.mas_equalTo(kMainBoundsHeight/2);
    }];
    
    UIButton *rule = [[UIButton alloc] init];
    [rule addTarget:self action:@selector(ruledesClick) forControlEvents:UIControlEventTouchUpInside];
    [bgimgView addSubview:rule];
    [rule mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.left.right.mas_equalTo(0);
        make.height.mas_equalTo(kMainBoundsHeight/5*2);
    }];
    
    _ruleBGview = [[UIView alloc] init];
    _ruleBGview.userInteractionEnabled = YES;
    [bgimgView addSubview:_ruleBGview];
    [_ruleBGview mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(-kMainBoundsHeight);
        make.left.right.mas_equalTo(0);
        make.height.mas_equalTo(kMainBoundsHeight);
    }];
    
    UIImageView* ruleDes = [[UIImageView alloc] init];
    ruleDes.image = [UIImage imageNamed:@"rule"];
    ruleDes.userInteractionEnabled = YES;
    [_ruleBGview addSubview:ruleDes];
    [ruleDes mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.left.right.mas_equalTo(0);
        make.height.mas_equalTo(kMainBoundsHeight/5*3);
    }];
    
    UITapGestureRecognizer *tag = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(hidenRule)];
    tag.numberOfTapsRequired = 1;
    [ruleDes addGestureRecognizer:tag];
    
    _ruleBGview.hidden = YES;

}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.

//    
}

- (void)startGameClick {
    startGameViewController *game = [[startGameViewController alloc] init];
    [self presentViewController:game animated:YES completion:nil];
    
}

-(void)ruledesClick {
    _ruleBGview.hidden = NO;
    [UIView animateWithDuration:1 animations:^{
        _ruleBGview.transform = CGAffineTransformMakeTranslation(0, kMainBoundsHeight);
    }];
}

-(void)hidenRule {
    [UIView animateWithDuration:0.8 animations:^{
        _ruleBGview.transform = CGAffineTransformIdentity;
    } completion:^(BOOL finished) {
        _ruleBGview.hidden = YES;
    }];
    
}
////加载完成的时候调用
-(UIInterfaceOrientation)preferredInterfaceOrientationForPresentation
{
    return UIInterfaceOrientationLandscapeLeft;
}

- (UIInterfaceOrientationMask)supportedInterfaceOrientations
{
    return UIInterfaceOrientationMaskLandscapeLeft;
}

@end
