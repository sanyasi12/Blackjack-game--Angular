import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MessageStatusService } from './message-status.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let messageStatusService: jasmine.SpyObj<MessageStatusService>;
  messageStatusService = jasmine.createSpyObj('MessageStatusService', ['sendStatus']);
  messageStatusService.sendStatus.and.returnValue("Game is tie Dealer wins");


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  })

  it ('should check return value of message status service', () => {
    var result = messageStatusService.sendStatus(21,21,[]);
    expect(result).toBe("Game is tie Dealer wins");
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`Player score test`, () => {
    expect(app.playerScore).toEqual(0);
  });

  it(`Dealer score test`, () => {
    expect(app.dealerScore).toEqual(0);
  });

  it('Player list test initally', () => {
    app.player = [1, "A"]
    expect(app.player.length).toEqual(2);
    expect(app.player).toEqual([1, "A"]);
  });

  it('Dealer list test initally', () => {
    app.dealer = [1, "A"]
    expect(app.dealer.length).toEqual(2);
    expect(app.dealer).toEqual([1, "A"]);
  });

});
