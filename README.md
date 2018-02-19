## Welcome to GitHub Pages

You can us e the [editor on GitHub](https://github.com/mohalaci/test/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/mohalaci/test/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.

Creating a shop is mandatory for managing payments via the Barion API.
This article guides you through the creation of a shop in the Barion system.

## Steps to create a shop

1. Log in to your Barion wallet on the website. Barion also offers a Sandbox environment for testing purposes - learn more about the Sandbox [[Sandbox|here]].
2. Click the "Manage my shops" menu, then click the "Create new shop" button above the grid.
3. Enter the necessary data ([[#Shop properties|see below]]) on the appearing form, then submit it.
4. You receive a confirmation email about your newly opened shop, which contains you POSKey. This is the authentication key you will need to send a request to the Barion API.
5. Your shop will be approved by the Barion staff in a short time. In the Sandbox environment, shops are approved instantly.
6. After your shop is approved, you can send requests to the API.

## Shop properties

Property|Description
---|---
**ShopName**|The name of the shop. Must be unique in the Barion system, and must be compliant with your organization or business. General names like *"my test shop"*, *"online jewellery store"* or *"postal service"* will not be approved!
**Shop description**|A short description about the shop. This is to help the Barion staff identify the shop as a valid business. 
**Shop URL**|The URL to the owner's website, or the webshop itself, if applicable.
**Callback URL**|The URL the Barion system should use during the callback mechanism. Learn more about this [[Callback_mechanism|here]].
**Redirect URL**|The URL the payer gets redirected if they complete or cancel the payment on the Barion Smart Gateway. This is mandatory for webshops.
**Avatar**|An image representing the organization or business. This should be your company logo. Avoid stock photos and such - if the image is misleading or irrelevant to your business, your shop will not be approved!
**Category**|Set appropriate categories that apply to your business. If your business does not fall into the selected categories, your shop will not be approved!

