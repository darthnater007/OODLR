import { Component, OnInit } from '@angular/core';

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
    TweenLite.fromTo($('#Banner'), 2, {x: -1000}, {x: 0});
  }

  //FUNCTIONS

  //function to manipulate and return oodleStr
  Oodlerize(){
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
    responsiveVoice.speak(this.origStr, "UK English Male");
  }

  //oodle string text to speech function
  playOodle(){
    responsiveVoice.speak(this.oodleStr , "UK English Male", {reate: 0.75});
  }

}
