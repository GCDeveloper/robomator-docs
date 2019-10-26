---
id: planning
title: Planning
sidebar_label: Planning
---

In the best case scenario, we would utilize the Facebook Graph API to read posts in the JavaScript Projects facebook group, and to assign a topic to the post automatically.

[Graph API](https://developers.facebook.com/docs/graph-api)

The problem currently blocking this route is that there is currently no API available to see or assign topics to a post.

We can still read posts in the group by doing the following:

1. ### Fetch the group feed, which returns a list of post ids.
> https://developers.facebook.com/docs/graph-api/reference/v4.0/group/feed


2. ### Fetch the post contents by post id.
> https://developers.facebook.com/docs/graph-api/reference/post/


---

An alternative solution could be to use a tool such as [Puppeteer](https://pptr.dev/).

This would mean programatically logging in to a group admin account and programatically use the UI that a human would usually use, to take advantage of the functionality of assigning a topic to posts.

The problem with this solution is that it is not sanctioned by facebook, and therefore could end up being killed by them, such as through heavy-handed rate-limiting, or even blocking all requests from our microservice outright.

---

For now, we can ask facebook if there is a method to assign topics to posts programatically, because an official solution would be much simpler.