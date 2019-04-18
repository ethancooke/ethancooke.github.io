---
layout: post
title:  "Limitations of using public wifi"
date:   2019-04-17
categories: security
---
While trying to work on this blog from my laptop I ran into a problem with performing a git clone. Turns out the *public* wifi I was using blocks the default port of 22. Found this useful [article](https://stackoverflow.com/questions/7953806/github-ssh-via-public-wifi-port-22-blocked#8081292) to switch my machines default ssh port to 443. Worked like a charm.

Another problem with this *public* wifi is that it blocks VPN services. I so far have not found a work around for this as of yet.