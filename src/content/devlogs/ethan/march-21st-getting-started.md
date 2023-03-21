---
title: getting started
date: 2023-03-21
---

<style>
  img {
    width: 100%;
    height: auto;
  }
</style>

<pre>I had a lot of ideas starting out with this, but I eventually decided to make the most basic 'text' thing I could - a text editor!

When I made <a href="https://textjam.github.io/winter2023/submissions/example-blascii/">BLASCII</a>, I used Python's colorama and keyboard libraries. That, combined with a few terminal commands, was enough to create a simple real-time shooter. However, I knew I'd need something more robust if I wanted a reliable, responsive editor. The first thing I tried was the curses library, which works with <a href="https://docs.python.org/3/library/curses.html">Python</a>, and is native to <a href="https://invisible-island.net/ncurses/">C/C++</a>. curses was good, but it's obtuse syntax drove me to find another option.

After some searching, I came across <a href="https://pypi.org/project/blessed/">blessed</a>. Blessed had many, many desirable features, including:

- Windows support
- Syntactic sugar for moving the cursor, colours, and more
- Context managers, rather than global settings (delicious)
- Etc.

Armed with this new approach, I started writing. You can find my first efforts on the <a href="https://github.com/EthanDenny/tiny-text-editor/">GitHub</a> - screenshots below!

<img alt="welcome to tiny text" src="/winter2023/assets/devlogs/ethan/march-21-1.png" />
<img alt="hello world. we can write text!" src="/winter2023/assets/devlogs/ethan/march-21-2.png" />
<img alt="hello world. we can wr (we can also write text inside other text) ite text!" src="/winter2023/assets/devlogs/ethan/march-21-3.png" />
<img alt="and delete text!" src="/winter2023/assets/devlogs/ethan/march-21-4.png" />
</pre>
