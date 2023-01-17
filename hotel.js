function navBar() {
    const nav = document.querySelector(`#nav`)
    const option = document.querySelector(`.option`)
    const a = new IntersectionObserver((e) => {
        let ent = e[0];
        if (ent.isIntersecting == false) {
            nav.classList.add(`stick`)
            document.querySelector(`.options`).style.display = `none`
            document.querySelector(`.menu-box`).style.display = `flex`
            document.querySelector(`.top-container`).style.height = `360px`
            document.querySelector(`.menu-box`).classList.add(`menu-box-stick`)
        } else {
            nav.classList.remove(`stick`)
            document.querySelector(`.options`).style.display = `block`
            document.querySelector(`.options`).style.display = `flex`
            document.querySelector(`.menu-box`).style.display = `none`
            document.querySelector(`.top-container`).style.height = `460px`
        }

    }, {
        root: null,
        rootMargin: "-60px",
        threshold: 0,
    });
    a.observe(option)
}
navBar();
function date() {
    const objToday = new Date()
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
    dayOfWeek = weekday[objToday.getDay()]
    dayOfWeekB = weekday[objToday.getDay()+3]
    months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec')
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear()
    year = curYear.toString().substring(2, 4)
    day = objToday.getDate()
    document.querySelector(`#day`).innerHTML = day;
    document.querySelector(`#dayweek`).innerHTML = dayOfWeek;
    document.querySelector(`#month`).innerHTML = curMonth;
    document.querySelector(`#year`).innerHTML = year;
    document.querySelector(`#day-b`).innerHTML = day+3;
    document.querySelector(`#dayweek-b`).innerHTML = dayOfWeekB;
    document.querySelector(`#month-b`).innerHTML = curMonth;
    document.querySelector(`#year-b`).innerHTML = year;
}
date();
function userPop() {
    let userPop = document.querySelector(`#userChild`)
    userPop.addEventListener(`mouseover`, () => {
        document.querySelector(`.user-pop-up`).style.display = `block`;
        document.querySelector(`#user-downArrow`).style.display = `none`;
        document.querySelector(`#user-upArrow`).style.display = `block`;
        let usPop = document.querySelector(`.user-pop-inner`);
        usPop.addEventListener(`mouseover`, () => {
            document.querySelector(`.user-pop-up`).style.display = `block`;
        })
        usPop.addEventListener(`mouseleave`, () => {
            document.querySelector(`.user-pop-up`).style.display = `none`;
            document.querySelector(`#user-downArrow`).style.display = `block`;
            document.querySelector(`#user-upArrow`).style.display = `none`;
        })
    })
    let langPopUp = document.querySelector(`#lang-pop-up`)
    let langBTN = document.querySelector(`.language`)
    langBTN.addEventListener(`click`,()=>{
        langPopUp.style.display=`block`
        langPopUp.addEventListener(`mouseover`,()=>{
            langPopUp.style.display=`block`
        })
        langPopUp.addEventListener(`mouseout`,()=>{
            langPopUp.style.display=`none`
        })
    })

}
function popUps() {
    let fromPopUp = document.querySelector(`#from-popup`)
    let from = document.querySelector(`#from`)
    from.addEventListener(`click`, () => {
        fromPopUp.style.display = `block`
        document.querySelector(`.l2`).style.color=`#0069e1`
        fromPopUp.addEventListener(`mouseover`, () => {
            fromPopUp.style.display = `block`
            document.querySelector(`.l2`).style.color=`#0069e1`
        })
        fromPopUp.addEventListener(`mouseout`, () => {
            fromPopUp.style.display = `none`
            document.querySelector(`.l2`).style.color=`#5b5b5b`
        })
    })
    from.addEventListener(`mouseleave`, () => {
        fromPopUp.style.display = `none`
    })
    let datePopUp = document.querySelector(`#date-popUp`)
    let date = document.querySelector(`.time`)
    let date1 = document.querySelector(`.cl`)
    let date2 = document.querySelector(`.cl2`)
    date.addEventListener(`click`,()=>{
        datePopUp.style.display=`block`;
        datePopUp2.style.display=`none`;
        date2.addEventListener(`mouseover`,()=>{
            datePopUp.style.display=`block`;
        })
        date.addEventListener(`mouseout`,()=>{
            datePopUp.style.display=`none`;
        })
        date1.addEventListener(`click`,()=>{
            datePopUp.style.display=`block`;
        })
        datePopUp.addEventListener(`mouseover`,()=>{
            datePopUp.style.display=`block`;
        })
    })
    let datePopUp2 = document.querySelector(`#date-popUp2`)
    let date22 = document.querySelector(`#time2`)
    let date3 = document.querySelector(`.cl3`)
    let date4 = document.querySelector(`.cl4`)
    date22.addEventListener(`click`,()=>{
        datePopUp2.style.display=`block`;
        datePopUp.style.display=`none`;
        date3.addEventListener(`click`,()=>{
            datePopUp2.style.display=`block`;
        })
        date4.addEventListener(`mouseover`,()=>{
            datePopUp2.style.display=`block`;
        })
        datePopUp2.addEventListener(`mouseover`,()=>{
            datePopUp2.style.display=`block`;
        })
        date22.addEventListener(`mouseout`,()=>{
            datePopUp2.style.display=`none`;
        })
    })
    let langPopUp = document.querySelector(`#lang-pop-up`)
    let langBTN = document.querySelector(`.language`)
    langBTN.addEventListener(`click`,()=>{
        langPopUp.style.display=`block`
        langPopUp.addEventListener(`mouseover`,()=>{
            langPopUp.style.display=`block`
        })
        langPopUp.addEventListener(`mouseout`,()=>{
            langPopUp.style.display=`none`
        })
    })
}
popUps();
userPop();