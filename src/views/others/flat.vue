<template lang="pug">
nn-scroll-area(nn-color="royal-purple")
  header
    .container
      h1
        | Flat
        strong CSS
      p Apply Flat Style to your Buttons. Download the latest version in the following links
      a.flat.green CSS
      a.flat.green CSS Min
      a.flat.green SCSS

  hr

  section.content
    .container
      h2 How to use it?

      p Include the stylesheet on your website

      code
        p &lt;head&gt;
        p
          | &lt;link rel="stylesheet" href="
          strong flat.css
          | "&gt;
        p &lt;/head&gt;

      p
        | Add the class "
        strong flat
        | " to the element you want to give flat button style

      code
        p
          | &lt;button class="
          strong flat
          | "&gt;
          em Button
          | &lt;/button&gt;

      p Also you can add the color class which can be:
      section.gallery
        button.flat.mustard Mustard
        button.flat.orange Orange
        button.flat.brown Brown
        button.flat.red Red
        button.flat.fucsia Fucsia
        button.flat.purple Purple
        button.flat.blue Blue
        button.flat.light-blue Light Blue
        button.flat.cyan Cyan
        button.flat.mint Mint
        button.flat.green Green
        button.flat.gray Gray/Grey
        button.flat No Color

      code
        p
          | &lt;button class="
          strong flat red
          | "&gt;
          em Button
          | &lt;/button&gt;

      p Without the color class it will be light gray by default.

      hr

      h2 How to apply the Outline Style?

      p
        | If you prefer an outline style you can add the class "
        strong outline
        | " to the element you want to give the style

      code
        p
          | &lt;button class="
          strong outline
          | "&gt;
          em Button
          | &lt;/button&gt;

      p And the colors could be:

      section.gallery
        button.outline.mustard Mustard
        button.outline.orange Orange
        button.outline.brown Brown
        button.outline.red Red
        button.outline.fucsia Fucsia
        button.outline.purple Purple
        button.outline.blue Blue
        button.outline.light-blue Light Blue
        button.outline.cyan Cyan
        button.outline.mint Mint
        button.outline.green Green
        button.outline.gray Gray/Grey
        button.outline No Color

      code
        p
          | &lt;button class="
          strong outline blue
          | "&gt;
          em Button
          | &lt;/button&gt;

  footer
    p
      | Go to&nbsp;
      a Aguacatekun.com
      | &nbsp;and share your love.
    a.outline.blue View this project on Github
</template>