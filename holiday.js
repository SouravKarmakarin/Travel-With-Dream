let active = document.querySelector(`.menu-child`)
active.addEventListener(`click`, () => {
    active.classList.add(`active`)
})

function date() {
    const objToday = new Date()
    weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
    dayOfWeek = weekday[objToday.getDay()]
    dayOfWeekB = weekday[objToday.getDay()+0]
    months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec')
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear()
    year = curYear.toString().substring(2, 4)
    day = objToday.getDate()
    document.querySelector(`#day`).innerHTML = day;
    document.querySelector(`#dayweek`).innerHTML = dayOfWeek;
    document.querySelector(`#month`).innerHTML = curMonth;
    document.querySelector(`#year`).innerHTML = year;
    document.querySelector(`#day-b`).innerHTML = day+4;
    document.querySelector(`#dayweek-b`).innerHTML = dayOfWeekB;
    document.querySelector(`#month-b`).innerHTML = curMonth;
    document.querySelector(`#year-b`).innerHTML = year;
}
// date();

function exchange(change) {
    change = document.querySelector(`.change`)
    let cityA = document.querySelector(`#city-A`)
    let cityATxt = document.querySelector(`#city-A-txt`)
    let cityB = document.querySelector(`#city-B`)
    let cityBTxt = document.querySelector(`#city-B-txt`)
    change.addEventListener(`click`, () => {
        cityA.innerHTML = `Delhi`
        cityB.innerHTML = `Kolkata`
        cityATxt.innerHTML = `DEL, Delhi Airport India`
        cityBTxt.innerHTML = `Netaji Subhash Chandra Bose International Airport`
    })
}
exchange();

function popUps() {
    let fromPopUp = document.querySelector(`#from-popup`)
    let toPopUp = document.querySelector(`#to-popup`)
    let from = document.querySelector(`#from`)
    let to = document.querySelector(`#to`)
    from.addEventListener(`click`, () => {
        fromPopUp.style.display = `block`
        document.querySelector(`#f1`).style.color=`#0069e1`
        toPopUp.style.display = `none`
        fromPopUp.addEventListener(`mouseover`, () => {
            fromPopUp.style.display = `block`
            document.querySelector(`#f1`).style.color=`#0069e1`
        })
        fromPopUp.addEventListener(`mouseout`, () => {
            fromPopUp.style.display = `none`
            document.querySelector(`#f1`).style.color=`#5b5b5b`
        })
    })
    from.addEventListener(`mouseleave`, () => {
        fromPopUp.style.display = `none`
    })
    to.addEventListener(`click`, () => {
        toPopUp.style.display = `block`
        fromPopUp.style.display = `none`
        document.querySelector(`#t1`).style.color=`#0069e1`
        toPopUp.addEventListener(`mouseover`, () => {
            toPopUp.style.display = `block`
            document.querySelector(`#t1`).style.color=`#0069e1`
        })
        toPopUp.addEventListener(`mouseout`, () => {
            toPopUp.style.display = `none`
            document.querySelector(`#t1`).style.color=`#5b5b5b`
        })
    })
    to.addEventListener(`mouseleave`, () => {
        toPopUp.style.display = `none`
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


function imageSlid() {
    let rightSlidBtn = document.querySelector(`.right-swip-arrow`)
    let leftSlidBtn = document.querySelector(`.left-swip-arrow`)
    rightSlidBtn.addEventListener(`click`, () => {
        document.querySelector(`.snd-slid`).style.display = `block`;
        document.querySelector(`.snd-slid`).style.display = `flex`;
        document.querySelector(`.fst-slid`).style.display = `none`;
        leftSlidBtn.style.display = `block`;
        rightSlidBtn.style.opacity = `.2`;
        leftSlidBtn.style.opacity = `1`;
    })
    leftSlidBtn.addEventListener(`click`, () => {
        document.querySelector(`.snd-slid`).style.display = `none`;
        document.querySelector(`.fst-slid`).style.display = `block`;
        document.querySelector(`.fst-slid`).style.display = `flex`;
        rightSlidBtn.style.opacity = `1`;
        leftSlidBtn.style.opacity = `.2`;
    })

    let slidr = document.querySelector(`.slid-r`)
    let slidl = document.querySelector(`.slid-l`)
    slidr.addEventListener(`click`,()=>{
        document.querySelector(`.img-2`).style.display = `block`;
        document.querySelector(`.img-1`).style.display = `none`;
        document.querySelector(`.img-3`).style.display = `none`;
        document.querySelector(`.img-4`).style.display = `none`;
        slidr.addEventListener(`click`,()=>{
            document.querySelector(`.img-3`).style.display = `block`;
            document.querySelector(`.img-2`).style.display = `none`;
            document.querySelector(`.img-1`).style.display = `none`;
            document.querySelector(`.img-4`).style.display = `none`;
            slidr.addEventListener(`click`,()=>{
                document.querySelector(`.img-4`).style.display = `block`;
                document.querySelector(`.img-3`).style.display = `none`;
                document.querySelector(`.img-2`).style.display = `none`;
                document.querySelector(`.img-1`).style.display = `none`;
            })
            slidl.addEventListener(`click`,()=>{
                document.querySelector(`.img-3`).style.display = `block`;
                document.querySelector(`.img-4`).style.display = `none`;
                document.querySelector(`.img-2`).style.display = `none`;
                document.querySelector(`.img-1`).style.display = `none`;
                slidl.addEventListener(`click`,()=>{
                    document.querySelector(`.img-2`).style.display = `block`;
                    document.querySelector(`.img-3`).style.display = `none`;
                    document.querySelector(`.img-4`).style.display = `none`;
                    document.querySelector(`.img-1`).style.display = `none`;
                    slidl.addEventListener(`click`,()=>{
                        document.querySelector(`.img-1`).style.display = `block`;
                        document.querySelector(`.img-2`).style.display = `none`;
                        document.querySelector(`.img-3`).style.display = `none`;
                        document.querySelector(`.img-4`).style.display = `none`;
                    })
                })
            })
        })
    })
    slidl.addEventListener(`click`,()=>{
        document.querySelector(`.img-3`).style.display = `block`;
        document.querySelector(`.img-4`).style.display = `none`;
        document.querySelector(`.img-2`).style.display = `none`;
        document.querySelector(`.img-1`).style.display = `none`;
        slidl.addEventListener(`click`,()=>{
            document.querySelector(`.img-2`).style.display = `block`;
            document.querySelector(`.img-1`).style.display = `none`;
            document.querySelector(`.img-3`).style.display = `none`;
            document.querySelector(`.img-4`).style.display = `none`;
            slidl.addEventListener(`click`,()=>{
                document.querySelector(`.img-1`).style.display = `block`;
                document.querySelector(`.img-2`).style.display = `none`;
                document.querySelector(`.img-3`).style.display = `none`;
                document.querySelector(`.img-4`).style.display = `none`;
            })
            slidr.addEventListener(`click`,()=>{
                document.querySelector(`.img-2`).style.display = `block`;
                document.querySelector(`.img-1`).style.display = `none`;
                document.querySelector(`.img-3`).style.display = `none`;
                document.querySelector(`.img-4`).style.display = `none`;
                slidr.addEventListener(`click`,()=>{
                    document.querySelector(`.img-3`).style.display = `block`;
                    document.querySelector(`.img-2`).style.display = `none`;
                    document.querySelector(`.img-1`).style.display = `none`;
                    document.querySelector(`.img-4`).style.display = `none`;
                    slidr.addEventListener(`click`,()=>{
                        document.querySelector(`.img-4`).style.display = `block`;
                        document.querySelector(`.img-3`).style.display = `none`;
                        document.querySelector(`.img-2`).style.display = `none`;
                        document.querySelector(`.img-1`).style.display = `none`;
                    })
                })
            })
        })
    })
}
imageSlid();

function userPop() {
    let userPop = document.querySelector(`.user-child`)
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

}
userPop();