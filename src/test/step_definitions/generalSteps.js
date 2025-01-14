const {Given, BeforeStep } = require('@cucumber/cucumber')
const MainPage = require('../page_objects/MainPage')

let mainPage;

BeforeStep(async function(){
    mainPage = new MainPage(world.page);
});

Given('the {string} site is opened', async () => {
    await mainPage.open();
});

Given(/the '(Articles|Events|Communites|Speakeres|Videos)' button is clicked/, async(subPageName) => {
    const subPageNameMapping = {
        Articles: 'articlesButton',
        Events: 'eventsButton',
        Communities: 'communitiesButton',
        Speakers: 'speakersButton',
        Videos: 'videosButton',
    };
    await mainPage.navigatToSubPage(subPageNameMapping[subPageName]);
});
