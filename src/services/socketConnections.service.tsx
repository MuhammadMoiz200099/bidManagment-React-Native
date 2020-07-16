import {environment} from './../types/server-types/environment.d';
import io from 'socket.io-client';
import {connectionEvents} from './connection-events';
import {ILogin} from '../../server/mock/server-types/login';

export class SocketService {
  public socket;

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }

  requestLoginDetails() {
    this.socket.emit(connectionEvents.loginRequest);
  }

  responseLoginDetails(): Array<ILogin> {
    return this.socket.on(connectionEvents.loginResponse, (data) => {
      return data;
    });
  }
}

const socketService = new SocketService();

export default socketService;
