[Jasmine doc site](https://jasmine.github.io/)

# Documentation
* follow [docs](pages/docs_home.html)

# Advanced: providing a live demo

If you're making complicated or potentially controversial changes to the documentation, it
may make sense to provide a live demo that the reviewer can use to compare side-by-side with
the current production site.

## Setup

From the terminal in your local fork of `jasmine.github.io`, create the branch `gh-pages`:

- `git checkout master`
- `git checkout -b gh-pages`
- `git push -u origin HEAD`

Next, enable GitHub Pages for your fork:

- Open your browser and navigate to your fork in GitHub
- Click the `Settings` link
- Under the `GitHub Pages` header, select `Source` -> `gh-pages branch`
- The page will reload. Wait a few minutes, then click the link provided
- You now have a personal live demo under `https://<username>.github.io/jasmine.github.io/`

## Demoing your desired branch

Now that you've configured your live demo link to show the `gh-pages` branch, you can
update what is shown at any time by resetting that branch to your newest changes. For example,
if you've just pushed up the branch `my-complicated-change`, update your live demo
by entering the following in your terminal:

- `git checkout gh-pages`
- `git reset --hard my-complicated-change`
- `git push -f`

Wait a few minutes, and you live demo will now be showing your changes in the `my-complicated-change`
branch. You can then include a link to the demo in your pull request.
