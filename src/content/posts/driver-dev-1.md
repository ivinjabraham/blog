---
title: "Linux Device Drivers pt.1"
description: "Guide to writing your own device drivers - assuming no prior knowledge."
date: "Mar 04 2025"
---

I'm planning to explore different fields soon, so I thought I'd make a series on driver development before I lose familiarity with it. I want to go over a few things in particular in this series: how Linux handles drivers, how to write basic drivers, how to write Rust drivers and general techniques and practises when working with the kernel. There are many guides, books and videos on how to write drivers for Linux. I learnt from `Linux Device Drivers` by Jonathan Corbet, Alessandro Rubini and GKH and I'd recommend anyone wishing to learn to check it out as well.

# Prerequisites

Before getting into drivers, I believe it's important to have a good idea of how a computer works, practical proficiency in using Linux systems and shells and at least intermediate-level knowledge of C (it's a small language and you can easily pick up the basics in a day). 

[NAND2TETRIS](https://www.nand2tetris.org/) is a very good start to learn the internal workings of a computer. If you're interested in writing systems software (which I assume you are), finishing the book and its exercises (which includes writing simple HDL for important circuits like registers and ALUs, and writing a compiler) should be a lot of fun. You might, however, find the book to have simplified a lot of things once you're done with it. I never found a good follow-up material for Nand2tetris, I just picked up different things from different resources.

If you aren't using Linux (or more accurately, GNU/Linux or other variations) as your main OS, it's high time to start. Any of the mainstream distros should be fine, including Arch. Picking the niche ones might cause you to spend more time debugging since there'd be less documentation for you to learn from. Since you're already reading a blog on the internet, I'd assume you know how to look up for help on your own and that's all you really need for popular distributions. By the way, I recommend [Arch Linux](https://archlinux.org/) or [Ubuntu](https://ubuntu.com/).

I'll also assume you're moderately experienced in programming in at least one language. In which case, [K&R's book on C](https://en.wikipedia.org/wiki/The_C_Programming_Language) should help you learn all you need to know. I wouldn't recommend spending more than a couple of days on this, since there are more practical ways to learn. Here's a [list of problems](https://github.com/amfoss/vidyaratna/blob/master/docs/domains/linux_kernel_dev/c_assignment.md) from the book, ordered by difficulty that you can use to learn faster.

The final step I'd include is learning how an operating system works. There are plenty of books on the topic, but I can't really recommend any since I think all of them are a bit too long winded. Perhaps just read a few blogs or summaries instead, you can explore the books later.

# Drivers

Now we're ready to get into drivers. Obviously you should, by now, know what a driver actually is. To put it simply, it's software for a particular type of hardware that interfaces with the operating system, the man-in-the-middle between the kernel and the hardware's own controller.

We're going to be writing them as loadable kernel modules (LKMs), as recommended for any driver that doesn't need tight integration with the kernel (such as ones working with the filesystem, the network stack or memory management). LKMs are pieces of code that you can load and unload into a running kernel, without ever needing to build the kernel itself. This is done via the `modprobe` or `insmod` command. These commands take a `.ko` (kernel object, the output of compiling a kernel module's source code), allocate memory in the kernel space, resolves the symbols, copies them to the allocated kernel space memory and then calls the `init` function.

## Kernel Modules 

Kernel modules are written like regular C programs. Except there are only kernel libraries that you can link to, which means no `stdio.h` that exports your `printf`. The reason for this should be fairly obvious. Libraries like `libc` are made for the userspace, they call systemcalls like `fork()` and `write()`, but these are implemented by the kernel in the first place. You can think of the kernel libraries as the kernelspace version of `libc` except it's a lot more lightweight so as to minimize the kernel's impact on memory. Here's what a simple "Hello, world" module looks like:

```c
#include <linux/init.h>
#include <linux/module.h>
MODULE_LICENSE("Dual BSD/GPL");

static int hello_init(void)
{
        printk(KERN_ALERT "Hello, world\n");
        return 0;
}

static void hello_exit(void)
{
        printk(KERN_ALERT "Goodbye, cruel world\n");
}

module_init(hello_init);
module_exit(hello_exit);
```
As mentioned earlier, kernel modules can only include kernel libraries such as `linux/init.h`. If you ever want your code to be in the mainline kernel or use any kernel symbols, then you must use a GPL-compatible license.

The next two functions should be easy to understand: `hello_init` is called when the module is loaded and `hello_exit` is called when the module is unloaded. This is done through the help of the `module_init` and `module_exit` macros. Have a good look at the `printk` function (the kernel equivalent of `printf`) as well; a common beginner mistake is separating the log level `KERN_*` and the string with a comma (`,`). These log level macros are just string literals, and C will automatically concatenate adjacent string literals.

---

A short post, but one that gives you enough content to work on for a few weeks. In the next one, we'll start out with a simple driver that emulates simple hardware.
