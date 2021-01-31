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
    projectLink1: string;
    projectLink2: string;
    projectLink3: string;
    projectLink4: string;
    projectLink5: string;
    projectLink6: string;
    projectLink7: string;
    PROJECT_ITEM: string;
    PROJECT_BGITEM: string,
    INFO_ITEM: string;
    FIRST_NAME: string;
    LAST_NAME: string;
    HERO_SUBTITLE: string; 
    HERO_PIC: string;
    M_TEXT: string;
    SCREEN_BLIND: string;
    DESCRIPTION: string;
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
    dots: HTMLElement[] | null;
    projectLink1: HTMLElement | null;
    projectLink2: HTMLElement | null;
    projectLink3: HTMLElement | null;
    projectLink4: HTMLElement | null;
    projectLink5: HTMLElement | null;
    projectLink6: HTMLElement | null;
    projectLink7: HTMLElement | null;
    projectName: HTMLElement | null;
    projectInfo: HTMLElement | null;
    projectBgItem: HTMLElement | null;
    screenBlind: HTMLElement | null;
    description: HTMLElement | null;
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
    projectLink1: '[data-name="projectLink1"]',
    projectLink2: '[data-name="projectLink2"]',
    projectLink3: '[data-name="projectLink3"]',
    projectLink4: '[data-name="projectLink4"]',
    projectLink5: '[data-name="projectLink5"]',
    projectLink6: '[data-name="projectLink6"]',
    projectLink7: '[data-name="projectLink7"]',
    PROJECT_ITEM: '[data-name="projectName"]',
    INFO_ITEM: '[data-name="projectInfo"]',
    PROJECT_BGITEM: '[data-name="projectBg"]',
    FIRST_NAME: '[data-name="fist-name"]',
    LAST_NAME: '[data-name="last-name"]',
    HERO_SUBTITLE: '[data-name="hero-subtitle"]',
    HERO_PIC: '[data-name="hero-pic"]',
    M_TEXT: '[data-name="main-text"]',
    SCREEN_BLIND: '[data-name="screen-blind"]',
    DESCRIPTION: '[data-name="description"]',
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
    dots: null,
    projectLink1: null,
    projectLink2: null,
    projectLink3: null,
    projectLink4: null,
    projectLink5: null,
    projectLink6: null,
    projectLink7: null,
    projectName: null,
    projectInfo: null,
    projectBgItem: null,
    screenBlind: null,
    description: null,
};

const imageUrls_lg: Array<string> = [
    'images/1_lg.jpg',
    'images/2_lg.jpg',
    'images/3_lg.jpg',
    'images/4_lg.jpg',
    'images/5_lg.jpg',
    'images/6_lg.jpg',
    'images/7_lg.jpg'
];

const imageUrls_md: Array<string> = [
    'images/1_md.jpg',
    'images/2_md.jpg',
    'images/3_md.jpg',
    'images/4_md.jpg',
    'images/5_md.jpg',
    'images/6_md.jpg',
    'images/7_md.jpg'
];

const imageUrls_sm: Array<string> = [
    'images/1_sm.jpg',
    'images/2_sm.jpg',
    'images/3_sm.jpg',
    'images/4_sm.jpg',
    'images/5_sm.jpg',
    'images/6_sm.jpg',
    'images/7_sm.jpg'
];

const projects: Array<string> = ['BOMBS','KIDCHESS','LANDING PAGE','SHERIFF','INTRO','HANGMAN','KWADRATY'];

const info: Array<string> = [
    'Gra polegająca na zbieraniu punktów za każdy znikający blok. Spadające z góry czwórkami bloki można w locie przesuwać lub obracać. Znikają po ułożeniu w linii minimum trzech bloków tego samego koloru. Bloki, które zawierają bombę – wybuchają. Technologie: html, webpack 5, scss, javascript, svg, canvas, gsap 3.', 

    'Gra wspomagająca naukę podstawowych ruchów szachowych. Bierki zachowują się „prawie” tak, jak prawdziwe bierki szachowe – z tym, że strzelają, ale za to zgodnie z regułami królewskiej gry. Technologie: html, webpack 5, scss, javascript, svg, gsap 3.',

    'W pełni funkcjonalna komercyjna strona www. Technologie: html, css grid, svg, javascript.',

    'Gra wspomagająca naukę nazw owoców, warzyw i kolorów w języku angielskim. Poruszając szeryfem w prawo i w lewo należy zestrzelić ikonkę, która pasuje do wyświetlonego w panelu hasła. Technologie: Create React App, hooki, typescript, scss, svg, gsap 3.',

    'Moja strona – wizytówka przedstawiająca szacunkowe poziomy umiejętności front-endowych oraz back-endowych. Zawiera animacje css, canvas, gsap, oraz łączenie z zewnętrznym API. Technologie: Create React App, typescript, scss, svg, canvas, gsap 3.',

    'Prosta mini-gra dla dzieci inspirowana „wisielcem”. Odgadnij zwierzę klikając w odpowiednie literki. Technologie: html, Webpack4, css flexbox, scss, javascript.',

    'Kolejna prosta mini-gra dla dzieci. Zmierz się z komputerem w rozgrywce, która polega na wstawianiu kwadratów na planszę tak, aby łączyły się w trójki, które znikają. Technologie: html, webpack4, scss, javascript.'
];

const closureIIFE = (() => {
    console.log('WORKING CLOSURE MAGIC');
    let currentSlide: number = 1;
    const currentSlideGetter = () => currentSlide;
    const currentSlideSetter = (value: number) => currentSlide = value;

    return {
        getCurrentSlide: currentSlideGetter,
        setCurrentSlide: currentSlideSetter,
        speak: () => console.log('CLOSURE UP AND RUNNING'),
    }
})();


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
    DOM_NODES.dots = [
        DOM_NODES.dot1,
        DOM_NODES.dot2,
        DOM_NODES.dot3,
        DOM_NODES.dot4,
        DOM_NODES.dot5,
        DOM_NODES.dot6,
        DOM_NODES.dot7,
    ];
    DOM_NODES.projectLink1 = document.querySelector(selectors.projectLink1);
    DOM_NODES.projectLink2 = document.querySelector(selectors.projectLink2);
    DOM_NODES.projectLink3 = document.querySelector(selectors.projectLink3);
    DOM_NODES.projectLink4 = document.querySelector(selectors.projectLink4);
    DOM_NODES.projectLink5 = document.querySelector(selectors.projectLink5);
    DOM_NODES.projectLink6 = document.querySelector(selectors.projectLink6);
    DOM_NODES.projectLink7 = document.querySelector(selectors.projectLink7);
    DOM_NODES.projectName = document.querySelector(selectors.PROJECT_ITEM);
    DOM_NODES.projectInfo = document.querySelector(selectors.INFO_ITEM);
    DOM_NODES.projectBgItem = document.querySelector(selectors.PROJECT_BGITEM);
    DOM_NODES.screenBlind = document.querySelector(selectors.SCREEN_BLIND);
    DOM_NODES.description = document.querySelector(selectors.DESCRIPTION);
    
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
        || !DOM_NODES.projectName
        || !DOM_NODES.projectInfo
        || !DOM_NODES.projectBgItem
        || !DOM_NODES.screenBlind
        || !DOM_NODES.description) {
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

const showSlide = (sliderScreen: HTMLElement) => {

    const { getCurrentSlide, setCurrentSlide } = closureIIFE;
    const { leftArrow, rightArrow, dots } = DOM_NODES;
    console.log('CURRENT SLIDE: ', getCurrentSlide());
    let useimageUrls: Array<string>;

    if (window.innerWidth >= 800) {
        useimageUrls = [...imageUrls_lg];
    } else if (window.innerWidth >= 640) {
        useimageUrls = [...imageUrls_md];
    } else {
        useimageUrls = [...imageUrls_sm];
    }
        
    if(!sliderScreen) return console.warn('THE SCREEN IS MISSING!');

    if (getCurrentSlide() === 0) {
        setCurrentSlide(1);
        return
    } else if (getCurrentSlide() === useimageUrls.length + 1) {
        setCurrentSlide(useimageUrls.length);
        return
    } 

    activeNextButton(true);
    activePrevButton(true);
    
    if (getCurrentSlide() === 1) {
        activePrevButton(false);
    } 
    
    if (getCurrentSlide() === useimageUrls.length) {
        activeNextButton(false);
    }

    //EDGE CASE: CLICKED ON A DISABLED ARROW BUTTON:
    // if (getCurrentSlide() === 1 && !leftArrow.classList.contains('active')) return
    // if (getCurrentSlide() === useimageUrls.length && !rightArrow.classList.contains('active')) return
    
    const { projectName, projectInfo, projectBgItem, screenBlind } = DOM_NODES;
    const screenWidth = screenBlind.offsetWidth;
    const slideTransitionTimeline = getTimeline();
    
    slideTransitionTimeline.set(screenBlind, {x: -screenWidth});
    
    console.log('SLIDE SET');
    slideTransitionTimeline.to(screenBlind, {x: -screenWidth, duration: 0.5, onComplete: () => {    
        sliderScreen.style.backgroundImage = `url('${useimageUrls[getCurrentSlide() - 1]}')`;
        sliderScreen.style.backgroundRepeat = 'no-repeat';
        sliderScreen.style.backgroundPosition = 'center';
        projectName.innerText = `${projects[getCurrentSlide() - 1]}`;
        projectInfo.innerText = `${info[getCurrentSlide() - 1]}`;
        projectBgItem.style.top = `${9 + 19 * (getCurrentSlide() - 1)}px`;
        dots.forEach(dot => dot.classList.remove('dotActive'));
        dots[getCurrentSlide() - 1].classList.add('dotActive');
        
    }});

    slideTransitionTimeline.to(screenBlind, {x: 10, duration: 1, onComplete: () => {
        setTimeout(() => slideTransitionTimeline.kill(), 0);
    }});   
}

const initiateSlider = (nodes: nodesInterface) => {
    
    const { leftArrow, rightArrow, sliderScreen } = nodes;
    const { dot1, dot2, dot3, dot4, dot5, dot6, dot7 } = nodes;

    const { projectLink1, projectLink2, projectLink3, projectLink4, projectLink5, projectLink6, projectLink7 } = nodes;
    
    const dots = [dot1, dot2, dot3, dot4, dot5, dot6, dot7];
    const projectLinks = [projectLink1, projectLink2, projectLink3, projectLink4, projectLink5, projectLink6, projectLink7];

    const { getCurrentSlide, setCurrentSlide } = closureIIFE;
    
    dots.forEach((dot, index) => {
        // dot.style.left = `${index * 24}px`;
        dot.addEventListener('click', () => {
            setCurrentSlide(index + 1);
            showSlide(sliderScreen);            
        });
    });

    projectLinks.forEach((projectLink, index) => {
        projectLink.style.top = `${index * 19}px`;
        
        projectLink.addEventListener('click', () => {
            setCurrentSlide(index + 1);
            showSlide(sliderScreen);            
        });
    });

    activeNextButton(true);
    activePrevButton(false);

    rightArrow.addEventListener('click', () => {
        setCurrentSlide(getCurrentSlide() + 1);
        showSlide(sliderScreen);
    });

    leftArrow.addEventListener('click', () => {
        setCurrentSlide(getCurrentSlide() - 1);
        showSlide(sliderScreen);
    });
   
    setTimeout(() => {

        setCurrentSlide(1);
        showSlide(sliderScreen);
    }, 1000);

    closureIIFE.speak();
    
        
}

const animateHero = () => {
        
    const heroTimeline = getTimeline();

    const { FIRST_NAME, LAST_NAME, HERO_SUBTITLE, HERO_PIC, M_TEXT } = selectors;
        
    heroTimeline.set(FIRST_NAME, {x: -50, y: -50, opacity: 1, rotation: 30});
    heroTimeline.to(FIRST_NAME, {x: -10, y: 0, opacity: 1, duration: .3, rotation: 0, stagger: 0.1}).delay(0);

    heroTimeline.set(LAST_NAME, {x: -50, y: 100, opacity: 1, rotation: 30});
    heroTimeline.to(LAST_NAME, {x: -10, y: 0, opacity: 1, duration: 1, rotation: 0, stagger: 0.1}).delay(.5);

    heroTimeline.set(HERO_SUBTITLE, {y: 200, opacity: 1});
    heroTimeline.to(HERO_SUBTITLE, {y: 0, opacity: 1, duration: 1}).delay(0);

    heroTimeline.set(HERO_PIC, {x: 30, y: 30, opacity: 1});
    heroTimeline.to(HERO_PIC, {x: 0, y: 0, opacity: 1, duration: 1}).delay(0);

    // heroTimeline.set(M_TEXT, {x: 30, y: 300, opacity: 1});
    // heroTimeline.to(M_TEXT, {x: 0, y: 0, opacity: 1, duration: 3, onComplete: () => {
    //     setTimeout(() => heroTimeline.kill(), 2000);
    // }}).delay(0);
       
    heroTimeline.play();

}

const domLoaded = (e: Event) => {    
    window.removeEventListener('load', domLoaded);
    grabDomNodes(selectors);
    initiateSlider(DOM_NODES);
    animateHero();
}

window.addEventListener('load', domLoaded);








