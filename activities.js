let active = document.querySelector(`.menu-child`)
active.addEventListener(`click`, () => {
    active.classList.add(`active`)
})

function popUps() {
    let fromPopUp = document.querySelector(`#from-popup`)
    let from = document.querySelector(`#from`)
    from.addEventListener(`click`, () => {
        fromPopUp.style.display = `block`
        document.querySelector(`#f1`).style.color=`#0069e1`
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

    let langPopUp = document.querySelector(`#lang-pop-up`)
    let langBTN = document.querySelector(`.language`)
    langBTN.addEventListener(`click`, () => {
        langPopUp.style.display = `block`
        langPopUp.addEventListener(`mouseover`, () => {
            langPopUp.style.display = `block`
        })
        langPopUp.addEventListener(`mouseout`, () => {
            langPopUp.style.display = `none`
        })
    })
    // let classPop = document.querySelector(`#class-popUp`)
    // let classbt = document.querySelector(`#classFlight`)
    // classbt.addEventListener(`click`, () => {
    //     classPop.style.display = `block`
    //     classPop.addEventListener(`mouseover`, () => {
    //         classPop.style.display = `block`
    //     })
    //     classPop.addEventListener(`mouseout`, () => {
    //         classPop.style.display = `none`
    //     })
    // })
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