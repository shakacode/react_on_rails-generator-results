# react_on_rails Generator Results

A series of Pull Requests exemplifying the results of running the generators from [react_on_rails](https://github.com/shakacode/react_on_rails/).

For each release, we'll be publishing a set of pull requests that show the various permutations of running the generator on top of a brand new Rails 4 App (`rails new my_app`).

You can view the various options after installing the react_on_rails gem by running `rails generate react_on_rails:install --help`:

```
Usage:
  rails generate react_on_rails:install [options]

Options:
  -R, [--redux], [--no-redux]                          # Install Redux gems and Redux version of Hello World Example
  -S, [--server-rendering], [--no-server-rendering]    # Add necessary files and configurations for server-side rendering
  -j, [--skip-js-linters], [--no-skip-js-linters]      # Skip installing JavaScript linting files
  -L, [--ruby-linters], [--no-ruby-linters]            # Install ruby linting files, tasks, and configs
  -H, [--heroku-deployment], [--no-heroku-deployment]  # Install files necessary for deploying to Heroku
  -b, [--skip-bootstrap], [--no-skip-bootstrap]        # Skip installing files for bootstrap support

Runtime options:
  -f, [--force]                    # Overwrite files that already exist
  -p, [--pretend], [--no-pretend]  # Run but do not make any changes
  -q, [--quiet], [--no-quiet]      # Suppress status output
  -s, [--skip], [--no-skip]        # Skip files that already exist

Description:
    Create react on rails files for install generator.
```

See the [react_on_rails README.md](https://github.com/shakacode/react_on_rails/blob/master/README.md) for more information.

Note: We support [react-router](https://github.com/rackt/react-router/), even with server rendering, but we have not yet created generator options for that.

We're discussing what goes into the next round of generators in [React on Rails #245](https://github.com/shakacode/react_on_rails/issues/245)

# Annotated PRs
These have commentary on why the generator does what it does
* [redux v1.1.1](https://github.com/shakacode/react_on_rails-generator-results/pull/123)

# v2.0.1 Diffs
* [v3.0 Pull Requests](https://github.com/shakacode/react_on_rails-generator-results/pulls)
* [basic](https://github.com/shakacode/react_on_rails-generator-results/pull/210)
* [basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/211)
* [redux](https://github.com/shakacode/react_on_rails-generator-results/pull/212)
* [redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/213)
* [basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/214)
* [basic-skip-bootstrap](https://github.com/shakacode/react_on_rails-generator-results/pull/215)
* [basic to basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/216)
* [redux to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/217)
* [basic-server-rendering to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/218)
*	[basic to redux](https://github.com/shakacode/react_on_rails-generator-results/pull/219)
* [basic to basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/220)
* [basic to basic-skip-bootstrap](https://github.com/shakacode/react_on_rails-generator-results/pull/221)

# v2.0.1 Diffs
* [basic](https://github.com/shakacode/react_on_rails-generator-results/pull/197)
* [basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/198)
* [redux](https://github.com/shakacode/react_on_rails-generator-results/pull/199)
* [redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/200)
* [basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/201)
* [basic-skip-bootstrap](https://github.com/shakacode/react_on_rails-generator-results/pull/202)
* [basic to basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/203)
* [redux to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/204)
* [basic-server-rendering to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/204)
*	[basic to redux](https://github.com/shakacode/react_on_rails-generator-results/pull/206)
* [basic to basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/207)
* [basic to basic-skip-bootstrap](https://github.com/shakacode/react_on_rails-generator-results/pull/208)

# v1.2 Diffs
* [basic](https://github.com/shakacode/react_on_rails-generator-results/pull/144)
* [basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/145)
* [redux](https://github.com/shakacode/react_on_rails-generator-results/pull/146)
* [redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/147)
* [basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/148)
* [basic-skip-bootstrap](https://github.com/shakacode/react_on_rails-generator-results/pull/149)
* [basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/150)
* [redux to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/151)
* [basic-server-rendering to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/152)
*	[basic to redux](https://github.com/shakacode/react_on_rails-generator-results/pull/153)
* [basic to basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/154)
* [basic to basic-skip-bootstrap](https://github.com/shakacode/react_on_rails-generator-results/pull/155)

# v1.1.1 Diffs
* [basic](https://github.com/shakacode/react_on_rails-generator-results/pull/121)
* [basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/122)
* [redux](https://github.com/shakacode/react_on_rails-generator-results/pull/123): **ANNOTATED**
* [redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/124)
* [basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/125)
* [basic-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/126)
* [redux to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/127)
*	[basic to redux](https://github.com/shakacode/react_on_rails-generator-results/pull/129)
* [basic-server-rendering to redux-server-rendering](https://github.com/shakacode/react_on_rails-generator-results/pull/128)
* [basic to basic-heroku-deployment](https://github.com/shakacode/react_on_rails-generator-results/pull/130)
