FROM node:16.10.0-alpine

COPY pkg1/package.json /srv/pkg1/
COPY pkg1/package-lock.json /srv/pkg1/
RUN cd /srv/pkg1 && npm install

COPY pkg2/package.json /srv/pkg2/
COPY pkg1/package-lock.json /srv/pkg2/
RUN cd /srv/pkg2 && npm install

COPY testcase1.js /srv/
COPY testcase2.js /srv/

CMD ["ash", "-c", "node /srv/testcase1.js; node /srv/testcase2.js"]
