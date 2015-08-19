/**
 * Created by Stuart Eske <stuart@bryterdigital.co.uk> on 19/08/15.
 */
(function ( $ ) {
    $.fn.eqHeights = function( options ) {
        var defaults = {
            height: 0
        };

        var settings = $.extend( {}, defaults, options );

        return this.each(function(){
            if ( $(this).innerHeight() > settings.height ) settings.height = $(this).innerHeight();
        }).innerHeight(settings.height);
    };
}( jQuery ));
