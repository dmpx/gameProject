//
//  gameViewController.m
//  百家乐纸牌游戏
//
//  Created by 二哈 on 17/4/21.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "gameViewController.h"

@interface gameViewController ()<UIWebViewDelegate>{
    UIWebView *_webView;
}

@end

@implementation gameViewController

- (void)viewWillLayoutSubviews{
    
    [_webView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.left.right.mas_equalTo(0);
        make.bottom.mas_equalTo(0);
    }];
    
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.automaticallyAdjustsScrollViewInsets = YES;
    _webView = [[UIWebView alloc] init];
    self.automaticallyAdjustsScrollViewInsets = NO;
    _webView.opaque = NO;//去掉加载webview出现的黑边
    _webView.scrollView.backgroundColor = [UIColor whiteColor];
    _webView.delegate = self;
    //让网页适配屏幕的大小
    _webView.scalesPageToFit = YES;
    //    禁用拖拽时的反弹效果
    [(UIScrollView *)[[_webView  subviews]firstObject] setBounces:NO];
    _webView.dataDetectorTypes = UIDataDetectorTypeAll;
    [self.view addSubview:_webView];
    
    //转义网址


    NSString *path = [[NSBundle mainBundle] resourcePath];//pathForResource:@"index" ofType:@"html"
    
    NSString *path1 =[NSString stringWithFormat:@"%@%@",path,@"/blackjack-gh-pages/index.html"];
    
    NSURL *baseURL = [NSURL fileURLWithPath:path1];
    
    NSLog(@"%@",path1);  //
    NSString *html = [NSString stringWithContentsOfFile:path1 encoding:NSUTF8StringEncoding error:nil];
    [_webView loadHTMLString:html baseURL:baseURL];
}


//加载完成的时候调用
-(UIInterfaceOrientation)preferredInterfaceOrientationForPresentation
{
    return UIInterfaceOrientationLandscapeLeft;
}

- (UIInterfaceOrientationMask)supportedInterfaceOrientations
{
    return UIInterfaceOrientationMaskLandscapeLeft;
}
@end
