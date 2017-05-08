//
//  noteViewController.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/14.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "noteViewController.h"

@interface noteViewController ()<UITextViewDelegate> {
    UITextView *_textField;
    UILabel *_lable;
    
}
@property (nonatomic ,strong)UIButton *hidenkeyboar;

@end

@implementation noteViewController

-(UIButton *)hidenkeyboar {
    if (!_hidenkeyboar) {
        _hidenkeyboar = [UIButton buttonWithType:UIButtonTypeCustom];
        _hidenkeyboar.backgroundColor = [UIColor redColor];
        [_hidenkeyboar setTitle:@"(点击这里,键盘可以消失奥)" forState:UIControlStateNormal];
        _hidenkeyboar.backgroundColor = [UIColor colorWithHexString:@"EDEDED"];
        [_hidenkeyboar setTitleColor:[UIColor grayColor] forState:UIControlStateNormal];
        _hidenkeyboar.titleLabel.font = [UIFont systemFontOfSize:16];
        [_hidenkeyboar addTarget:self action:@selector(KeyBoardDownClick) forControlEvents:UIControlEventTouchUpInside];
        
    }
    return _hidenkeyboar;
}


-(void)viewDidLayoutSubviews {
    [super viewDidLayoutSubviews];
    [self.view addSubview:self.hidenkeyboar];
}

-(void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event {
    [self.view endEditing:YES];
}
- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.view.backgroundColor = [UIColor colorWithHexString:@"ededed"];
    self.title = @"记事本";
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(KeyBoardUp:) name:UIKeyboardWillShowNotification object:nil];
    
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(KeyBoardDown:) name:UIKeyboardWillHideNotification object:nil];
    
    self.navigationItem.leftBarButtonItem =  [[UIBarButtonItem alloc] initWithImage:[UIImage imageNamed:@"fanhui"] style:UIBarButtonItemStylePlain target:self action:@selector(back)];
    
    _textField = [[UITextView alloc] init];
//    _textField.borderStyle = UITextBorderStyleRoundedRect;
    _textField.backgroundColor = [UIColor whiteColor];
//    _textField.clearButtonMode = UITextFieldViewModeAlways;
    _textField.textColor = [UIColor redColor];
    _textField.textAlignment = UITextAlignmentLeft;
    _textField.textColor = [UIColor blackColor];
    if ([self respondsToSelector:@selector(setAutomaticallyAdjustsScrollViewInsets:)]) {
        
        self.automaticallyAdjustsScrollViewInsets = NO;
    }
   _textField.layoutManager.allowsNonContiguousLayout = NO;

    _textField.autocapitalizationType = UITextAutocapitalizationTypeNone;
    _textField.returnKeyType =UIReturnKeyDefault;
    _textField.delegate = self;
    _textField.font = [UIFont systemFontOfSize:16];
//    _textField.adjustsFontSizeToFitWidth = YES;
//    _textField.placeholder = @"您可在这里记笔记欧!还可以当个备忘录";
    _textField.autoresizingMask = UIViewAutoresizingFlexibleHeight;//自适应高度
    [self.view addSubview:_textField];
    [_textField mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(64+15);
        make.left.mas_equalTo(15);
        make.right.bottom.mas_equalTo(-15);
    }];
    //提示语
    _lable  = [[UILabel alloc] init];
    _lable.text = @"您可以当做记事本或者备忘录!欢迎使用";
    _lable.textColor = [UIColor colorWithHexString:@"999999"];
    _lable.font = [UIFont systemFontOfSize:16];

    [_textField addSubview:_lable];
    [_lable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(7*HEIGHT);
        make.left.right.mas_equalTo(0);
        make.height.mas_equalTo([sizeWithString heightWithString:@"我" andfontSize:16]);
    }];
    
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    if ([de objectForKey:@"note"]) {
        _textField.text = [de objectForKey:@"note"];
        [_textField scrollRangeToVisible:NSMakeRange(_textField.text.length,1)];
        
    }
    
    if (_textField.text.length == 0) {
        _lable.hidden = NO;
    } else {
        _lable.hidden = YES;
    }
}

//-(BOOL)textView:(UITextView *)textView shouldChangeTextInRange:(NSRange)range replacementText:(NSString *)text {
//    [_textField scrollRangeToVisible:NSMakeRange(text.length,1)];
//    return YES;
//}

-(void)textViewDidChange:(UITextView *)textView {
//   [_textField scrollRangeToVisible:NSMakeRange(_textField.text.length, 1)];
//    [_textField scrollRangeToVisible:NSMakeRange(_textField.text.length,1)];
    if (_textField.text.length == 0) {
        _lable.hidden = NO;
    } else {
        _lable.hidden = YES;
    }
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    [de setObject:textView.text forKey:@"note"];
    [de synchronize];
}
#pragma mark -弹起键盘
- (void)KeyBoardUp:(NSNotification *)noti{
    NSDictionary *userInfo = [noti userInfo];
    NSValue *aValue = [userInfo objectForKey:UIKeyboardFrameEndUserInfoKey];
    CGRect keyboardRect = [aValue CGRectValue];
    int height = keyboardRect.size.height;

    NSValue *animationDurationValue = [[noti userInfo] objectForKey:UIKeyboardAnimationDurationUserInfoKey];
    NSTimeInterval animationDuration;

    [_textField scrollRectToVisible:CGRectMake(10, 64+14, kMainBoundsWidth - 30, kMainBoundsHeight - height - 50*HEIGHT - 15) animated:YES];
    
    [animationDurationValue getValue:&animationDuration];
    

    
    [UIView animateWithDuration:animationDuration+0.1 animations:^{
        [self.hidenkeyboar mas_updateConstraints:^(MASConstraintMaker *make) {
            make.bottom.mas_equalTo(-height);
            make.left.right.mas_equalTo(0);
            make.height.mas_equalTo(60*HEIGHT);
        }];
    }];
}

#pragma maek -收起键盘
-(void)KeyBoardDown:(NSNotification*)noti {

    _textField.contentOffset = CGPointMake(0, 0);
    [UIView animateWithDuration:2.0 animations:^{
        [self.hidenkeyboar mas_updateConstraints:^(MASConstraintMaker *make) {
            make.bottom.mas_equalTo(60*HEIGHT);
            make.left.right.mas_equalTo(0);
            make.height.mas_equalTo(60*HEIGHT);
        }];
    }];
    [_textField resignFirstResponder];
}

-(void)KeyBoardDownClick{
    _textField.contentOffset = CGPointMake(0, 0);
    [self.hidenkeyboar mas_updateConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(60*HEIGHT);
        make.left.right.mas_equalTo(0);
        make.height.mas_equalTo(60*HEIGHT);
    }];
    [_textField resignFirstResponder];
}


-(void)back {
    [self.navigationController popViewControllerAnimated:YES];
}
@end
