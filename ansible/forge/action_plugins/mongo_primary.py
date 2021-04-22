#! /usr/bin/env python
from ansible.plugins.action import ActionBase
from ansible.errors import AnsibleError
from pymongo import MongoClient

class ActionModule(ActionBase):

    def run(self, tmp=None, task_vars=None):
        templar = self._templar
        display = self._display
        args = self._task.args

        mongo_host = self._task.args.get('host')
        display.v('mongo host: ' + mongo_host)
        mongo_port = self._task.args.get('port') if self._task.args.get('port') is not None else 27017
        display.v('mongo port: ' + str(mongo_port))

        client = MongoClient(mongo_host, mongo_port)
        primary_address, primary_port = client.admin.command('isMaster', 1)['primary'].split(':')

        return {
            'primary_address': primary_address,
            'changed': False
        }
