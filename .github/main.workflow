workflow "Test and build on push" {
  on = "push"
  resolves = ["lint"]
}

action "lint" {
  uses = "stefanoeb/eslint-action@master"
  args = "--ext .ts,.js,.vue"
}
