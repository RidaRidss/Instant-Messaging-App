import {Alert,Page, NavController} from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {SMS,Contacts} from 'ionic-native';
@Page({
  
templateUrl: 'build/pages/page2/page2.html'

})

export class Page2 {
//sms: FirebaseListObservable<any[]>;
sms: FirebaseListObservable<{msg:string,num:string}[]>;
contacts: FirebaseListObservable<{num:string}[]>;
 constructor(public nav: NavController,af: AngularFire) { 
this.sms = af.list('/sms');
this.contacts = af.list('/contacts');
}
sendMessage(contactNo: HTMLInputElement,newMsg: HTMLInputElement){

let confirm = Alert.create({
      title: 'Confirm , send to ' + contactNo.value + ' ?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Stop and Cancelled to send');
          }
        },
        {
          text: 'send',
          handler: () => {

// send message implementation
console.log('Your Contact no. '+contactNo.value.toString()+' is saved!');
console.log('Your Message '+newMsg.value.toString()+' is saved!');
newMsg = newMsg.value.toString();
contactNo = contactNo.value.toString();
//console.log(newMsg);
//console.log(contactNo);
//console.log('this.sms.key.value');
//console.log(this.contacts.key.value);
/*
this.sms.once('value',function(snapshot){
var key = childSnapshot.key();
var childData = childSnapshot.val();
});});
*/
this.sms.add(newMsg);
this.contacts.add(contactNo);
SMS.send(contactNo,newMsg);
var success = Alert.create({
      title: 'Message Sent Successfully'
    });
  this.nav.present(success);

		




























}}]});   this.nav.present(confirm);}}