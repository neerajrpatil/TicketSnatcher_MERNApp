This app is a product of MERN stack .

The frontend consists of ReactJs and Express JS and the database used is mongodb which is conneected using mongoose.

It has several Components :

1. Login page has state hook , when a user logs in the user state is updated and any tickets booked will be saved in that users name.
2. Register is for registering new users the details of the new user are added to the mongodb .
3. All the pages login,register,home,payement are all routed using react-router-dom library which can be installed using node package managaer.
4. Home page has a feed of movies which on clicked gives the option of venue of movie theatres and timings which on selection goes to payment.
5. In payment we select seats out the available ones and go to payment mode selection.
6. There are three modes of payment all of which are online.
7. Credit card mode checks for 16 digit card number, 3 digit cvv and Card holder name.
8. Paytm lets user spend money from their digital wallet.
9. Google Pay method lets user scan a QR code to pay.
10. As soon as the payment is done the user gets a soft copy of their tickets.

Any query to be sent to hollanishan@gmail.com
