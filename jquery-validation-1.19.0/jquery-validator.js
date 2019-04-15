$( document ).ready( function () {
    $( ".gform" ).validate( {
        errorPlacement: function(error,element) {
           return true;
         }
    } );

    jQuery.validator.addMethod("email", function(value, element) {
      return this.optional(element) ||  validEmail( value );
    }, "Please specify the correct domain for your documents");
} );
