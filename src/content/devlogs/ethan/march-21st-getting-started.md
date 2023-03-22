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

<pre>i had a lot of ideas starting out with this, but i eventually decided to make the most basic 'text' thing i could - a text editor!

when i made <a href="https://textjam.github.io/winter2023/submissions/example-blascii/">blascii</a>, i used python's colorama and keyboard libraries. that, combined with a few terminal commands, was enough to create a simple real-time shooter. however, i knew i'd need something more robust if i wanted a reliable, responsive editor. the first thing i tried was the curses library, which works with <a href="https://docs.python.org/3/library/curses.html">python</a>, and is native to <a href="https://invisible-island.net/ncurses/">c/c++</a>. curses was good, but it's obtuse syntax drove me to find another option.

after some searching, i came across <a href="https://pypi.org/project/blessed/">blessed</a>. blessed had many, many desirable features, including:

- windows support
- syntactic sugar for moving the cursor, colours, and more
- context managers, rather than global settings (delicious)
- etc.

armed with this new approach, i started writing. you can find my first efforts on the <a href="https://github.com/ethandenny/tiny-text-editor/">github</a> - screenshots below!

<img alt="welcome to tiny text" src="/winter2023/assets/devlogs/ethan/march-21-1.png" />
<img alt="hello world. we can write text!" src="/winter2023/assets/devlogs/ethan/march-21-2.png" />
<img alt="hello world. we can wr (we can also write text inside other text) ite text!" src="/winter2023/assets/devlogs/ethan/march-21-3.png" />
<img alt="and delete text!" src="/winter2023/assets/devlogs/ethan/march-21-4.png" />
</pre>
