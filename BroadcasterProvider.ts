/*
* Application-Broadcaster
*
* (c) Vladyslav Gaysyuk <mikield@icloud.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import {ServiceProvider} from '@adonisjs/fold'
import Broadcaster from './Broadcaster/index'

class BoardcastServiceProvider extends ServiceProvider {
  app: any
  /**
  * The register method called by ioc container
  * as a life-cycle method
  *
  * @method register
  *
  * @return {void}
  */
  register () {
    this.app.bind('Broadcaster', (app: any) => {
      return new Broadcaster
    })
  }
}

module.exports = BoardcastServiceProvider
