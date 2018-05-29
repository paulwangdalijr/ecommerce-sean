import { TestBed, inject } from '@angular/core/testing';

import { DetailsformService } from './detailsform.service';

describe('DetailsformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsformService]
    });
  });

  it('should be created', inject([DetailsformService], (service: DetailsformService) => {
    expect(service).toBeTruthy();
  }));
});
