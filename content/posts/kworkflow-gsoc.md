+++
title = "Contributing to kworkflow - GSoC '25"
date = 2025-08-28
updated = 2026-09-29

[taxonomies]
categories = ["patch-hub"]
tags = ["open-source", "google-summer-of-code"]

[extra]
featured = false
+++

On the ninth of May, earlier this year, [my proposal](/gsoc-proposal.pdf) to the Linux Foundation for Google Summer of Code was accepted. This post covers how I selected the project, built my proposal and approached the work after acceptance.


I was already familiar with Google Summer of Code through [amfoss](https://www.amfoss.in), my university's open-source community, which has had several contributors and mentors participate across the years. From talking to them, I thought that three things consistently seemed to matter:

> a. A strong proposal
>
> b. Previous contributions for credibility
>
> c. A suitable project

# Finding Prospective Organizations

I started looking for prospective organizations around October. [gsocorganizations.dev](https://www.gsocorganizations.dev/) was my best friend here. It shows a list of every organization that has participated in GSoC since 2016, the number of accepted proposals per org. per year, previous projects and even roughly categorize organizations based on their domain.

I was, however, eager to contribute to the domain I was learning at the time—linux kernel development. The Linux Foundation was the obvious choice.

# Finding a suitable project

I got pretty lucky here. When I went through the Linux Foundation's projects, I saw that `kworkflow` had a project that wanted Rust skills as well as experience with kernel development. These two just so happened to be my primary interests back then and the project also seemed fairly niche.

# Pre-proposal Submission

I've had a bit of experience with open source before GSoC, so I wasn't daunted by the idea of contributing. For `patch-hub`, I had around 14 PRs merged before I even wrote my proposal. They weren't significant changes by any means, but I tinkered with many different corners of the project until I knew the codebase and it's flaws well. As my project was about refactoring the codebase to fix aging architectural problems, these minor contributions helped me get a feel for what needs to be done.

# The Proposal

I first came up with the structure for my proposal. The main elements being the table of contents, the synopsis, prerequisites and bio (as mandated by the Linux Foundation), objectives, proposed changes and timeline. I included a section titled "Motivation" as well, to explain why I believe the changes are necessary.

Then I jotted down every problem I encountered as I navigated the codebase, compiled them into categories and found the primary problems. For `patch-hub`, the primary problem was a Model that slowly became a [god-object](https://en.wikipedia.org/wiki/God_object). A few days of research and prototyping later, I came up with the idea of extending the current MVC architecture to an MVVM approach.

I tried to never assume the reader knows anything more than what was previously discussed and what is obvious from the project. This meant some pages would have a dozen links and footnotes to elaborate. I had also looked through proposals available on the internet to see what the standard usually was. And sent mine to be reviewed by my seniors at amFOSS and the project's mentor.

# Post-acceptance

The technical aspect of my project needed a lot more research to ensure it was sound and I spent most of my community-bonding period trying to prototype a working development cycle. I've refactored many projects in the past before, but I mostly stuck to the "big bang" approach: wipe everything and start from scratch, copying old source as and when required. This time around, I wanted to integrate the architecture shift commit-by-commit without breaking compilation.

The best part about GSoC is undoubtedly the access to feedback from a seasoned mentor. I had a wonderful mentor, [David](https://davidbtadokoro.tech/), from whom I got to learn about communicating, working together in open source and of course, writing code for an open source project. We had meetings every now and then to review my progress, where I got to ask him all the questions and doubts I had about my approach and my code. 

[^1]:You have to be a student at our university to be a part of amFOSS but that might change in the future.

