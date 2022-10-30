let restaurant = {
    name: 'Homer',
    guestCapacity: 75,
    guestCount: 73,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        if (this.checkAvailability(partySize)) {
            this.guestCount = this.guestCount + partySize
        } else {
            console.log(`I'm sorry, the restaurant is full.`)
        }
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))