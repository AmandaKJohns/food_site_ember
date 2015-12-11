import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  publicRecipe: DS.attr('boolean'),
  imageUrl: DS.attr('string'),
  note: DS.attr('string'),
  categories: DS.hasMany('category', {async: true}),
  proportions: DS.hasMany('proportion', {async: true}),
  steps: DS.hasMany('step', {async: true})
});
