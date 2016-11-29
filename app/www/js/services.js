angular.module('starter.services', [])

.factory('Email', function() {
 return {
  sendEmail: function (scope) {

    var options = {
      weekday: "short", year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };


    var body = 

            scope.title + " Alert!\n"

            + "From: " + scope.formdata.name
            + "\nWhen: " + new Date().toLocaleDateString("en-US",options)
            + "\nWhere: " + scope.formdata.location
            + "\n\n"
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
