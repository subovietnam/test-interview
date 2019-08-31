export class HotelReservation {
  arrivals: number[] = [];
  departures: number[] = []
  k: number
  constructor(arrivals, departures, k) {
    this.arrivals = arrivals;
    this.departures = departures;
    this.k = k;
  }
  validate() {
    var error = false;
    //check arrivals, departures is array
    if (
      !Array.isArray(this.arrivals) ||
      !Array.isArray(this.departures) ||
      !Number.isInteger(this.k) || this.k < 0
    ) {
      error = true;
    }
    //check arrivals, departures empty
    if (this.arrivals.length < 1 || this.departures.length < 1) {
      error = true;
    }
    //check size 2 array arrivals, departures must be equals
    if (this.arrivals.length != this.departures.length) {
      error = true;
    }
    if (!error) {
      for (let i = 0; i < this.arrivals.length; i++) {
        //check element of arrivals and departures less than 1 then return error is true
        if ((Number(this.arrivals[i]) && Number(this.arrivals[i]) < 1) ||
          (Number(this.departures[i]) && Number(this.departures[i]) < 1)) {
          error = true;
        }
        //check element of arrivals and departures different number
        if (!Number.isInteger(this.arrivals[i]) || !Number.isInteger(this.departures[i])) {
          error = true;
        }
        //check element position i of arrivals greater than departures
        if (this.arrivals[i] >= this.departures[i]) {
          error = true;
        }
      }
    }
    return error;
  }
  bookings() {
    let error = this.validate();
    if (error) {
      return 'invalid input'
    }
    var count = 0, i = 0, j = 0;
    const size = this.arrivals.length;
    while (i < size && j < size) {
      if (this.arrivals[i] < this.departures[j]) {
        i++;
        count++;
        if (count > this.k) {
          return false;
        }
      } else {
        j++;
        count--;
      }
    }
    //t(b) = 10 + 10b = 10(1+b) = O(n)
    return true;
  }
  
}