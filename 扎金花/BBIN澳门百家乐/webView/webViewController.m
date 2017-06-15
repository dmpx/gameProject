//
//  webViewController.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/8.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "webViewController.h"
#import "M13ProgressViewRing.h"

#import "ProgressHUD.h"
@interface webViewController ()<UIWebViewDelegate>{
    UIWebView *_webView;
}
@property (nonatomic ,strong)NSString *url;
@property (nonatomic ,retain)M13ProgressViewRing *ProgressView;
@end

@implementation webViewController


- (void)viewWillLayoutSubviews {
    [self shouldRotateToOrientation:(UIDeviceOrientation)[UIApplication sharedApplication].statusBarOrientation];
    
}

-(void)shouldRotateToOrientation:(UIDeviceOrientation)orientation {
    if (orientation == UIDeviceOrientationPortrait ||orientation ==
        UIDeviceOrientationPortraitUpsideDown) { // 竖屏
        NSLog(@"现在是竖屏");
        self.tabBarController.tabBar.hidden = NO;
        [_webView mas_makeConstraints:^(MASConstraintMaker *make) {
            make.top.left.right.mas_equalTo(0);
            make.bottom.mas_equalTo(-49);
        }];
        [self hideTabBar:NO];
        
    } else { // 横屏
        NSLog(@"现在是横屏");
        self.tabBarController.tabBar.hidden = YES;
        
        [_webView mas_makeConstraints:^(MASConstraintMaker *make) {
            make.top.left.right.mas_equalTo(0);
            make.bottom.mas_equalTo(0);
        }];
        
        [self hideTabBar:YES];
    }
}

#pragma mark 隐藏tabbar
- (void) hideTabBar:(BOOL) hidden{
    
    [UIView beginAnimations:nil context:NULL];
    [UIView setAnimationDuration:0];
    
    for(UIView *view in self.tabBarController.view.subviews)
    {
        if([view isKindOfClass:[UITabBar class]])
        {   //tabbar
            if (hidden) {
                //
            } else {
                [view setFrame:CGRectMake(0, kMainBoundsHeight-49, kMainBoundsWidth, 49)];
            }
        }
        else
        {
            //view
            if (hidden) {
                [view setFrame:CGRectMake(0, 0, kMainBoundsWidth, kMainBoundsHeight+49)];
            } else {
                [view setFrame:CGRectMake(0, 0, kMainBoundsWidth, kMainBoundsHeight)];
            }
        }
    }
    
    [UIView commitAnimations];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    self.automaticallyAdjustsScrollViewInsets = YES;
    _webView = [[UIWebView alloc] init];
    self.automaticallyAdjustsScrollViewInsets = NO;
//    _webView.frame = CGRectMake(0, -34, kMainBoundsWidth, kMainBoundsHeight-10);
    _webView.frame = CGRectMake(0, 20, kMainBoundsWidth, kMainBoundsHeight-64);
    _webView.opaque = NO;//去掉加载webview出现的黑边
    _webView.scrollView.backgroundColor = [UIColor whiteColor];
    //让网页适配屏幕的大小
    _webView.scalesPageToFit = YES;
    //    禁用拖拽时的反弹效果
    [(UIScrollView *)[[_webView  subviews]firstObject] setBounces:NO];
    _webView.delegate = self;
    [self.view addSubview:_webView];

    
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    NSDictionary*data = [de objectForKey:@"responseObject"];
    
    NSString *userAgent = [_webView stringByEvaluatingJavaScriptFromString:@"navigator.userAgent"];
    userAgent = [userAgent stringByAppendingString:@" Version/7.0 Safari/9537.53"];
    [[NSUserDefaults standardUserDefaults] registerDefaults:@{@"UserAgent": userAgent}];
    
    //转义网址
    NSString *encodedString=[[data objectForKey:@"url"] stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding];
    NSURL *weburl = [NSURL URLWithString:encodedString];
    NSURLRequest *requst = [NSURLRequest requestWithURL:weburl];
//    _webView.scrollView.contentInset = UIEdgeInsetsMake(34, 0, 0, 0);
    _webView.dataDetectorTypes = UIDataDetectorTypeAll;
    [_webView loadRequest:requst];

    
//    _ProgressView=[[M13ProgressViewRing alloc]initWithFrame:CGRectMake(kMainBoundsWidth/2-60, kMainBoundsHeight/2-100, 120, 20)];
//    [_ProgressView performAction:M13ProgressViewActionNone animated:YES];
//    [ProgressHUD setProgress:0.5];
//    [self.view addSubview:self.ProgressView];
}
#pragma mark -webView代理

//开始加载的时候调用
- (void)webViewDidStartLoad:(UIWebView *)webView {

//    [self.ProgressView setProgress:0.5 animated:YES];
//    [NSTimer scheduledTimerWithTimeInterval:0.3 target:self selector:@selector(progress) userInfo:nil repeats:YES];
    
}

//加载完成的时候调用
- (void)webViewDidFinishLoad:(UIWebView *)webView {
  
//    [self.ProgressView setProgress:1.0 animated:YES];
//    [self.ProgressView setHidden:YES];
    
}
//加载失败
- (void)webView:(UIWebView *)webView didFailLoadWithError:(NSError *)error {
    
    // 如果是被取消，什么也不干(如果不加这句会重复请求,报-999错误)
    if([error code] == NSURLErrorCancelled)  {
        return;
    } else {
        [self.ProgressView setHidden:YES];
        [KVNProgress showErrorWithStatus:@"加载失败"];
        NSLog(@"%@",error);
    }
}

#pragma mark -五个代理方法
//首页
-(void)homePage {
    
    
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    NSDictionary*data = [de objectForKey:@"responseObject"];
    
    //转义网址
    NSString *encodedString=[[data objectForKey:@"url"] stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding];
    NSURL *weburl = [NSURL URLWithString:encodedString];
    NSURLRequest *requst = [NSURLRequest requestWithURL:weburl];
//    _webView.scrollView.contentInset = UIEdgeInsetsMake(34, 0, 0, 0);
    _webView.dataDetectorTypes = UIDataDetectorTypeAll;
    [_webView loadRequest:requst];
    
}

-(void)progress
{
    if (self.ProgressView.progress<0.9) {
        [self.ProgressView setProgress:self.ProgressView.progress+0.1 animated:YES];
    }
    
}

//前进
-(void)goforward {
    [_webView goForward];
}
//后退
-(void)goback {
    [_webView goBack];
}
//刷新
-(void)reload {
    [_webView reload];
}
//退出
-(void)exitApp{
    
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"退出应用" message:nil preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *act1 = [UIAlertAction actionWithTitle:@"确认" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
        [UIView beginAnimations:@"exitApplication" context:nil];
        
        [UIView setAnimationDuration:0.5];
        
        [UIView setAnimationDelegate:self];
        
        // [UIView setAnimationTransition:UIViewAnimationCurveEaseOut forView:self.view.window cache:NO];
        UIWindow *window = [[UIApplication sharedApplication].delegate window];
        [UIView setAnimationTransition:UIViewAnimationCurveEaseOut forView:window cache:NO];
        
        [UIView setAnimationDidStopSelector:@selector(animationFinished:finished:context:)];
        
        //self.view.window.bounds = CGRectMake(0, 0, 0, 0);
        
        window.bounds = CGRectMake(0, 0, 0, 0);
        
        [UIView commitAnimations];
    }];
    
    UIAlertAction *act2 = [UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
        
    }];
    [alert addAction:act2];
    [alert addAction:act1];
    [self presentViewController:alert animated:YES completion:nil];
}

- (void)animationFinished:(NSString *)animationID finished:(NSNumber *)finished context:(void *)context {
    
    if ([animationID compare:@"exitApplication"] == 0) {
        exit(0);
    }
}


@end
