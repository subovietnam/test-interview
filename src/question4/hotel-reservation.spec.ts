import { HotelReservation } from './hotel-reservation';

describe('HotelReservation', () => {
  it('If size arrivals different departures then throw exception invalid input (with arrivals = [] and departures = [2, 6, 10] and k = 1)', () => {
    expect(new HotelReservation([], [2, 6, 10], 1).bookings()).toEqual("invalid input");
  });
  it('if has element in arrivals or departures different number then throw exception invalid input (with arrivals = ["1", 3, 5] and departures = [2, 6, 10] and k = 1)', () => {
    expect(new HotelReservation(["1", 3, 5], [2, 6, 10], 1).bookings()).toEqual("invalid input");
  });
  it('if has element less than 1 then throw exception invalid input (with arrivals = [-1, 3, 5] and departures = [2, 6, 10] and k = 1)', () => {
    expect(new HotelReservation([-1, 3, 5], [2, 6, 10], 1).bookings()).toEqual("invalid input");
  });
  it('if has element of arrivals greater than departures where same position then exception invalid input (with arrivals = [1, 8, 10] and departures = [2, 6, 12] and k = 1)', () => {
    expect(new HotelReservation([1, 8, 10], [2, 6, 12], 1).bookings()).toEqual("invalid input");
  });
  it('if room number (k) less than 1 then throw exception invalid input (with arrivals = [1, 3, 5] and departures = [2, 6, 10] and k = -1)', () => {
    expect(new HotelReservation([1, 3, 5], [2, 6, 10], -1).bookings()).toEqual("invalid input");
  });
  it('return false with arrivals = [1, 3, 5] and departures = [2, 6, 10] and k = 1', () => {
    expect(new HotelReservation([1, 3, 5], [2, 6, 10], 1).bookings()).toEqual(false);
  });
  it('return true with arrivals = [1, 3, 5] and departures = [2, 4, 6] and k = 2', () => {
    expect(new HotelReservation([1, 3, 5], [2, 4, 6], 2).bookings()).toEqual(true);
  });
});
