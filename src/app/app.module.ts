import { CicloComponent } from './componentes/ciclo/ciclo.component';
import { OutputPropertyComponent } from './componentes/output-property/output-property.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './componentes/data-binding/data-binding.component';
import { InputPropertyComponent } from './componentes/input-property/input-property.component';
import { MeuFormModule } from './componentes/meu-form/meu-form.module';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
  ],
  imports: [BrowserModule, MeuFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
