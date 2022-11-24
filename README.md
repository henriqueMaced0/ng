# NG

## Pre-requisites

`docker version 17+` See how to download and install in [Docker site.][5]

`docker-compose version 1.20+` See how to download and install in [Docker site.][6]

## Set up

First clone the repository

```sh
git clone https://github.com/henriqueMaced0/ng.git
cd ng
```

Copy env vars:

```bash
cp .env.example .env
```

## Development

Start server in Development mode:

```sh
docker-compose up     # after execute the command access http://localhost:3333/users
```

Make Migration Schema:

```sh
docker exec -it postgres npx prisma migrate dev
```

[5]: https://docs.docker.com/install/linux/docker-ce/ubuntu/
[6]: https://docs.docker.com/compose/install/#install-compose
