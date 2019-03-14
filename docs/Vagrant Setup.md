# Environment Setup With Vagrant and Virtual Box

## Required Installs

* [Virtual Box](https://www.virtualbox.org/)
* [Vagrant](https://www.vagrantup.com/)
* [VS Code](https://code.visualstudio.com/) (_optional_) or favorite code editor

## Setup the VM Environment

This project already has a Vagrantfile and a bootstrap.sh file so no need to use the `vagrant init` command. Once the project is cloned to your desktop, run the below command.

```bash
vagrant up
```

Now the Virtual Machine (VM) environment is configured and ready to go.

## Using the VM

### Connecting to the VM

Once the VM is created, SSH into the VM using the below command:

```bash
vagrant ssh
...
# move into the shared folder directory
vagrant@precise64:~$ cd /vagrant/
```

Start programming from your host computer! Files here are available within the virtual machine and the host computer.

To get the application started you can use the following commands:

```bash
npm install
npm start
```

After the app has started, open [http://localhost:3000/](http://localhost:3000/) in your browser to see the app.

To exit the vagrant SSH session, from the terminal press `CTRL + D`.

### Coding Locally

You're able to develop on the host computer using an IDE or Editor such as VS Code. If the programs installed on the VM are not installed on the host computer, the IDE may not have access to the language's interpreter.

To change the interpreter environment for VS Code, follow [these instructions](https://code.visualstudio.com/docs/python/environments#_select-an-environment).

### Shutdown the VM

When you are done with the VM, run the below command to shutdown the VM and terminate any resource usage on the host machine. It will not remove the actual box file, just stop the processes being used.

```bash
# stop the VM
vagrant halt
```

Or, run the following command to delete all files associated with the VM.

```bash
# stop the VM & remove all files associated with the VM
vagrant destroy
```

## Updates to `bootstrap.sh`

The `bootstrap.sh` file contains the shell script for installing any necessary packages for development.

After following the steps above, if updates are made to either `bootstrap.sh` or the Vagrant file, run the below command to reload the VM without reimporting the base box image.

```bash
vagrant reload --provision
vagrant ssh
```

## Maintaining Vagrant Box Versions

### Updating the Base Box

If there's an update to the host box (Ubuntu in this case), run the below command:

```bash
vagrant box update
```

### Deleting Old Boxes

You can see all the boxes that are installed using:

```bash
vagrant box list
```

Then delete unused boxes by running:

```bash
vagrant box remove
```

## Resources

* [Vagrant Docs](https://www.vagrantup.com/docs/)
* [Up and Running with Vagrant](https://serversforhackers.com/s/vagrant): Tutorials
* [Vagrant: What, Why, and How](https://code.tutsplus.com/tutorials/vagrant-what-why-and-how--net-26500): Usage of Vagrant and [Puppet](https://puppet.com/products/puppet-enterprise)
* [Vagrant Configuration](https://www.youtube.com/playlist?list=PL2vfKi8eN0j72pmf3IjXhTXMXhm2LYlgz) YouTube playlist