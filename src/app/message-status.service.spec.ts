import { TestBed } from '@angular/core/testing';

import { MessageStatusService } from './message-status.service';

describe('MessageStatusService', () => {
  let service: MessageStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
