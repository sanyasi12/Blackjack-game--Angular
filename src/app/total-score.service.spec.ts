import { TestBed } from '@angular/core/testing';

import { TotalScoreService } from './total-score.service';

describe('TotalScoreService', () => {
  let service: TotalScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Get total Score of each player", () => {
    expect(service.getScore([10, 20])).toBe(30)
  });
});
