import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'news-feed', loadChildren: './tabs/news-feed/news-feed.module#NewsFeedPageModule' },
  { path: 'login', loadChildren: './tabs/login/login.module#LoginPageModule' },
  { path: 'my-tags', loadChildren: './tabs/my-tags/my-tags.module#MyTagsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
