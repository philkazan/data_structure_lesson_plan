## O(N)
### This is linear time complexity
Complexity goes up as input size goes up.
Double the input! Double the time! Doublemint gum!

### Non-Programming example
Continuing with the hotel room example from O(1). With O(1), I knew
I had to find room 13, and I knew where that was.

It's been a while since I've been at the hotel. I don't remember the layout. And now there's been an earthquake. All the room numbers have fallen off the doors.
I can't be sure of where room 13 is. But I do know that the cleaning staff left a mop on the room's kitchen floor.

I have to open each room door and check if the room contains the mop I'm looking for.
I may get lucky and only have to check 13 out of 100 rooms.
But I have to remember that Big O notation is describing worst cast scenarios - not best or average.


### Programming example
Finding a specific value in an array.
```
# avialable rooms
const rooms: number[] = [1,4,10,2,5,1,50,13];

function findRoom(target: number, list: number[]) {
  for (const num of list) {
      if (num === target) {
          return true;
      }
  }
  return false;
}
```