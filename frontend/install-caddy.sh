
#!/bin/bash

# Add the Caddy repository GPG key
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo apt-key add -

# Add the Caddy repository to APT sources
echo "deb https://dl.cloudsmith.io/public/caddy/stable/deb/ubuntu $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/caddy-stable.list

# Update the package list and install Caddy
sudo apt-get update
sudo apt-get install caddy

# Add configuration to Caddyfile
echo "sunsun.dev {
    reverse_proxy localhost:3000
}

www.sunsun.dev {
    redir https://sunsun.dev{uri}
}

gateway.sunsun.dev {
    header {
        Access-Control-Allow-Origin \"https://sunsun.dev\"
        Access-Control-Allow-Methods \"POST\"
        Access-Control-Allow-Headers \"Content-Type\"
    }
    reverse_proxy localhost:8080
}" | sudo tee /etc/caddy/Caddyfile

# Restart Caddy
sudo systemctl restart caddy
