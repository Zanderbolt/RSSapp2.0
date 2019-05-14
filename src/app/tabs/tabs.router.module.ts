import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news-feed',
        children: [
          {
            path: '',
            loadChildren: './news-feed/news-feed.module#NewsFeedPageModule',

          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: './login/login.module#LoginPageModule',

          }
        ]
      },
      {
        path: 'myTags',
        children: [
          {
            path: '',
            loadChildren: './my-tags/my-tags.module#MyTagsPageModule',

          }
        ]
      },      
      {
        path: '',        
        redirectTo: '/tabs/news-feed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/news-feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
