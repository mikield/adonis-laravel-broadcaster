# adonis-laravel-broadcaster
AdonisJS package to Broadcast events to Laravel Echo Server. (not to Laravel Echo directly)

# Usage
```js
const Broadcaster = use('Broadcaster')
Broadcaster
      .event('MyAwesomeEvent')
      .into('MyAwesomeChannel')
      .with({"My Awesome Message"}).broadcast()
```
Of course from the client side **do not use `.listen` method on channel** - because this will listen for `App.Events.MyAwesomeEvent` event and not for `MyAwesomeEvent`. Use **`.on`** instead.

Even if you want to use `.listen` method - modify the `Broadcaster` and append to the event name  `App.Events.`. Should be something like this:
```js
event(event){
    this.broadcastEvent = "App.Events." + event
    return this
  }
```

As you see in `Broadcaster` there is method called `.to(request)` and it takes the `socket.id` from the cookies. Its kinda private message but for guests of your site.

To use it - take a look at 
https://github.com/mikield/laravel-echo-server/blob/master/src/echo-server.ts#L224 
and 
https://github.com/mikield/laravel-echo-server/blob/master/src/echo-server.ts#L179

You can use this package too https://github.com/mikield/laravel-echo-server **but I dont garantie latest updates from the main project!**

But you can use `.toOther(request)`, it will set the `sokectId` that shall be ignored and it works with the main `laravel-echo-server` repo.
