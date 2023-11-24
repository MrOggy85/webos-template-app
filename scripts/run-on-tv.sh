#!/bin/bash

APP_INFO_ID="" # Fill in, same as appinfo.json `id`
APP_INFO_VERSION="" # Fill in, same as appinfo.json `version`

PACKAGE_NAME="${APP_INFO_ID}_${APP_INFO_VERSION}_all.ipk"

reset=$(tput sgr0)
green=$(tput setaf 2)
function info() {
  echo -e "${green}$@${reset}"
}

info "package..."
ares-package .

info "install..."
ares-install $PACKAGE_NAME

info "launch..."
ares-launch $APP_INFO_ID
