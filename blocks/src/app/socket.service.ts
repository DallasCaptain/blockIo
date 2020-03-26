import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { Observable } from 'rxjs'
import { Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket
  colors = {
    1: 'red',
    2: 'blue',
    3: 'green',
    4: 'purple',
    5: 'white'
  }
  constructor() { }

  blockclicked(oldcolor) {
      this.socket.emit('blockclicked',oldcolor)
    }

  connect(): Subject<MessageEvent>{
    this.socket = io.connect('http://localhost:80');
    console.log('connected')


    let observable = new Observable(observer => {
      this.socket.on('greeting', (data) => {
        //console.log('Recieved a message from websocket server');
        observer.next({message:'log',data:data})
      })

      this.socket.on('updateBlock', (data)=>{
        console.log('in updateblock')
        observer.next({message:'update',
        data: data})
      })


      return () => {
        this.socket.disconnect();
      }
    })

    let observer = {
      next: (data: Object) => {
        this.socket.emit('message', data)
      },

    }
    return Subject.create(observer, observable)
  }

}

