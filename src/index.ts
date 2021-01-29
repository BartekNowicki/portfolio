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

const projects: Array<string> = ['project1','project2','project3','project4','project5','project6','project7'];

const info: Array<string> = [
    'info1', 
    'info2',
    'info3',
    'info4',
    'info5',
    'info6',
    'info7'
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



const showSlide = (sliderScreen: HTMLElement, counter: number, dots: Array<HTMLElement>) => {

    const { getCurrentSlide, setCurrentSlide } = closureIIFE;
    const { leftArrow, rightArrow } = DOM_NODES;
    console.log('CURRENT SLIDE: ', getCurrentSlide());
    let useimageUrls: Array<string>;


    if (window.innerWidth >= 800) {
        useimageUrls = [...imageUrls_lg];
    } else if (window.innerWidth >= 640) {
        useimageUrls = [...imageUrls_md];
    } else {
        useimageUrls = [...imageUrls_sm];
    }
    
    

        
    if(!sliderScreen) return

    if (getCurrentSlide() < 1) {
        setCurrentSlide(1);
    } else if (getCurrentSlide() > useimageUrls.length) {
        setCurrentSlide(useimageUrls.length);
    } 

    //EDGE CASE: CLICKED ON A DISABLED ARROW BUTTON:
    if (getCurrentSlide() < 2 && !leftArrow.classList.contains('active')) return
    if (getCurrentSlide() > useimageUrls.length - 1 && !rightArrow.classList.contains('active')) return

    
    if (getCurrentSlide() === 1) {
        activeNextButton(true);
        activePrevButton(false);
    } else if (getCurrentSlide() === useimageUrls.length) {
        activeNextButton(false);
        activePrevButton(true);
    } else {
        activeNextButton(true);
        activePrevButton(true);
    }
    
    const { projectName, projectInfo, projectBgItem, screenBlind } = DOM_NODES;
    const screenWidth = screenBlind.offsetWidth;
    const slideTransitionTimeline = getTimeline();
    
    slideTransitionTimeline.set(screenBlind, {x: -screenWidth});
    
    slideTransitionTimeline.to(screenBlind, {x: -screenWidth, duration: 0.1, onComplete: () => {    
        sliderScreen.style.backgroundImage = `url('${useimageUrls[getCurrentSlide() - 1]}')`;
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
        dot.style.left = `${index * 24}px`;
        dot.addEventListener('click', () => {
            setCurrentSlide(index + 1);
            showSlide(sliderScreen, getCurrentSlide(), dots);            
        });
    });

    projectLinks.forEach((projectLink, index) => {
        projectLink.style.top = `${index * 19}px`;
        
        projectLink.addEventListener('click', () => {
            setCurrentSlide(index + 1);
            showSlide(sliderScreen, getCurrentSlide(), dots);            
        });
    });

    activeNextButton(true);
    activePrevButton(false);

    rightArrow.addEventListener('click', () => {
        setCurrentSlide(getCurrentSlide() + 1);
        showSlide(sliderScreen, getCurrentSlide(), dots);
    });

    leftArrow.addEventListener('click', () => {
        setCurrentSlide(getCurrentSlide() - 1);
        showSlide(sliderScreen, getCurrentSlide(), dots);
    });
   
    sliderScreen.style.backgroundImage = `url('${imageUrls_lg[0]}')`;
    DOM_NODES.projectName.innerText = `${projects[0]}`;
    DOM_NODES.projectInfo.innerText = `${info[0]}`;

    closureIIFE.speak();
    console.log('INITIATING SLIDE:', getCurrentSlide());
    
    showSlide(sliderScreen, 1, dots);
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








