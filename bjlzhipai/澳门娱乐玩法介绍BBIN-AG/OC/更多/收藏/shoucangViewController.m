//
//  shoucangViewController.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/12.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "shoucangViewController.h"
#import "TableViewCell.h"
#import "contentViewController.h"
#import "model.h"
@interface shoucangViewController ()<UITableViewDelegate,UITableViewDataSource>{
    UITableView *_tableView;
}

@property (nonatomic ,strong)NSMutableArray *DataArr;

@end

@implementation shoucangViewController

-(NSMutableArray *)DataArr {
    if (!_DataArr) {
        _DataArr = [NSMutableArray array];
    }
    return _DataArr;
}

-(void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    self.navigationController.title = @"收藏";
    self.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithImage:[UIImage imageNamed:@"fanhui"] style:UIBarButtonItemStylePlain target:self action:@selector(back)];
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    NSMutableDictionary *dic = [de objectForKey:@"shoucang"];
    self.DataArr = (NSMutableArray*)[dic allValues];
    
    [_tableView reloadData];
}


- (void)viewDidLoad {
    [super viewDidLoad];
    self.navigationController.title = @"收藏";
    
    self.navigationItem.leftBarButtonItem =  [[UIBarButtonItem alloc] initWithImage:[UIImage imageNamed:@"mulu"] style:UIBarButtonItemStylePlain target:self action:@selector(back)];
    _tableView = [[UITableView alloc] init];
    _tableView.backgroundColor = [UIColor whiteColor];
    _tableView.delegate = self;
    _tableView.separatorStyle = UITableViewCellSeparatorStyleNone;
    _tableView.dataSource = self;
    _tableView.frame = CGRectMake(0,0, kMainBoundsWidth, kMainBoundsHeight - 47);
    [self.view addSubview:_tableView];
    
}

-(void)back{
    [self.navigationController popViewControllerAnimated:YES];
}

-(NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    return 1;
}

-(NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return self.DataArr.count;
}

-(CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
    return 60*HEIGHT;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    TableViewCell *cell = [_tableView dequeueReusableCellWithIdentifier:@"basketBallTableViewCell"];
    if (!cell) {
        cell = [[TableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:@"basketBallTableViewCell"];
        cell.backgroundColor = [UIColor whiteColor];
        cell.selectionStyle = UITableViewCellSelectionStyleNone;
    }
    NSMutableDictionary*dic = self.DataArr[indexPath.row];
    [cell updateWithModel:dic[@"title"]];
    return cell;
}
-(void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    [tableView deselectRowAtIndexPath:indexPath animated:NO];
    contentViewController *content = [[contentViewController alloc] init];
    NSMutableDictionary *dic = self.DataArr[indexPath.row];
    content.content =dic[@"content"];
    content.titletext = dic[@"title"];
    content.hidesBottomBarWhenPushed = YES;
    [self.navigationController pushViewController:content animated:YES];
}


@end
