workflow "Test and build on push" {
  on = "push"
  resolves = ["Build"]
}

action "Build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}
