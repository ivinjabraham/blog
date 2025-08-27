+++
template = 'home.html'

[extra]
lang = 'en'

# Show footer in home page
footer = true

# If you don't want to display id/bio/avatar, simply comment out that line
name = "Ivin Joel Abraham"
id = "ivinjabraham"
bio = "i do things. sometimes."
links = [
    { name = "GitHub", icon = "github", url = "https://github.com/ivinjabraham" },
    { name = "Twitter", icon = "twitter", url = "https://x.com/ivinjabraham" },
    { name = "Email", icon = "email", url = "mailto:me@ivinjoelabraham.com" },
]

# Show a few recent posts in home page
recent = false
recent_max = 15
recent_more_text = "more »"
date_format = "%b %-d, %Y"
+++
{% quote(cite="Lewis Caroll") %}
Would you tell me, please, which way I ought to go from here?

> That depends a good deal on where you want to get to.

I don't much care where.

> Then it doesn't much matter which way you go.

...So long as I get somewhere.

> Oh, you're sure to do that, if only you walk long enough.”
{% end %}
