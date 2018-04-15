FlowRouter.route('/', {
  name: 'home',
  action(){
    GAnalytics.pageview()
    BlazeLayout.render('main', {topbar:'homeTopbar', content: 'newHomePageLayout'});
  }
});

FlowRouter.route('/login', {
  name: 'home',
  action(){
    GAnalytics.pageview()
    BlazeLayout.render('main', {topbar:'homeTopbar', content: 'loginPageLayout'});
  }
});

FlowRouter.route('/register', {
  name: 'home',
  action(){
    GAnalytics.pageview()
    BlazeLayout.render('main', {topbar:'homeTopbar', content: 'registerPageLayout'});
  }
});
