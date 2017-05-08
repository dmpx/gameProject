//
//  ViewController.m
//  百家乐纸牌游戏
//
//  Created by 二哈 on 17/4/12.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "mainViewController.h"

@interface mainViewController ()<UIWebViewDelegate>
@property (nonatomic ,retain)UIWebView *webView;
@property (nonatomic ,retain)WebTableBar *webBar;
@end

@implementation mainViewController

-(void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    
}

-(WebTableBar *)webBar
{
    if (!_webBar) {
        _webBar=[[WebTableBar alloc]init];
        __weak mainViewController *weakSelf = self;
        _webBar.advance=^(){
            if (weakSelf.webView.canGoForward) {
                [weakSelf.webView goForward];
            }
        };
        _webBar.refresh=^(){
            [weakSelf.webView reload];
        };
        _webBar.retreat=^(){
            if (weakSelf.webView.canGoBack) {
                [weakSelf.webView goBack];
            }
        };
        _webBar.dropout=^(){
            [weakSelf exitApp];
        };
        _webBar.goHome=^(){
//            [weakSelf.webView loadRequest:[NSURLRequest requestWithURL:[NSURL URLWithString:weakSelf.httpStr]]];
            NSURLRequest *requst = [NSURLRequest requestWithURL:[NSURL URLWithString:gameURL]];
             [weakSelf.webView loadRequest:requst];
        };
    }
    return _webBar;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.

//    self.view.backgroundColor = [UIColor redColor];
    NSLog(@"%f========%f",kMainBoundsWidth,kMainBoundsHeight);
    self.webView = [[UIWebView alloc] init];
    self.automaticallyAdjustsScrollViewInsets = NO;
    
    self.webView.opaque = NO;//去掉加载webview出现的黑边
    self.webView.scrollView.backgroundColor = [UIColor whiteColor];
    //让网页适配屏幕的大小
    self.webView.scalesPageToFit = YES;
    //    禁用拖拽时的反弹效果
    self.webView.delegate = self;
    [(UIScrollView *)[[self.webView  subviews]firstObject] setBounces:NO];
    
    NSString *userAgent = [self.webView stringByEvaluatingJavaScriptFromString:@"navigator.userAgent"];
    userAgent = [userAgent stringByAppendingString:@" Version/7.0 Safari/9537.53"];
    [[NSUserDefaults standardUserDefaults] registerDefaults:@{@"UserAgent": userAgent}];
    
    NSURLRequest *requst = [NSURLRequest requestWithURL:[NSURL URLWithString:gameURL]];
    [self.webView loadRequest:requst];
    [self.view addSubview:self.webView];
    

}

#pragma mark -强制横屏
- (void)rotateScreen {
    
   if([[UIDevice currentDevice]respondsToSelector:@selector(setOrientation:)]) {
       SEL selector = NSSelectorFromString(@"setOrientation:");
        NSInvocation *invocation = [NSInvocation invocationWithMethodSignature:[UIDevice instanceMethodSignatureForSelector:selector]];
        [invocation setSelector:selector];
        [invocation setTarget:[UIDevice currentDevice]];
        int val = UIInterfaceOrientationLandscapeLeft;//横屏
        [invocation setArgument:&val atIndex:2];
        [invocation invoke];
    }
}
//-(UIInterfaceOrientation)preferredInterfaceOrientationForPresentation
//{
//    return UIInterfaceOrientationLandscapeLeft;
//}
//
//- (UIInterfaceOrientationMask)supportedInterfaceOrientations
//{
//    return UIInterfaceOrientationMaskLandscapeLeft;
//}

- (void)webViewDidStartLoad:(UIWebView *)webView {
//        NSString *str =  [_webView stringByEvaluatingJavaScriptFromString:@"document.title"];
//        NSLog(@"网页title1:%@",str);
}

#pragma mark UIWebViewDelegate

//加载完成的时候调用

- (void)webViewDidFinishLoad:(UIWebView *)webView {

    /*
     参数:JS里面的方法,html里面的方法     oc对JC的调用的方法
     */
    NSString *str =  [self.webView stringByEvaluatingJavaScriptFromString:@"document.title"];
    NSLog(@"网页title2:%@",str);
    if ([str isEqualToString:@"21点纸牌|QQ:1290386774"]) {
        [self.webView mas_makeConstraints:^(MASConstraintMaker *make) {
            make.edges.equalTo(self.view).insets(UIEdgeInsetsMake(0, 0, 0, 0));
            
        }];
        //横屏
//        [self rotateScreen];
        
    } else {
        //公司网页
        [self.webView mas_makeConstraints:^(MASConstraintMaker *make) {
            make.edges.equalTo(self.view).insets(UIEdgeInsetsMake(0, 0, 0, 0));
        }];
//        [self.view addSubview:self.webBar];
//        [self.webBar mas_makeConstraints:^(MASConstraintMaker *make) {
//            make.top.equalTo(_webView.mas_bottom).offset(0);
//            make.left.equalTo(self.view.mas_left).offset(0);
//            make.right.equalTo(self.view.mas_right).offset(0);
//            make.bottom.equalTo(self.view.mas_bottom).offset(0);
//        }];
    }
}

//退出
-(void)exitApp{
    
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"提示" message:@"退出应用" preferredStyle:UIAlertControllerStyleAlert];
    
    UIAlertAction *act1 = [UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
        
    }];
    UIAlertAction *act2 = [UIAlertAction actionWithTitle:@"退出" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
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
    
    [alert addAction:act1];
    [alert addAction:act2];
    
    [self presentViewController:alert animated:YES completion:nil];
}

- (void)animationFinished:(NSString *)animationID finished:(NSNumber *)finished context:(void *)context {
    
    if ([animationID compare:@"exitApplication"] == 0) {
        exit(0);
    }
}

@end
