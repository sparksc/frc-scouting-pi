# PouchDB Setup

Below are instructions on setting up PouchDB on a Raspberry Pi 3 and optionally Docker on your local development computer.

## Table of Contents

* [Node.JS (nvm) Installation on the Raspberry Pi](#nodejs-nvm-installation-on-the-raspberry-pi)
* [CouchDB Installation](#couchdb-installation)
    * [CouchDB 2.0 via Docker](#couchdb-20-via-docker)
    * [CouchDB 2.0 via Raspberry Pi 3](#couchdb-20-via-raspberry-pi-3)
        * [Change CouchDB's Default Database Location on the Pi](#change-couchdbs-default-database-location-on-the-pi)
    * [Add Users to CouchDB](#add-users-to-couchdb)
* [PouchDB Installation](#pouchdb-installation)

# Node.JS (nvm) Installation on the Raspberry Pi

If you are not installing CouchDB on the Raspberry Pi and are using Docker instead, you can skip this section and move on to the [next section](#couchdb-installation "CouchDB Installation"). CouchDB requires installation of CORS via npm (Node Package Manager) which requires Node.js to be installed on the Pi. We will install Node.js using [nvm](https://github.com/creationix/nvm/blob/master/README.markdown "nvm README") (Node Version Manager). This will allow for an easier installation and you have greater control of managing Node's version. Install nvm using the below cURL request:

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

Close your terminal or disconnect your current SSH session with the Pi.Open a new terminal or SSH session with the Pi. Now you can verify nvm installed:

```bash
command -v nvm
```

The above command should echo `nvm` if the installation was successful. Next we have to download and compile a version of node then use the installed version. Here we can run the latest release of node.

```bash
nvm install node
nvm use node
```

If desired, you can check your versions of Node and npm with the following commands:

```bash
node -v
npm -v
```

We are now set to install Node packages on the Raspberry Pi.

## CouchDB Installation

The installation instructions for [CouchDB](https://couchdb.apache.org/ "couchdb.apache.org") can be found on PouchDB's website [here](https://pouchdb.com/guides/setup-couchdb.html "pouchdb.com").

### CouchDB 2.0 via Docker

Docker can also be used to set up CouchDB on a local dev environment using the [klaemo/couchdb](https://hub.docker.com/r/klaemo/couchdb/ "hub.docker.com") image.

```bash
docker pull klaemo/couchdb
```

Once the container is running, the admin interface can be found at `http://dockerhost:5984/_utils/`

### CouchDB 2.0 via Raspberry Pi 3

An assumption is that [Raspbian](https://www.raspberrypi.org/downloads/ "www.raspberrypi.org") is burned to an SD card (at least 8 GB). [Etcher](https://etcher.io/ "etcher.io") is a great tool for burning SD cards. This was initially setup on a Raspberry Pi 3, but should work on other versions of the Pi.

First things first, be sure to update Raspbian.

```bash
sudo apt-get install update
```

Install CouchDB via the package manager and verify installation:

```bash
sudo apt-get install couchdb
curl localhost:5984
```

CouchDB should be running at [http://localhost:5984/](http://localhost:5984/) on the Raspberry Pi. The CouchDB Admin panel is only accessible from the Pi's Browser and no other computers on the local network.

For running a headless Pi, it would be beneficial to access the Admin Panel from your local dev server. To do so, we need to modify the `local.ini` configuration file. To learn more about modifying CouchDB's configurations, refer to the documentation found [here](http://docs.couchdb.org/en/2.0.0/config/intro.html?highlight=local.ini "docs.couchdb.org"). In a terminal on the Pi, run the following command:

```bash
sudo nano /etc/couchdb/local.ini
```

Find the `[httpd]` section and change the following line from:

```bash
;bind_address = 127.0.0.1
```

to

```bash
bind_address = 0.0.0.0
```

Notice the line has been uncommented by removing the `;`. Then save and exit the editor using the `ctrl+x` command followed by `y`.

Next we need to run CouchDB as the user `couchdb`.

```bash
sudo -i -u couchdb /usr/bin/couchdb
```

You should see a response similar to:
> Apache CouchDB is running as process 19595, time to relax.

If you know your Pi's IP address, you should now be able to access CouchDB's Admin panel from your local dev computer at the following address [http://192.168.0.100:5984/_utils/](http://192.168.0.100:5984/_utils/]). Be sure to replace the IP address (192.168.0.100) with your Pi's address. The IP address of your Pi can be found by using the `ifconfig` command from your Pi's terminal.

If the CouchDB Admin portal is not accessible from the above address, reboot the Pi, `sudo reboot`, then attempt to access the portal.

To complete the installation of CouchDB on the Pi, we must install CORS according to [PouchDB's installation instructions](https://pouchdb.com/guides/setup-couchdb.html#set-up-cors "pouchdb.com").

```bash
npm install -g add-cors-to-couchdb
add-cors-to-couchdb
```

We can now move onto setting up PouchDB.

#### Change CouchDB's Default Database Location on the Pi

 **---- THIS SECTION IS IN PROGRESS ----**

It may be a good idea to change CouchDB's default database storage location from the SD card to an external USB drive as SD cards are more vulnerable to fail after a large number of writes. This section is optional but recommended.

If using a hard drive with multiple partitions, I recommend following [this tutorial](https://pimylifeup.com/raspberry-pi-mount-usb-drive/ "pimylifeup.com") at [PiMyLifeUp](https://pimylifeup.com/ "pimylifeup.com") to manually mount an external hard drive or USB drive.

### Add Users to CouchDB

 **---- THIS SECTION IS IN PROGRESS ----**

Refer to [CouchDB's Authentication Database](http://docs.couchdb.org/en/2.0.0/intro/security.html#authentication-database "docs.couchdb.org") documentation for more information.

## PouchDB Installation

The installation instructions for [PouchDB](https://pouchdb.com/ "pouchdb.com") can be found on PouchDB's website [here](https://pouchdb.com/guides/setup-pouchdb.html#nodejs "pouchdb.com/guides/"). This dependency has already been installed for this project (refer to the [package.json](../package.json) file) but below are the steps that were taken to include PouchDB in the project for reference.

PouchDB was installed as a dependency using [npm](https://www.npmjs.com/package/pouchdb "npmjs.com/package/pouchdb") as well as the [redux-pouchdb npm package](https://www.npmjs.com/package/redux-pouchdb "npmjs.com/package/redux-pouchdb"):

```bash
npm install --save pouchdb redux-pouchdb
```

The redux-pouchdb npm package allows for and integration between PouchDB and Redux. The PouchDB database can then be created in the [configure_store.js](../src/store/configureStore.js) file. The PouchDB library was imported, then a database named `frc_scoutingpi` was created.

```javascript
import PouchDB from 'pouchdb';

const db = new PouchDB('frc_scoutingpi');
```
