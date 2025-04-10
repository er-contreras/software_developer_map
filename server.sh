#!/bin/bash

LOG_FILE="/usr/src/app/server.log"

ruby server/src/http_server.rb 2>&1 | tee "$LOG_FILE"
