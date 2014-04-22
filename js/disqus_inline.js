/**
 * @file
 * JavaScript for the Disqus Drupal module.
 */

// The Disqus global variables.
var disqus_shortname = '';
var disqus_identifier = '';
var disqus_url = '';
var disqus_selector = '';
var disqus_count = '';
var disqus_position = '';

(function ($) {

/**
 * Drupal Disqus behavior.
 */
Drupal.behaviors.disqusinline = {
  attach: function (context, settings) {
	  $('body').once('disqus_inline', function() {
      // Load the Disqus comments.
      if (settings.disqus_inline || false) {
        // Setup the global JavaScript variables for Disqus.
        disqus_shortname = settings.disqus_inline.domain;
        disqus_identifier = settings.disqus_inline.identifier;
        disqus_url = settings.disqus_inline.url;
        
        disqus_selector = settings.disqus_inline.multiselector;
        disqus_count = settings.disqus_inline.display_count;
        disqus_position = settings.disqus_inline.position;
        disqus_heighlight = settings.disqus_inline.heighlight;
        
        if(disqus_selector) {   	
        	$(disqus_selector).inlineDisqussions({
        		identifier: disqus_identifier,
        		displayCount: disqus_count,
        		highlighted: disqus_heighlight,
        		position: disqus_position,
        	});
          }
        
        $('a.disqussion-link').click(function(event){
        	var target = $(event.target);
        	if(!target.parent('#disqussions_wrapper').length){
        		$('#disqus_thread').appendTo('#disqussions_wrapper');
        	}
        });
        
        $('a.main-disqussion-link').click(function(event){
        	var target = $(event.target);
        	if($('#disqus_thread').parent('#disqussions_wrapper').length){
        		target.parent().append($('#disqus_thread'));
        	}
        });
        
        
      	}
	  });
  }
};

})(jQuery);
