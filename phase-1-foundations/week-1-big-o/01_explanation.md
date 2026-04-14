## O(1)
### This is constant time complexity.
It means that regardless of input, the operation/task will always take the same amount of time.

### A non-programming example:
Go find room number 13 in this spooky hotel.
It doesn't matter if there are 20 rooms or 10,000 rooms.
I'll be heading straight to room 13 every time.
There is one step - find room 13.

In this example, I'm not comparing rooms. This example bothers me a little bit, because walking to a room seems variable given a different hotel layout. But it'll do for now.

### Programming example
```
# available rooms
const rooms = [1,2,3,4,5,6,7,8,9,10,11,12,13];
# O(1) - find item directly via its index
room[12];
```
### What's a good thing to remember O(1) operations by?
Never need to search or count or loop.