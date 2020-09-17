const special2TopBorder = CSSRulePlugin.getRule(".special-2__content__space:before");
const special2BottomBorder = CSSRulePlugin.getRule(".special-2__content__space:after");
const burgersTopBorder = CSSRulePlugin.getRule(".burgers__space:before");
const burgersBottomBorder = CSSRulePlugin.getRule(".burgers__space:after");
const discountTopBorder = CSSRulePlugin.getRule(".discount-2__space:before");
const discountBottomBorder = CSSRulePlugin.getRule(".discount-2__space:after");

const menuListsHeading = document.querySelectorAll('.menu__list-heading');

gsap.fromTo(".special__heading", {
    y:50,
    opacity:0
},{
    duration:0.6,
    scrollTrigger: ".special__heading", 
    y:0,
    opacity:1
});
gsap.fromTo(".special__text", {
    y:50,
    opacity:0
},{
    duration:0.6,
    scrollTrigger: ".special__text", 
    y:0,
    opacity:1
});

gsap.fromTo(".special__heading-2", {
    y:50,
    opacity:0
},{
    duration:0.6,
    scrollTrigger: ".special__heading-2", 
    y:0,
    opacity:1
});
gsap.fromTo(".special-2__content-1__text", {
    y:50,
    opacity:0
},{
    duration:0.6,
    scrollTrigger: ".special-2__content-1__text", 
    y:0,
    opacity:1
});
gsap.to( [ special2TopBorder, special2BottomBorder ], {
    scrollTrigger: {
        trigger:'.special-2__content__space',
        start:"top center"
    },
    duration:0.4,
    width:'100%',
});

gsap.fromTo( '.menu__heading', {
    opacity:0,
    y:55
},{
    scrollTrigger: '.menu__heading',
    duration:0.5,
    opacity:1,
    y:0
});
gsap.fromTo( '.menu__subheading', {
    opacity:0,
    y:55
},{
    scrollTrigger: '.menu__subheading',
    duration:0.4,
    opacity:1,
    y:0
});
menuListsHeading.forEach(heading =>{
    
    gsap.fromTo( heading, {
        opacity:0,
        y:55
    },{
        scrollTrigger: heading,
        duration:0.5,
        opacity:1,
        y:0,
    });

    gsap.fromTo( heading.nextElementSibling.children, {
        opacity:0,
        y:55
    },{
        scrollTrigger: heading,
        duration:0.5,
        opacity:1,
        y:0,
        stagger:0.2,
        delay:0.2
    });
});

gsap.fromTo( '.discount__heading', {
    opacity:0,
    y:55
},{
    scrollTrigger: '.discount__heading',
    duration:0.6,
    opacity:1,
    y:0
});
gsap.fromTo( '.discount__text', {
    opacity:0,
    y:65
},{
    scrollTrigger: '.discount__text',
    duration:0.6,
    opacity:1,
    y:0,
    delay:0.1
});

gsap.fromTo( '.burgers__text', {
    opacity:0,
    y:65
},{
    scrollTrigger: '.burgers__text',
    duration:0.6,
    opacity:1,
    y:0,
    delay:0.1
});
gsap.fromTo( '.burgers__heading', {
    opacity:0,
    y:65
},{
    scrollTrigger: '.burgers__heading',
    duration:0.6,
    opacity:1,
    y:0,
    delay:0.1
});
gsap.fromTo( [burgersTopBorder, burgersBottomBorder], {
    width:0
},{
    scrollTrigger: {
        trigger: '.burgers__space',
        start: 'top center'
    },
    duration:0.6,
    width:"100%",
    delay:0.2
});
gsap.fromTo( '.burgers__subheading', {
    opacity:0,
    y:55
},{
    scrollTrigger: '.burgers__subheading',
    duration:0.4,
    opacity:1,
    y:0
});

gsap.fromTo( '.delivery__text-top', {
    opacity:0,
    y:55
},{
    scrollTrigger: '.delivery__text-top',
    duration:0.4,
    opacity:1,
    y:0
});
gsap.fromTo( ['.delivery__heading, .delivery__heading-2'], {
    opacity:0,
    y:55
},{
    scrollTrigger: '.delivery__heading',
    duration:0.4,
    opacity:1,
    y:0,
    stagger:0.2
});
gsap.fromTo( '.delivery__text-bottom', {
    opacity:0,
    y:55
},{
    scrollTrigger: '.delivery__text-bottom',
    duration:0.4,
    opacity:1,
    y:0,
});

gsap.fromTo( '.discount-2__heading', {
    opacity:0,
    y:34
},{
    scrollTrigger: '.discount-2__heading',
    duration:0.4,
    opacity:1,
    y:0,
});
gsap.fromTo( [discountTopBorder,discountBottomBorder], {
    width:0
},{
    scrollTrigger: {
        trigger: '.discount-2__space',
        start: "top center"
    },
    duration:0.4,
    width:'100%',
    delay:0.2
});
gsap.fromTo( '.discount-2__text', {
    opacity:0,
    y:55
},{
    scrollTrigger: '.discount-2__text',
    duration:0.4,
    opacity:1,
    y:0,
});

gsap.fromTo( '.page-footer__heading', {
    opacity:0,
    x:-30
},{
    scrollTrigger: '.page-footer__heading',
    duration:0.4,
    opacity:1,
    x:0,
});
gsap.fromTo( '.page-footer__socila-media a', {
    x:-30,
    y:30,
    scale:0
},{
    scrollTrigger: '.page-footer__socila-media',
    duration:0.4,
    x:0,
    y:0,
    scale:1,
    stagger:0.1
});
gsap.fromTo( '.page-footer__contact li', {
    opacity:0,
    x:-30,
    y:30,
},{
    scrollTrigger: '.page-footer__contact',
    duration:0.4,
    x:0,
    y:0,
    opacity:1,
    stagger:0.1
});
gsap.fromTo( '.page-footer__copyright', {
    opacity:0,
    y:30,
},{
    scrollTrigger: '.page-footer__copyright',
    duration:0.4,
    y:0,
    opacity:1,
    delay:0.3
});