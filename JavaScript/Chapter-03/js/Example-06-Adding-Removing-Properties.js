// Set up an object
var hotel = {
    name        : 'Park',
    rooms       : 120,
    booked      : 77
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

// Update the html
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elPool = document.getElementById('pool');
elPool.className = hotel.pool;

var elGym = document.getElementById('gym');
elGym.className = hotel.gym;