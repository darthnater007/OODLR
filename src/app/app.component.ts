import { Component, OnInit } from '@angular/core';


//imports and declarations to use third party JS libs
import { TweenLite, TweenMax } from 'gsap';
import 'jquery';
declare var responsiveVoice: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {

  //INSTANCE VARIABLES
  title = 'OodlrApp';

      //Strings that work will be done on.
  origStr: string = "";
  oodleStr: string = "";

  //ONINIT
  ngOnInit(){
    this.slideIn();
    responsiveVoice.speak("oodler... The Oodle izer.", "UK English Male");
    responsiveVoice.speak("Welcome, mortal.", "UK English Male")
    
  }

  //FUNCTIONS

      //function to manipulate and return oodleStr
  oodleize(){
              //play 0-100 width animation on oodleOut
    this.oodleAnim();
        //replace  lower case vowels in orig with regExp global search
    this.oodleStr = this.origStr.replace(/a|e|i|o|u|y/g, 'oodle');
        //replace upper case vowels in oodleStr with regEXP global search
    this.oodleStr = this.oodleStr.replace(/A|E|I|O|U|Y/g, 'Oodle');
        //If there are Q's or q's, replace with Qu or qu (this improves readability)
    this.oodleStr = this.oodleStr.replace(/q/g, 'qu');
    this.oodleStr = this.oodleStr.replace(/Q/g, 'Qu');
    
        //diplay text on page
    document.getElementById('oodleOut').innerText = this.oodleStr;
  }

      //original string text to speech function
  playOrig(){
    responsiveVoice.speak(this.origStr, "UK English Male", {rate: 0.80});
  }

     //oodle string text to speech function
  playOodle(){
    responsiveVoice.speak(this.oodleStr , "UK English Male", {rate: 0.80, pitch: 0.9});
  }

      // ANIMATIONS
  slideIn(){
    TweenLite.from($('#Header'), 0.7, {y: -100, autoAlpha: 0})
    TweenLite.from($('.Tag'), 4, {x: -1000});
    TweenLite.from($('.Banner'), 10, {autoAlpha: 0});
}

  oodleAnim(){
    if(this.oodleStr == ""){
        //appear and stetch to fit dix on x-axis
        TweenMax.to($('#oodleOut'), 1, {width: "90%", autoAlpha: 1}); 
    }else if(this.oodleStr != ""){
        //dissappear and width to 0, then back
        TweenMax.to($('#oodleOut'), 0.2, {width: "0%", autoAlpha: 0}); 
        TweenMax.to($("#oodleOut"), 0.5, {width: "90%", autoAlpha: 1, delay: 0.5}); 
    }  

  }
}
