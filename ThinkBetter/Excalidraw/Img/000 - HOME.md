
[Time is personal. Your year changes when your life changes. | Derek Sivers](https://sive.rs/mny)


>[!multi-column]
>>
>> ## 🧭 Study
>> [[学习方法]] [[GTD]] 	[[外语]]
>> [[_ MOC - Books]]
>> [[心智模型 TOC]]
>> [[一句话的玩味]]
>> [[一张有趣的图]]
>> [[反直觉]]
>> [[写点儿啥]]
>> [[写作]]
>> [[OB插件]]
>
>> ## ⛏️ Work
>> 🧰 [[工具箱]]
>> [[SQL Server TOC]]
>> [[sqlite MOC]]
>> [[Git MOC]] 
>> [[PowerBuilder MOC]]
>> [[Vue]]
>> 
>
>> ## 😎 Life OS
>> [[基本Q]] [[NotToDo]] [[养生之道]]
>> [[愿望清单]]
>> [[中医]]
>> [[事件timing]]



一张○运动图，包含时节，卦位，病症，对应药物

```dataviewjs

const today = DateTime.now()
const endOfYear = {
    year: today.year,
    month: 12,
    day: 1
}

const lifespan = { year: 80 } 
const birthday = DateTime.fromObject({
    year: 1983,
    month: 1,
    day: 1
});
const deathday = birthday.plus(lifespan)

function progress(type) {
    let value;
    
    switch(type) {
        case "lifespan": 
            value = (today.year - birthday.year) / lifespan.year * 100;
            break;
        case "year":
            value = today.month / 12 * 100
            break;
        case "month":
            value = today.day / today.daysInMonth * 100
            break;
        case "day":
            value = today.hour / 24 * 100
            break;
    }
    return `<progress value="${parseInt(value)}" max="100"></progress> | ${parseInt(value)} %`
}

dv.span(`
|  | Progress  | Percentage |
| --- | --- |:---:|
| **Year** | ${progress("year")}
| **Month**| ${progress("month")}
| **Day**| ${progress("day")}
| **Life** | ${progress("lifespan")}
`)

```




Avoid digital hoarding

