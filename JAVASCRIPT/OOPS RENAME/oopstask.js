/* Q) Create a class MovieTicket with the following specifications:

      1) A constructor that initializes the movie name, the theater name, the number of seats, and the price per ticket.
      2) A method bookTickets that decreases the number of available seats by the number of tickets requested and returns the total cost.
      3) A method printDetails that prints the movie name, the theater name, the number of available seats, and the price per ticket.
      4) A method isAvailable that returns true if the requested number of seats are available, otherwise returns false.
      5) Add a method cancelTickets that increases the number of available seats by the number of tickets canceled and returns the refund amount.
      6) Add a method applyDiscount that applies a discount to the price per ticket for a promotional offer.

*/

class MovieTicket{
    constructor(movie,theatre,seats,price){
        this.moviename = movie;
        this.theatername= theatre;
        this.noseats= seats;
        this.price=price;
        console.log("Movie Ticket created successfully");
    }

    //BookTicket
     bookTicket(tickets){
         this.noseats-=tickets;
        return `Total Cost of ${tickets} Tickets : ${tickets*this.price}`;
     }


    //printDetails
    printDetails(){
        console.log(this.moviename,this.theatername,this.noseats,this.price);
    }

    //isAvailable
    availaibleSeats(tickets)
    {
      if (tickets<=this.noseats)
        {
        return true;
    }else{
        return false;
    }
}

refundTickets(tickets){
    this.numSeats+=tickets;
    return `\nRefund amount for ${tickets} Tickets : ${tickets*this.price}`;
}

//apply Discount

promotion(offer){
    this.price-=((offer/100)*this.price);
    return `\nDiscounted price : ${this.price}`;

}
}

booking= new MovieTicket(`Godfather`,'Pradhibha',200,140);
console.log(booking.bookTicket(75));
booking.printDetails();
console.log(booking.availaibleSeats);
console.log(booking.refundTickets(70));
console.log(booking.promotion(50));