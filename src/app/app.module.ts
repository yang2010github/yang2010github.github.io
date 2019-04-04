import { AdminAuthGuardService as AdminAuthGuard } from './form/authorization/admin-auth-guard.service';
import { AuthGuard } from './form/authorization/auth-guard.service';
import { AuthService } from './form/authorization/auth.service';
import { AdminComponent } from './form/authorization/admin/admin.component';
import { AuthorizationHomeComponent } from './form/authorization/home/home.component';
import { RouterModule } from '@angular/router';
import { HttpService2ErrorHandler } from './form/http-services2/http-service2-error-handler';
import { Http2Service } from './form/http-services2/http2.service';
import { ReactiveComponent } from './form/reactive/reactive.component';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectivesComponent } from './form/directives/directives.component';
import { CustomDirective } from './form/directives/custom.directive';
import { TemplateDriveComponent } from './form/template-drive/template-drive.component';
import { TemplateDrive2Component } from './form/template-drive2/template-drive2.component';
import { Reactive2Component } from './form/reactive2/reactive2.component';
import { HttpServicesComponent } from './form/http-services/http-services.component';
import {HttpPostService} from './form/http-services/httpPost.service';
import { HttpServices2Component } from './form/http-services2/http-services2.component';
import { NavbarComponent } from './form/Routing/navbar/navbar.component';
import { HomeComponent } from './form/Routing/home/home.component';
import { GithubFollowersComponent } from './form/Routing/github-followers/github-followers.component';
import { GithubProfileComponent } from './form/Routing/github-profile/github-profile.component';
import { NotFoundComponent } from './form/Routing/not-found/not-found.component';
import { GithubFollowersService } from './form/Routing/github-followers.service';
import { LoginComponent } from './form/authorization/login/login.component';
import { NoAccessComponent } from './form/authorization/no-access/no-access.component';
import { OrderService } from './form/authorization/order.service';
import { fakeBackendProvider } from './form/authorization/helpers/fake-backend';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent,
    DirectivesComponent,
    CustomDirective,
    TemplateDriveComponent,
    ReactiveComponent,
    TemplateDrive2Component,
    Reactive2Component,
    HttpServicesComponent,
    HttpServices2Component,
    NavbarComponent,
    HomeComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NotFoundComponent,
    LoginComponent,
    AuthorizationHomeComponent,
    NoAccessComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // RouterModule.forRoot([
    //   {path: '', component: HomeComponent},
    //   {path: 'followers/:id/:username', component: GithubProfileComponent},
    //   {path: 'followers', component: GithubFollowersComponent},
    //   {path: 'post', component: PostsComponent},
    //   {path: '**', component: NotFoundComponent}
    // ])
    RouterModule.forRoot([
      {path: '', component: AuthorizationHomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'admin',
       component: AdminComponent,
       canActivate: [AuthGuard, AdminAuthGuard]},
      {path: 'no-access', component: NoAccessComponent
      }
    ])
  ],
  providers: [
    OrderService,
    AuthService,
    PostService,
    HttpPostService,
    Http2Service,
    GithubFollowersService,
    // { provide: ErrorHandler, useClass: AppErrorHandler},
    {provide: ErrorHandler, useClass: HttpService2ErrorHandler},
    fakeBackendProvider,
    AuthGuard,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
