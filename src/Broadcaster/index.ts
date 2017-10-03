/*
* Application-Broadcaster
*
* (c) Vladyslav Gaysyuk <mikield@icloud.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/


const Redis = use('Redis') as Redis

class Broadcaster {
  channel: string
  data: object
  broadcastEvent: string
  socket: string
  broadcastTo: string

  into(channel: string): this {
    this.channel = channel
    return this;
  }

  intoPrivate(channel: string): this {
    this.channel = `private-${channel}`
    return this
  }

  intoPresence(channel: string): this {
    this.channel = `presence-${channel}`
    return this
  }

  with(data: object): this{
    this.data = data
    return this
  }

  event(event: string): this{
    this.broadcastEvent = event
    return this
  }

  toOther(request: Request): this{
    this.socket = request.plainCookie('io')
    return this
  }

  to(request: Request): this{
    this.broadcastTo = request.plainCookie('io')
    return this
  }

  async broadcast(){
    let channel = this.channel || '*'
    Redis.publish(channel,JSON.stringify({
      event: this.broadcastEvent || '*',
      socket: this.socket || null,
      to: this.broadcastTo || null,
      data: this.data || {}
    }))
  }
}

module.exports = Broadcaster
