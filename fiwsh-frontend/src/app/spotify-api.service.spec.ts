import { TestBed, inject } from '@angular/core/testing';

import { SpotifyAPIService } from './spotify-api.service';

describe('SpotifyAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyAPIService]
    });
  });

  it('should be created', inject([SpotifyAPIService], (service: SpotifyAPIService) => {
    expect(service).toBeTruthy();
  }));
});
