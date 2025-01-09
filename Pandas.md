
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
## data manipulation




