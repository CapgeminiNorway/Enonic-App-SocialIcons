var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/thymeleaf'); // Import the thymeleaf render function
var util = require('/lib/util');

// Handle GET requests
exports.get = function (req) {
  var config = portal.getSiteConfig();

  log.info(JSON.stringify(config));

  let model = {};

  model.socialIcons = util.data.forceArray(config.socialIcons);

  const view = resolve('socialIcons.html');

  var customCss = portal.assetUrl({
    path: 'styles/socialIcons.css'
  });

  // Render a thymeleaf template
  let body = thymeleaf.render(view, model);
  // Return the result
  return {
    body: body,
    contentType: 'text/html',
    pageContributions: {
      headEnd: [
        '<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>',
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">',
        '<link rel="stylesheet" href="' + customCss + '">'
      ]
    }
  };

};

