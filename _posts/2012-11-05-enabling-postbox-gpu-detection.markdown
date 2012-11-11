---
layout: post
title: Enabling Postbox GPU Detection
categories: [hacks]
---
I use and love the [Postbox](http://www.postbox-inc.com/) email client. One thing that really bothers me about it, however, is that it forces the use of the discrete GPU on my Macbook Pro. This is a real problem when on the road since the discrete GPU uses much more power than the integrated Intel graphics. The solution, I found, is actually relatively simple.

Apple provides an Info.plist attribute named `NSSupportsAutomaticGraphicsSwitching` which allows an app to run with hardware acceleration on the integrated GPU. This [technical document](http://developer.apple.com/library/mac/#qa/qa1734/_index.html#//apple_ref/doc/uid/DTS40010791) outlines the attribute and its compatibility. My solution was to simply add this attribute to Postbox's Info.plist. The results are as expected: Postbox does not force the usage of the discrete GPU when run.

I've created a short bash script for people who do not know how to edit an Info.plist file to be able to apply this fix. It goes without saying that this tweak is unsupported by [Postbox](http://www.postbox-inc.com/) and is done at your own risk. The script is shown below and is available [here](https://gist.github.com/4020893). Installing it is easy: First, open up a terminal window (use Spotlight or open `/Applications/Utilities/Terminal`). Then, copy and paste the following command and press enter:

{% highlight bash %}
  curl -fsSkL http://goo.gl/rNrNE | bash
{% endhighlight %}

If for whatever reason this is causing problems for you, the following command will undo the changes:

{% highlight bash %}
  curl -fsSkL http://goo.gl/rNrNE | bash -s restore
{% endhighlight %}

Here's the script in its entirety:
{% gist 4020893 postbox_gpu_fix.sh %}
