import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'catalog',
    loadChildren: () =>
      import('./features/catalog/catalog.module').then(
        (m) => m.CatalogModule
      ),
  },
  {
    path: 'collection',
    loadChildren: () =>
      import('./features/collection/collection.module').then(
        (m) => m.CollectionModule
      ),
  },
  {path: '', redirectTo: 'catalog', pathMatch: 'full'},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
