import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
// typical import
import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  private $nav: any;
  ngOnInit(): void {
//     var tl = gsap.timeline();
// tl.to(".nav-link", {rotation: 360, duration: 1});
  }
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }



}
