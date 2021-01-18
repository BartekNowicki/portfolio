import './sass/index.scss';
import gsap from 'gsap';

interface selectorInterface {
    LEFT_ARROW: string;
    RIGHT_ARROW: string;
    SCREEN: string;
    DOT1: string;
    DOT2: string;
    DOT3: string;
    DOT4: string;
    DOT5: string;
    DOT6: string;
    DOT7: string;
    DATELINK1: string;
    DATELINK2: string;
    DATELINK3: string;
    DATELINK4: string;
    DATELINK5: string;
    DATELINK6: string;
    DATELINK7: string;
    DATE_ITEM: string;
    DATE_BGITEM: string,
    INFO_ITEM: string;
    FIRST_NAME: string;
    LAST_NAME: string;
    HERO_SUBTITLE: string; 
    HERO_PIC: string;
    M_TEXT: string;
    SCREEN_BLIND: string;
    BOX: string;
}

interface nodesInterface {
    leftArrow: HTMLElement | null;
    rightArrow: HTMLElement | null;
    sliderScreen: HTMLElement | null;
    dot1: HTMLElement | null;
    dot2: HTMLElement | null; 
    dot3: HTMLElement | null; 
    dot4: HTMLElement | null; 
    dot5: HTMLElement | null; 
    dot6: HTMLElement | null;
    dot7: HTMLElement | null;
    dateLink1: HTMLElement | null;
    dateLink2: HTMLElement | null;
    dateLink3: HTMLElement | null;
    dateLink4: HTMLElement | null;
    dateLink5: HTMLElement | null;
    dateLink6: HTMLElement | null;
    dateLink7: HTMLElement | null;
    dateItem: HTMLElement | null;
    infoItem: HTMLElement | null;
    dateBgItem: HTMLElement | null;
    screenBlind: HTMLElement | null;
    box: HTMLElement | null;
}

const selectors: selectorInterface = {
    LEFT_ARROW: '[data-name="leftArrow"]',
    RIGHT_ARROW: '[data-name="rightArrow"]',
    SCREEN: '[data-name="screen"]',
    DOT1: '[data-name="dot1"]',
    DOT2: '[data-name="dot2"]',
    DOT3: '[data-name="dot3"]',
    DOT4: '[data-name="dot4"]',
    DOT5: '[data-name="dot5"]',
    DOT6: '[data-name="dot6"]',
    DOT7: '[data-name="dot7"]', 
    DATELINK1: '[data-name="dateLink1"]',
    DATELINK2: '[data-name="dateLink2"]',
    DATELINK3: '[data-name="dateLink3"]',
    DATELINK4: '[data-name="dateLink4"]',
    DATELINK5: '[data-name="dateLink5"]',
    DATELINK6: '[data-name="dateLink6"]',
    DATELINK7: '[data-name="dateLink7"]',
    DATE_ITEM: '[data-name="dateItem"]',
    INFO_ITEM: '[data-name="infoItem"]',
    DATE_BGITEM: '[data-name="dateBg"]',
    FIRST_NAME: '[data-name="fist-name"]',
    LAST_NAME: '[data-name="last-name"]',
    HERO_SUBTITLE: '[data-name="hero-subtitle"]',
    HERO_PIC: '[data-name="hero-pic"]',
    M_TEXT: '[data-name="m-text"]',
    SCREEN_BLIND: '[data-name="screen-blind"]',
    BOX: '[data-name="box"]',
}

let DOM_NODES: nodesInterface = {
    leftArrow: null,
    rightArrow: null,
    sliderScreen: null,
    dot1: null,
    dot2: null, 
    dot3: null, 
    dot4: null, 
    dot5: null, 
    dot6: null,
    dot7: null,
    dateLink1: null,
    dateLink2: null,
    dateLink3: null,
    dateLink4: null,
    dateLink5: null,
    dateLink6: null,
    dateLink7: null,
    dateItem: null,
    infoItem: null,
    dateBgItem: null,
    screenBlind: null,
    box: null,
};

const imageUrls: Array<string> = [
    'images/slider-1.jpg',
    'images/slider-2.jpg',
    'images/slider-3.jpg',
    'images/slider-4.jpg',
    'images/slider-5.jpg',
    'images/slider-6.jpg',
    'images/slider-7.jpg',
];

const imageUrls_sm: Array<string> = [
    'images/slider-1_sm.jpg',
    'images/slider-2_sm.jpg',
    'images/slider-3_sm.jpg',
    'images/slider-4_sm.jpg',
    'images/slider-5_sm.jpg',
    'images/slider-6_sm.jpg',
    'images/slider-7_sm.jpg',
];

const dates: Array<string> = ['1917','1940','1963','1971','1974','1997','2001'];

const info: Array<string> = [
    'Katharine Meyer was born in New York City, the fourth of five children. Her wealthy father purchased The Washington Post in 1933.', 
    'Firma Huncwot ogłoszona najlepszym pracodawcą roku.',
    'Pozdrowienia dla całej ekipy Huncwota.',
    'Huncwot robi najlepsze kreatywne strony w całym internecie (poza dark webem).',
    'Całemu zespołowi życzy sie miłego i słonecznego dnia.',
    'A po pracy zasłużonego odpoczynku w gronie rodziny i przyjaciół.',
    'To już ostatni slajd, jak go przeczytasz, wróć do pracy nad super animacją :)'
];

let currentSlide: number = 1;



const grabDomNodes = (selectors: selectorInterface) => {
    DOM_NODES.leftArrow = document.querySelector(selectors.LEFT_ARROW);
    DOM_NODES.rightArrow = document.querySelector(selectors.RIGHT_ARROW);
    DOM_NODES.sliderScreen = document.querySelector(selectors.SCREEN);
    DOM_NODES.dot1 = document.querySelector(selectors.DOT1);
    DOM_NODES.dot2 = document.querySelector(selectors.DOT2);
    DOM_NODES.dot3 = document.querySelector(selectors.DOT3);
    DOM_NODES.dot4 = document.querySelector(selectors.DOT4);
    DOM_NODES.dot5 = document.querySelector(selectors.DOT5);
    DOM_NODES.dot6 = document.querySelector(selectors.DOT6);
    DOM_NODES.dot7 = document.querySelector(selectors.DOT7);
    DOM_NODES.dateLink1 = document.querySelector(selectors.DATELINK1);
    DOM_NODES.dateLink2 = document.querySelector(selectors.DATELINK2);
    DOM_NODES.dateLink3 = document.querySelector(selectors.DATELINK3);
    DOM_NODES.dateLink4 = document.querySelector(selectors.DATELINK4);
    DOM_NODES.dateLink5 = document.querySelector(selectors.DATELINK5);
    DOM_NODES.dateLink6 = document.querySelector(selectors.DATELINK6);
    DOM_NODES.dateLink7 = document.querySelector(selectors.DATELINK7);
    DOM_NODES.dateItem = document.querySelector(selectors.DATE_ITEM);
    DOM_NODES.infoItem = document.querySelector(selectors.INFO_ITEM);
    DOM_NODES.dateBgItem = document.querySelector(selectors.DATE_BGITEM);
    DOM_NODES.screenBlind = document.querySelector(selectors.SCREEN_BLIND);
    DOM_NODES.box = document.querySelector(selectors.BOX);
    
    if (!DOM_NODES.leftArrow 
        || !DOM_NODES.rightArrow
        || !DOM_NODES.sliderScreen
        || !DOM_NODES.dot1
        || !DOM_NODES.dot2
        || !DOM_NODES.dot3
        || !DOM_NODES.dot4
        || !DOM_NODES.dot5
        || !DOM_NODES.dot6
        || !DOM_NODES.dot7
        || !DOM_NODES.dateItem
        || !DOM_NODES.infoItem
        || !DOM_NODES.dateBgItem
        || !DOM_NODES.screenBlind
        || !DOM_NODES.box) {
    console.warn('dom elements missing, animations incomplete');
   }
}



const getTimeline = (): gsap.core.Timeline => gsap.timeline({ paused: false, ease: "none" });



const activeNextButton = (isActive: Boolean) => {
    const { rightArrow } = DOM_NODES;
    isActive 
    ? rightArrow.classList.add('active')
    : rightArrow.classList.remove('active');
}



const activePrevButton = (isActive: Boolean) => {
    const { leftArrow } = DOM_NODES;
    isActive
    ? leftArrow.classList.add('active')
    : leftArrow.classList.remove('active');
}



const showSlide = (sliderScreen: HTMLElement, counter: number, dots: Array<HTMLElement>) => {

    let useimageUrls: Array<string>;

    const { leftArrow, rightArrow } = DOM_NODES;

    window.innerWidth >= 1024 ? useimageUrls = [...imageUrls] : useimageUrls = [...imageUrls_sm];
        
    if(!sliderScreen) return

    if (currentSlide < 1) {
        currentSlide = 1;
    } else if (currentSlide > useimageUrls.length) {
        currentSlide = useimageUrls.length;
    } 

    //EDGE CASE: CLICKED ON A DISABLED ARROW BUTTON:
    if (currentSlide < 2 && !leftArrow.classList.contains('active')) return
    if (currentSlide > imageUrls.length - 1 && !rightArrow.classList.contains('active')) return

    
    if (currentSlide === 1) {
        activeNextButton(true);
        activePrevButton(false);
    } else if (currentSlide === useimageUrls.length) {
        activeNextButton(false);
        activePrevButton(true);
    } else {
        activeNextButton(true);
        activePrevButton(true);
    }
    
    const { dateItem, infoItem, dateBgItem, screenBlind } = DOM_NODES;
    const screenWidth = screenBlind.offsetWidth;
    const slideTransitionTimeline = getTimeline();
    
    slideTransitionTimeline.set(screenBlind, {x: -screenWidth});
    
    slideTransitionTimeline.to(screenBlind, {x: -screenWidth, duration: 0.1, onComplete: () => {    
        sliderScreen.style.backgroundImage = `url('${useimageUrls[currentSlide - 1]}')`;
        dateItem.innerText = `${dates[currentSlide - 1]}`;
        infoItem.innerText = `${info[currentSlide - 1]}`;
        dateBgItem.style.top = `${9 + 19 * (currentSlide - 1)}px`;
        dots.forEach(dot => dot.classList.remove('dotActive'));
        dots[currentSlide - 1].classList.add('dotActive');
    }});

    slideTransitionTimeline.to(screenBlind, {x: 10, duration: 1, onComplete: () => {
        setTimeout(() => slideTransitionTimeline.kill(), 0);
    }});
   
}



const initiateSlider = (nodes: nodesInterface, imageUrls: Array<string>, imageUrls_sm: Array<string>) => {
    
    const { leftArrow, rightArrow, sliderScreen } = nodes;
    const { dot1, dot2, dot3, dot4, dot5, dot6, dot7 } = nodes;
    const { dateLink1, dateLink2, dateLink3, dateLink4, dateLink5, dateLink6, dateLink7 } = nodes;
    
    const dots = [dot1, dot2, dot3, dot4, dot5, dot6, dot7];
    const datelinks = [dateLink1, dateLink2, dateLink3, dateLink4, dateLink5, dateLink6, dateLink7];
    
    dots.forEach((dot, index) => {
        dot.style.left = `${index * 24}px`;
        dot.addEventListener('click', () => {
            currentSlide = index + 1;
            showSlide(sliderScreen, currentSlide, dots);            
        });
    });

    datelinks.forEach((datelink, index) => {
        datelink.style.top = `${index * 19}px`;
        
        datelink.addEventListener('click', () => {
            currentSlide = index + 1;
            showSlide(sliderScreen, currentSlide, dots);            
        });
    });

    activeNextButton(true);
    activePrevButton(false);

    rightArrow.addEventListener('click', () => showSlide(sliderScreen, currentSlide++, dots));
    leftArrow.addEventListener('click', () => showSlide(sliderScreen, currentSlide--, dots));
   
    sliderScreen.style.backgroundImage = `url('${imageUrls[0]}')`;
    DOM_NODES.dateItem.innerText = `${dates[0]}`;
    DOM_NODES.infoItem.innerText = `${info[0]}`;

    showSlide(sliderScreen, 1, dots);
}



const animateHero = () => {
        
    const heroTimeline = getTimeline();

    const { FIRST_NAME, LAST_NAME, HERO_SUBTITLE, HERO_PIC, M_TEXT } = selectors;
        
    heroTimeline.set(FIRST_NAME, {x: -50, y: -50, opacity: 0, rotation: 30});
    heroTimeline.to(FIRST_NAME, {x: -10, y: 0, opacity: 1, duration: .3, rotation: 0, stagger: 0.1}).delay(0);

    heroTimeline.set(LAST_NAME, {x: -50, y: 100, opacity: 0, rotation: 30});
    heroTimeline.to(LAST_NAME, {x: -10, y: 0, opacity: 1, duration: 1, rotation: 0, stagger: 0.1}).delay(.5);

    heroTimeline.set(HERO_SUBTITLE, {y: 200, opacity: 0});
    heroTimeline.to(HERO_SUBTITLE, {y: 0, opacity: 1, duration: 1}).delay(0);

    heroTimeline.set(HERO_PIC, {x: 30, y: 30, opacity: 0});
    heroTimeline.to(HERO_PIC, {x: 0, y: 0, opacity: 1, duration: 1}).delay(0);

    heroTimeline.set(M_TEXT, {x: 30, y: 300, opacity: 0});
    heroTimeline.to(M_TEXT, {x: 0, y: 0, opacity: 1, duration: 3, onComplete: () => {
        setTimeout(() => heroTimeline.kill(), 2000);
    }}).delay(0);
       
    heroTimeline.play();

}



const domLoaded = (e: Event) => {
    
    window.removeEventListener('load', domLoaded);
    grabDomNodes(selectors);
    initiateSlider(DOM_NODES, imageUrls, imageUrls_sm);
    animateHero();
}



window.addEventListener('load', domLoaded);








