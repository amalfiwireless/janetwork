var mySubmitFunc = function(){
  console.log('User has been logged in!');
  // console.log(Meteor.userId())
  if(Meteor.user() != null){
      // $('#loginModal').modal('hide');
      // $('#registerModal').modal('hide');
      // $('body').removeClass('modal-open');
      // $('.modal-backdrop').remove();
    if(Roles.userIsInRole(Meteor.userId(), "mary")){
        FlowRouter.go('/mary/dashboard')
      }
      else if(Roles.userIsInRole(Meteor.userId(), "jane")){
        FlowRouter.go('/jane/dashboard')
      }
  }
  else{

    // $('body').removeClass('modal-open');
    // $('.modal-backdrop').remove();
  }
}

AccountsTemplates.configure({
  showForgotPasswordLink: false,
  hideSignInLink: true,
  hideSignUpLink: true,
  onSubmitHook: mySubmitFunc,
  texts: {
    title: {
      changePwd: "Password Title",
      enrollAccount: "Enroll Title",
      forgotPwd: "Forgot Pwd Title",
      resetPwd: "Reset Pwd Title",
      signIn: "",
      signUp: "",
      verifyEmail: "Verify Email Title",
    },
    inputIcons: {
        isValidating: "fa fa-spinner fa-spin",
        hasSuccess: "fa fa-check",
        hasError: "fa fa-times",
    },
    button: {
      changePwd: "Password Text",
      enrollAccount: "Enroll Text",
      forgotPwd: "Forgot Pwd Text",
      resetPwd: "Reset Pwd Text",
      signIn: "Sign In Text",
      signUp: "Begin the Jouney!",
}
  }
});

AccountsTemplates.addFields([
  {
    _id: 'fullName',
    type: 'text',
    displayName: 'Enter your full name',
    placeholder: 'Your full name',
    required: true
  },
  {
      _id: 'lastName',
      type: 'text',
      displayName: 'Last Name',
      placeholder: 'Your last name',
      required: true
  },
  {
    _id: 'phoneNumber',
    type: 'text',
    displayName: 'Enter your phone number',
    maxLength: 15,
    placeholder: 'Your phone number',
    showPlaceholders: true,
    required: true,
    errStr: 'This is not a valid phone number'
  },
  {
    _id: 'accountType',
    type: 'select',
    displayName: 'What do you want to sign up as?',
    required: true,
    select: [
      {text: 'Mary', value: 'mary'},
      {text: 'Jane', value: 'jane'},
      // {text: 'Other', value: 'other'}
    ]
  }
]);
