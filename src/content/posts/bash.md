---
title: "Bash 102"
description: "Cool stuff about bash that you might not know"
date: "Mar 03 2025"
---

So I was recently going through the [GNU Bash manual](https://www.gnu.org/software/bash/manual/bash.pdf) and I found a few cool things that you might appreciate:

---
The history expansion character lets you operate on previously run commands. But there's a small problem. If you're like me and use multiple terminals (terminal emulators to be specific), then you might notice that `history` seems to be specific to certain session. This is because each terminal starts a fresh history list in memory and it's only written to disk on exit. I tried (for a solid two minutes) to see if I could sync history across all sessions with the help of the `history` and `shopt` commands and the `$PROMPT_COMMAND` variable but bash really doesn't seem to want to do it. But these commands are definitely worth checking out. `$PROMPT_COMMMAND` is an environment variable that specifies a set of commands to run everytime the prompt appears. This combined with the `$PS1` variable that lets you customize the prompt itself lets you do a bunch of cool things such as show the last exit code or the time it took to run the previous command on the prompt.

Anyhow, here's the cool stuff with the `!` character:

- `!!` - Repeat the last command. Note that this can be used anywhere in the command you supply, so `sudo !!` runs the previous command as su.
- `!<string>` - Runs the last command that started with the given string. The immediate usecase I can think of is restarting my qemu VMs with `!qemu` or even just `!q`. You can also use regex here. Of course, if you don't want to risk accidentally running `rm` when you hoped for `rustc`, you can also use `!r:p` or hit `Ctrl + Alt + e` to preview the command it would select.

Note that `!` can also be used as the logical negation operator.

Anyhow, back to the normal stuff

---

- You can have formatted strings, like in programming languages, with the `$'string'` syntax. For eg., `$'hello, \n world'` will break the familiar phrase into two lines and `$'\a'` will play the alert notification.
- `set -o posix` makes `bash` behave more like `/bin/sh` so as to more strictly follow the POSIX standard.
- Bash supports language translation in strings. Yeah, that's a weird one. [Check this out.](https://unix.stackexchange.com/questions/334760/how-to-use-locale-specific-translation-in-bash)

---

The following are fairly common redirection commands, but have a look anyway:

- `>` and `>>` redirect `stdout` to a file, the latter appends instead of overwriting. Add `2` at the start to redirect `stderr`.
- `2>` redirects `stderr`
- `2>&1` merges `stderr` and `stdout`
- Instead of `command1 2>&1 | command2`, you can do `command 1 |& command2`
- The above applies to redirection through `>` as well. You can do `&>` and `&>>` to redirect both streams to a file.
- `<` provides input from a file
- `<<` provides multi-line input
- `<<<` provides string input  

---

Logical operators like `&&` and `||` can be used to execute commands conditionally:

- `command1 && command2` runs `command2` only if `command1` executed successfully.
- `command1 || command2` runs `command2` if `command1` fails (non-zero return).

---

Brace expansions will save you whole seconds (if not minutes!).

`mkdir my_folder/{test, prod, dev}`

---

The 'environment' is literally just an array of strings that come in the usual map format. 

---

Alright, that's the end of this half-assed post. I promise more interesting stuff is coming soon.
