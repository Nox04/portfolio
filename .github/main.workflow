workflow "Test and build on push" {
  on = "push"
  resolves = ["lint"]
}

action "lint" {
  uses = "stefanoeb/eslint-action@master"
  args = "'*/**/*.{js,ts,vue}' --ignore-path .gitignore"
}
