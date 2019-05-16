import { Component, OnInit } from '@angular/core';
import { newsI } from '../../models/news.interface';
import { networkInterfaces } from 'os';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage implements OnInit {
  public noticias: newsI;

  constructor() { 
  //  this.news02 = new newsI[]
    this.noticias = new newsI('hola', 'perro', 'dasd');
  }


  newsApi : any;
  imageUrl : any;
  title : any;
  description: any

  vector : string[] = []


 
  
  news : newsI[] = [];
  newsTitle : string[] = []
  testArray : newsI[] = []
  newsDescription : string[] = []
  newsimageURL : string[] = []
  newBody: newsI = {
    title: "Titulo",
    description: "Description",
    imageURL: "imageURL"
  }

  blank : newsI[] = [];

 

  ngOnInit() {
    this.prueba()
    // this.noticias[0] = {
    //   title: "Titulo",
    //   description: "Description",
    //   imageURL: "imageURL"
    // };

  }

  prueba() {
    const url = 'https://www.reforma.com/rss/portada.xml';
    const textarea = document.getElementById('rickys-blog-textarea');
    feednami.load(url)
      .then(feed => {
        this.newsApi = feed;
        // console.log(this.news.entries[1]);
        // this.imageUrl = this.news.entries[1]['rss:enclosure']['#'];
        // this.title = this.news.entries[1].title;
        // this.description = this.news.entries[1].description;
        // console.log(this.news)
      });
  }

  ciclo() {
    this.news = []
    
    // console.log(this.newsApi)
    for (let i = 0; i < this.newsApi.entries.length ; i++)
    {
      // console.log(this.newsApi.entries[i])
      let titulo = this.newsApi.entries[i].title;
      let description = (this.newsApi.entries[i].description);
      let imageURL = (this.newsApi.entries[i]['rss:enclosure']['#'])
      // this.newsTitle.push(titulo)
      // this.newsDescription.push(description)
      // this.newsimageURL.push(imageURL)
      this.noticias[i] = {
        title: titulo,
        description: description,
        imageURL: imageURL
      };
      console.log(this.noticias[9]);
      // this.newsDescription.push(description)
      // this.newsimageURL.push(imageURL)
      
  

      // console.log(this.testArray)    
      // this.newBody.title = titulo
      // this.news.push(this.newBody.title);
      // this.newBody.title = "";
      // this.news.push(this.newsApi.entries[i].description);
      // this.news.push(this.newsApi.entries[i]['rss:enclosure']['#'])

      //  this.newBody.title = this.newsApi.entries[i].title
      //  this.newBody.description = this.newsApi.entries[i].description
      //  this.newBody.imageURL = this.news.entries[1]['rss:enclosure']['#']
      //  let objeto : {
      //    title: "hola",
      //    description: "descripcion",
      //    imageURL: "imageURL"
      //  }
      //  this.news.push(objeto);
      //  console.log(this.news);
       
     
      
    }

  
   

  }

}
