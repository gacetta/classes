const data = {
    locations: [],
    get location() {
        return this._location;
    },
    set location(place) {
        this._location = place.trim();
        this.locations.push(this._location);
    }
}

// code that uses the data object - using the object property
data.location = '    Miami ';
data.location = 'New York    '
console.log(data)