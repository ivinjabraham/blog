---
title: "Notes on Abraham Silberschatz - OS. Pt. 1"
description: "Notes I took while reading through the text."
date: "Feb 17 2025"
---
I certainly wasn't expecting my second post to be notes from a textbook, but I thought I might as well share something. Might write a blog on Android dev soon though. In the meantime, here are some thoughts I had while reading through Abraham Silberschatz's textbook on Operating Systems. You'll notice I've left out most of the sections, I consider them to be elementary. I've skimmed through parts of this textbook before, so I'm familiar with a lot of the ideas. 


# Chapter One

### 1.2.1 Interrupts

#### 1.2.1.1 Overview

Isn't knowing that the interrupt vector is held in low memory a security vulnerability?

#### 1.2.1.2 Implementation

So here we get a little abstraction over the electronics involved. How does the CPU "sense" a signal? What even is a signal? In electronics, a signal is just a varying voltage. In computers, we usually deal with binary discrete signals i.e they have two states and they're about as discrete as physics allows them to be. Now the interrupt line is actually active-low, which means it is said to be triggered or asserted when the voltage is low.

It's quite nice how vector 0 is divide error.

## 1.3 Computer-System Architecture

### 1.3.1 Single Processor Systems

There seems to be a small mistake in the line "The core is the component that executes instructions and registers for storing data locally.".

### 1.3.3 Clustered Systems

Writing a parallelizable program sounds interesting. Quite easy to demonstrate the effectiveness too.

## 1.11 Free and Open-Source Operating Systems

### 1.11.1 History

The stories behind TMRC and the Homebrew Club are extensively covered in <a href="https://en.wikipedia.org/wiki/Hackers:_Heroes_of_the_Computer_Revolution" class="text-blue-500 underline">this book</a> I was recently reading.
