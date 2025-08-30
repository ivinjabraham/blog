+++
title = "An MVVM TUI Rust application"
date = 2025-08-28
draft = true

[taxonomies]
categories = ["patch-hub"]
tags = ["rust", "software-architecture", "tui"]
+++

Earlier this year, I started contributing to [`patch-hub`](https://github.com/kworkflow/patch-hub), a TUI application written for kernel maintainers and developers. `patch-hub` was an MVC application that was suffering from a bloated Model. As developers added more features, the Model kept getting harder to maintain. My proposed solution was to extend MVC into MVVM[^1]. This post covers a potential implementation approach for the MVVM pattern for a `ratatui` TUI application.

# The Core Idea

MVVM suggests three entities:

i. The Model, where we will be holding the data required for our application, free from any sort of business logic.

ii. The View, which is quite literally the entity that handles user's view of the application.

iii. The ViewModel, the middleman between the Model and the View, which will be providing the View with the required data both from it's own internal store as well as from the Model.

[^1]: Will be covering details about the transition in a later post.
