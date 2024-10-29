#!/bin/sh

FULLCHAIN="fullchain.pem"
PRIVKEY="privkey.pem"

if [ ! -f "$FULLCHAIN_PATH" ] || [ ! -f "$PRIVKEY_PATH" ]; then
    echo "Certificate not exists. Generating begin:"

    ./generate_cert.sh

    if [ $? -eq 0 ]; then
        echo "Certificate generated successfully."
    else
        echo "Error occurred!"
        exit 1
    fi
else
    echo "Certificate exists."
fi