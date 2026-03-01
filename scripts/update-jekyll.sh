#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if ! command -v ruby >/dev/null 2>&1; then
  echo "Ruby is not installed. Install Ruby first, then rerun this script."
  exit 1
fi

if ! command -v bundle >/dev/null 2>&1; then
  echo "Bundler is not installed. Install it with: gem install bundler"
  exit 1
fi

echo "Current versions:"
ruby -v
bundle -v

echo
echo "Updating Bundler and Jekyll gems (latest allowed by Gemfile constraints)..."
bundle update --bundler
bundle update jekyll minima jekyll-feed jekyll-seo-tag
bundle install

echo
echo "Verifying site build..."
SASS_SILENCE_DEPRECATIONS=import,global-builtin,color-functions bundle exec jekyll build

echo
echo "Update complete. Review changed files:"
git status --short
