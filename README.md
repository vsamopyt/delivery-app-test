# delivery-app-test
delivery-app-test
this delivery app is created according to the task of the test
the main page is index.html
to star working with this app
choose the shop in the block on the left side
after clicking on required button other buttons become disabled
to make them active again (to change a shop) do dblclick on active button
after you chose your shop (by clicking on required button), available product cards will be shown in the block on the right side
data for products are taken from database (object  shoppingMenu in file script.js)
by cliicking on the "button add to cart" at the bottom of the product card, you create your order
to continue on your order go to the page "shopping card" throught navigation menu
shopping card has two blocks
in the block on the right side you should put data about youself, this data are required to do the delivery
in the block on the left side you can see products you have just ordered
in this block you can  see price of every product you has just chosen and set how many products you want to order
at the bootom of the page  on the right side of it  you can see total sum you need to pay for your order
also you can delete some products out of the order by dblclicking on card of the product
to send your order click button "submit" (information about your order will be set in array, you can see it console)
additional information
to remove doubling and so on  when you choose products on main page trnsformation from array to set is done
array only contains id codes of products
localstorrage is used to move data between pages 
