---
title: mission (basically) accomplished
date: 2023-03-19
---

Well that was quicker than expected. As of last night, I've got the editor in a state where it basically does all I need for my use case. Not going to call it done yet, as there's still plenty of time yet for me to add some unplanned features, but it's in a state where if I didn't touch it for the rest of the jam I could still call it done.

Currently, you can:
- Add covers
- Edit covers
  - Can edit all fields with the exception of the `heading_lines` field, which is a bit more complicated to implement but I don't actually edit for any of my current usages of the tool
  - Cannot change the template, but there's only one template available for the tool currently anyway - I'll add support for changing the template once I add more templates
- Delete covers

#### next steps

- Add a UI to render covers, so the user doesn't need to drop out to the terminal to render changed covers
- Attempt to design & implement support for the `heading_lines` field

#### demo

<video src="https://cdn.discordapp.com/attachments/1082011752033685574/1086806865981210745/Peek_2023-03-18_21-49.mp4" controls="controls" />
