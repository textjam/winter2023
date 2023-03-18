---
title: it begins
date: 2023-03-17
---

#### my project

At the start of this year, I built a tool called [spotify-cover-maker](https://github.com/nint8835/spotify-cover-maker). It takes a YAML file describing a list of covers to generate, and uses that data to render a cover based on a template. For example, the following YAML file:

```yaml
covers:
  - name: apr-2020
    template: gradient
    title: April
    subtitle: 2020
```

Generates the cover below:

![spotify-cover-maker example](https://raw.githubusercontent.com/nint8835/spotify-cover-maker/main/sample-cover.png)

A user can define as many covers as they want in the YAML file, and the tool will attempt to make generation as fast as possible by only generating the covers that have changed since the last time the tool was run.

In order to make it easier for users to modify their cover definition file, I had the idea to build a text-based UI into the tool to manage the file. I had been wanting to use [Textual](https://textual.textualize.io/) for this, and conveniently right around when I had the idea Jack informed me of the plans for the Textjam, so I figured this would be the perfect project to work on.

#### progress

The initial progress was slow due to me having to figure out how Textual worked - a lot of the ways it worked were not exactly what I expected and the docs never really communicated it, but with a bit of trial and error I was able to figure it out and get going, and dev has been much smoother since then.

I've got a basic UI working, which actually loads & saves the user's `covers.yaml` file. It consists of a left sidebar, allowing the user to select the cover to work on, as well as a right pane which will allow them to edit it. At this point, I think the sidebar is basically done, but I've only just started working on the right pane - as of time of writing it's just a markdown renderer that renders the JSON representation of the cover's config.

#### next steps

- figure out Pydantic introspection, attempt to dynamically generate the right pane based on the cover's config schema
  - worst case scenario implement a per-template widget setup
- customize YAML saving, to produce cleaner YAML files
- add a delete cover option

#### demo

<video src="https://cdn.discordapp.com/attachments/1082011752033685574/1085358573384638534/Peek_2023-03-14_21-55.mp4" controls="controls" />