import { Component, OnInit } from '@angular/core';
import { visitSiblingRenderNodes } from '@angular/core/src/view/util';
import { timeout } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //INSTANCE VARIABLES
  title = 'OodlrApp';

      //String that work will be done on.
  origStr: string = "";
  oodleStr: string = "";

  //ONINIT
  ngOnInit(){
    console.log("ONINIT COMPLETE");
    this.slideIn();
    responsiveVoice.speak("oodler... The Oodle izer.", "UK English Male");
    responsiveVoice.speak("Welcome, mortal.", "UK English Male")
    
  }

  //FUNCTIONS

      //function to manipulate and return oodleStr
  oodleize(){
    console.log('acessed Oodlerize method...')

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
    console.log("Inside slideIn method")
    TweenLite.from($('#Header'), 0.7, {y: -100, autoAlpha: 0})
    TweenLite.from($('.Tag'), 4, {x: -1000});
    TweenLite.from($('.Banner'), 10, {autoAlpha: 0});
}

}

