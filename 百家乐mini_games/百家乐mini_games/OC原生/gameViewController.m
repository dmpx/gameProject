//
//  gameViewController.m
//  百家乐mini_games
//
//  Created by 二哈 on 17/4/7.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "gameViewController.h"

#define iconArr @[[UIImage imageNamed:@"icon_1"],[UIImage imageNamed:@"icon_2"],[UIImage imageNamed:@"icon_3"],[UIImage imageNamed:@"icon_4"],[UIImage imageNamed:@"icon_5"],[UIImage imageNamed:@"icon_6"]]

#define buttoarr @[@"大",@"豹子",@"小"]

@interface gameViewController (){
    UIImageView *_chipImgView;
    UIButton * _startGame;
    UIButton * _stopGame;
    UILabel *_myMoney;
    UILabel *_computer;
    
    UIImageView *_smile;
    UIImageView *_cry;

}
@property (nonatomic ,assign)int sezi_result;
@property (nonatomic ,strong)NSMutableArray *imgViewArr;
@property (nonatomic ,strong)NSMutableArray *buttonArr;
@property (nonatomic ,strong)NSMutableArray *resultArr;
@end

@implementation gameViewController
-(NSMutableArray *)imgViewArr{
    if (!_imgViewArr) {
        _imgViewArr = [[NSMutableArray alloc] init];
    }
    return _imgViewArr;
}
-(NSMutableArray *)buttonArr{
    if (!_buttonArr) {
        _buttonArr = [[NSMutableArray alloc] init];
    }
    return _buttonArr;
}

-(NSMutableArray *)resultArr{
    if (!_resultArr) {
        _resultArr = [[NSMutableArray alloc] init];
    }
    return _resultArr;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    //分配金币
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    if ([de objectForKey:@"myMoney"] == NO) {
        [de setObject:@"1000" forKey:@"myMoney"];
        [de synchronize];
    }
    [self setUI];
}

- (void)setUI {
    
    UIImageView *bgImgView =  [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"Felt"]];
    bgImgView.userInteractionEnabled = YES;
    bgImgView.frame = CGRectMake(0, 0, kMainBoundsWidth, kMainBoundsHeight);
    [self.view addSubview:bgImgView];
    
    CGFloat top_masory = 64+64*HEIGHT;//距离顶部的高
    //色子 299*294
    CGFloat distance = 30;//距离左边的边距
    CGFloat icon_width = (kMainBoundsWidth - 30*4)/3;
    for (int i = 0; i<3; i++) {
        UIImageView *icon = [[UIImageView alloc] init];
        icon.frame = CGRectMake(distance*(i+1) +icon_width*i, top_masory,icon_width, icon_width);
        int x = (arc4random() % iconArr.count);
        icon.image = iconArr[x];
        [self.imgViewArr addObject:icon];
        [bgImgView addSubview:icon];
    }
    
    //按钮 选大选小 204 /99
    CGFloat buttonDistance = (kMainBoundsWidth - distance*2 - 102*WIDth*3)/2;//按钮间距
    for (int i = 0; i< 3; i++) {
        UIButton *button = [UIButton buttonWithType:UIButtonTypeCustom];
        [button setBackgroundImage:[UIImage imageNamed:@"button"] forState:UIControlStateNormal];
        [button addTarget:self action:@selector(selected:) forControlEvents:UIControlEventTouchUpInside];
        [button setTitle:buttoarr[i] forState:UIControlStateNormal];
        [button setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
        button.titleLabel.font =[UIFont systemFontOfSize:16];
        button.tag = 10+i;
        button.titleLabel.textAlignment = NSTextAlignmentCenter;
        button.frame = CGRectMake(distance + 102*WIDth*i+buttonDistance*i, top_masory+icon_width+40*HEIGHT, 102*WIDth, 99/2*HEIGHT);
        [self.buttonArr addObject:button];
        [self.view addSubview:button];
    }
    //筹码
    _chipImgView = [[UIImageView alloc] init];
    _chipImgView.image = [UIImage imageNamed:@"gallery_credit_icon"];
    _chipImgView.frame = CGRectMake(distance, top_masory+icon_width+40*HEIGHT + 99/2*HEIGHT + 40*HEIGHT, 30*WIDth, 30*HEIGHT);
    [self.view addSubview:_chipImgView];
    
    //开始游戏
    _startGame = [[UIButton alloc] init];
    [_startGame setBackgroundImage:[UIImage imageNamed:@"button"] forState:UIControlStateNormal];
    [_startGame setTitle:@"开始游戏" forState:UIControlStateNormal];
    [_startGame setTitleColor:[UIColor redColor] forState:UIControlStateNormal];
    [_startGame addTarget:self action:@selector(startGame:) forControlEvents:UIControlEventTouchUpInside];
    _startGame.titleLabel.font = [UIFont systemFontOfSize:14];
    [self.view addSubview:_startGame];
    [_startGame mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(-distance);
        make.right.mas_equalTo(-distance);
        make.size.mas_equalTo(CGSizeMake(102*WIDth, 99/2*HEIGHT));
    }];
    
    //停止游戏
    _stopGame = [[UIButton alloc] init];
    [_stopGame setBackgroundImage:[UIImage imageNamed:@"button"] forState:UIControlStateNormal];
    [_stopGame setTitle:@"停止转动" forState:UIControlStateNormal];
    [_stopGame setTitleColor:[UIColor redColor] forState:UIControlStateNormal];
    [_stopGame addTarget:self action:@selector(stopGame:) forControlEvents:UIControlEventTouchUpInside];
    _stopGame.titleLabel.font = [UIFont systemFontOfSize:14];
    [self.view addSubview:_stopGame];
    [_stopGame mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.mas_equalTo(-distance);
        make.left.mas_equalTo(distance*WIDth);
        make.size.mas_equalTo(CGSizeMake(102*WIDth, 99/2*HEIGHT));
    }];
    _stopGame.hidden = YES;
    
    //金币总数
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    _computer = [[UILabel alloc] init];
    _computer.font = [UIFont systemFontOfSize:16];
    _computer.textAlignment = NSTextAlignmentCenter;
    _computer.textColor = [UIColor redColor];
    NSString *money = [de objectForKey:@"myMoney"];
    _computer.text = [NSString stringWithFormat:@"电脑金币 :%d",(2000-money.intValue)];
    NSMutableAttributedString *attribute = [[NSMutableAttributedString alloc] initWithString:[NSString stringWithFormat:@"电脑金币 :%@",money]];
    [attribute addAttribute:NSForegroundColorAttributeName value:[UIColor orangeColor] range:NSMakeRange(0, 4)];
    _computer.attributedText = attribute;
    [self.view addSubview:_computer];
    [_computer mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.equalTo(_startGame.mas_top).offset(-2*distance*HEIGHT);
        make.left.right.mas_equalTo(0);
        make.height.mas_equalTo([sizeWithString heightWithString:_computer.text andfontSize:14]);
    }];
    
    _myMoney = [[UILabel alloc] init];
    _myMoney.font = [UIFont systemFontOfSize:16];
    _myMoney.textAlignment = NSTextAlignmentCenter;
    _myMoney.textColor = [UIColor redColor];
    _myMoney.text = [NSString stringWithFormat:@"自己金币 :%d",money.intValue];
    NSMutableAttributedString *attribute1 = [[NSMutableAttributedString alloc] initWithString:[NSString stringWithFormat:@"自己金币 :%d",(2000-money.intValue)]];
    [attribute1 addAttribute:NSForegroundColorAttributeName value:[UIColor orangeColor] range:NSMakeRange(0, 4)];
    _myMoney.attributedText = attribute1;
    [self.view addSubview:_myMoney];
    [_myMoney mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.equalTo(_computer.mas_top).offset(-distance*HEIGHT);
        make.left.right.mas_equalTo(0);
        make.height.mas_equalTo([sizeWithString heightWithString:_computer.text andfontSize:14]);
    }];
    //结果显示图片200*200
    _smile = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"smile"]];
    _smile.frame = CGRectMake(kMainBoundsWidth/2, kMainBoundsHeight/2, 0, 0);
    [self.view addSubview:_smile];
    _smile.hidden = YES;
    
    _cry = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"cry"]];
    _cry.frame = CGRectMake(kMainBoundsWidth/2, kMainBoundsHeight/2, 0, 0);
    [self.view addSubview:_cry];
    _cry.hidden = YES;
}

- (void)selected:(UIButton*)btn{
    
    for (int i = 0;i<self.buttonArr.count;i++) {
        UIButton *button = self.buttonArr[i];
        button.selected = NO;
        if (i == btn.tag - 10) {
            button.selected = YES;
        }
    }

    [UIView animateWithDuration:0.2 animations:^{
         _chipImgView.frame = CGRectMake(btn.frame.origin.x, btn.frame.origin.y+btn.frame.size.height, 30*WIDth, 30*HEIGHT);
    }];
}
#pragma mark -开始游戏
-(void)startGame:(UIButton *)btn{

    UIButton *button0 = self.buttonArr[0];
    UIButton *button1 = self.buttonArr[1];
    UIButton *button2 = self.buttonArr[2];
    if (button0.selected || button1.selected || button2.selected) {
        [btn setTitle:@"游戏进行中..." forState:UIControlStateNormal];
        btn.alpha = 0.7;
        btn.enabled = NO;
        
        //色子转动
        [self gameLoading];
    } else {
        [KVNProgress showErrorWithStatus:@"请选择你的赌注"];
    }
}
#pragma mark -进行游戏
-(void)gameLoading {
    _stopGame.hidden = NO;
    for (UIImageView *sezi in self.imgViewArr) {
//            int x = (arc4random() % iconArr.count)+1;
        sezi.animationImages = iconArr;
        [sezi startAnimating];
    }
}
#pragma mark -停止游戏
-(void)stopGame:(UIButton *)btn {
    [self.resultArr removeAllObjects];
    _stopGame.hidden = YES;
    [_startGame setTitle:@"开始游戏" forState:UIControlStateNormal];
    _startGame.alpha = 1;
    _startGame.enabled = YES;
    for (UIImageView *sezi in self.imgViewArr) {
        [sezi stopAnimating];
         int x = (arc4random() % iconArr.count);
        sezi.image = iconArr[x];
        [self.resultArr addObject:[NSString stringWithFormat:@"%d",x]];
    }
    [self getresult];
}
//得到结果的逻辑
-(void)getresult {

//    NSLog(@"%@------%@-----%@",self.resultArr[0],self.resultArr[1],self.resultArr[2]);
    int one = [self.resultArr[0] intValue] +1;
    int two = [self.resultArr[1] intValue] +1;
    int three = [self.resultArr[2] intValue] +1;
    if (one == two && two == three) {
        self.sezi_result = 2;
    } else {
        if (one + two + three <= 9) {
            self.sezi_result = 3;
        } else if(one + two + three > 9){
            self.sezi_result = 1;
        }
    }
    
    
    //获得压得是 大/小/豹子
    for (int i = 0; i < self.buttonArr.count; i++) {
        UIButton *btn = self.buttonArr[i];
        if (btn.selected == YES) {
            if (i+1 == self.sezi_result) {
                //选对了
                _smile.hidden = NO;
                _cry.hidden = YES;
                [UIView animateWithDuration:0.2 animations:^{
                    _smile.frame = CGRectMake(kMainBoundsWidth/2 - 100*WIDth, kMainBoundsHeight/2 - 100*HEIGHT, 200*WIDth, 200*HEIGHT);
                }];
                [self performSelector:@selector(hidden) withObject:nil afterDelay:1];
                [self changeMoney:YES];
            } else {
                //选错了
                _cry.hidden = NO;
                _smile.hidden = YES;
                [UIView animateWithDuration:0.2 animations:^{
                    _cry.frame = CGRectMake(kMainBoundsWidth/2 - 100*WIDth, kMainBoundsHeight/2 - 100*HEIGHT, 200*WIDth, 200*HEIGHT);
                }];
                [self performSelector:@selector(hidden) withObject:nil afterDelay:0.5];
                [self changeMoney:NO];
            }
        }
    }
}

-(void)changeMoney:(BOOL)is {
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    NSString *money = [de objectForKey:@"myMoney"];
    if (is) {
        money = [NSString stringWithFormat:@"%d",money.intValue + 100];
    }else {
        money = [NSString stringWithFormat:@"%d",money.intValue - 100];
    }
    [de setObject:money forKey:@"myMoney"];
    [de synchronize];
    _myMoney.text = [NSString stringWithFormat:@"自己金币 :%d",money.intValue];
    _computer.text = [NSString stringWithFormat:@"电脑金币 :%d",(2000-money.intValue)];
    
    if ([money isEqualToString:@"2000"]) {
        UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"恭喜您" message:@"您把电脑赢光了" preferredStyle:UIAlertControllerStyleAlert];
        UIAlertAction *ok = [UIAlertAction actionWithTitle:@"重置积分" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
            [de setObject:@"1000" forKey:@"myMoney"];
            [de synchronize];
            NSString *money = [de objectForKey:@"myMoney"];
            _myMoney.text = [NSString stringWithFormat:@"自己金币 :%d",money.intValue];
            _computer.text = [NSString stringWithFormat:@"电脑金币 :%d",(2000-money.intValue)];
        }];
        [alert addAction:ok];
        [self presentViewController:alert animated:YES completion:nil];
    } else if ([money isEqualToString:@"0"]){
        UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"真遗憾" message:@"您把积分输光了" preferredStyle:UIAlertControllerStyleAlert];
        UIAlertAction *ok = [UIAlertAction actionWithTitle:@"重置积分" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
            [de setObject:@"1000" forKey:@"myMoney"];
            [de synchronize];
             NSString *money = [de objectForKey:@"myMoney"];
            _myMoney.text = [NSString stringWithFormat:@"自己金币 :%d",money.intValue];
            _computer.text = [NSString stringWithFormat:@"电脑金币 :%d",(2000-money.intValue)];
        }];
        [alert addAction:ok];
        [self presentViewController:alert animated:YES completion:nil];
    }
    
}

-(void)hidden {
    [UIView animateWithDuration:0.8 animations:^{
        _cry.frame = CGRectMake(kMainBoundsWidth/2, kMainBoundsHeight/2,0, 0);
        _smile.frame = CGRectMake(kMainBoundsWidth/2, kMainBoundsHeight/2,0, 0);
    } completion:^(BOOL finished) {
        _smile.hidden = YES;
        _cry.hidden = YES;
    }];
}
-(UIInterfaceOrientation)preferredInterfaceOrientationForPresentation
{
    return UIInterfaceOrientationUnknown;
}

- (UIInterfaceOrientationMask)supportedInterfaceOrientations
{
    return UIInterfaceOrientationMaskPortrait;
}

@end
