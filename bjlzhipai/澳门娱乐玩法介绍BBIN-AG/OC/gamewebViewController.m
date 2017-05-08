//
//  gameViewController.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/19.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "gamewebViewController.h"

@interface gamewebViewController ()<UIWebViewDelegate>{
    UIWebView *_webView;
}

@end

@implementation gamewebViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    self.automaticallyAdjustsScrollViewInsets = YES;
    _webView = [[UIWebView alloc] init];
    self.automaticallyAdjustsScrollViewInsets = NO;
    _webView.opaque = NO;//去掉加载webview出现的黑边
    _webView.scrollView.backgroundColor = [UIColor whiteColor];
    //让网页适配屏幕的大小
    _webView.scalesPageToFit = YES;
    //    禁用拖拽时的反弹效果
    [(UIScrollView *)[[_webView  subviews]firstObject] setBounces:NO];
    _webView.delegate = self;
    _webView.dataDetectorTypes = UIDataDetectorTypeAll;

    NSString *path = [[NSBundle mainBundle] resourcePath];//pathForResource:@"index" ofType:@"html"
    
    NSString *path1 =[NSString stringWithFormat:@"%@%@",path,@"/UNO-master/index.html"];
    
    NSURL *baseURL = [NSURL fileURLWithPath:path1];
    
    NSLog(@"%@",path1);  //
    NSString *html = [NSString stringWithContentsOfFile:path1 encoding:NSUTF8StringEncoding error:nil];
    [_webView loadHTMLString:html baseURL:baseURL];
    [self.view addSubview:_webView];
    
    [_webView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.right.top.bottom.mas_equalTo(0);
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
