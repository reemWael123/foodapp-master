import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HTTP_INTERCEPTORS, HttpClientModule} from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalInterceptor } from './core/interceptors/global.interceptor';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerInterceptor } from './core/spinner.interceptor';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDropzoneModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    SharedModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,
      useClass:GlobalInterceptor,
      multi:true
    },
    {provide:HTTP_INTERCEPTORS,
      useClass:SpinnerInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
