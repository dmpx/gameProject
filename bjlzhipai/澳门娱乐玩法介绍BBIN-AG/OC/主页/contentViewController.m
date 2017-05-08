//
//  contentViewController.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/5.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "contentViewController.h"

@interface contentViewController (){
    UIScrollView *_scroll;
}

@end

@implementation contentViewController
-(void)viewWillAppear:(BOOL)animated{
    
}
- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.view.backgroundColor = [UIColor whiteColor];
    
    self.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithImage:[UIImage imageNamed:@"fanhui"] style:UIBarButtonItemStylePlain target:self action:@selector(back)];
    
    self.navigationItem.rightBarButtonItem = [[UIBarButtonItem alloc] initWithImage:[UIImage imageNamed:@"weishoucang"] style:UIBarButtonItemStylePlain target:self action:@selector(shoucang:)];
    
    UILabel *titleLable = [[UILabel alloc] init];
    titleLable.font = [UIFont systemFontOfSize:16];
    titleLable.textColor = [UIColor colorWithHexString:@"333333"];
    titleLable.textAlignment = NSTextAlignmentCenter;
    titleLable.text = self.titletext;
    titleLable.adjustsFontSizeToFitWidth = YES;
    titleLable.frame = CGRectMake(0, 0, [sizeWithString widthWithString:@"顾名思义，就是不管什么情况情况" andfontSize:16], [sizeWithString heightWithString:@"顾名思义，就是不管什么情况情况" andfontSize:16]);
    self.navigationItem.titleView = titleLable;
    
    
    
    _scroll = [[UIScrollView alloc] init];
//    _scroll.backgroundColor = [UIColor redColor];
    _scroll.frame = CGRectMake(0, 0, kMainBoundsWidth, kMainBoundsHeight);
    // 是否支持滑动最顶端
    _scroll.scrollsToTop = NO;
    _scroll.bounces = NO;
    [self.view addSubview:_scroll];
    
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    UIImageView *readerBGview = [[UIImageView alloc] init];
    if ([de objectForKey:@"readerbgview"]) {
        readerBGview.image = [UIImage imageNamed:[NSString stringWithFormat:@"reader_bg%@",[de objectForKey:@"readerbgview"]]];
    } else {
        readerBGview.image =[UIImage imageNamed:@"reader_bg1"];
    }

    myLable *lable = [[myLable alloc] init];
    if( [de objectForKey:@"fontSize"]){
        lable.font = [UIFont systemFontOfSize:[[de objectForKey:@"fontSize"] integerValue]];
            lable.frame = CGRectMake(10, 0, kMainBoundsWidth - 20, [sizeWithString getSpaceLabelHeight:self.content withWidh:kMainBoundsWidth - 20 font:[[de objectForKey:@"fontSize"] integerValue]]);
        readerBGview.frame = CGRectMake(0, 0, kMainBoundsWidth, [sizeWithString getSpaceLabelHeight:self.content withWidh:kMainBoundsWidth - 20 font:[[de objectForKey:@"fontSize"] integerValue]]);
        [_scroll addSubview:readerBGview];
    }else {
        lable.font = [UIFont systemFontOfSize:14];
            lable.frame = CGRectMake(10, 0, kMainBoundsWidth - 20, [sizeWithString getSpaceLabelHeight:self.content withWidh:kMainBoundsWidth - 20 font:14]);
        readerBGview.frame = CGRectMake(0, 0, kMainBoundsWidth, [sizeWithString getSpaceLabelHeight:self.content withWidh:kMainBoundsWidth - 20 font:14]);
        [_scroll addSubview:readerBGview];
    }
    lable.textColor = [UIColor colorWithHexString:@"999999"];
    lable.textAlignment = NSTextAlignmentLeft;
    lable.numberOfLines = 0;
    lable.text = self.content;
    lable.backgroundColor = [UIColor clearColor];
    [readerBGview addSubview:lable];
    // 设置内容大小
    
    if( [de objectForKey:@"fontSize"]){
    _scroll.contentSize = CGSizeMake(kMainBoundsWidth - 20, [sizeWithString getSpaceLabelHeight:self.content withWidh:kMainBoundsWidth - 20 font:[[de objectForKey:@"fontSize"] integerValue]]);
    }else {
    _scroll.contentSize = CGSizeMake(kMainBoundsWidth - 20, [sizeWithString getSpaceLabelHeight:self.content withWidh:kMainBoundsWidth - 20 font:14]);
    }

}

- (void)shoucang:(UIBarButtonItem *)item{
//    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
//    NSString *keys = [NSString stringWithFormat:@"shoucang%@",self.tag];
//    if ([de objectForKey:keys] == NO) {
//        [de setObject:<#(nullable id)#> forKey:<#(nonnull NSString *)#>]
//    }
    [KVNProgress showSuccessWithStatus:@"收藏成功"];
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    
    NSMutableDictionary *dic = [[NSMutableDictionary alloc] initWithDictionary:[de objectForKey:@"shoucang"]];
    if ([dic objectForKey:[NSString stringWithFormat:@"shoucang%@",self.tag]] == NULL) {

        NSMutableDictionary *dic1 = [[NSMutableDictionary alloc] init];
        [dic1 setObject:self.titletext forKey:@"title"];
        [dic1 setObject:self.content forKey:@"content"];
        [dic setObject:dic1 forKey:[NSString stringWithFormat:@"shoucang%@",self.tag]];
        
    }
    [de setObject:dic forKey:@"shoucang"];
    [de synchronize];
}



-(void)back {
    [self.navigationController popViewControllerAnimated:YES];
}


@end
