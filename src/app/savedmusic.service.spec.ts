import { TestBed, inject } from '@angular/core/testing';

import { SavedmusicService } from './savedmusic.service';

describe('SavedmusicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavedmusicService]
    });
  });

  it('should be created', inject([SavedmusicService], (service: SavedmusicService) => {
    expect(service).toBeTruthy();
  }));
});
