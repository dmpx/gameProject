//
//  fortuneViewController.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/8.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "fortuneViewController.h"

@interface fortuneViewController (){
    UILabel *_fortune;
}

@end

@implementation fortuneViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.view.backgroundColor = [UIColor clearColor];
    //抽签之后显示结果的lable
    _fortune = [[UILabel alloc] init];
    _fortune.font = [UIFont systemFontOfSize:18];
    _fortune.textColor = [UIColor whiteColor];
    _fortune.backgroundColor = [UIColor blackColor];
        _fortune.alpha = 0.8;
    _fortune.text = self.cotent;
    _fortune.layer.borderColor = [UIColor whiteColor].CGColor;
    _fortune.layer.borderWidth = 2;
    _fortune.numberOfLines = 0;
    _fortune.frame = CGRectMake(20, 40+64, kMainBoundsWidth-40, [sizeWithString getSpaceLabelHeight:self.cotent withWidh:kMainBoundsWidth-40 font:18]);
    [self.view addSubview:_fortune];
    
    //关闭按钮
    UIButton *guanbi = [UIButton buttonWithType:UIButtonTypeCustom];
    [guanbi setImage:[UIImage imageNamed:@"guanbi"] forState:UIControlStateNormal];
    [guanbi addTarget:self action:@selector(guanbiClick:) forControlEvents:UIControlEventTouchUpInside];
    guanbi.frame = CGRectMake(0, 0, 46*WIDth, 46*HEIGHT);
    [_fortune addSubview:guanbi];
    
}


/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
