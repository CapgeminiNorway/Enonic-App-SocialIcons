# Social Icons App for Enonic XP

<img align="right" alt="Social Icons Logo" src="https://via.placeholder.com/100/000000/FFFFFF/?Text=SocialIconsApp" max-width="128">

This Social Icons App for [Enonic XP](https://github.com/enonic/xp) enables an 
editor to display a area on their website with connections to their desired 
social network-profiles. 

The app itself is a part which is drag-and-drop'd to the wanted region on the website, and displays the app configurations. 

## Set up

For the Social Icons App to be displayed on the desired website as intended, 
there is a set of configuration one must go through.

### Prerequisites

One must have installed the application [Content Studio](https://market.enonic.com/vendors/enonic/content-studio).

### Configuration

When selecting the application on the website, use the pencil-icon to configure the application with the following steps:

1. Click the "Add Social Icon" button.

2. Fill in the website URL for the social network. Ensure that `http://` or `https://` is present. 

3. Find the desired icon to use on https://www.fontawesome.com and use its name, e.g. "twitter" or "facebook-f". 

4. Write the alternative text that will be shown in case of screen reader or if the icon won't load. 

5. Apply changes.

All the social media platforms added will be automatically shown in the Social Icons-part when dragged into a region. 

## Personalisation 

    <div class="social-icons">
        <h1>Follow us</h1>
        <ul class="social-network social-circle">
            <li data-th-each="item : ${socialIcons}">
                <a target="_blank" data-th-href="${item.url}" data-th-title="${item.altText}">
                    <i data-th-class="${'fab fa-' + item.font}"></i>
                </a>
            </li>
        </ul>
    </div>

If you wish to change the colours of the icons, use the classes `social-network` for the icon itself, and `social-circle` for the circular border around the icon. 

## Releases and compatibility

| App version | Required XP version |
| ----------- | ------------------- |
| 1.0.0 | 7.0.0 |


## Changelog

### Version 1.0.0

* Initial release.