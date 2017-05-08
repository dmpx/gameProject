//
//  collectViewController.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/5.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "collectViewController.h"
#define readerArr @[@"reader_bg1",@"reader_bg2",@"reader_bg3",@"reader_bg4",@"reader_bg5"]
@interface collectViewController (){
    UISlider *_mySlider;
    UISlider *_yourSlider;
    myLable *_mylable;
    UIImageView *_myImg;
}

@end

@implementation collectViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    self.navigationController.navigationBar.hidden = YES;
    for (int i=0; i<readerArr.count; i++) {
        UIImageView *button = [[UIImageView alloc] init];
  
        button.frame = CGRectMake(10*(i+1)+(kMainBoundsWidth - 60)/5*i, 64, (kMainBoundsWidth - 60)/5, (kMainBoundsWidth - 60)/5/2*3);
        button.image = [UIImage imageNamed:[NSString stringWithFormat:@"reader_bg%d",i+1]];
        button.tag = 1+i;
        button.userInteractionEnabled = YES;
        UITapGestureRecognizer * tap=[[UITapGestureRecognizer alloc]initWithTarget:self action:@selector(reader_bgClick:)];
        tap.numberOfTouchesRequired = 1; //手指数
        tap.numberOfTapsRequired = 1; //tap次数
        tap.view.tag = i+1;
        [button addGestureRecognizer:tap];
        [self.view addSubview:button];
    }
    UILabel *lable = [[UILabel alloc] init];
    lable.font = [UIFont systemFontOfSize:20];
    lable.textColor = [UIColor colorWithHexString:@"999999"];
    lable.textAlignment = NSTextAlignmentCenter;
    lable.backgroundColor = [UIColor clearColor];
    lable.text = @"选择阅读背景";
    [self.view addSubview:lable];
    [lable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.right.mas_equalTo(0);
        make.top.mas_equalTo(64+(kMainBoundsWidth - 60)/5/2*3 + 20*HEIGHT);
        make.height.mas_equalTo([sizeWithString heightWithString:@"选择阅读背景" andfontSize:20]);
    }];
    
    _mySlider = [ [ UISlider alloc ] init];//高度设为40就好,高度代表手指触摸的高度.这个一定要注意
    _mySlider.minimumValue = 10.0;//下限
    _mySlider.maximumValue = 20.0;//上限
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    if( [de objectForKey:@"fontSize"]){
        _mySlider.value = [[de objectForKey:@"fontSize"] integerValue];
    }else {
        _mySlider.value = 14.0;
    }
    
    //调节字体
    UILabel *fontLable = [[UILabel alloc] init];
    fontLable.font = [UIFont systemFontOfSize:16];
    fontLable.textColor = [UIColor colorWithHexString:@"999999"];
    fontLable.textAlignment = NSTextAlignmentCenter;
    fontLable.backgroundColor = [UIColor clearColor];
    fontLable.text = @"调节字体";
    [self.view addSubview:fontLable];
    [fontLable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(lable.mas_bottom).offset(20*HEIGHT);
        make.left.mas_equalTo(20);
        make.width.mas_equalTo([sizeWithString widthWithString:@"调节字体" andfontSize:16]);
        make.height.mas_equalTo(40*HEIGHT);
    }];

    _mySlider = [ [ UISlider alloc ] init];//高度设为40就好,高度代表手指触摸的高度.这个一定要注意
    _mySlider.minimumValue = 10.0;//下限
    _mySlider.maximumValue = 20.0;//上限

    if( [de objectForKey:@"fontSize"]){
        _mySlider.value = [[de objectForKey:@"fontSize"] integerValue];
    }else {
        _mySlider.value = 14.0;
    }
    _mySlider.backgroundColor =[UIColor clearColor];//测试用,
    [_mySlider addTarget:self action:@selector(sliderValueChanged:) forControlEvents:UIControlEventValueChanged];
    _mySlider.continuous = NO;//当放开手., 值才确定下来
    [ self.view addSubview:_mySlider ];
    [_mySlider mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(lable.mas_bottom).offset(20*HEIGHT);
        make.left.equalTo(fontLable.mas_right).offset(10);
        make.width.mas_equalTo(200*WIDth);
        make.height.mas_equalTo(40*HEIGHT);
    }];
    
    //调节亮度
    UILabel *ldLable = [[UILabel alloc] init];
    ldLable.font = [UIFont systemFontOfSize:16];
    ldLable.textColor = [UIColor colorWithHexString:@"999999"];
    ldLable.textAlignment = NSTextAlignmentCenter;
    fontLable.backgroundColor = [UIColor clearColor];
    ldLable.text = @"调节亮度";
    [self.view addSubview:ldLable];
    [ldLable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(fontLable.mas_bottom).offset(5*HEIGHT);
        make.left.mas_equalTo(20);
        make.width.mas_equalTo([sizeWithString widthWithString:@"调节字体" andfontSize:16]);
        make.height.mas_equalTo(40*HEIGHT);
    }];
    
    _yourSlider = [ [ UISlider alloc ] init];//高度设为40就好,高度代表手指触摸的高度.这个一定要注意
    _yourSlider.minimumValue = 0;//下限
    _yourSlider.maximumValue = 1;//上限
    CGFloat currentLight = [[UIScreen mainScreen] brightness];
    _yourSlider.value = currentLight;
    _yourSlider.backgroundColor =[UIColor clearColor];//测试用,
    [_yourSlider addTarget:self action:@selector(sliderValueChanged1:) forControlEvents:UIControlEventValueChanged];
    _yourSlider.continuous = NO;//当放开手., 值才确定下来
    [ self.view addSubview:_yourSlider ];
    [_yourSlider mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(fontLable.mas_bottom).offset(5*HEIGHT);
        make.left.equalTo(ldLable.mas_right).offset(10);
        make.width.mas_equalTo(200*WIDth);
        make.height.mas_equalTo(40*HEIGHT);
    }];
    
    _myImg = [[UIImageView alloc] init];
    if ([de objectForKey:@"readerbgview"]) {
        _myImg.image = [UIImage imageNamed:[NSString stringWithFormat:@"reader_bg%@",[de objectForKey:@"readerbgview"]]];
    } else {
        _myImg.image =[UIImage imageNamed:@"reader_bg1"];
    }
    [self.view addSubview:_myImg];
    [_myImg mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(ldLable.mas_bottom).offset(20*HEIGHT);
        make.bottom.mas_equalTo(-20*HEIGHT-47);
        make.left.mas_equalTo(20);
        make.width.mas_equalTo(kMainBoundsWidth - 40);
    }];
    
    _mylable = [[myLable alloc] init];
    _mylable.font = [UIFont systemFontOfSize:_mySlider.value];
    _mylable.textColor = [UIColor colorWithHexString:@"999999"];
    _mylable.textAlignment = NSTextAlignmentLeft;
    _mylable.backgroundColor = [UIColor clearColor];
    _mylable.numberOfLines = 0;
    _mylable.text = @"这里是设置背景和字体的效果展示:苹果的操作系统OSX比windows稳定,iOS比安卓更加流畅、并且安全.所有让更多人青睐.用苹果手机之后再也不用担心用几个月会发生手机频频卡顿的现象,所有大家更钟情于苹果";
    [_myImg addSubview:_mylable];
    [_mylable mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.bottom.left.right.mas_equalTo(0);
    }];
}

-(void)reader_bgClick:(UITapGestureRecognizer *)btn{
    [KVNProgress showSuccessWithStatus:@"更换成功"];
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    [de setObject:[NSString stringWithFormat:@"%ld",(long)btn.view.tag] forKey:@"readerbgview"];
    _myImg.image = [UIImage imageNamed:readerArr[btn.view.tag-1]];
    
}
-(void)sliderValueChanged:(UISlider *)paramSender{
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    [de setObject:[NSString stringWithFormat:@"%f",_mySlider.value] forKey:@"fontSize"];
    _mylable.font = [UIFont systemFontOfSize:_mySlider.value];
    
}
-(void)sliderValueChanged1:(UISlider *)paramSender{
    // 设置系统屏幕亮度
    [UIScreen mainScreen].brightness = 0.5;
    
}
@end
