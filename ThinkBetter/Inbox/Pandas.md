
参考 [Pandas Cheat Sheet for Data Science in Python](https://www.geeksforgeeks.org/pandas-cheat-sheet/)

# DataFrame 

## base info

### head/tail/sample/nlargets/nsmallest

### shape/size/values/dtypes
### sort_values/sort_index/reset_index/rename/drop
### reshaping
#### melt/pivot

## select

`df['FRUITS']`
`df[['FRUITS', 'PRICE']]`
`df.filter(regex='F|Q')`

## Getting Subsets
`df.loc[:, 'FRUITS':'PRICE']` : Select all the columns between Fruits and Price
`df.loc[df['PRICE'] < 70, ['FRUITS', 'PRICE']]` : Select FRUITS name having PRICE <70
`df.iloc[2:5]` Select 2 to 5 rows
`df.at[1, 'PRICE']` Select Single PRICE value at 2nd row of the ‘PRICE’ column

## filter
`df.filter(items=['FRUITS', 'PRICE'])` 
`df.filter(items=[3], axis=0)`
`df['PRICE'].where(df['PRICE'] > 50)`
`df.query('PRICE>70')`



## read/write data
### read_csv/excel/json/sql/html
## join data 

### merge
`
pd.merge(df1, df2,left_on="fruitsname" ,right_on="fruittype" how='left', on='Fruits') 
//how :left right inner outer
## Concatenation
`concat_df = pd.concat([df, df1], axis=0, ignore_index=True)`
axis = 0：表示数据框 df 和 df1 将垂直连接
Ignore_index = True：确保生成的 DataFrame 具有新索引，从零开始并按顺序递增 concat_df 具有 df 的行，后跟 df1


`concat_df = pd.concat([df, df2], axis=1)`
axis = 1 ：表示数据框 df 和 df1 将水平连接 concat_df 具有 df 列，后跟 df2， 如果 DataFrames 的长度不匹配，则将 NaN 值分配给缺失的元素。
## add new column
`df['COL_NAME'] = COL_DATA`
### assign
`df = df.assign(Paid_Price=lambda df:  (df.QUANTITY * df.PRICE))`

## group by
`grouped = df.groupby(by='COL_NAME')`
`grouped.agg(['count','sum', 'mean'])` 计算平均值



## Data Analysis

### describe/unique/value_count/sum/min/max/mean

## other
### isnull/isnull().sum()/fillna/dropna
