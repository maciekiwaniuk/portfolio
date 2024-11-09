# Portfolio ![](https://github.com/maciekiwaniuk/portfolio/blob/main/public/img/icons/favicon-32x32.png?raw=true)

## Deployment

Deployment uses GitHub Actions to build and push Docker images to Docker Hub.

The Docker images to build are located in:

    docker/frontend/prod/Dockerfile
    docker/nginx/prod/Dockerfile

The Nginx configuration is in:

    docker/nginx/prod/nginx.conf

Deployment is set up to be served on a VPS, which supports IPv4, IPv6, or both.

After the build completes and images are pushed to Docker Hub, the deployment step is triggered:

    cd ~/apps/portfolio
    git pull
    docker compose -f docker-compose.prod.yml pull
    docker compose -f docker-compose.prod.yml down
    docker compose -f docker-compose.prod.yml up -d

The application should be cloned beforehand into the `/apps/portfolio` directory.

#### Required Secret Variables

The following secret variables must be included in the project repository to enable deployment:

- `DOCKERHUB_USERNAME`: Docker Hub account username
- `DOCKERHUB_PASSWORD`: Docker Hub account password
- `SSH_HOST`: The VPS host address
- `SSH_PORT`: The port for SSH access to the VPS
- `SSH_USERNAME`: The username for SSH access to the VPS
- `SSH_KEY`: The private SSH key for authenticating to the VPS
