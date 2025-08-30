+++
title = "Contributing to kworkflow - GSoC '25"
date = 2025-08-28

[taxonomies]
categories = ["patch-hub"]
tags = ["open-source", "google-summer-of-code"]

[extra]
featured = true
+++

On the ninth of May, earlier this year, [my proposal](/gsoc-proposal.pdf) to the Linux Foundation for Google Summer of Code got accepted. This post covers what I did before and after I got accepted, my thoughts about the program and tips for future contributors.

# amFOSS

What helped me the most was being a part of a Free and Open Source Software club called [amFOSS](https://amfoss.in/) at my university[^1]. Members of our club have been contributing and mentoring in GSoC for every year, for the past 16 or so years. So I was more than familiar with what GSoC was, how people applied and how to get started. Going forward, note that when I say "we", I'm likely referring to the members in the club.

Since I joined the club in my first semester, I've heard the stories of all the previous contributors and mentors. I learnt that to get accepted, you need:

> a. A strong proposal
>
> b. Previous contributions for credibility
>
> c. A suitable project

I rarely see the final point being mentioned online but I believe it can be the most important factor for getting accepted. More on that later.

# Searching For Organizations

We started looking for prospective organizations as early as October. It is important to get familiar with the project as well as the community as soon as possible, especially for complex projects. As our club has a history of contributing to Wikimedia, that was the primary focus for most of the members. I, however, was eager to contribute to the domain I was learning at the time—linux kernel development. The Linux Foundation was the obvious choice.

## Finding Prospective Organizations

This is a step that a lot of people get stuck on. What organization should you contribute to? The best approach is to contribute to something you personally use. This gives you some insights on what the community might want and what the project needs.

[gsocorganizations.dev](https://www.gsocorganizations.dev/) is your best friend here. It'll show you a list of every organization that has participated in GSoC since 2016, the number of accepted proposals per org. per year, previous projects and even roughly categorize organizations based on their domain.

You'll want to choose an organization that is accepting a reasonable amount of proposals for the number of projects they offer. If it seems low, try to find out why. Is the domain niche? Or is the organization looking for specific skillsets? There are some organizations that are looking only for Ph. Ds, or contributors based in a certain country. Some projects may require you to have extensive knowledge about and experience working in the associated field. Look at previous proposals, cold-email previous contributors and ask around in their community channels to find out about these hidden criteria.

If you did not find a single organization whose projects/products you use, you'll have to find projects that seem interesting to you and/or whose tech. stack you are familiar with. There's a bunch of orgs. that are great for beginners such as [Wikimedia](https://www.gsocorganizations.dev/organization/wikimedia-foundation/) and [INCF](https://www.gsocorganizations.dev/organization/incf/).

{% important(title="Avoid Organization Hopping") %}
I've seen a lot of people being unable to stick to an organization because they get bored of the project afterawhile. Some start hopping around organizations: setting up projects, tinkering with the code for a few days and then giving up to move to another organization and another project. I believe this is because they were not motivated by the project itself. If you truly believe in the organization's work and it's impact, I don't think you'll run into this problem.
{% end %}

## Finding Suitable Projects

Finding a project in a specific organization is relatively straightforward. Most organizations will have a page for their projects, such as [this one](https://wiki.linuxfoundation.org/gsoc/google-summer-code-2024) for the Linux Foundation. These should give you enough information about the project and what it entails. Some organizations may also allow you to submit your own project idea.

GSoC is a pretty competitive program and if you've chosen a popular organization, chances are there will be other contributors applying to the same project as you. Sometimes, organizations make this obvious by asking every potential contributor to identify themselves in some way. For example, for the linux kernel, patches by contributors are usually sent prefixed with the `[GSOC]` tag. This can help you size up the competition. Ideally, you want to stand out in the community so that your proposal also stands out. I believe this is a pretty underrated tip. Every previous contributor I knew were already on good terms with the mentors and had multiple commits in the project before they began writing their proposal.

I got pretty lucky here. When I went through the Linux Foundation's projects, I saw that `kworkflow` had a project that wanted Rust skills as well as experience with kernel development. These two just so happened to be my primary interests back then and it seemed to be a pretty niche project without a lot of competition.

In short, make sure you pick a project where you can stand out.

# Pre-proposal Submission

I've had a bit of experience with open source before GSoC, so I wasn't daunted by the idea of contributing. There are plenty of great guides on how you can get started with open source and I definitely recommend you read up about it beforehand. There are a few small things that make the maintainer's life easier such as writing good commit messages, explaining your PRs and following language conventions.

For `patch-hub`, I had around 14 PRs merged before I even wrote my proposal. They weren't significant changes by any means, but I tinkered with many different corners of the project until I knew the codebase and it's flaws well. As my project was about refactoring the codebase to fix aging architectural problems, these minor contributions helped me get a feel for what needs to be done.

# The Proposal

Again, I was lucky enough to be a part of a club that had given me plenty of opportunities to write formal documents and casual essays, from rulebooks to magazines.

I first came up with the structure for my proposal. The main elements being the table of contents, the synopsis, prerequisities and bio (as mandated by the Linux Foundation), objectives, proposed changes and timeline. I included a section title "Motivation" as well, to explain why I believe the changes are necessary.

Then I jot down every problem I encountered as I navigated the codebase, compiled them into categories and found the primary problems. For `patch-hub`, the primary problem was a Model that slowly became a [god-object](https://en.wikipedia.org/wiki/God_object). A few days of research and prototyping later, I came up with the idea of extending the current MVC architecture to an MVVM approach.

A rule I followed throughout the proposal was to never assume the reader knows anything more than what was previously discussed and what is obvious from the project. This meant some pages would have a dozen links and footnotes to elaborate.

I had also looked through proposals available on the internet to see what the standard usually was. And sent mine to be reviewed by my seniors at the club.

# Post-acceptance


# More About `patch-hub`

There still remains about a third of the proposal left to complete and I hope to complete it before the end of this year. My final year at college has proved to somehow be the easiest as well as the most hectic so far, and I feel totally out of control of my own schedule. When I do complete the proposal, I will be updating this post with links to more content about my work for `patch-hub`.

[^1]:You have to be a student at our university to be a part of amFOSS but that might change in the future.
