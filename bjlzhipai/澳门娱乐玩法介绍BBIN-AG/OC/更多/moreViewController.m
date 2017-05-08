//
//  moreViewController.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/5.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "moreViewController.h"
#import "DJRoationView.h"
#import "Masonry.h"
@interface moreViewController (){
    UIView  *_bgview;
    UILabel *_fortune;
    UIButton *_guanbi;
}
@property (nonatomic, strong) CAShapeLayer *progressLayer;
@end

@implementation moreViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    UIImageView *image = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, kMainBoundsWidth, kMainBoundsHeight - 47)];
    image.image = [UIImage imageNamed:@"mmm"];
    [self.view addSubview:image];
    DJRoationView *roationView = [[DJRoationView alloc] initWithFrame:CGRectMake(40, 40+64, kMainBoundsWidth-80, kMainBoundsWidth-80)];
    roationView.speed = 18;//调速度 最快20;
    roationView.scoreColor = [UIColor yellowColor];
    roationView.scoreSelectColor = [UIColor orangeColor];
    
    UILabel *label = [[UILabel alloc] initWithFrame:CGRectMake(40*WIDth, roationView.frame.size.height+roationView.frame.origin.y+20, 80, 22)];
    label.text = @"今日赌运";
    [self.view addSubview:roationView];
    [self.view addSubview:label];
    [roationView rotatingDidFinishBlock:^(NSInteger index, CGFloat score) {
        //抽签之后的回调
        NSLog(@"indx=%ld,score=%.f",(long)index,score);
        NSArray *arr = @[@"上上",@"上",@"中上",@"中",@"中下",@"下",@"下下",@"戒赌"];
        label.text = [NSString stringWithFormat:@"赌运:%@",arr[index]];
        _bgview.hidden = NO;
        NSString *plistPath = [[NSBundle mainBundle] pathForResource:@"fortuneList" ofType:@"plist"];
        NSDictionary *data = [[NSDictionary alloc] initWithContentsOfFile:plistPath];
        _fortune.text = [data objectForKey:arr[index]];
        [UIView animateWithDuration:0.3 animations:^{
            _bgview.frame = CGRectMake(40, 40+64, kMainBoundsWidth - 80, kMainBoundsHeight - 47 -80 - 64);
//

        } completion:^(BOOL finished) {
            _guanbi.hidden = NO;
        }];

    }];//动画停止后回调
    __weak typeof(self) weak = self;
    [roationView rotatingProgressBlokc:^(CGFloat progress) {
        progress = progress<0?0:progress>1?1:progress;
        weak.progressLayer.strokeEnd = progress;
        weak.progressLayer.strokeColor = [UIColor colorWithRed:progress green:0.640 blue:1.000 alpha:1.000].CGColor;
    }];//动画进度条
    
    self.progressLayer = [CAShapeLayer layer];
    self.progressLayer.frame = CGRectMake(0, label.frame.origin.y+label.frame.size.height+20, kMainBoundsWidth, 4);
    //    self.progressLayer.backgroundColor = [UIColor yellowColor].CGColor;
    UIBezierPath *path = [UIBezierPath bezierPath];
    [path moveToPoint:CGPointMake(30, 2)];
    [path addLineToPoint:CGPointMake(kMainBoundsWidth-30, 2)];
    _progressLayer.lineWidth = 4;
    _progressLayer.path = path.CGPath;
    _progressLayer.strokeColor = [UIColor colorWithRed:0.000 green:0.640 blue:1.000 alpha:0.720].CGColor;
    _progressLayer.lineCap = kCALineCapButt;
    _progressLayer.strokeStart = 0;
    _progressLayer.strokeEnd = 0;
    [self.view.layer addSublayer:self.progressLayer];
    
    //抽签之后显示结果的lable
    
    _bgview = [[UIView alloc] init];
    _bgview.backgroundColor = [UIColor blackColor];
    _bgview.layer.borderColor = [UIColor whiteColor].CGColor;
    _bgview.alpha = 0.5;
    _bgview.layer.borderWidth = 2;
    _bgview.frame = CGRectMake(kMainBoundsWidth/2,kMainBoundsHeight/2, 0, 0);
    [self.view addSubview:_bgview];
    _bgview.hidden = YES;
    
    _fortune = [[UILabel alloc] init];
    _fortune.font = [UIFont systemFontOfSize:16];
    _fortune.textColor = [UIColor whiteColor];
    _fortune.numberOfLines = 0;
    [_bgview addSubview:_fortune];
    [_fortune mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(10);
        make.bottom.mas_equalTo(-10);
        make.left.mas_equalTo(10);
        make.right.mas_equalTo(-10);
    }];
    //关闭按钮
    _guanbi = [UIButton buttonWithType:UIButtonTypeCustom];
    [_guanbi setImage:[UIImage imageNamed:@"guanbi"] forState:UIControlStateNormal];
    [_guanbi addTarget:self action:@selector(guanbiClick:) forControlEvents:UIControlEventTouchUpInside];
    _guanbi.frame = CGRectMake(40 - 23*WIDth, 40+64 - 23*HEIGHT, 46*WIDth, 46*HEIGHT);
    [self.view addSubview:_guanbi];
    _guanbi.hidden = YES;
    
    UILabel *notice = [[UILabel alloc] init];
    notice.text =@"注:以您每日抽取的第一签为准";
    notice.font = [UIFont systemFontOfSize:14];
    notice.textAlignment = NSTextAlignmentRight;
    notice.textColor = [UIColor redColor];
    [self.view addSubview:notice];
    [notice mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(- 47-10);
        make.right.mas_equalTo(-10);
        make.height.mas_equalTo(20*HEIGHT);
        make.width.mas_equalTo(kMainBoundsWidth);
    }];
    
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

-(void)guanbiClick:(UIButton *)btn {
    _bgview.hidden = YES;
    _guanbi.hidden = YES;
}

@end
