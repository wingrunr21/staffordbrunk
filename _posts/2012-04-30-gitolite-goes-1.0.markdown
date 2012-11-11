---
title: gitolite goes v1.0!
categories: [ruby, gitolite, git]
---
After about a year of development, my Ruby interface to the gitolite git-repository management system has finally hit 1.0.

For those who are unfamiliar, [gitolite](https://github.com/sitaramc/gitolite) is an application that allows you to exercise fine-grain control over your own hosted git repositories.  It offers SSH-key based user management as well as fine-grain permissions for hosted git repositories.  It is managed via a git repository of its own titled `gitolite-admin`.  gitolite is written in Perl, however.  I needed a way to interact with the `gitolite-admin` repository via Ruby and thus the [gitolite gem](http://rubygems.org/gems/gitolite) was born.

As of version 1.0 the [gitolite gem](http://rubygems.org/gems/gitolite) supports nearly all capabilities that the gitolite backend provides via the `gitolite-admin` interface (with the exception of nested configurations).  Version 1.0 brought about a few fixes that were necessary to ensure that programmatically defined groups were printed in the resulting configuration file in the proper order.

See the README on [GitHub](https://github.com/wingrunr21/gitolite) for the full lowdown on requirements, usage, and caveats.
