var portal = require('/lib/xp/portal'); 
var thymeleaf = require('/lib/thymeleaf'); 
var util = require('/lib/util');

exports.get = function (req) {
  var config = portal.getSiteConfig();

  var customCss = portal.assetUrl({
    path: 'styles/socialIcons.css'
  });

  let model = {};
  let socialIcons = util.data.forceArray(config.socialIcons);
  if (socialIcons[0] != null) {
    model.socialIcons = socialIcons;
  }

  const view = resolve('socialIcons.html');
  let body = thymeleaf.render(view, model);
  
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

