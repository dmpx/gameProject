//
//  tableViewController.m
//  澳门娱乐玩法介绍BBIN-AG
//
//  Created by 二哈 on 17/4/5.
//  Copyright © 2017年 二哈. All rights reserved.
//

#import "tableViewController.h"
#import "TableViewCell.h"
#import "shoucangViewController.h"
#import "contentViewController.h"
#import "noteViewController.h"
@interface tableViewController () <UITableViewDelegate,UITableViewDataSource,MJRefreshBaseViewDelegate>{
    UITableView *_tableView;
}
@property (nonatomic, strong)MJRefreshHeaderView *RefreshHeaderView;//下拉刷新
@property (nonatomic ,strong)NSMutableArray *DataArr;
@end

@implementation tableViewController

-(void)dealloc {
    [self.RefreshHeaderView free];
}

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    _tableView = [[UITableView alloc] init];
    _tableView.backgroundColor = [UIColor whiteColor];
    _tableView.delegate = self;
    _tableView.separatorStyle = UITableViewCellSeparatorStyleNone;
    _tableView.dataSource = self;
    _tableView.frame = CGRectMake(0,0, kMainBoundsWidth, kMainBoundsHeight - 47);
    [self.view addSubview:_tableView];
    
    //创建刷新视图
    _RefreshHeaderView = [MJRefreshHeaderView header];
    //与刷新视图相关联的表（滚动视图）
    _RefreshHeaderView.scrollView = _tableView;
    _RefreshHeaderView.delegate = self;
    
    [_RefreshHeaderView beginRefreshing];
    
    //记笔记
    UIButton *jibiji = [UIButton buttonWithType:UIButtonTypeCustom];
//    [jibiji setImage:[UIImage imageNamed:@"Rectangle"] forState:UIControlStateNormal];
    [jibiji setBackgroundImage:[UIImage imageNamed:@"Rectangle"] forState:UIControlStateNormal];
    [jibiji setTitle:@"记事本" forState:UIControlStateNormal];
    [jibiji setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    jibiji.titleLabel.font = [UIFont systemFontOfSize:16];
    [jibiji addTarget:self action:@selector(jibijiClick) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:jibiji];
    [jibiji mas_makeConstraints:^(MASConstraintMaker *make) {
        make.height.mas_equalTo(28*HEIGHT/3*4);
        make.width.mas_equalTo(70*WIDth/3*4);
        make.right.mas_equalTo(-10);
        make.bottom.mas_equalTo(-47-20);
    }];
    
    //收藏141/56
    UIButton *shoucang = [UIButton buttonWithType:UIButtonTypeCustom];
    [shoucang setBackgroundImage:[UIImage imageNamed:@"Rectangle"] forState:UIControlStateNormal];
    [shoucang setTitle:@"收藏" forState:UIControlStateNormal];
    [shoucang setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    shoucang.titleLabel.font = [UIFont systemFontOfSize:16];
    [shoucang addTarget:self action:@selector(shoucangClick) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:shoucang];
    [shoucang mas_makeConstraints:^(MASConstraintMaker *make) {
        make.height.mas_equalTo(28*HEIGHT/3*4);
        make.width.mas_equalTo(70*WIDth/3*4);
        make.left.mas_equalTo(10);
        make.bottom.mas_equalTo(-47-20);
    }];
}

- (void)jibijiClick{
//记笔记
    noteViewController *note = [[noteViewController alloc] init];
    note.hidesBottomBarWhenPushed = YES;
    [self.navigationController pushViewController:note animated:YES];
}

-(void)shoucangClick {
    //收藏
    shoucangViewController *shoucang = [[shoucangViewController alloc] init];
    [self.navigationController pushViewController:shoucang animated:YES];
}
#pragma mark RefreshViewDelegate
//开始刷新
- (void)refreshViewBeginRefreshing:(MJRefreshBaseView *)refreshView {
    if ([refreshView isEqual:_RefreshHeaderView]) {
        [self loadData];
    }
}

-(void)loadData {
    NSString *plistPath = [[NSBundle mainBundle] pathForResource:@"content" ofType:@"plist"];
    NSArray *data = [[NSArray alloc] initWithContentsOfFile:plistPath];
    NSUserDefaults *de = [NSUserDefaults standardUserDefaults];
    NSInteger tag = [[de objectForKey:@"tag"] integerValue];
    self.DataArr = data[tag];
    [_RefreshHeaderView endRefreshing];
    [_tableView reloadData];
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
    NSDictionary *dic = self.DataArr[indexPath.row];
    [cell updateWithModel:dic[@"title"]];
    return cell;
}
-(void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    [tableView deselectRowAtIndexPath:indexPath animated:NO];
    contentViewController *content = [[contentViewController alloc] init];
    NSDictionary *dic = self.DataArr[indexPath.row];
    content.content =dic[@"cotent"];
    content.titletext = dic[@"title"];
    content.tag = dic[@"tag"];
    content.hidesBottomBarWhenPushed = YES;
    [self.navigationController pushViewController:content animated:YES];
}
@end
