$(function(){
  var feed_title = $("div.feed_title");
  $("a#rss_link").hover(function(){
    $(feed_title).show('slide', { direction: "left" }, 400);
  }, function(){
    $(feed_title).hide('slide', { direction: "left" }, 400);
  });
});
