# PouchDB Setup

# Installation

## CouchDB

The installation instructions for [CouchDB](https://couchdb.apache.org/) can be found on PouchDB's website [here](https://pouchdb.com/guides/setup-couchdb.html).

### CouchDB 2.0 via Docker

Docker can also be used to set up CouchDB on a local dev environment using the [klaemo/couchdb](https://hub.docker.com/r/klaemo/couchdb/) image.

```bash
docker pull klaemo/couchdb
```

Once the container is running, the admin interface can be found at `http://dockerhost:5984/_utils/`

### CouchDB 2.0 via Raspberry Pi 3

An assumption is that [Raspbian](https://www.raspberrypi.org/downloads/) is burned to an SD card (at least 8 GB). [Etcher](https://etcher.io/) is a great tool for burning SD cards. This was initially setup on a Raspberry Pi 3, but should work on other versions of the Pi.

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

For running a headless Pi, it would be beneficial to access the Admin Panel from your local dev server. To do so, we need to modify the `local.ini` configuration file. To learn more about modifying CouchDB's configurations, refer to the documentation found [here](http://docs.couchdb.org/en/2.0.0/config/intro.html?highlight=local.ini). In a terminal on the Pi, run the following command:

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

If you know your Pi's IP address, you should now be able to access CouchDB's Admin panel from your local dev computer at the following address [http://192.168.0.100:5984/_utils/](http://192.168.0.100:5984/_utils/]). Be sure to replace the IP address with your Pi's address. The IP address of your Pi can be found by using the `ifconfig` command from your Pi's terminal.

If the CouchDB Admin portal is not accessible from the above address, reboot the Pi, `sudo reboot`, then attempt to access the portal.

## PouchDB
