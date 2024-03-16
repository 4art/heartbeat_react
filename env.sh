#!/bin/sh
echo "Create a file to inject environment variables into the app at runtime"

cat <<EOF > /usr/share/nginx/html/env-config.js
window._env_ = {
  REACT_APP_BACKEND_URL: "${REACT_APP_BACKEND_URL}",
}
EOF
