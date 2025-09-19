# This module is the python implementation of the `multiplier` WIT world

# The python export below represents the export of the `multiply` interface,
# which contains `multiply` as it's primary exported function.

from wit_world import exports

class Multiply(exports.Multiply):
    def multiply(self, x: int, y: int) -> int:
        return x * y
