import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('gsapTitle', { static: true })
  gsapTitle!: ElementRef<HTMLDivElement>;
  @ViewChild('gsapTitles', { static: true })
  gsapTitles!: ElementRef<HTMLDivElement>;
  @ViewChild('gsapSubtitle', { static: true })
  gsapSubtitle!: ElementRef<HTMLDivElement>;
  @ViewChild('gsapButton', { static: true })
  gsapButton!: ElementRef<HTMLDivElement>;
  @ViewChild('menu', { static: true })
  menu!: ElementRef<HTMLDivElement>;
  @ViewChild('menuRight', { static: true })
  menuRight!: ElementRef<HTMLDivElement>;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.initialAnimations();
    this.initScrollAnimations();
  }

  initScrollAnimations(): void {
  /*  gsap.to(this.gsapSubtitle.nativeElement, {
      scrollTrigger: {
        trigger: this.gsapSubtitle.nativeElement,
        scrub: true,

        //start: '110% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.1,
      scale: 1.2,
      //height: 250,
    });
    gsap.to(this.gsapButton.nativeElement, {
      scrollTrigger: {
        trigger: this.gsapButton.nativeElement,
        scrub: true,
        start: '80% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.1,
      scale: 1.2,
      height: 380,
    });

    gsap.to(this.document.querySelector('.heading-1'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-1'),
        scrub: true,
        start: '150% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      color: '#fff',
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.paragraph'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.paragraph'),
        scrub: true,
        start: '150% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      color: '#fff',
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.btn'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.btn'),
        scrub: true,
        start: '150% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      color: '#fff',
      duration: 1.5,
    });

    gsap.from(this.document.querySelector('.text-center'), {
      scrollTrigger: {
        trigger: this.document.querySelector('text-center'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('#carousel'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#carousel'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.box'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.box'),
        scrub: true,
        toggleClass: 'active',
        start: '-10% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      width: 0,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__visual img'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__visual img'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      height: 0,
      scale: '1.3',
      opacity: 0,
    });

    gsap.from(this.document.querySelector('.quote'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.quote'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__text .heading-3'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__text .heading-3'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__text .paragraph'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__text .paragraph'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });*/
    gsap.from(this.document.querySelector('#services'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#services'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });

    gsap.from(this.document.querySelector('#firstsection'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#firstsection'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });

    gsap.from(this.document.querySelector('#secondsection'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#secondsection'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      y:-200,
      duration:2.5,
      delay:1.9,
      stagger:0.1,
    });
    
  }

  initialAnimations(): void {
    gsap.from(this.menu.nativeElement.childNodes, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.5
    });

    gsap.from(this.menuRight.nativeElement.childNodes, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.8
    });

    gsap.from(this.gsapTitle.nativeElement.childNodes, {
      scrollTrigger: ".gsapTitle",
      x:200,
      duration:1.5,
      opacity:0,
      delay: 0.6,
    });

    gsap.from(this.gsapTitles.nativeElement.childNodes, {
      scrollTrigger: ".gsapTitles",
      x:200,
      duration:1.5,
      opacity:0,
      delay: 0.6,
    });

    gsap.from(this.gsapSubtitle.nativeElement.childNodes, {
      scrollTrigger: ".gsapSubtitle",
      x:-200,
      duration:1.5,
      opacity:0,
      delay: 0.6,
    });

   /* gsap.from(this.gsapButton.nativeElement, {
      scrollTrigger: ".gsapButton",
      y:200,
      duration:1.5,
      opacity:0,
      delay:0.9,
      stagger:0.1,
    
    });*/
  }
}
