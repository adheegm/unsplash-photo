import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://api.unsplash.com';

const HEADER = {
  'Content-Type': 'application/json; charset=utf-8',
  'Accept-Version': 'v1',
  'Authorization': `Client-ID aa2f3c3be8125f1fc86e3007153420c4e446c19b7b0c6d80a6257b281c9a0dc5`
};

@Injectable()
export class AppService {
  baseUrl: string;
  access_key: string;
  secret_key: string;

  constructor(private http: HttpClient) { }

  getUsers(q: string) {
    return this.http.get(`${BASE_URL}/search/users?per_page=12`, {
      headers: {
        ...HEADER
      }, params: {
        query: q
      }
    });
  }

  getUserPhoto(username: string) {
    return this.http.get(`${BASE_URL}/users/${username}/photos?per_page=12`, {
      headers: {
        ...HEADER
      }
    });
  }
}
