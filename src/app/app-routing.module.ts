import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'adult-screen', pathMatch: 'full' },
  { path: 'minor-screen', loadChildren: './minor-screen/minor-screen.module#MinorScreenPageModule' },
  { path: 'adult-screen', loadChildren: './adult-screen/adult-screen.module#AdultScreenPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
