#!/bin/sh

# Load environment variables from the file
set -a  # automatically export all variables
# source /etc/env/app.env
. /etc/env/app.env
set +a

# Run the command specified as CMD in the Dockerfile, e.g., "node index.js"
exec "$@"
