---
layout: post
title: Dynamic QR codes with embedded images
categories: [ruby, qr codes]
---
In August of last year I saw an article on Hack A Day about [embedding images within QR codes](http://hackaday.com/2011/08/11/how-to-put-your-logo-in-a-qr-code/).  I thought this was a pretty neat concept and wanted to apply it to [CustomInk](http://www.customink.com)'s new mascot, Inky.  Unfortunately, one of CustomInk's production artists beat me to it:

<img src="/images/posts/2011-12-26/inky_qr2.png" alt="Original Inky QR" class="post_image" />

The attempt was solid.  Inky was there, front and center, and the QR code scanned successfully.  I felt that there was definitely some room for improvement, however.  I wanted to make the QR codes dynamic, capable of pointing to any given URL (or any other payload).

I first set out to just generate a QR code with Inky in the center.  I found the awesome [rQRCode gem]() as well as the associated [rqrcode_png gem](https://github.com/DCarper/rqrcode_png).  Because the rqrcode_png gem was powered by ChunkyPNG, I could easily create a png of Inky and composite it over the generated png:

{% highlight ruby %}
  require "rqrcode"
  require "rqrcode_png"

  include RQRCode

  qrcode = QRCode.new("http://www.customink.com", :size => 6)
  png = qrcode.to_img

  # where inky.png is 104x104px
  inky = ChunkyPNG::Image.from_file("inky.png")

  png = png.resize(300, 300).compose(inky, 98, 98)
  png.save("inky_qr.png")
{% endhighlight %}

Once I got everything aligned properly, this method created decent results:

<img src="/images/posts/2011-12-26/inkyqr_pixel_perfect.gif" alt="Rastor Inky QR" class="post_image" />

That worked well except I had to get Inky essentially pixel perfect (with the white border) when I lined it up on the QR png.  This was especially important as I tried to support different sizes.  I was also limited in sizes due to ChunkyPNG creating a good amount of blurriness upon resize.  I decided I had to go the SVG route.

rQRCode provides a mapping of black vs white squares in an instance variable called `members`.  Building the QR code from this was straightforward:

{% highlight ruby %}
  @modules.each_index do |r|
    @modules.each_index do |c|
      #dark? is a utility function provided by rqrcode
      if dark?(r,c)
        # boring code to build an SVG rect
        build_rect
      end
    end
  end
{% endhighlight %}

After that, I read in an SVG version of Inky, scaled it to the correct size, and applied Inky on top of the previously built QR:

<img src="/images/posts/2011-12-26/inkyqr_svg.png" alt="SVG Inky QR" class="post_image" />

It turned out pretty well.  I added the ability to modify the foreground, background, size, border, and image type and put it up on Heroku: [inkyqr.heroku.com](http://inkyqr.heroku.com). Give it a try!
