angular.module('starter.services', [])

.factory('Email', function() {
 return {
  sendEmail: function (scope) {
    var body = 

            scope.title + " Alert!\n"

            + "From: " + scope.formdata.name
            + "\nWhere:" + scope.formdata.location
            + "\n\n\n"
            + scope.formdata.comment
            + "\n\n"
            + "Sent by the Neighbourhood Watch app."

    if(window.plugins && window.plugins.emailComposer) {

            window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
                console.log("Response -> " + result);
            }, 
            "Neighbourhood Watch App Alert", // Subject
            body,                      // Body
            ["conorb@firstpartners.net"],    // To
            null,                    // CC
            null,                    // BCC
            false,                   // isHTML
            null,                    // Attachments
            null);                   // Attachment Data
        } else {
          console.log(body);
        }
  }
 }
});
