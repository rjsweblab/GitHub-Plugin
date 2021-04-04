$(function () {
    $('body').one('pinegrow-ready', function (e, pinegrow) {
        
        //Add a framework id, it should be unique to this framework and version. Best practice is to define the prefix as a variable that can be used throughout the framework.
        let framework_id = 'shd_github_for_pinegrow';
        
        //Instantiate a new framework
        var framework = new PgFramework(framework_id, 'GitHub-for-Pinegrow');

        // Define a framework type - if you plan on having multiple versions, this should be the same for each version. 
        framework.type = 'GitHub-for-Pinegrow';

        //Prevent the activation of multiple versions of the framework - if this should be allowed, change to false
        framework.allow_single_type = true;

        //Optional, add a badge to the framework list notify user of new or updated status
        //framework.info_badge = 'v1.0.0';

        //Add a description of the plugin
        framework.description = 'Adds GitHub functionality to Pinegrow';

        //Add a framework  author to be displayed with the framework templates
        framework.author = 'Robert "Bo" Means';

        //Add a website "https://pinegrow.com" or mailto "mailto:info@pinegrow.com" link for redirect on author name click
        framework.author_link = 'https://robertmeans.net';

        // Tell Pinegrow about the framework
        pinegrow.addFramework(framework);

	//uncomment the line below for debugging - opens devtools on Pinegrow Launch
	require('nw.gui').Window.get().showDevTools();
    });
});