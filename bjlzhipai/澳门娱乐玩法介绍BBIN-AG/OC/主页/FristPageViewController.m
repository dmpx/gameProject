//
//  FristPageViewController.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/4.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "FristPageViewController.h"
#import "tabBarController.h"
#define NAME @[@"百家乐",@"德州扑克",@"梭哈",@"斗地主",@"麻将",@"长沙麻将",@"扎金花",@"老虎机",@"六合彩"]
#define IMAGENAME @[@"baijiale",@"poker",@"suoha",@"doudizhu",@"majiang1",@"majiang2",@"zhajinhua",@"laohuji",@"liuhecai"]
@interface FristPageViewController ()

@end

@implementation FristPageViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self.navigationController setNavigationBarHidden:YES];
    
    //创建收藏的本地化储存
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    if ([de objectForKey:@"shoucang"] == NULL) {
        NSMutableDictionary *arr = [[NSMutableDictionary alloc] init];
        [de setObject:arr forKey:@"shoucang"];
    }
    [de synchronize];
    // Do any additional setup after loading the view.
//    self.view.backgroundColor = [UIColor colorWithRed:0 green:0 blue:0 alpha:0.2];
    UIImageView *bgImg = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"default"]];
    bgImg.frame = [UIScreen mainScreen].bounds;
    bgImg.userInteractionEnabled = YES;
    [self.view addSubview:bgImg];
    
    UILabel *title = [[UILabel alloc] init];
    title.font = [UIFont systemFontOfSize:20];
    title.textColor = [UIColor whiteColor];
    title.textAlignment = NSTextAlignmentCenter;
    title.text = @"选择攻略种类";
    [bgImg addSubview:title];
    [title mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.mas_equalTo(64+40*HEIGHT);
        make.left.mas_offset(20);
        make.right.mas_offset(-20);
        make.height.mas_equalTo([sizeWithString heightWithString:@"选择攻略种类" andfontSize:20]);
    }];
    
    UIView *bgView = [[UIView alloc] init];
    bgView.backgroundColor = [UIColor colorWithRed:0 green:0 blue:0 alpha:0.5];
    bgView.layer.cornerRadius = 10;
    bgView.layer.masksToBounds = YES;
    [bgImg addSubview:bgView];
    [bgView mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.mas_offset(20);
        make.right.mas_offset(-20);
        make.top.equalTo(title).offset(40*HEIGHT);
        make.height.mas_offset(20*4*HEIGHT + 80*3*HEIGHT);
    }];
    
    //每个图片高度 60*60
    NSInteger distance_height =20;
    NSInteger distance_width = (kMainBoundsWidth - 40 - 60*WIDth*3)/6;
    
    for (int i = 0; i<NAME.count; i++) {
        int row = i/3;//行号
        int col = i%3;//列号
        //y 轴坐标
        CGFloat y = distance_height*HEIGHT*(row+1) + row *80*HEIGHT;
        //x - 由列号决定
        CGFloat x = distance_width + col * (60*WIDth + distance_width*2);
        UIButton *button = [UIButton buttonWithType:UIButtonTypeCustom];
        button.tag = i+10;
        [button addTarget:self action:@selector(buttonClick:) forControlEvents:UIControlEventTouchUpInside];
        button.backgroundColor = [UIColor clearColor];
        [bgView addSubview:button];
        [button mas_makeConstraints:^(MASConstraintMaker *make) {
            make.height.mas_offset(80*HEIGHT);
            make.width.mas_offset(60*WIDth);
            make.top.mas_offset(y);
            make.left.mas_offset(x);
        }];
        //图片
        UIImageView *img = [[UIImageView alloc] init];
        img.image = [UIImage imageNamed:IMAGENAME[i]];
        img.layer.cornerRadius = 5;
        img.layer.masksToBounds = YES;
        [button addSubview:img];
        [img mas_makeConstraints:^(MASConstraintMaker *make) {
            make.top.left.right.mas_offset(0);
            make.height.mas_offset(60*HEIGHT);
        }];
        //字
        UILabel *label = [[UILabel alloc] init];
        label.font = [UIFont systemFontOfSize:12];
        label.textColor = [UIColor whiteColor];
        label.textAlignment = NSTextAlignmentCenter;
        label.text = NAME[i];
        [button addSubview:label];
        [label mas_makeConstraints:^(MASConstraintMaker *make) {
            make.left.right.bottom.mas_offset(0);
            make.height.mas_offset(20);
        }];
    }
}

- (void)buttonClick:(UIButton *)btn {
    // Dispose of any resources that can be recreated.
    NSLog(@"%@",NAME[btn.tag - 10]);
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    [de setObject:NAME[btn.tag-10] forKey:@"name"];
    [de setObject:[NSString stringWithFormat:@"%d",btn.tag - 10] forKey:@"tag"];
    [de synchronize];
    [self.navigationController pushViewController:[[tabBarController alloc] init] animated:YES];
    
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
