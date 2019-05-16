import { Component, OnInit } from '@angular/core';
import { newsI } from '../../models/news.interface';
import { UsersService } from '../../services/user.service'


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.page.html',
  styleUrls: ['./news-feed.page.scss'],
})
export class NewsFeedPage implements OnInit {


  constructor(private userService : UsersService) {
    //  this.news02 = new newsI[]

  }


  newsApiCiencia: any;
  newsApiCultura: any;
  newsApiModa: any;
  newsApiNegocios: any;

  imageUrl: any;
  title: any;
  description: any


  mostrarCiencia: boolean = false;
  mostrarCultura: boolean = false;
  mostrarModa: boolean = false;
  mostrarNegocios: boolean = false;




  news: newsI[] = [];
  newsTitle: string[] = []
  testArrayCiencia: newsI[] = []
  testArrayCultura: newsI[] = []
  testArrayModa: newsI[] = []
  testArrayNegocios: newsI[] = []

  newsDescription: string[] = []

  newsimageURL: string[] = []
  newBody: newsI = {
    title: "Titulo",
    description: "Description",
    imageURL: "imageURL"
  }

  blank: newsI[] = [];



  ngOnInit() {
    this.prueba();
    // this.noticias[0] = {
    //   title: "Titulo",
    //   description: "Description",
    //   imageURL: "imageURL"
    // };
    setTimeout(() => {
      this.ciclo();
    }, 750);
  }

  prueba() {
    let url = 'https://www.reforma.com/rss/ciencia.xml';
    // const textarea = document.getElementById('rickys-blog-textarea');
    feednami.load(url)
      .then(feed => {
        this.newsApiCiencia = feed;
        //     // console.log(this.news.entries[1]);
        // this.imageUrl = this.news.entries[1]['rss:enclosure']['#'];
        // this.title = this.news.entries[1].title;
        // this.description = this.news.entries[1].description;
        // console.log(this.news)
      });

    url = 'https://www.reforma.com/rss/cultura.xml';
    feednami.load(url)
      .then(feed => {
        this.newsApiCultura = feed;
      });

    url = 'https://www.reforma.com/rss/moda.xml';
    feednami.load(url)
      .then(feed => {
        this.newsApiModa = feed;
      });

    url = 'https://www.reforma.com/rss/negocios.xml';
    feednami.load(url)
      .then(feed => {
        this.newsApiNegocios = feed;
      });

  }

  ciclo() {
  

      

    // CIENCIA
    for (let i = 0; i < this.newsApiCiencia.entries.length; i++) {
      let titulo = this.newsApiCiencia.entries[i].title;
      let description = (this.newsApiCiencia.entries[i].description);
      let imageURL = (this.newsApiCiencia.entries[i]['rss:enclosure']['#'])
      this.testArrayCiencia.push({
        title: titulo,
        description: description,
        imageURL: imageURL
      });
    }

    // CULTURA
    for (let i = 0; i < this.newsApiCultura.entries.length; i++) {
      let titulo = this.newsApiCultura.entries[i].title;
      let description = (this.newsApiCultura.entries[i].description);
      let imageURL = (this.newsApiCultura.entries[i]['rss:enclosure']['#'])
      this.testArrayCultura.push({
        title: titulo,
        description: description,
        imageURL: imageURL
      });
    }

    // MODA
    for (let i = 0; i < this.newsApiModa.entries.length; i++) {
      let titulo = this.newsApiModa.entries[i].title;
      let description = (this.newsApiModa.entries[i].description);
      let imageURL = (this.newsApiModa.entries[i]['rss:enclosure']['#'])
      this.testArrayModa.push({
        title: titulo,
        description: description,
        imageURL: imageURL
      });
    }

    // NEGOCIOS
    for (let i = 0; i < this.newsApiNegocios.entries.length; i++) {
      let titulo = this.newsApiNegocios.entries[i].title;
      let description = (this.newsApiNegocios.entries[i].description);
      let imageURL = (this.newsApiNegocios.entries[i]['rss:enclosure']['#'])
      this.testArrayNegocios.push({
        title: titulo,
        description: description,
        imageURL: imageURL
      });
    }




  }

}

