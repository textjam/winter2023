---
title: at last, a base
date: 2023-03-17
---
<pre>a few days have passed, progress hasn't been super fast
since i am at the stage of building out the structure of
internal data structures / rendering and such, and also
getting a bit more jiggy with go since that is what i have
picked, mostly due to the amazing <a href="https://charm.sh">charm.sh</a> libraries

my idea, which i'm keeping simple at first and adding some
spice to down the <i>pipe</i>, is to build a <a href="https://en.wikipedia.org/wiki/Pipe_Mania">pipe mania</a> esq
game

the gist being
- there is a water source(s), and some output(s)
- if pipes are connected, water flows through them
- you can touch pipes to rotate them some direction
  to permit for flow
- while you might connect up some water input to
  output, it might stop you from connecting another,
  hence it is a puzzle

as far as what i plan on adding... i'm not sure!

i want to get some sort of playable mvp out asap
and then figure out what i will add to make it
more than just a pipe puzzle game afterwards,
however being accessible via ssh is honestly
a cool gimmick in itself so i feel like i don't
have to add a ton much to still be interesting :)

anyways enough about idea, here is video of what i
have so far:

<video controls src="/winter2023/assets/devlogs/jacks/basic-cell-buffer-ssh-server-thing.mp4"></video>

i don't have a ton of visual flare to show, and
other than just flipping 'pipes', no other game
logic, but this is the base that will sit quite
nicely below the rest of the incoming game logic

from a code perspective, whats being rendered /
mutated is a little struct i have named 'cellbuffer'

  type cellbuffer struct {
    cells  []rune
    stride int
  }

i keep a list of 'runes', and a stride, which
denotes the width of this cellbuffer

there is a selection of util functions, for
initializing/set/get/width/height, and then one
that converts a cellbuffer into a string

  func (c cellbuffer) String() string {
    var b strings.Builder
    for i := 0; i < len(c.cells); i++ {
      if i > 0 && i%c.stride == 0 && i < len(c.cells)-1 {
        b.WriteRune('\n')
      }
      b.WriteString(string(c.cells[i]))
    }
    return b.String()
  }

<i>nice</i>

the levels themselves are defined in .pipes files

  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
  ░                              ░
  ░  0════║══════════════║════0  ░
  ░                              ░
  ░  ╬                           ░
  ░                              ░
  ░  ╩ ╠ ╦ ╣                     ░
  ░                              ░
  ░  ║ ═                         ░
  ░                              ░
  ░  ╚ ╔ ╗ ╝                     ░
  ░                              ░
  ░                              ░
  ░  this is a test! oh yeah :)  ░
  ░                              ░
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

this is the 'level' from the video above

i want to be able to ship a statically compiled
binary that runs everything, so i use the embed
module built into go to bake the .pipes files
into the program

  //go:embed test-a.pipes
  var TestA string

then, in the cli logic, its as simple as using
<a href="https://github.com/charmbracelet/lipgloss">lipgloss</a> to define a style

  var style = lipgloss.NewStyle().
    Bold(true).
    Foreground(lipgloss.Color("#52bf90")).
    Background(lipgloss.Color("black"))

then, my view method on the <a href="https://github.com/charmbracelet/bubbletea">bubbletea</a> application
is defined as so

  func (m model) View() string {
    s := ""

    if m.width != m.minWidth || m.height != m.minHeight {
      s += fmt.Sprintf("resize the window to %dx%d\n", m.minWidth, m.minHeight)
      s += fmt.Sprintf("you are at %d x %d\n", m.width, m.height)
      return s
    }

    s += style.Render(m.board.String())

    return s
  }

as you can see most of the code is just telling
the user to resize the terminal if its too big,
the rest of it is all thats needed to draw the
cellbuffer to the terminal

hopefully the rest of the logic comes quickly,
i will need quite a bit of refactoring of the
String method to permit for different colors
and such so i can actually display water flowing
through these pipes, but hopefully not that much

:)</pre>
