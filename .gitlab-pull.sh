#!/bin/bash

# Get servers list
set -f
shell=(ssh -o StrictHostKeyChecking=no "${SSH_USER_PRD_INT}@${SSH_PRD_INT}")
git_token=$DEPLOY_TOKEN

echo "Deploy React Frontend project on server ${name} ${url} ${CI_JOB_STAGE}"
if  [ "deploy" = $CI_JOB_STAGE ]; then
    echo "${CI_JOB_STAGE}"
    ssh -o StrictHostKeyChecking=no "${SSH_USER_PRD_INT}@${SSH_PRD_INT}" bash <<EOF
    #fase docker staging
    cd /home/administrator
    echo "Removing previous clone..."
    if [ ! -d $CI_PROJECT_NAME ]; then
        echo "folder ${CI_PROJECT_NAME} tidak di temukan"
    else
        rm -r $CI_PROJECT_NAME
        echo "folder ${CI_PROJECT_NAME} berhasil di hapus"
    fi

    echo "Fresh Cloning into remote repo... ${CI_PROJECT_NAME}"
    if git clone https://${token_pull}@gitlab.bki.co.id/${CI_PROJECT_PATH}.git; then
        echo "✅ Clone successful"
    else
        echo "❌ Clone failed. Please check:"
        echo "   1. DEPLOY_TOKEN is valid and not expired"
        echo "   2. Token has proper permissions for repository access"
        echo "   3. Repository path is correct: ${CI_PROJECT_PATH}"
        exit 1
    fi
    cd ${CI_PROJECT_NAME}

    #Removing previus container
    echo "Removing previous container"
    sudo docker compose -f docker-compose.prod down -v

    echo "Create container"
    sudo docker compose -f docker-compose.prod.yml build

    echo "run container to daemon"
    sudo docker compose -f docker-compose.prod.yml up -d

    echo "✅ React Frontend deployed successfully!"

EOF
elif  [ "codeproduction" = $CI_JOB_STAGE ]; then
    ssh -o StrictHostKeyChecking=no "${SSH_USER_PRD_INT}@${SSH_PRD_INT}" bash <<EOF
    #fase codeproduction
    cd /home/administrator
    if [ ! -d $CI_PROJECT_NAME ]; then
        echo "Cloning into remote repo... ${CI_PROJECT_NAME}"
        if git clone https://${token_pull}@gitlab.bki.co.id/${CI_PROJECT_PATH}.git; then
            echo "✅ Clone successful"
        else
            echo "❌ Clone failed. Please check:"
            echo "   1. DEPLOY_TOKEN is valid and not expired"
            echo "   2. Token has proper permissions for repository access"
            echo "   3. Repository path is correct: ${CI_PROJECT_PATH}"
            exit 1
        fi

        cd $CI_PROJECT_NAME
        sudo chmod -R 777 ./
    else
        echo "Pulling remote repo origin... ${CI_PROJECT_NAME}"
        echo "token_pull: ${token_pull}"
        echo "CI_PROJECT_PATH: ${CI_PROJECT_PATH}"
        echo "full url: https://${token_pull}@gitlab.bki.co.id/${CI_PROJECT_PATH}.git"
        cd $CI_PROJECT_NAME
        git reset --hard HEAD
        if git pull origin main; then
            echo "✅ Pull successful"
        else
            echo "❌ Pull failed. Please check:"
            echo "   1. DEPLOY_TOKEN is valid and not expired"
            echo "   2. Token has proper permissions for repository access"
            echo "   3. Network connectivity to gitlab.bki.co.id"
            exit 1
        fi

        cp -f env-prod .env
        echo "Rebuilding and restarting container..."
        sudo docker compose -f docker-compose.prod.yml down
        sudo docker compose -f docker-compose.prod.yml build --no-cache
        sudo docker compose -f docker-compose.prod.yml up -d

        echo "✅ React Frontend updated and restarted!"
    fi
EOF
elif  [ "staging_container" = $CI_JOB_STAGE ]; then
    echo "${CI_JOB_STAGE}"
    ssh -o StrictHostKeyChecking=no "${SSH_USER_STAGING}@${SSH_STAGING}" bash <<EOF
    #fase docker staging
    cd /home/administrator
    echo "Removing previous clone..."
    if [ ! -d $CI_PROJECT_NAME ]; then
        echo "folder ${CI_PROJECT_NAME} tidak di temukan"
    else
        rm -r $CI_PROJECT_NAME
        echo "folder ${CI_PROJECT_NAME} berhasil di hapus"
    fi

    echo "Fresh Cloning into remote repo... ${CI_PROJECT_NAME}"
    if git clone https://${token_pull}@gitlab.bki.co.id/${CI_PROJECT_PATH}.git; then
        echo "✅ Clone successful"
    else
        echo "❌ Clone failed. Please check:"
        echo "   1. DEPLOY_TOKEN is valid and not expired"
        echo "   2. Token has proper permissions for repository access"
        echo "   3. Repository path is correct: ${CI_PROJECT_PATH}"
        exit 1
    fi
    cd ${CI_PROJECT_NAME}

    cp -f env-dev .env
    #Removing previus container
    echo "Removing previous container"
    sudo docker compose -f docker-compose.staging.yml down -v

    echo "Create container"
    sudo docker compose -f docker-compose.staging.yml build

    echo "run container to daemon"
    sudo docker compose -f  .yml up -d

    echo "✅ React Frontend deployed successfully!"

EOF
elif  [ "pull_code" = $CI_JOB_STAGE ]; then
    ssh -o StrictHostKeyChecking=no "${SSH_USER_STAGING}@${SSH_STAGING}" bash <<EOF
    #fase pullcode
    cd /home/administrator
    if [ ! -d $CI_PROJECT_NAME ]; then        
        echo "Cloning into remote repo... ${CI_PROJECT_NAME}"
        git clone https://${token_pull}@gitlab.bki.co.id/${CI_PROJECT_PATH}.git
        cd $CI_PROJECT_NAME
        sudo chmod -R 777 ./
    else
        echo "Pulling remote repo origin... ${CI_PROJECT_NAME}"
        echo "token_pull: ${token_pull}"
        echo "CI_PROJECT_PATH: ${CI_PROJECT_PATH}"
        echo "full url: https://${token_pull}@gitlab.bki.co.id/${CI_PROJECT_PATH}.git"
        cd $CI_PROJECT_NAME
        git reset --hard HEAD
        if git pull origin main; then
            echo "✅ Pull successful"
        else
            echo "❌ Pull failed. Please check:"
            echo "   1. DEPLOY_TOKEN is valid and not expired"
            echo "   2. Token has proper permissions for repository access"
            echo "   3. Network connectivity to gitlab.bki.co.id"
            exit 1
        fi
        cp -f env-dev .env
        echo "Rebuilding and restarting container..."
        sudo docker compose -f docker-compose.staging.yml down
        sudo docker compose -f docker-compose.staging.yml build --no-cache
        sudo docker compose -f docker-compose.staging.yml up -d

        echo "✅ React Frontend updated and restarted!"
    fi
EOF
fi