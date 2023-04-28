function Hotel(hotelname, peopleCount, roomRate, discount, offerPrice) {
	this.hotelname = hotelname
	this.peopleCount = peopleCount
	this.roomRate = roomRate
	this.discount = discount
	this.offerPrice = offerPrice
}


let hotel = ["Hotel1", "Hotel2", "Hotel3", "Hotel4"]
let msg = '<select class="select" id="choosenHotel" name="hotel">'
for (let i in hotel) {
	msg += '<option value="' + (parseFloat(i) + 1) + '">' + hotel[i] + '</option>'
}
msg += '</select>'
document.getElementById('hotel').innerHTML = msg


let pokoj = ["Pokój 1 osobowy", "Pokój 2 osobowy", "Pokój 3 osobowy", "Pokój 4 osobowy", "Pokój 5 osobowy", "Pokój 6 osobowy"]
let msg2 = '<select class="select" id="peopleCount" name="pokoj">'
for (let l in pokoj) {
	msg2 += '<option value="' + (parseFloat(l) + 1) + '">' + pokoj[l] + '</option>'
}
msg2 += '</select>'
document.getElementById('pokoj').innerHTML = msg2


function offerPrice(hotel) {
	let discountRate = hotel.roomRate * hotel.peopleCount / 100 * 5;
	hotel.discount = Math.min(Math.floor(discountRate / 100) * 5, 50);
	let offerRate = hotel.roomRate * hotel.peopleCount * (100 - hotel.discount) / 100;
	offerRate = offerRate.toFixed(2);
  
	return offerRate;
  }

function doFunction() {
	let peopleCount = parseInt(document.getElementById('peopleCount').value)
	let choosenHotel = parseInt(document.getElementById('choosenHotel').value)
	let Price = [75, 90, 110, 130]

	let finalHotel = new Hotel(choosenHotel, peopleCount, Price[parseInt(document.getElementById('choosenHotel').value) - 1], 0, offerPrice)
	roomRate.innerHTML = 'Cena za ' + finalHotel.peopleCount + ' osoby w Hotel' + finalHotel.hotelname + ' wynosi:'
	specialRate.textContent = finalHotel.offerPrice(finalHotel) + ' zł'
}