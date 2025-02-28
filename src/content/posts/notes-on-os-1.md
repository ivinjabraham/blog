---
title: "Notes on Abraham Silberschatz - OS. Pt. 1"
description: "Notes I took while reading through the text."
date: "Feb 25 2025"
---
Originally posted on the 17th, last updated with important questions on the 28th.

I certainly wasn't expecting my second post to be notes from a textbook, but I thought I might as well share something. Might write a blog on Android dev soon though. In the meantime, here are some thoughts I had while reading through Abraham Silberschatz's textbook on Operating Systems. You'll notice I've left out most of the sections, I consider them to be elementary. I've skimmed through parts of this textbook before, so I'm familiar with a lot of the ideas. My notes generally tend to have questions rather than summaries, because it is way more efficient to jot down the questions that a section answers rather than explain what a section contains. This also helps you learn better, since if you cannot seem to answer any of these questions well, you probably do not understand it well enough.


# Chapter One

This chapter has three main questions: 
- What do operating systems do?
- What exactly is in a modern computer in terms of hardware?
- What are the major components of an operating system? 

## 1.1 What Operating Systems Do

- Define: hardware, operating system, system programs, application programs and users.

## 1.2 Computer-System Organization

- Explain the organization of a modern computer system

### 1.2.1 Interrupts

#### 1.2.1.1 Overview

- What are interrupts?
- What is an interrupt vector?

Isn't knowing that the interrupt vector is held in low memory a security vulnerability?

#### 1.2.1.2 Implementation

- How are interrupts implemented?
- What is interrupt chaining?
- What are maskable and non-maskable interrupts?

So here we get a little abstraction over the electronics involved. How does the CPU "sense" a signal? What even is a signal? In electronics, a signal is just a varying voltage. In computers, we usually deal with binary discrete signals i.e they have two states and they're about as discrete as physics allows them to be. Now the interrupt line is actually active-low, which means it is said to be triggered or asserted when the voltage is low.

Nowadays, IRQ (Interrupt Request) lines are being replaced with Message Signaled Interrupts (MSIs) which are in-band i.e passed through the same channel (the system bus) as regular data.

It's quite nice how vector 0 is divide error.

### 1.2.2 Storage Structure

- Explain storage and memory structure and hierarchy in modern computers.

### I/O Structure

- What is DMA?

## 1.3 Computer-System Architecture

### 1.3.1 Single Processor Systems

There seems to be a small mistake in the line "The core is the component that executes instructions and registers for storing data locally.".

- What is a processor, a CPU and a core?

### 1.3.2 Multiprocessor Systems

- What is Symmetric Multiprocessing?
- Why can't we keep adding more processors to increase performance?
- What is a shared system interrconnect?
- What is NUMA?
- What are blade servers?

### 1.3.3 Clustered Systems

- What are clustered systems? Where are they used?
- What is asymmetric and symmteric clustering?
- What is parallelization?

Writing a parallelizable program sounds interesting. Quite easy to demonstrate the effectiveness too.

## 1.11 Free and Open-Source Operating Systems

### 1.11.1 History

The stories behind TMRC and the Homebrew Club are extensively covered in <a href="https://en.wikipedia.org/wiki/Hackers:_Heroes_of_the_Computer_Revolution" class="text-blue-500 underline">this book</a> I was recently reading.

