#!/usr/bin/env bash
# See https://docs.docker.com/build/building/multi-platform/

# Create a new builder instance
# docker buildx create --name mybuilder

# Use the builder instance
# docker buildx use mybuilder

# Inspect the builder instance
# docker buildx inspect --bootstrap

# Build the image and push
docker buildx build --platform linux/amd64,linux/arm64 -t jiasir/nextjs:latest --push .

# Push the image
# docker buildx push jiasir/nextjs:latest

# Inspect the image
# docker buildx imagetools inspect nextjs:latest
