(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimMobile, {
        "loadScrollBars": function() {
            jQuery(".s-08d859ed-012b-492e-87b8-13edd465337d .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-8403d56b-9dcd-4f8f-b204-bb9e24fb3311 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-bbe846c5-daed-46ce-a64f-e7c0823b4bda .ui-page").overscroll({ showThumbs:true, direction:'vertical' });
            jQuery(".s-bbe846c5-daed-46ce-a64f-e7c0823b4bda #s-Category_1").overscroll({ showThumbs:false, direction:'vertical' });
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);