import { Component } from '@angular/core';
import {Details} from "./app/details/details";
import {Routes} from "@angular/router";
import {Home} from "./app/home/home";

const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Home details',
  },
];

export default routeConfig;