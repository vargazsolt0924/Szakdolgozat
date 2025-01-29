const { When, Then, BeforeStep, world } = require('@cucumber/cucumber');
const CommunitiesPage = require('../../page_objects/CommunitiesPage');

let communitiesPage;

BeforeStep(async function () {
  communitiesPage = new CommunitiesPage(world.page);
});
