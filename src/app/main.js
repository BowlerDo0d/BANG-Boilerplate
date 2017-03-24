import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'font-awesome/css/font-awesome.css';
import './main.scss';

import 'babel-polyfill';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import * as project from '../../package.json';
import routing from './routes';

import MainController from './mainController';

const projectName = project.name;

// Main module
angular.module(projectName, [ uiBootstrap, uiRouter ])
  .config(routing)
  .controller('MainController', MainController);
