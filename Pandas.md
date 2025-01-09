
参考 [Pandas Cheat Sheet for Data Science in Python](https://www.geeksforgeeks.org/pandas-cheat-sheet/)

# DataFrame 

## base info

### head/tail/sample/nlargets/nsmallest

### shape/size/values/dtypes
### sort_values/sort_index/reset_index/rename/drop
### reshaping
#### melt/pivot

### select

`df['FRUITS']`
`df[['FRUITS', 'PRICE']]`
`df.filter(regex='F|Q')`

### Getting Subsets
`df.loc[:, 'FRUITS':'PRICE']` : Select all the columns between Fruits and Price
`df.loc[df['PRICE'] < 70, ['FRUITS', 'PRICE']]` : Select FRUITS name having PRICE <70
## read/write data
### read_csv/excel/json/sql/html
## join data 

### merge

## data manipulation




