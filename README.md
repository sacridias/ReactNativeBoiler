# ReactNativeBoiler

'''
So here is the story of a painful evening.
I tried to use a template, and install the obvious components, vimeo, googlecast, etc.
Something crashed it all, so I decided to build from the ground up adding a layer at a time to figure it out.

In the end I had to find a way around vimeo, and for the sake of deadlines, there are still lots of issues.

...

Also note that I do not have a google chrome TV, so I could not test the google cast as far as I could tell and setting up VMs to talk is something I ran out of time to do.
.  Hope it works.
There are a lot of little things in the package, and definitely something that needs to probably be cleaned up, when time allows.

'''

## Additional notes

This was relatively thrown together.  I didn't use proptypes for property checking, or document the code very well.  I also have a lot to clean up.
However with the timeline presented, and the issues I am sure you expected, the goal was to get it working.

And yes the video starting on launch is an undocumented feature.

Note: I am starting this off as a project, since my last boiler plate was owned by my previous employer.  I would like to find some common interest and people to help work on it.  We can discuss.

I intend to covert this library to TypeScript, and put a lot more validation behind it.
My idea is to have multiple common setups in branches to allow you to  merge a few branches for what you need and run with it.
This way you can avoid making mistakes or having issues editing the various files for builds/etc.  With some of hte more complicated mergers as special branches.
