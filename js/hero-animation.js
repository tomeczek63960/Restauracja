gsap.registerPlugin(CSSRulePlugin);

const navTopBorder = CSSRulePlugin.getRule(".page-nav__navbar:before");
const navBottomBorder = CSSRulePlugin.getRule(".page-nav__navbar:after");

const heroTopBorder = CSSRulePlugin.getRule('.page-hero__space-border:before');
const heroBottomBorder = CSSRulePlugin.getRule('.page-hero__space-border:after');
const tl = gsap.timeline();

tl.fromTo(navTopBorder, {
    width:0
},{
    duration:0.5,
    delay:1,
    width:'100%'
})
.fromTo(navBottomBorder,{
    width:0
},{
    duration:0.5,
    width:"100%"
},'-=.5')
.fromTo('.page-nav__navbar li',{
    opacity:0,
    x:-20
},{
    duration:.4,
    opacity:1,
    x:0,
    stagger:.1
})
.fromTo('.page-logo--top',{
    opacity:0,
    y:-30
},{
    duration:0.6,
    opacity:1,
    y:0
})
.fromTo('.page-logo--bottom',{
    opacity:0,
    y:-30
},{
    duration:0.6,
    opacity:1,
    y:0
})
.fromTo(heroTopBorder,{
    width:0
},{
    duration:0.15,
    width:'100%'
})
.fromTo(heroBottomBorder,{
    width:0
},{
    duration:0.15,
    width:'100%'
},'-=.1')
.fromTo('.page-hero__content-2 p ',{
    opacity:0,
    y:40
},{
    duration:0.4,
    opacity:1,
    y:0
});