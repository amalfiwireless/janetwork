Meteor.users.allow({
  update(){
    if(Roles.userIsInRole(Meteor.userId(), 'mary')){
      return true
    }
  },
  insert(){
    if(Roles.userIsInRole(Meteor.userId(), 'jane')){
      return true
    }
  }
});

var postSignUp = function(userId, info){
  Roles.addUsersToRoles(userId, [info.profile.accountType]);
}

AccountsTemplates.configure({
  postSignUpHook: postSignUp
});
