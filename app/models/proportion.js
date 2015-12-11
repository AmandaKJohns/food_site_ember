import DS from 'ember-data';

export default DS.Model.extend({
  quantity: DS.attr('number'),
  recipe: DS.belongsTo('recipe', {async: true}),
  ingredient: DS.belongsTo('ingredient', {async: true}),
  unit: DS.belongsTo('unit', {async: true})
});
