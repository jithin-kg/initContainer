FROM node:14

# create and change to app directory

WORKDIR /usr/src/app

COPY package*.json ./

#install production dependencies

RUN npm install

# copy local code to the container image
COPY . .

# Copy the entrypoint script and make it executable
# COPY entrypoint.sh /usr/local/bin/entrypoint.sh
# RUN chmod +x /usr/local/bin/entrypoint.sh

# Ensure the entrypoint script is executable
RUN chmod +x entrypoint.sh

# Set the entrypoint script to run when the container starts.
ENTRYPOINT ["./entrypoint.sh"]

CMD ["node", "index.js"]
