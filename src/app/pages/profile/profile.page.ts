import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  posts = [
    {
      postImageUrl: '../../../assets/article/pc1.jpg',
      text: `I believe in being strong when everything seems to be going wrong.
             I believe that happy girls are the prettiest girls.
             I believe that tomorrow is another day and I believe in miracles.`,
      date: 'November 5, 2021',
      likes: 12,
      comments: 4,
      timestamp: '11h ago'
    },
    {
      postImageUrl: '../../../assets/article/pc1.jpg',
      text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
      date: 'October 23, 2021',
      likes: 30,
      comments: 64,
      timestamp: '30d ago'
    },
    {
      postImageUrl: '../../../assets/article/pc1.jpg',
      date: 'June 28, 2021',
      likes: 46,
      text: `Hope is the thing with feathers that perches in the soul
             and sings the tune without the words And never stops at all.`,
      comments: 66,
      timestamp: '4mo ago'
    },
  ];

  user = {
    name: 'Foulen ben Foulen',
    twitter: '@FoulenBenFoulen',
    profileImage: '../../../assets/profile/profile.jpeg',
    followers: 456,
    following: 1052,
    tweets: 35
  };

  constructor(private router: Router,) { }

  ngOnInit() {
  }
  ionViewDidLoad() {
    console.log('Hello ProfileThree Page');
  }

  imageTapped(post) {
    alert('Post image clicked');
  }

  comment(post) {
    alert('Comments clicked');
  }

  like(post) {
    alert('Like clicked');
  }
  gotoGame(){
    this.router.navigateByUrl('login')
  }
}
