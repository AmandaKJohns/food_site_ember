import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('recipe');
  this.route('proportion');
  this.route('category');
  this.route('step');
  this.route('ingredient');
  this.route('unit');

  this.route('recipes', function() {
    this.route('recipe', {path: ':recipe_id'});
  });
});

export default Router;
