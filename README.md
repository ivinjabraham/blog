# Blog

I can't think of anything creative to name this project nor do I think it really needs a specific name.

This is the source for [my self-hosted blog](http://blog.ivinjoelabraham.com). It uses [Zola](https://www.getzola.org/) with the [Serene theme](https://github.com/isunjn/serene/) by `isunjn`.

All posts are my own.

## Local development

Requires Zola 0.23.4 or newer; tested with 0.23.6 and Serene 6.0.0.
Initialize the theme with `git submodule update --init --recursive`, then run
`zola serve` to preview or `zola build` to generate `public/`.
Use `zola serve --drafts` to include draft notes in the preview.

Notes are timeline-only Markdown entries in `content/notes/`. Copy an existing
note and keep `include_in_feeds = false`; remove `draft = true` when ready to
publish. The timeline shows ten notes per page, grouped by date. Individual
note URLs redirect to their position in the timeline instead of showing a
standalone article.

The notes section uses the minimal logbook layout in `templates/notes.html`,
styled by `static/notes.css`.

## Server updates

Production output is committed in `public/` and excludes drafts. On the server:

```sh
git pull --ff-only
git submodule update --init --recursive
./deploy
```

The existing deploy script copies `public/` into the nginx document root.
After editing content, run `zola build` and commit the updated output before
deploying. Do not use `--drafts` for the production build.

## License

This project is open source and available under the [MIT License](LICENSE).
