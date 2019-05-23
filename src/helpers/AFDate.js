import moment from 'moment';

export function getMonthNum(MonthStr) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var cMonth;
    for (var i = 0; i < months.length; i++) {
        if (months[i] == MonthStr) {
            cMonth = i;
            break;
        } else {
            continue;
        }
    }
    return cMonth;
}

export function getCurrentMonthString() {
    var cmonth = '';
    switch (new Date().getMonth() + 1) {
        case 1 : cmonth = 'January'; break;
        case 2 : cmonth = 'February'; break;
        case 3 : cmonth = 'March'; break;
        case 4 : cmonth = 'April'; break;
        case 5 : cmonth = 'May'; break;
        case 6 : cmonth = 'June'; break;
        case 7 : cmonth = 'July'; break;
        case 8 : cmonth = 'August'; break;
        case 9 : cmonth = 'September'; break;
        case 10 : cmonth = 'October'; break;
        case 11 : cmonth = 'November'; break;
        case 12 : cmonth = 'December'; break;
        default : cmonth = 'Error'; break;
    }
    return cmonth;
}

export function convert2mYStr2YYYYMM(value) {
    var YYYYMM = '';
    switch (value.split(' ')[0]) {
        case 'January' : YYYYMM = value.split(' ')[1] + '-01'; break;
        case 'February' : YYYYMM = value.split(' ')[1] + '-02'; break;
        case 'March' : YYYYMM = value.split(' ')[1] + '-03'; break;
        case 'April' : YYYYMM = value.split(' ')[1] + '-04'; break;
        case 'May' : YYYYMM = value.split(' ')[1] + '-05'; break;
        case 'June' : YYYYMM = value.split(' ')[1] + '-06'; break;
        case 'July' : YYYYMM = value.split(' ')[1] + '-07'; break;
        case 'August' : YYYYMM = value.split(' ')[1] + '-08'; break;
        case 'September' : YYYYMM = value.split(' ')[1] + '-09'; break;
        case 'October' : YYYYMM = value.split(' ')[1] + '-10'; break;
        case 'November' : YYYYMM = value.split(' ')[1] + '-11'; break;
        case 'December' : YYYYMM = value.split(' ')[1] + '-12'; break;
        default: YYYYMM = 'Error'; break;
    }
    
    return YYYYMM;
}

export function getFullMonWeeksArr(YYYYMM) {
    var dd = new Date();
    var mm = moment(dd).format("YYYY-MM-DD");
    
    var sYear = YYYYMM.split('-')[0];
    var sMonthNum = Number(YYYYMM.split('-')[1]);

    var firstDate = moment(new Date(sYear, sMonthNum - 1, 1)).format("YYYY-MM-DD");
    var firstDD = Number(moment(new Date(sYear, sMonthNum - 1, 1)).format("DD"));
    var mfirst = moment(firstDate);
    var firstDay = mfirst.day();
    var lastDate = moment(new Date(sYear, sMonthNum, 0)).format("YYYY-MM-DD");
    var lastDD = Number(moment(new Date(sYear, sMonthNum, 0)).format("DD"));
    var mlast = moment(lastDate);
    var lastDay = mlast.day();

    var max_week = Math.ceil(mlast.date() / 7);
    
    // get all weeks of current month
    var arr_weeks = new Array(max_week);
    for (var k = 0; k < max_week; k++) {
        arr_weeks[k] = new Array();
    }
    for (var i = 1; i <= lastDD; i++) {
        var nthOfMon = Math.ceil((moment(moment(new Date(sYear, sMonthNum - 1, i)).format("YYYY-MM-DD")).date() + firstDay) / 7);
        // this.state.weeks.push(i);
        for (var j = 0; j < max_week; j++) {
            if (nthOfMon == j + 1) {
                arr_weeks[j].push(i);
            }
        }
    }

    // get last week of last month
    var last_mon_week = new Array();
    var lmfirst = moment(moment(new Date(sYear, sMonthNum - 2, 1)).format("YYYY-MM-DD"));

    var llastDate = moment(new Date(sYear, sMonthNum - 1, 0)).format("YYYY-MM-DD");
    var llastDD = Number(moment(new Date(sYear, sMonthNum - 1, 0)).format("DD"));
    var mllast = moment(llastDate);
    var max_mlweek=  Math.ceil(mllast.date() / 7);

    var arr_mlweek = new Array();
    for (var l = 1; l <= llastDD; l++) {
        var nthOfMon = Math.ceil((moment(moment(new Date(sYear, sMonthNum - 2, l)).format("YYYY-MM-DD")).date() + lmfirst.day()) / 7);
        if (nthOfMon == max_mlweek) {
            arr_mlweek.push(l);
        }
        
    }

    // full current month weeks
    // --- first week fully
    for (var m = arr_mlweek.length - 1; m >= 0 ; m--) {
        arr_weeks[0].unshift(arr_mlweek[m]);
    }
    // --- last week fully
    var nextMonWeek = new Array();
    for (var n = 1; n <= 7 - arr_weeks[max_week - 1].length; n++) {
        nextMonWeek.push(n);
        arr_weeks[max_week - 1].push(n);
    }

    return arr_weeks;
}


export function getPureMonWeeksArr(YYYYMM) {
    var dd = new Date();
    var mm = moment(dd).format("YYYY-MM-DD");
    
    var sYear = YYYYMM.split('-')[0];
    var sMonthNum = Number(YYYYMM.split('-')[1]);
    
    var firstDate = moment(new Date(sYear, sMonthNum - 1, 1)).format("YYYY-MM-DD");
    var firstDD = Number(moment(new Date(sYear, sMonthNum - 1, 1)).format("DD"));
    var mfirst = moment(firstDate);
    var firstDay = mfirst.day();
    var lastDate = moment(new Date(sYear, sMonthNum, 0)).format("YYYY-MM-DD");
    var lastDD = Number(moment(new Date(sYear, sMonthNum, 0)).format("DD"));
    var mlast = moment(lastDate);
    var lastDay = mlast.day();

    var max_week = Math.ceil(mlast.date() / 7);
    
    // get all weeks of current month
    var arr_weeks = new Array(max_week);
    for (var k = 0; k < max_week; k++) {
        arr_weeks[k] = new Array();
    }
    for (var i = 1; i <= lastDD; i++) {
        var nthOfMon = Math.ceil((moment(moment(new Date(sYear, sMonthNum - 1, i)).format("YYYY-MM-DD")).date() + firstDay) / 7);
        // this.state.weeks.push(i);
        for (var j = 0; j < max_week; j++) {
            if (nthOfMon == j + 1) {
                arr_weeks[j].push(i);
            }
        }
    }

    return arr_weeks;
}


export function getLastMonWeekArr(YYYYMM) {
    var dd = new Date();
    var mm = moment(dd).format("YYYY-MM-DD");
    
    var sYear = YYYYMM.split('-')[0];
    var sMonthNum = Number(YYYYMM.split('-')[1]);
    
    var firstDate = moment(new Date(sYear, sMonthNum - 1, 1)).format("YYYY-MM-DD");
    var firstDD = Number(moment(new Date(sYear, sMonthNum - 1, 1)).format("DD"));
    var mfirst = moment(firstDate);
    var firstDay = mfirst.day();
    var lastDate = moment(new Date(sYear, sMonthNum, 0)).format("YYYY-MM-DD");
    var lastDD = Number(moment(new Date(sYear, sMonthNum, 0)).format("DD"));
    var mlast = moment(lastDate);
    var lastDay = mlast.day();

    var max_week = Math.ceil(mlast.date() / 7);
    
    // get all weeks of current month
    var arr_weeks = new Array(max_week);
    for (var k = 0; k < max_week; k++) {
        arr_weeks[k] = new Array();
    }
    for (var i = 1; i <= lastDD; i++) {
        var nthOfMon = Math.ceil((moment(moment(new Date(sYear, sMonthNum - 1, i)).format("YYYY-MM-DD")).date() + firstDay) / 7);
        // this.state.weeks.push(i);
        for (var j = 0; j < max_week; j++) {
            if (nthOfMon == j + 1) {
                arr_weeks[j].push(i);
            }
        }
    }

    // get last week of last month
    var last_mon_week = new Array();
    var lmfirst = moment(moment(new Date(sYear, sMonthNum - 2, 1)).format("YYYY-MM-DD"));

    var llastDate = moment(new Date(sYear, sMonthNum - 1, 0)).format("YYYY-MM-DD");
    var llastDD = Number(moment(new Date(sYear, sMonthNum - 1, 0)).format("DD"));
    var mllast = moment(llastDate);
    var max_mlweek=  Math.ceil(mllast.date() / 7);

    var arr_mlweek = new Array();
    for (var l = 1; l <= llastDD; l++) {
        var nthOfMon = Math.ceil((moment(moment(new Date(sYear, sMonthNum - 2, l)).format("YYYY-MM-DD")).date() + lmfirst.day()) / 7);
        if (nthOfMon == max_mlweek) {
            arr_mlweek.push(l);
        }
        
    }

    return arr_mlweek;
}

export function getNextMonWeekArr(YYYYMM) {
    var dd = new Date();
    var mm = moment(dd).format("YYYY-MM-DD");
    
    var sYear = YYYYMM.split('-')[0];
    var sMonthNum = Number(YYYYMM.split('-')[1]);
    
    var firstDate = moment(new Date(sYear, sMonthNum - 1, 1)).format("YYYY-MM-DD");
    var firstDD = Number(moment(new Date(sYear, sMonthNum - 1, 1)).format("DD"));
    var mfirst = moment(firstDate);
    var firstDay = mfirst.day();
    var lastDate = moment(new Date(sYear, sMonthNum, 0)).format("YYYY-MM-DD");
    var lastDD = Number(moment(new Date(sYear, sMonthNum, 0)).format("DD"));
    var mlast = moment(lastDate);
    var lastDay = mlast.day();

    var max_week = Math.ceil(mlast.date() / 7);
    
    // get all weeks of current month
    var arr_weeks = new Array(max_week);
    for (var k = 0; k < max_week; k++) {
        arr_weeks[k] = new Array();
    }
    for (var i = 1; i <= lastDD; i++) {
        var nthOfMon = Math.ceil((moment(moment(new Date(sYear, sMonthNum - 1, i)).format("YYYY-MM-DD")).date() + firstDay) / 7);
        // this.state.weeks.push(i);
        for (var j = 0; j < max_week; j++) {
            if (nthOfMon == j + 1) {
                arr_weeks[j].push(i);
            }
        }
    }

    // get last week of last month
    var last_mon_week = new Array();
    var lmfirst = moment(moment(new Date(sYear, sMonthNum - 2, 1)).format("YYYY-MM-DD"));

    var llastDate = moment(new Date(sYear, sMonthNum - 1, 0)).format("YYYY-MM-DD");
    var llastDD = Number(moment(new Date(sYear, sMonthNum - 1, 0)).format("DD"));
    var mllast = moment(llastDate);
    var max_mlweek=  Math.ceil(mllast.date() / 7);

    var arr_mlweek = new Array();
    for (var l = 1; l <= llastDD; l++) {
        var nthOfMon = Math.ceil((moment(moment(new Date(sYear, sMonthNum - 2, l)).format("YYYY-MM-DD")).date() + lmfirst.day()) / 7);
        if (nthOfMon == max_mlweek) {
            arr_mlweek.push(l);
        }
        
    }

    // full current month weeks
    // --- first week fully
    for (var m = arr_mlweek.length - 1; m >= 0 ; m--) {
        arr_weeks[0].unshift(arr_mlweek[m]);
    }
    // --- last week fully
    var nextMonWeek = new Array();
    for (var n = 1; n <= 7 - arr_weeks[max_week - 1].length; n++) {
        nextMonWeek.push(n);
    }
    
    return nextMonWeek;
}