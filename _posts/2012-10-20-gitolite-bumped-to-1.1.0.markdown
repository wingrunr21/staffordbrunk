---
layout: post
title: gitolite bumped v1.1.0
categories: [ruby, gitolite, git]
---
Gitolite issue [#19](https://github.com/wingrunr21/gitolite/issues/19) dealt with a Rails 3.2 incompatibility stemming from the [plexus](https://github.com/chikamichi/plexus) gem. Due to that gem not being actively maintained anymore, I made the decision to switch to the [gratr19](https://github.com/amalagaura/gratr) gem instead.  [gitolite](http://rubygems.org/gems/gitolite) version 1.1.0 incorporates this dependency change. This change also has the nice side-effect in that the [facets](https://github.com/rubyworks/facets) gem is no longer loaded/a requirement.
